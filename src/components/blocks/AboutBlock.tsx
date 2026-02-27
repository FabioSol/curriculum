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
import elPenol from "@/assets/images/about/travel/el-penol-antioquia-colombia.webp"
import comunaTrece from "@/assets/images/about/travel/comuna-trece-medellin.webp"
import desiertoRojo from "@/assets/images/about/travel/desierto-rojo-tatacoa.webp"
import catedralDeSal from "@/assets/images/about/travel/catedral-de-sal-zipaquira-colombia.webp"
import tulcan from "@/assets/images/about/travel/tulcan-cementery-ecuador.webp"
import jardin from "@/assets/images/about/travel/jardin-antioquia-colombia.webp"
import elDorado from "@/assets/images/about/travel/el-dorado-guatavita-bogota.webp"
import lagunaCocha from "@/assets/images/about/travel/laguna-de-la-cocha-narino-colombia.webp"
import gato from "@/assets/images/about/museums/gato-botero.webp"
import cabezaOlmeca from "@/assets/images/about/museums/cabeza-olmeca.webp"
import apolo from "@/assets/images/about/museums/apolo-y-dafne-bernini.webp"
import rodin from "@/assets/images/about/museums/la-eterna-primavera-auguste-rodin.webp"
import picasso from "@/assets/images/about/museums/craneo-de-cabra-sobre-mesa-pablo-picasso.webp"
import monet from "@/assets/images/about/museums/amsterdam-en-invierno-Monet.webp"
import boteroFlores from "@/assets/images/about/museums/flores-botero.webp"
import giacometti from "@/assets/images/about/museums/alberto-giacometti-1961.webp"
import museoOro from "@/assets/images/about/museums/museo-del-oro-2-pectoral-ceremonial.webp"

gsap.registerPlugin(ScrollTrigger)

const ROW_A = [elPenol, comunaTrece, desiertoRojo, catedralDeSal, tulcan, jardin, elDorado, lagunaCocha]
const ROW_B = [gato, cabezaOlmeca, apolo, rodin, picasso, monet, boteroFlores, giacometti, museoOro]

interface Props {
  label: string
  title: string
  description: string
}

export default function AboutBlock({ label, title, description }: Props) {
  const navigate = useNavigate()
  const sectionRef = useRef<HTMLElement>(null)
  const rowARef = useRef<HTMLDivElement>(null)
  const rowBRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const section = sectionRef.current
    if (!section) return

    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=150%",
      pin: true,
      scrub: 0.5,
    })

    gsap.fromTo(rowARef.current,
      { x: "120%" },
      {
        x: "0%",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "top top",
          scrub: 3,
        },
      }
    )
    gsap.fromTo(rowBRef.current,
      { x: "-120%" },
      {
        x: "0%",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "top top",
          scrub: 3,
        },
      }
    )
  })

  return (
    <section ref={sectionRef} className="relative bg-neutral-950">
      <div className="relative py-24 md:py-36 overflow-x-hidden">

      {/* Scroll velocity image strips — absolute background on mobile, normal flow on desktop */}
      <div className="absolute inset-0 md:relative md:inset-auto pointer-events-none md:pointer-events-auto">
        <ScrollVelocityContainer onClick={() => navigate("/about")} className="w-full flex flex-col gap-4 h-full md:h-auto justify-start md:justify-normal pt-12 md:pt-0 md:cursor-pointer">
          <div ref={rowARef}>
            <ScrollVelocityRow baseVelocity={3} direction={1} className="py-2">
              {ROW_A.map((src, i) => (
                <Tilt key={i} rotationFactor={20} springOptions={{ stiffness: 80, damping: 15 }}>
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
                <Tilt key={i} rotationFactor={20} springOptions={{ stiffness: 80, damping: 15 }}>
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

      {/* Header + bio — desktop only, side by side */}
      <div onClick={() => navigate("/about")} className="hidden md:flex flex-row items-start gap-10 lg:gap-16 px-8 md:px-20 mb-8 md:mb-12 cursor-pointer">
        <div className="shrink-0">
          <p className="font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase mb-8">
            {label}
          </p>
          <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[0.95] tracking-tight text-white">
            {title}
          </h2>
        </div>
        <p className="text-white/50 text-sm md:text-base leading-relaxed pt-1 md:pt-2 max-w-sm">
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
