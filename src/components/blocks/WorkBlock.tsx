import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { AnimatePresence, motion } from "motion/react"
import { Lens } from "@/components/ui/lens"

import spanLogo from "@/assets/images/work/span-landscape.webp"
import aiLookUp from "@/assets/images/projects/AILookUp-screenshot-1.webp"
import annotations from "@/assets/images/projects/annotations-screenshot-1.webp"
import risk from "@/assets/images/projects/risk-screenshot.webp"
import lykeion from "@/assets/images/projects/lykeion-screenshot-1.webp"

gsap.registerPlugin(ScrollTrigger)

const PROJECTS = [
  {
    title: "Lykeion",
    description: "A Hugo theme where the constraint is the point.",
    tech: ["Hugo", "HTML", "CSS", "JavaScript"],
    screenshot: lykeion,
    anchor: "lykeion",
  },
  {
    title: "Risk Analysis Tools",
    description: "Risk theory, made interactive.",
    tech: ["Next.js"],
    screenshot: risk,
    anchor: "risk-analysis",
  },
  {
    title: "Annotations App",
    description: "Medical images, annotated at scale.",
    tech: ["Next.js", "Flask", "MongoDB", "Docker", "Kubernetes"],
    screenshot: annotations,
    anchor: "annotations",
  },
  {
    title: "AiLookUp",
    description: "Ask questions. Get answers. No cloud needed.",
    tech: ["Python", "Sentence-BERT", "PyQt5"],
    screenshot: aiLookUp,
    anchor: "ailookup",
  },
]

interface Props {
  label: string
  title: string
}

export default function WorkBlock({ label, title }: Props) {
  const navigate = useNavigate()
  const sectionRef = useRef<HTMLElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)

  function go(d: number) {
    setDir(d)
    setIndex(i => (i + d + PROJECTS.length) % PROJECTS.length)
  }

  useGSAP(() => {
    const section = sectionRef.current
    const inner = innerRef.current
    if (!section || !inner) return

    const next = section.nextElementSibling as HTMLElement | null
    if (next) gsap.set(next, { opacity: 0 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: 0.5,
      },
    })

    tl.fromTo(inner, { x: "100vw" }, { x: "0vw", ease: "power2.out", duration: 0.5 }, 0)
    tl.to(inner, { x: "0vw", ease: "none", duration: 0.5 }, 0.5)
    tl.to(inner, { x: "-100vw", ease: "power2.in", duration: 0.5 }, 1)
    if (next) tl.fromTo(next, { opacity: 0 }, { opacity: 1, ease: "none", duration: 0.5 }, 1)

    tl.to(section, { backgroundColor: "#fafafa", ease: "power3.in", duration: 0.5 }, 0)
    tl.to(section, { backgroundColor: "#0a0a0a", ease: "power3.out", duration: 0.5 }, 1)
    gsap.set(section, { backgroundColor: "#0a0a0a" })
  })

  const project = PROJECTS[index]

  return (
    <section ref={sectionRef} className="h-screen overflow-hidden z-10">
      <div ref={innerRef} className="absolute inset-0 flex items-center px-8 md:px-20">
        <div className="w-full grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-6 md:gap-16">

          {/* LEFT — Work / SPAN */}
          <div onClick={() => navigate("/work#span")} className="cursor-pointer group flex flex-col gap-3 md:gap-0 md:justify-between md:h-full">

            {/* Mobile: single compact row. Desktop: full block */}
            <div className="flex items-center gap-3 md:block">
              <img src={spanLogo} alt="SPAN" className="h-6 md:h-7 w-auto rounded-sm md:mb-6 shrink-0" />
              <div className="md:hidden flex-1 min-w-0">
                <p className="text-sm font-bold text-neutral-950 leading-tight truncate">Software Engineer</p>
                <p className="font-mono text-[9px] tracking-[0.2em] text-neutral-400 uppercase">2025 — Present</p>
              </div>
            </div>

            <div className="hidden md:block">
              <p className="font-mono text-[10px] tracking-[0.3em] text-neutral-400 uppercase mb-6">
                {label}
              </p>
              <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold leading-[1.0] tracking-tight text-neutral-950 mb-6">
                {title}
              </h2>
              <h3 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[0.95] tracking-tight text-neutral-950">
                Software<br />Engineer.
              </h3>
              <p className="font-mono text-[10px] tracking-[0.2em] text-neutral-400 uppercase mt-3 mb-5">
                2025 — Present
              </p>
              <p className="text-sm text-neutral-500 leading-relaxed max-w-xs">
                Building across stacks, shipping across timezones, learning from the people around me. The sort of role where you look back after six months and realize how much ground you've covered.
              </p>
            </div>

            <span onClick={(e) => { e.stopPropagation(); navigate("/work") }} className="text-sm font-medium text-neutral-400 group-hover:text-neutral-950 transition-colors">
              Experience ↗
            </span>

          </div>

          {/* RIGHT — Projects carousel */}
          <div className="flex flex-col gap-3">

            <p className="font-mono text-[10px] tracking-[0.3em] text-neutral-400 uppercase">
              Projects
            </p>

            {/* Screenshot with Lens */}
            <div className="relative overflow-hidden rounded-xl ring-1 ring-neutral-200 w-fit mx-auto">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={index}
                  custom={dir}
                  initial={{ opacity: 0, x: dir * 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir * -24 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                >
                  <Lens zoomFactor={1.5} lensSize={140} ariaLabel={project.title}>
                    <img
                      src={project.screenshot}
                      alt={project.title}
                      className="h-[28dvh] md:h-[45dvh] w-auto block"
                    />
                  </Lens>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Project info + controls */}
            <div className="flex items-start gap-4">

              <div className="flex-1 min-w-0 cursor-pointer" onClick={() => navigate(`/projects#${project.anchor}`)}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.18 }}
                  >
                    <p className="text-sm font-bold text-neutral-900 leading-tight">{project.title}</p>
                    <p className="text-xs text-neutral-500 mt-1 leading-relaxed line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {project.tech.map(t => (
                        <span
                          key={t}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-500 border border-neutral-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex flex-col items-end gap-2 shrink-0">
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => go(-1)}
                    className="w-7 h-7 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-900 hover:border-neutral-400 transition-colors text-xs"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => go(1)}
                    className="w-7 h-7 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-900 hover:border-neutral-400 transition-colors text-xs"
                  >
                    →
                  </button>
                </div>
                <p className="font-mono text-[10px] text-neutral-400 tabular-nums">
                  {index + 1} / {PROJECTS.length}
                </p>
                <button
                  onClick={() => navigate("/projects")}
                  className="text-xs font-medium text-neutral-500 border border-neutral-300 px-3 py-1.5 rounded-full hover:border-neutral-950 hover:text-neutral-950 transition-colors"
                >
                  Projects ↗
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
