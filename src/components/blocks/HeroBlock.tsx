import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import meImage from "@/assets/images/me.png"
import { DitherShader } from "@/components/ui/dither-shader"

gsap.registerPlugin(ScrollTrigger)

interface Props {
  label: string
  name: string
  descriptor: string
  scrollCue: string
}

export default function HeroBlock({ label, name, descriptor, scrollCue }: Props) {
  const imageRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.to(imageRef.current, {
      y: "15%",
      ease: "none",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    })
  })

  return (
    <section className="relative min-h-screen overflow-hidden bg-neutral-950">

      {/* Dithered portrait — full bleed background, taller than viewport for parallax travel */}
      <div ref={imageRef} className="absolute inset-x-0 -top-[15%] h-[130%]">
        <DitherShader
          src={meImage}
          ditherMode="halftone"
          colorMode="duotone"
          gridSize={0.5}
          contrast={1.1}
          brightness={-0.1}
          objectFit="cover"
          objectPositionX={0.65}
          objectPositionY={0.5}
          backgroundColor="transparent"
          className="w-full h-full"
        />
      </div>

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/20 md:via-neutral-950/60 md:to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end md:justify-start min-h-screen px-8 md:px-20 pt-0 md:pt-32 pb-16 md:pb-28">

        {/* Label */}
        <p className="font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase md:mb-10 mb-1">
          {label}
        </p>

        {/* Name */}
        <h1 className="text-[clamp(3.5rem,9vw,8rem)] font-bold leading-[0.95] tracking-tight text-white md:mb-6 mb-2">
          {name}
        </h1>

        {/* Descriptor line */}
        <p className="font-mono text-xs md:text-sm tracking-[0.2em] text-white/40 uppercase md:mb-12 mb-5">
          {descriptor}
        </p>

        {/* Scroll cue */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-px bg-white/20" />
          <span className="font-mono text-[10px] tracking-widest text-white/20 uppercase">
            {scrollCue}
          </span>
        </div>
      </div>

      {/* Bottom edge line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.06]" />
    </section>
  )
}
