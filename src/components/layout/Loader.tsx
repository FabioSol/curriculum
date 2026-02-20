import { useEffect, useRef, useState } from "react"
import { gsap } from "@/lib/gsap"
import { TypingAnimation } from "@/components/ui/typing-animation"

interface LoaderProps {
  onComplete: () => void
  minDuration?: number
}

const NAME = "Fabio Sol"
const SUBTITLE = "curriculum vitae"
const NAME_SPEED = 100       // ms per char
const SUBTITLE_SPEED = 60    // ms per char
const SUBTITLE_DELAY = 300   // ms after name finishes before subtitle starts

export default function Loader({ onComplete, minDuration = 2800 }: LoaderProps) {
  const curtainRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const [firstDone, setFirstDone] = useState(false)
  const [secondDone, setSecondDone] = useState(false)
  const exitTriggered = useRef(false)

  // Trigger firstDone after name finishes typing
  useEffect(() => {
    const nameDuration = NAME.length * NAME_SPEED
    const t = setTimeout(() => setFirstDone(true), nameDuration)
    return () => clearTimeout(t)
  }, [])

  // Trigger secondDone after subtitle finishes typing
  useEffect(() => {
    if (!firstDone) return
    const subtitleDuration = SUBTITLE_DELAY + SUBTITLE.length * SUBTITLE_SPEED
    const t = setTimeout(() => setSecondDone(true), subtitleDuration)
    return () => clearTimeout(t)
  }, [firstDone])

  // Exit once both conditions met: subtitle done AND minDuration elapsed
  useEffect(() => {
    if (!secondDone) return
    if (exitTriggered.current) return

    const nameDuration = NAME.length * NAME_SPEED
    const subtitleDuration = nameDuration + SUBTITLE_DELAY + SUBTITLE.length * SUBTITLE_SPEED
    const elapsed = subtitleDuration
    const remaining = Math.max(0, minDuration - elapsed)

    const t = setTimeout(() => {
      if (exitTriggered.current) return
      exitTriggered.current = true

      const tl = gsap.timeline({ onComplete })
      tl.to(lineRef.current, {
        scaleX: 0,
        duration: 0.4,
        ease: "power2.in",
        transformOrigin: "left center",
      }).to(curtainRef.current, {
        yPercent: -100,
        duration: 0.9,
        ease: "power4.inOut",
      }, "-=0.1")
    }, remaining)

    return () => clearTimeout(t)
  }, [secondDone, minDuration, onComplete])

  return (
    <div
      ref={curtainRef}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-start justify-center px-12 md:px-24 gap-4"
    >
      {/* Name */}
      <TypingAnimation
        startOnView={false}
        duration={NAME_SPEED}
        showCursor={!firstDone}
        blinkCursor={false}
        cursorStyle="line"
        className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-none"
      >
        {NAME}
      </TypingAnimation>

      {/* Divider */}
      <div
        ref={lineRef}
        className="h-px bg-white/20 w-32 origin-left"
        style={{
          opacity: firstDone ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Subtitle */}
      {firstDone && (
        <TypingAnimation
          startOnView={false}
          duration={SUBTITLE_SPEED}
          delay={SUBTITLE_DELAY}
          showCursor={!secondDone}
          blinkCursor={true}
          cursorStyle="line"
          className="text-sm md:text-base font-mono tracking-[0.25em] text-white/40 uppercase leading-none"
        >
          {SUBTITLE}
        </TypingAnimation>
      )}
    </div>
  )
}
