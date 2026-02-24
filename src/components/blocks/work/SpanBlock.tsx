import { useRef } from "react"
import { useScroll, useTransform, motion } from "motion/react"
import spanBanner from "@/assets/images/work/span-landscape.webp"
import spanBg from "@/assets/images/work/span-background.webp"

const SPAN_ORANGE = "rgb(230,146,35)"

export default function SpanBlock() {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"])

  return (
    <section className="min-h-screen flex flex-col justify-center px-8 md:px-20 py-18" style={{ backgroundColor: SPAN_ORANGE }}>
      <div className="max-w-5xl mx-auto w-full flex flex-col gap-12">

        {/* Top — label + logo */}
        <div className="flex items-center justify-between">
          <p className="label text-white/50">002 / Current</p>
          <img src={spanBanner} alt="SPAN" className="h-14 w-auto object-contain opacity-90" />
        </div>

        {/* Parallax window with text overlay */}
        <div ref={cardRef} className="overflow-hidden shrink-0 w-full h-96 md:h-[45vh] relative">
          <motion.img
              src={spanBg}
              alt="SPAN office"
              className="absolute w-full object-cover"
              style={{ y, height: "140%", top: "-20%" }}
          />
          <div className="absolute inset-0 bg-black/30" />
          <h2 className="absolute bottom-8 left-8 text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.9] tracking-tight text-white drop-shadow-lg">
            Software<br />Engineer.
          </h2>
        </div>

        {/* Description + details */}
        <div className="flex flex-col md:flex-row gap-8 items-start">

          {/* Left — description */}
          <p className="text-sm leading-relaxed text-white/75 flex-1 md:py-2">
            SPAN is a company genuinely committed to their engineers' growth. I collaborate across teams and regions, work on varied projects, and learn from brilliant people every day — the kind of environment that makes you better without you fully realizing it.
          </p>

          {/* Right — role details */}
          <div className="flex flex-col gap-1 border-l border-white/20 pl-8 shrink-0">
            <p className="label text-white/50 mb-1">Role</p>
            <p className="text-white font-semibold text-lg">Software Engineer</p>
            <p className="label text-white/50 mt-4 mb-1">Since</p>
            <p className="text-white font-semibold">2025 — Present</p>
            <p className="label text-white/50 mt-4 mb-1">Website</p>
            <a
              href="https://spandigital.com/about"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-white hover:underline underline-offset-4"
            >
              spandigital.com ↗
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
