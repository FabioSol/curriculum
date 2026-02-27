import { useState, useRef } from "react"
import { motion } from "motion/react"

interface ProjectLink {
  label: string
  href: string
}

interface ProjectBlockProps {
  id?: string
  index: number
  title: string
  description: string
  tech: string[]
  screenshots: string[]
  links?: ProjectLink[]
  imageOnRight?: boolean
}

export default function ProjectBlock({
  id,
  index,
  title,
  description,
  tech,
  screenshots,
  links,
  imageOnRight = false,
}: ProjectBlockProps) {
  const [current, setCurrent] = useState(0)
  const hasMultiple = screenshots.length > 1
  const label = String(index).padStart(3, "0")
  const stripRef = useRef<HTMLDivElement>(null)

  function onScroll() {
    const el = stripRef.current
    if (!el) return
    const index = Math.round(el.scrollLeft / el.offsetWidth)
    setCurrent(index)
  }

  return (
    <section id={id} className="min-h-screen bg-neutral-950 flex flex-col md:flex-row">

      {/* Screenshot panel */}
      <div className={`w-full md:w-[60%] shrink-0 flex flex-col bg-neutral-900 ${imageOnRight ? "md:order-2" : "md:order-1"}`}>

        {/* Mobile — horizontal scroll snap */}
        <div
          ref={stripRef}
          onScroll={onScroll}
          className="md:hidden flex overflow-x-auto snap-x snap-mandatory scrollbar-none px-2 py-4 gap-2"
          style={{ scrollbarWidth: "none" }}
        >
          {screenshots.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`${title} screenshot ${i + 1}`}
              className="snap-center shrink-0 w-full h-auto rounded-md shadow-2xl ring-1 ring-white/10"
            />
          ))}
        </div>

        {/* Desktop — opacity stack + arrow buttons */}
        <div className="hidden md:flex flex-1 items-center justify-center p-6 relative">
          <div className="relative w-full">
            {screenshots.map((src, i) => (
              <motion.img
                key={src}
                src={src}
                alt={title}
                className="w-full h-auto rounded-lg shadow-2xl ring-1 ring-white/10 absolute top-0 left-0"
                animate={{ opacity: i === current ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                style={{ pointerEvents: i === current ? "auto" : "none" }}
              />
            ))}
            <img src={screenshots[0]} alt="" className="w-full h-auto invisible" aria-hidden />
          </div>

          {hasMultiple && (
            <>
              <button
                onClick={() => setCurrent((current - 1 + screenshots.length) % screenshots.length)}
                className="absolute left-8 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
                aria-label="Previous screenshot"
              >
                ←
              </button>
              <button
                onClick={() => setCurrent((current + 1) % screenshots.length)}
                className="absolute right-8 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
                aria-label="Next screenshot"
              >
                →
              </button>
            </>
          )}
        </div>

        {hasMultiple && (
          <div className="flex justify-center gap-2 pb-6">
            {screenshots.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrent(i)
                  stripRef.current?.scrollTo({ left: i * stripRef.current.offsetWidth, behavior: "smooth" })
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                  i === current ? "bg-white scale-125" : "bg-white/20 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Text panel */}
      <div className={`flex flex-col justify-center px-8 md:px-12 xl:px-16 py-16 gap-6 flex-1 ${imageOnRight ? "md:order-1" : "md:order-2"}`}>
        <p className="label text-white/30">{label} / Project</p>
        <h2 className="text-[clamp(2rem,3vw,3.5rem)] font-bold leading-[1.0] tracking-tight text-white">
          {title}
        </h2>
        <p className="text-white/50 text-sm leading-relaxed max-w-sm">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 max-w-sm">
          {tech.map((t) => (
            <span
              key={t}
              className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/5 text-white/40 border border-white/10"
            >
              {t}
            </span>
          ))}
        </div>
        {links && links.length > 0 && (
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white/60 hover:text-white hover:underline underline-offset-4 transition-colors w-fit"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        )}
      </div>

    </section>
  )
}
