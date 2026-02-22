import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { motion } from "motion/react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import meImage from "@/assets/images/me.webp"
import { DitherShader } from "@/components/ui/dither-shader"
import Navbar from "@/components/layout/Navbar"

export default function NotFound() {
  const imageRef = useRef<HTMLDivElement>(null)
  const glitchRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const fourRef = useRef<HTMLSpanElement>(null)
  const zeroRef = useRef<HTMLSpanElement>(null)
  const four2Ref = useRef<HTMLSpanElement>(null)

  // Subtle parallax on mouse move
  useGSAP(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 18
      const y = (e.clientY / window.innerHeight - 0.5) * 10
      gsap.to(imageRef.current, {
        x,
        y,
        duration: 1.4,
        ease: "power2.out",
      })
    }
    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  })

  // Glitch effect on the digits
  useEffect(() => {
    const chars = "█▓▒░▄▀■□▪▫"
    const digits = [fourRef, zeroRef, four2Ref]
    const originals = ["4", "0", "4"]

    let tick = 0
    glitchRef.current = setInterval(() => {
      tick++
      digits.forEach((ref, i) => {
        if (!ref.current) return
        // Randomly corrupt a digit for 1-2 frames then restore
        if (Math.random() < 0.08) {
          ref.current.textContent = chars[Math.floor(Math.random() * chars.length)]
          setTimeout(() => {
            if (ref.current) ref.current.textContent = originals[i]
          }, 80)
        }
      })
    }, 120)

    return () => {
      if (glitchRef.current) clearInterval(glitchRef.current)
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-950">
      <Navbar />

      {/* Dithered background — same treatment as hero */}
      <div ref={imageRef} className="absolute inset-0 will-change-transform">
        <DitherShader
          src={meImage}
          ditherMode="noise"
          colorMode="duotone"
          primaryColor="#0a0a0a"
          secondaryColor="#404040"
          gridSize={1.5}
          contrast={1.3}
          brightness={-0.25}
          objectFit="cover"
          objectPositionX={0.65}
          objectPositionY={0.3}
          backgroundColor="transparent"
          className="w-full h-full opacity-60"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-end min-h-screen px-6 sm:px-10 md:px-16 lg:px-20 pb-16 sm:pb-20 md:pb-28">

        {/* Label */}
        <motion.p
          className="label text-white/30 mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          ??? / Not found
        </motion.p>

        {/* 404 */}
        <h1 className="text-[clamp(6rem,22vw,18rem)] font-bold leading-[0.9] tracking-tight text-white mb-6 select-none">
          <span ref={fourRef}>4</span>
          <span ref={zeroRef}>0</span>
          <span ref={four2Ref}>4</span>
        </h1>

        {/* Message */}
        <motion.p
          className="font-mono text-xs md:text-sm tracking-[0.2em] text-white/40 uppercase mb-10 max-w-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          This page doesn't exist — or got lost in the noise.
        </motion.p>

        {/* Back home */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <Link
            to="/"
            className="group flex items-center gap-4 text-white/50 hover:text-white transition-colors duration-300"
          >
            <span className="block w-8 h-px bg-white/20 group-hover:w-14 group-hover:bg-white/60 transition-all duration-300" />
            <span className="font-mono text-[11px] tracking-[0.3em] uppercase">
              Back home
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Bottom edge line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.06]" />
    </div>
  )
}
