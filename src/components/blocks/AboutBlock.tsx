import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Tilt } from "@/components/ui/tilt"
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity"
import img1 from "@/assets/images/about/img_1.png"
import img2 from "@/assets/images/about/img_2.png"
import img3 from "@/assets/images/about/img_3.png"
import img4 from "@/assets/images/about/img_4.png"

gsap.registerPlugin(ScrollTrigger)

const images = [img1, img2, img3, img4]

const ROW_A = images
const ROW_B = [...images].reverse()

interface Props {
  label: string
  title: string
  description: string
}

export default function AboutBlock({ label, title, description }: Props) {
  const navigate = useNavigate()
  const sectionRef = useRef<HTMLElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const rowARef = useRef<HTMLDivElement>(null)
  const rowBRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const section = sectionRef.current
    if (!section) return

    // Row A: slides in from right, slides out to left
    gsap.fromTo(rowARef.current,
      { x: "120%" },
      {
        x: "0%",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "top 50%",
          scrub: 3,
        },
      }
    )
    gsap.fromTo(rowARef.current,
      { x: "0%" },
      {
        x: "-120%",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "bottom 50%",
          end: "bottom top",
          scrub: 3,
        },
      }
    )

    // Row B: slides in from left, slides out to right
    gsap.fromTo(rowBRef.current,
      { x: "-120%" },
      {
        x: "0%",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "top 50%",
          scrub: 3,
        },
      }
    )
    gsap.fromTo(rowBRef.current,
      { x: "0%" },
      {
        x: "120%",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "bottom 50%",
          end: "bottom top",
          scrub: 3,
        },
      }
    )
    // Fade out as WorkBlock pins in behind
    const inner = innerRef.current
    if (!inner) return

    gsap.fromTo(inner,
      { opacity: 1, pointerEvents: "auto" },
      {
        opacity: 0,
        pointerEvents: "none",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "bottom 50%",
          end: "bottom -20%",
          scrub: 0.5,
        onLeave: () => {
          gsap.set(section, { height: section.offsetHeight, zIndex: 0 })
          gsap.set(inner, { display: "none" })
        },
        onEnterBack: () => {
          gsap.set(inner, { display: "block", opacity: 0 })
          gsap.set(section, { height: "auto", zIndex: 20 })
        },
        },
      }
    )
  })

  return (
    <section ref={sectionRef} className="sticky top-0 z-20 bg-neutral-950">
      <div ref={innerRef} className="relative py-24 md:py-36 overflow-x-hidden">

      {/* Scroll velocity image strips — absolute background on mobile, normal flow on desktop */}
      <div className="absolute inset-0 md:relative md:inset-auto pointer-events-none md:pointer-events-auto">
        <ScrollVelocityContainer onClick={() => navigate("/about")} className="w-full flex flex-col gap-4 h-full md:h-auto justify-start md:justify-normal pt-12 md:pt-0 md:cursor-pointer">
          <div ref={rowARef}>
            <ScrollVelocityRow baseVelocity={3} direction={1} className="py-2">
              {ROW_A.map((src, i) => (
                <Tilt key={i} rotationFactor={8} springOptions={{ stiffness: 120, damping: 20 }}>
                  <img
                    src={src}
                    alt=""
                    className="mx-3 inline-block h-48 w-72 rounded-sm object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </Tilt>
              ))}
            </ScrollVelocityRow>
          </div>
          <div ref={rowBRef}>
            <ScrollVelocityRow baseVelocity={3} direction={-1} className="py-2">
              {ROW_B.map((src, i) => (
                <Tilt key={i} rotationFactor={8} springOptions={{ stiffness: 120, damping: 20 }}>
                  <img
                    src={src}
                    alt=""
                    className="mx-3 inline-block h-48 w-72 rounded-sm object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </Tilt>
              ))}
            </ScrollVelocityRow>
          </div>
        </ScrollVelocityContainer>

        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-neutral-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-neutral-950 to-transparent" />

        {/* Top/bottom gradient — mobile only */}
        <div className="md:hidden pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-neutral-950 via-neutral-950/60 to-transparent" />
        <div className="md:hidden pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
      </div>

      {/* Header — desktop only in normal flow */}
      <div onClick={() => navigate("/about")} className="hidden md:block px-8 md:px-20 mb-8 md:mb-12 cursor-pointer">
        <p className="font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase mb-8">
          {label}
        </p>
        <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[0.95] tracking-tight text-white max-w-3xl">
          {title}
        </h2>
      </div>

      {/* Bio text — desktop only in normal flow */}
      <div onClick={() => navigate("/about")} className="hidden md:block px-8 md:px-20 mt-8 md:mt-12 max-w-2xl cursor-pointer">
        <p className="text-white/50 text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>

      {/* Mobile text overlay — on top of background strips */}
      <div onClick={() => navigate("/about")} className="relative z-10 md:hidden flex flex-col justify-center min-h-screen px-8 py-24 cursor-pointer">
        <p className="font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase mb-16">
          {label}
        </p>
        <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[0.95] tracking-tight text-white max-w-3xl mb-8">
          {title}
        </h2>
        <p className="text-white/50 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      </div>
    </section>
  )
}
