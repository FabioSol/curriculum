import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

import imgLandscape from "@/assets/images/academy/landscape-academy.webp"
import imgPortrait from "@/assets/images/academy/portrait-academy.webp"

const GAP = 40 // px, matches gap-10

const CARDS = [
  { title: "Financial Engineering", degree: "BS",        imageLeft: "0px" },
  { title: "Data Science",          degree: "MS",        imageLeft: `calc(-100% - ${GAP}px)` },
  { title: "Risk Analysis",         degree: "Professor", imageLeft: `calc(-200% - ${GAP * 2}px)` },
]

interface Props {
  label: string
  title: string
  description: string
}

export default function AcademyBlock({ label, title, description }: Props) {
  const navigate = useNavigate()
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])
  const imagesRef = useRef<HTMLDivElement[]>([])
  const cardInnerRef = useRef<HTMLDivElement | null>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const section = sectionRef.current
    if (!section) return

    // Pin only on desktop
    if (window.innerWidth >= 768) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: 1,
      })
    }

    // Card entry animation — desktop only
    if (window.innerWidth >= 768) {
      const directions = [
        { x: "-120vw", y: "0" },
        { x: "0",      y: "80vh" },
        { x: "120vw",  y: "0" },
      ]

      cardsRef.current.forEach((card, i) => {
        if (!card) return
        gsap.fromTo(card,
          { x: directions[i].x, y: directions[i].y, opacity: 0 },
          {
            x: "0", y: "0", opacity: 1,
            ease: "power3.out",
            duration: 1,
            delay: i * 0.1,
            scrollTrigger: {
              trigger: section,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          }
        )
      })
    }

    // Parallax — desktop only, scrubs through the pinned scroll space
    if (window.innerWidth >= 768) {
      const cardHeight = cardInnerRef.current?.offsetHeight ?? 400
      const gap = gridRef.current
        ? parseFloat(getComputedStyle(gridRef.current).gap) || 40
        : 40
      const travel = Math.round(cardHeight * 0.35)

      imagesRef.current.forEach((img, i) => {
        if (!img) return

        const leftOffset = i === 0
          ? "0px"
          : `calc(${i * -100}% - ${i * gap}px)`

        gsap.set(img, {
          height: cardHeight + travel * 2,
          top: -travel,
          left: leftOffset,
        })

        gsap.fromTo(img,
          { y: travel },
          {
            y: -travel,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "+=150%",
              scrub: 1,
            },
          }
        )
      })
    }
  })

  return (
    <section
      ref={sectionRef}
      className="relative bg-neutral-950 h-auto md:h-[100dvh] flex flex-col justify-center px-8 md:px-20 py-24 md:py-0"
    >
      {/* Mobile layout — full bleed portrait, text at bottom */}
      <div className="md:hidden absolute inset-0">
        <img src={imgPortrait} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/10" />
      </div>

      <div onClick={() => navigate("/academy")} className="relative cursor-pointer md:hidden flex flex-col justify-end min-h-screen pb-12 px-8">
        <p className="font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase mb-4">
          {label}
        </p>
        <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[0.95] tracking-tight text-white mb-3">
          {title}
        </h2>
        <p className="text-white/40 text-sm leading-relaxed mb-8">
          {description}
        </p>
        <div className="flex flex-col border-t border-white/10">
          {CARDS.map((card, i) => (
            <div key={i} className="flex items-baseline justify-between py-4 border-b border-white/10">
              <span className="font-mono text-[10px] tracking-[0.25em] text-white/30 uppercase w-20 shrink-0">{card.degree}</span>
              <span className="text-white font-semibold text-sm text-right">{card.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Label — desktop only, top left */}
      <div className="relative hidden md:block mt-8 md:mt-12 mb-4">
        <p className="font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase">
          {label}
        </p>
      </div>

      {/* Cards — desktop only */}
      <div ref={gridRef} className="relative hidden md:grid grid-cols-3 gap-10 flex-1">
        {CARDS.map((card, i) => (
          <div
            key={i}
            ref={(el) => { if (el) cardsRef.current[i] = el }}
            onClick={() => navigate("/academy")}
            className="cursor-pointer"
          >
            <div
              ref={i === 0 ? cardInnerRef : undefined}
              className="relative aspect-[5/2] md:aspect-[5/5] rounded-sm overflow-hidden bg-neutral-950/70 md:bg-white/[0.04] md:border md:border-white/[0.06]"
            >

              {/* Desktop: landscape triptych with parallax — height/top/left set by GSAP */}
              <div
                ref={(el) => { if (el) imagesRef.current[i] = el }}
                className="hidden md:block"
                style={{
                  position: "absolute",
                  width: `calc(300% + ${GAP * 2}px)`,
                  backgroundImage: `url(${imgLandscape})`,
                  backgroundSize: "100% auto",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "0 50%",
                }}
              />

              {/* Gradient overlay — desktop only */}
              <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <p className="font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase mb-2">
                  {card.degree}
                </p>
                <h3 className="text-lg font-bold leading-tight tracking-tight text-white">
                  {card.title}
                </h3>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Text — bottom right, desktop only */}
      <div className="hidden md:flex justify-end mb-12 md:mb-16">
        <div onClick={() => navigate("/academy")} className="cursor-pointer text-right max-w-md">
          <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[0.95] tracking-tight text-white mb-4 mt-4">
            {title}
          </h2>
          <p className="text-white/40 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>

    </section>
  )
}
