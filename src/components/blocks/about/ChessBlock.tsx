import { useRef } from "react"
import { useScroll, useTransform, motion } from "motion/react"
import { Iphone } from "@/components/ui/iphone"
import puzzlesPrime from "@/assets/images/about/chess/puzzles-prime.webp"

export default function ChessBlock() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"])

  return (
    <section ref={sectionRef} className="bg-neutral-950 min-h-screen flex items-center py-32 px-8 md:px-20 relative">

      {/* Mobile background iPhone — centered, natural size, faded, parallax */}
      <div className="absolute inset-0 md:hidden overflow-hidden pointer-events-none">
        <motion.div
          style={{ y }}
          className="absolute inset-0 flex items-center justify-center dark"
        >
          <div className="opacity-15 w-48">
            <Iphone src={puzzlesPrime} />
          </div>
        </motion.div>
      </div>

      <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-20 md:gap-28">

        {/* Phone — desktop only */}
        <div className="hidden md:block w-56 shrink-0 dark">
          <Iphone src={puzzlesPrime} />
        </div>

        {/* Text */}
        <div>
          <p className="label text-white/30 mb-6">
            003 / Chess
          </p>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[0.95] tracking-tight text-white mb-6">
            Three moves<br />ahead.
          </h2>
          <p className="text-white/50 text-base leading-relaxed max-w-sm mb-10">
            I've played chess since I was a kid. Over the years it became less about winning and more about pattern recognition, staying calm under pressure, and the joy of a well-calculated combination. The screenshot is from my puzzle rating peak.
          </p>
          <a
            href="https://www.chess.com/member/fabiosolorzano"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors duration-200 group"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.05 3H4.95C3.87 3 3 3.87 3 4.95v14.1C3 20.13 3.87 21 4.95 21h14.1c1.08 0 1.95-.87 1.95-1.95V4.95C21 3.87 20.13 3 19.05 3zM9 16.5l-1.5-1.62 4.5-4.38-4.5-4.38L9 4.5 15 10.5 9 16.5z"/>
            </svg>
            <span className="group-hover:underline underline-offset-4">chess.com/fabiosolorzano</span>
            <svg viewBox="0 0 16 16" className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 13L13 3M13 3H7M13 3v6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
