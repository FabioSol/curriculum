import { useRef } from "react"
import { useScroll, useTransform, motion } from "motion/react"
import deskImg from "@/assets/images/about/music/side-desk.webp"

export default function MusicBlock() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"])

  return (
    <section ref={sectionRef} className="h-screen bg-neutral-950 flex overflow-hidden relative">

      {/* Mobile background image with parallax */}
      <div className="absolute inset-0 md:hidden overflow-hidden">
        <motion.img
          src={deskImg}
          alt="Music setup"
          style={{ y, height: "130%", top: "-15%" }}
          className="absolute w-full object-cover"
        />
        <div className="absolute inset-0 bg-neutral-950/60" />
      </div>

      {/* Desktop side photo with parallax */}
      <div className="hidden md:block w-[45%] shrink-0 overflow-hidden relative">
        <motion.img
          src={deskImg}
          alt="Music setup"
          style={{ y, height: "130%", top: "-15%" }}
          className="absolute w-full object-cover"
        />
      </div>

      {/* Text */}
      <div className="relative flex flex-col justify-center px-8 md:px-16 gap-6">
        <p className="label text-white/30">001 / Music</p>
        <h2 className="text-[clamp(1.8rem,3vw,3rem)] font-bold leading-[1.1] tracking-tight text-white max-w-sm">
          "Without music, life would be a mistake."
        </h2>
        <p className="label text-white/30">— Friedrich Nietzsche</p>
        <p className="text-white/50 text-sm leading-relaxed max-w-sm">
          A compulsive listener. When a song lands, I'll play it for weeks straight.
          I also make music — guitar, recording, producing — mostly as a way to understand
          what I love about the songs I can't stop hearing.
        </p>
      </div>

    </section>
  )
}
