import { useRef, type ReactNode } from "react"
import { useNavigate } from "react-router-dom"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Marquee } from "@/components/ui/marquee"

gsap.registerPlugin(ScrollTrigger)

interface Link {
  label: string
  href: string
}

interface Props {
  label: string
  heading: ReactNode
  marqueeItems: string[]
  links: Link[]
}

export default function ContactBlock({ label, heading, marqueeItems, links }: Props) {
  const navigate = useNavigate()
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const detailsRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const section = sectionRef.current
    if (!section) return

    gsap.fromTo(headingRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: section, start: "top 75%", toggleActions: "play none none reverse" },
      }
    )
    gsap.fromTo(lineRef.current,
      { scaleX: 0 },
      {
        scaleX: 1, duration: 1.2, ease: "power3.inOut", transformOrigin: "left",
        scrollTrigger: { trigger: section, start: "top 70%", toggleActions: "play none none reverse" },
      }
    )
    gsap.fromTo(detailsRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2,
        scrollTrigger: { trigger: section, start: "top 65%", toggleActions: "play none none reverse" },
      }
    )
  })

  return (
    <section
      ref={sectionRef}
      className="relative bg-neutral-950 min-h-screen flex flex-col justify-between overflow-hidden"
    >

      {/* Scrolling marquee — top */}
      <div className="pt-16 md:pt-20">
        <Marquee className="[--duration:30s] [--gap:3rem]" pauseOnHover>
          {marqueeItems.map((item) => (
            <span key={item} className="font-mono text-[10px] tracking-[0.4em] text-white/15 uppercase">
              {item} <span className="mx-6 text-white/10">·</span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-20 py-16">

        {/* Label */}
        <p className="font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase mb-12">
          {label}
        </p>

        {/* Giant heading */}
        <div ref={headingRef}>
          <h2 className="text-[clamp(3rem,9vw,10rem)] font-bold leading-[0.85] tracking-tight text-white">
            {heading}
          </h2>
        </div>

        {/* Divider line */}
        <div ref={lineRef} className="w-full h-px bg-white/10 my-12 md:my-16" />

        {/* Bottom row */}
        <div ref={detailsRef} className="flex flex-col md:flex-row md:items-end justify-between gap-8">

          {/* Links */}
          <div className="flex flex-col gap-3">
            <p className="font-mono text-[10px] tracking-[0.3em] text-white/20 uppercase mb-1">
              Find me at
            </p>
            {links.map(({ label: linkLabel, href }) => (
              <a
                key={linkLabel}
                href={href}
                className="group flex items-center gap-3 w-fit"
              >
                <span className="w-6 h-px bg-white/20 group-hover:w-10 group-hover:bg-white/60 transition-all duration-300" />
                <span className="font-mono text-sm text-white/40 group-hover:text-white transition-colors duration-300 tracking-wide">
                  {linkLabel}
                </span>
              </a>
            ))}
          </div>

          {/* CTA button */}
          <button
            onClick={() => navigate("/contact")}
            className="group relative overflow-hidden bg-neutral-950 border border-white/20 px-10 py-4 w-fit"
          >
            <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
            <span className="relative font-mono text-xs tracking-[0.3em] uppercase text-white group-hover:text-neutral-950 transition-colors duration-500">
              Get in touch
            </span>
          </button>

        </div>
      </div>

      {/* Scrolling marquee — bottom, reversed */}
      <div className="pb-8 md:pb-10">
        <Marquee className="[--duration:30s] [--gap:3rem]" reverse pauseOnHover>
          {marqueeItems.map((item) => (
            <span key={item} className="font-mono text-[10px] tracking-[0.4em] text-white/15 uppercase">
              {item} <span className="mx-6 text-white/10">·</span>
            </span>
          ))}
        </Marquee>
      </div>

    </section>
  )
}
