import React, { createContext, useContext, useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react"
import { cn } from "@/lib/utils"

// ─── Constants ────────────────────────────────────────────────────────────────

const DEFAULT_DESIGN_WIDTH = 1200
const DEFAULT_MAX_SHIFT = 600
const DEFAULT_DEPTH_SCALE = 0.5
const DEFAULT_OPACITY_SCALE = 0.6

// ─── Context ──────────────────────────────────────────────────────────────────

interface ParallaxSceneContextValue {
  scrollYProgress: MotionValue<number>
  maxShift: number
  depthScale: number
  opacityScale: number
  scaleFactor: number
}

const ParallaxSceneContext = createContext<ParallaxSceneContextValue | null>(null)

export function useParallaxScene(): ParallaxSceneContextValue {
  const ctx = useContext(ParallaxSceneContext)
  if (!ctx) throw new Error("ParallaxItem must be used inside a ParallaxScene")
  return ctx
}

// ─── Interfaces ───────────────────────────────────────────────────────────────

export interface ParallaxSceneProps {
  /** Fixed logical height of the 3D stage in pixels (design-space) */
  height: number
  /** Reference pixel width used to compute responsive scale (default: 1200) */
  designWidth?: number
  /** Maximum vertical travel in px for the farthest element (z=0) (default: 240) */
  maxShift?: number
  /**
   * Controls how strongly depth (z) affects scale.
   * 0 = no scale cue, 1 = full effect. Default: 0.5
   */
  depthScale?: number
  /**
   * Controls how strongly depth (z) affects opacity.
   * 0 = no opacity cue, 1 = full effect. Default: 0.5
   */
  opacityScale?: number
  /** Content rendered fixed in the viewport center while the block is visible */
  overlay?: React.ReactNode
  className?: string
  children: React.ReactNode
}

export interface ParallaxItemProps {
  /** Depth 0–1. 0 = farthest/back (slow), 1 = closest/front (fast) */
  z: number
  /** Horizontal anchor as a CSS value, e.g. "10%" or "120px" (applied as CSS left) */
  x: string
  /** Vertical anchor as a CSS value, e.g. "20%" or "80px" (applied as CSS top) */
  y: string
  className?: string
  children: React.ReactNode
}

// ─── ParallaxScene ────────────────────────────────────────────────────────────

export function ParallaxScene({
  height,
  designWidth = DEFAULT_DESIGN_WIDTH,
  maxShift = DEFAULT_MAX_SHIFT,
  depthScale = DEFAULT_DEPTH_SCALE,
  opacityScale = DEFAULT_OPACITY_SCALE,
  overlay,
  className,
  children,
}: ParallaxSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scaleFactor, setScaleFactor] = useState(1)
  const [overlayVisible, setOverlayVisible] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const update = () => setScaleFactor(el.offsetWidth / designWidth)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [designWidth])

  useEffect(() => {
    if (!overlay) return
    const el = containerRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => setOverlayVisible(entry.isIntersecting),
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [overlay])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  return (
    <ParallaxSceneContext.Provider value={{ scrollYProgress, maxShift, depthScale, opacityScale, scaleFactor }}>
      <div
        ref={containerRef}
        className={cn("relative", className)}
        style={{ height: height * scaleFactor, overflow: "clip" }}
      >
        <div
          className="absolute top-0 left-0 will-change-transform"
          style={{
            width: designWidth,
            height,
            transformOrigin: "top left",
            transform: `scale(${scaleFactor})`,
            perspective: "1200px",
            perspectiveOrigin: "50% 50%",
          }}
        >
          {children}
        </div>
      </div>
      {overlay && overlayVisible && createPortal(
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 20 }}>
          {overlay}
        </div>,
        document.body
      )}
    </ParallaxSceneContext.Provider>
  )
}

// ─── ParallaxItem ─────────────────────────────────────────────────────────────

export function ParallaxItem({
  z,
  x,
  y: topAnchor,
  className,
  children,
}: ParallaxItemProps) {
  const { scrollYProgress, maxShift, depthScale, opacityScale } = useParallaxScene()

  const depth = Math.max(0, Math.min(1, z))
  const travel = maxShift * (1 - depth)

  const rawY = useTransform(scrollYProgress, [0, 1], [-travel / 2, travel / 2])

  const itemScale = 1 - depthScale * (1 - depth)
  const itemOpacity = 1 - opacityScale * (1 - depth)
  const zIndex = Math.round(depth * 10)

  return (
    <motion.div
      className={cn("absolute will-change-transform", className)}
      style={{
        left: x,
        top: topAnchor,
        y: rawY,
        scale: itemScale,
        opacity: itemOpacity,
        zIndex,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </motion.div>
  )
}
