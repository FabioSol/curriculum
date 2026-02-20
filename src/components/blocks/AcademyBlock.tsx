import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

import imgLandscape from "@/assets/images/academy/landscape-academy.png"
import imgPortrait from "@/assets/images/academy/portrait-academy.png"

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

  useGSAP(() => {
    const section = sectionRef.current
    if (!section) return

    // Pin only on desktop — mobile uses natural scroll for the fixed bg effect
    if (window.innerWidth >= 768) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
        anticipatePin: 1,
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
      imagesRef.current.forEach((img) => {
        if (!img) return
        gsap.fromTo(img,
          { y: 230 },
          {
            y: -230,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "+=150%",
              scrub: true,
            },
          }
        )
      })
    }
  })

  return (
    <section
      ref={sectionRef}
      className="relative bg-neutral-950 h-auto md:h-screen flex flex-col justify-center px-8 md:px-20 py-24 md:py-0"
    >
      {/* Label — top left */}
      <div className="mt-8 md:mt-12 mb-4">
        <p className="font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase">
          {label}
        </p>
      </div>

      {/* Heading — mobile only, top */}
      <div onClick={() => navigate("/academy")} className="cursor-pointer md:hidden mb-6">
        <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[0.95] tracking-tight text-white mb-2">
          {title}
        </h2>
        <p className="text-white/40 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Cards — top */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 flex-1">
        {CARDS.map((card, i) => (
          <div
            key={i}
            ref={(el) => { if (el) cardsRef.current[i] = el }}
            onClick={() => navigate("/academy")}
            className="cursor-pointer"
          >
            <div className="relative aspect-[5/2] md:aspect-[5/5] rounded-sm overflow-hidden bg-white/[0.04] border border-white/[0.06]">

              {/* Mobile: fixed portrait background — feels static as cards scroll over it */}
              <div className="md:hidden absolute inset-0" style={{
                backgroundImage: `url(${imgPortrait})`,
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }} />

              {/* Desktop: landscape triptych with parallax */}
              <div
                ref={(el) => { if (el) imagesRef.current[i] = el }}
                className="hidden md:block"
                style={{
                  position: "absolute",
                  width: `calc(300% + ${GAP * 2}px)`,
                  height: "calc(100% + 460px)",
                  top: "-230px",
                  left: card.imageLeft,
                  backgroundImage: `url(${imgLandscape})`,
                  backgroundSize: "100% auto",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "0 50%",
                }}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

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
