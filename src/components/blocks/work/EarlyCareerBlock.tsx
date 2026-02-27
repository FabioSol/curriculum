import { useState, useRef, useEffect } from "react"
import { createPortal } from "react-dom"
import { AnimatePresence, motion } from "motion/react"
import useClickOutside from "@/components/ui/useClickOutside"
import venteksLogo from "@/assets/images/work/venteks-square.webp"
import varetoLogo from "@/assets/images/work/vareto-square.webp"
import abillaLogo from "@/assets/images/work/fabilla-square.webp"
import venteksBanner from "@/assets/images/work/venteks-landscape.webp"
import varetoBanner from "@/assets/images/work/vareto-landscape.webp"
import abillaBanner from "@/assets/images/work/fabilla-landscape.webp"

interface Role {
  company: string
  title: string
  period: string
  description: string
  logo?: string
  banner?: string
}

const roles: Role[] = [
  {
    company: "Venteks",
    title: "Financial Software Developer",
    period: "2022 — 2024",
    description: "My first professional role. Built financial software and algorithmic trading tools using Python, MQL4, and MQL5 — C++-based languages for the MetaTrader platform. Also my first real exposure to web development, cloud infrastructure, and microservices architecture.",
    logo: venteksLogo,
    banner: venteksBanner,
  },
  {
    company: "Vareto",
    title: "Data Analyst",
    period: "2024",
    description: "Worked on a financial planning and analysis platform. Used and maintained data pipelines using Apache Airflow and automated tasks using bash scripting.",
    logo: varetoLogo,
    banner: varetoBanner,
  },
  {
    company: "Fabillaflex",
    title: "Technical Program Manager",
    period: "2024 — 2025",
    description: "Led cross-functional technical programs across engineering and product. Worked hands-on with Next.js and Laravel, developed microservices, and designed a multitenant application architecture. A formative role where I went deep on web development and learned how to think about systems at scale.",
    logo: abillaLogo,
    banner: abillaBanner,
  },
]

const cards = [...roles, ...roles, ...roles, ...roles, ...roles, ...roles]

function RoleModal({ role, onClose }: { role: Role; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null!)
  useClickOutside(ref, onClose)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [onClose])

  return createPortal(
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        ref={ref}
        className="bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl w-fit max-w-[min(90vw,480px)]"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {role.banner && (
          <img src={role.banner} alt={role.company} className="w-full h-48 object-cover" />
        )}
        <div className="px-6 py-5">
          <p className="label text-white/30 mb-2">{role.period}</p>
          <p className="text-white font-bold text-lg mb-1">{role.company}</p>
          <p className="text-white/50 text-sm mb-4">{role.title}</p>
          <p className="text-white/60 text-sm leading-relaxed">{role.description}</p>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  )
}

function CompanyCard({ role, onClick }: { role: Role; onClick: () => void }) {
  const { company, title, period, logo } = role
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      onClick={onClick}
      className="group relative aspect-square w-full rounded-lg overflow-hidden ring ring-white/5 bg-neutral-900 cursor-pointer"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {logo
          ? <img src={logo} alt={company} className="w-full h-full object-cover" />
          : <span className="text-white/20 font-bold text-xl tracking-wider uppercase">{company}</span>
        }
      </div>
      <div className="absolute inset-0 bg-neutral-950/80 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <p className="label text-white/30 mb-1">{period}</p>
        <p className="text-white font-semibold text-sm mb-1">{company}</p>
        <p className="text-white/60 text-xs">{title}</p>
      </div>
    </motion.div>
  )
}

export default function EarlyCareerBlock() {
  const [selected, setSelected] = useState<Role | null>(null)
  const chunkSize = Math.ceil(cards.length / 4)
  const chunks = Array.from({ length: 4 }, (_, i) => cards.slice(i * chunkSize, (i + 1) * chunkSize))

  return (
    <section className="bg-neutral-950 pt-32 overflow-hidden h-dvh">
      <div className="px-8 md:px-20 mb-16">
        <p className="label text-white/30 mb-6">001 / Early Career</p>
        <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[0.95] tracking-tight text-white max-w-xl">
          Early experience.
        </h2>
      </div>

      <div className="mx-auto block h-[600px] overflow-hidden max-sm:h-[400px]">
        <div className="flex size-full items-center justify-center">
          <div className="size-[1720px] shrink-0 scale-50 sm:scale-75 lg:scale-100">
            <div
              style={{ transform: "rotateX(55deg) rotateY(0deg) rotateZ(-45deg)" }}
              className="relative top-96 right-[50%] grid size-full origin-top-left grid-cols-4 gap-8 transform-3d"
            >
              {chunks.map((chunk, colIndex) => (
                <motion.div
                  key={colIndex}
                  animate={{ y: colIndex % 2 === 0 ? 100 : -100 }}
                  transition={{
                    duration: colIndex % 2 === 0 ? 10 : 15,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="flex flex-col items-start gap-8"
                >
                  {chunk.map((role, i) => (
                    <CompanyCard key={i} role={role} onClick={() => setSelected(role)} />
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selected && <RoleModal role={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}
