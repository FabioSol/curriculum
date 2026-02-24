import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { IconCloud } from "@/components/ui/icon-cloud"

gsap.registerPlugin(ScrollTrigger)

const TECH_SLUGS = [
  "python", "go", "r", "javascript", "typescript",
  "html5", "react", "angular", "figma",
  "tailwindcss", "flask", "fastapi", "digitalocean",
  "hugo", "mongodb", "neo4j", "go", "mysql", "postgresql",
  "elasticsearch", "apachekafka", "apachespark", "mongodb",
  "docker", "opencv", "numpy", "php", "git", "sqlite",
  "pandas", "postman","cplusplus", "vercel",
]

const images = TECH_SLUGS.map(
  (slug) => `https://cdn.simpleicons.org/${slug}/171717`
)

interface Props {
  label: string
  title: string
  description: string
}

export default function WorkBlock({ label, title, description }: Props) {
  const navigate = useNavigate()
  const sectionRef = useRef<HTMLElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

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
        end: "+=200%",
        pin: true,
        scrub: 0.5,
      },
    })

    // Phase 1 (0 → 0.5): content slides in
    tl.fromTo(inner, { x: "100vw" }, { x: "0vw", ease: "power2.out", duration: 0.5 }, 0)

    // Phase 2 (0.5 → 1): hold
    tl.to(inner, { x: "0vw", ease: "none", duration: 0.5 }, 0.5)

    // Phase 3 (1 → 1.5): content slides out + next fades in
    tl.to(inner, { x: "-100vw", ease: "power2.in", duration: 0.5 }, 1)
    if (next) tl.fromTo(next, { opacity: 0 }, { opacity: 1, ease: "none", duration: 0.5 }, 1)

    // Bg: black → white during slide in, white → black during slide out
    tl.to(section, { backgroundColor: "#fafafa", ease: "power3.in", duration: 0.5 }, 0)
    tl.to(section, { backgroundColor: "#0a0a0a", ease: "power3.out", duration: 0.5 }, 1)

    gsap.set(section, { backgroundColor: "#0a0a0a" })
  })

  return (
    <section
      ref={sectionRef}
      className="h-screen overflow-hidden z-10"
    >
      <div
        ref={innerRef}
        className="absolute inset-0 flex items-center"
      >
        <div className="w-full grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8 px-8 md:px-20">

          {/* Cloud side — left, bigger */}
          <div className="flex items-center justify-center">
            <IconCloud images={images} />
          </div>

          {/* Text side — right */}
          <div className="flex flex-col justify-center">
            <p className="font-mono text-[10px] tracking-[0.3em] text-neutral-400 uppercase mb-8">
              {label}
            </p>
            <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[0.95] tracking-tight text-neutral-950 mb-8">
              {title}
            </h2>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-sm mb-8">
              {description}
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => navigate("/work")}
                className="text-sm font-medium text-neutral-950 border border-neutral-950 px-5 py-2.5 rounded-full hover:bg-neutral-950 hover:text-white transition-colors duration-200"
              >
                Experience ↗
              </button>
              <button
                onClick={() => navigate("/projects")}
                className="text-sm font-medium text-neutral-500 border border-neutral-300 px-5 py-2.5 rounded-full hover:border-neutral-950 hover:text-neutral-950 transition-colors duration-200"
              >
                Projects ↗
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
