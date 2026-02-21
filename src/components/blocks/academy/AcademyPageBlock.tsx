import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface Slide {
  label: string
  title: string
  description: string
  image: string
  dates: string
  place: string
}

interface Props {
  slides: Slide[]
}

export default function AcademyPageBlock({ slides }: Props) {
  const sectionRef = useRef<HTMLElement>(null)
  const slidesRef = useRef<HTMLDivElement[]>([])

  useGSAP(() => {
    const section = sectionRef.current
    if (!section) return

    const count = slides.length

    // Set all slides invisible except the first
    slidesRef.current.forEach((slide, i) => {
      gsap.set(slide, { opacity: i === 0 ? 1 : 0 })
    })

    // Single timeline scrubbed to the pin
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${count * window.innerHeight}`,
        pin: true,
        scrub: 1,
      },
    })

    // Each transition takes 0.2 units, holds for 0.8 units
    slidesRef.current.forEach((_, i) => {
      if (i === 0) return
      tl.to(slidesRef.current[i - 1], { opacity: 0, ease: "none", duration: 0.2 })
      tl.to(slidesRef.current[i],     { opacity: 1, ease: "none", duration: 0.2 }, "<")
      tl.to({}, { duration: 0.8 }) // hold
    })
  })

  return (
    <section ref={sectionRef} className="relative bg-neutral-950 h-[100dvh] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          ref={(el) => { if (el) slidesRef.current[i] = el }}
          className="absolute inset-0 flex flex-col md:flex-row"
        >
          {/* Image */}
          <div className="w-full md:w-1/2 h-1/2 md:h-full overflow-hidden">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-end px-8 md:px-16 pb-12 md:pb-16">
            <p className="font-mono text-[9px] tracking-[0.4em] text-white/20 uppercase mb-10">
              {slide.label}
            </p>
            <h2 className="text-[clamp(2rem,4vw,4rem)] font-light leading-[1] tracking-tight text-white mb-5">
              {slide.title}
            </h2>
            <p className="text-white/35 text-xs leading-relaxed max-w-xs mb-10 h-16 overflow-hidden">
              {slide.description}
            </p>
            <div className="flex items-center gap-6 border-t border-white/[0.06] pt-5">
              <p className="font-mono text-[9px] tracking-[0.3em] text-white/20 uppercase">
                {slide.place}
              </p>
              <span className="w-px h-3 bg-white/10" />
              <p className="font-mono text-[9px] tracking-[0.3em] text-white/20 uppercase">
                {slide.dates}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
