import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import ProjectsIntroBlock from "@/components/blocks/projects/ProjectsIntroBlock"
import ProjectBlock from "@/components/blocks/projects/ProjectBlock"

import aiLookUp1 from "@/assets/images/projects/AILookUp-screenshot-1.webp"
import aiLookUp2 from "@/assets/images/projects/AILookUp-screenshot-2.webp"
import annotations1 from "@/assets/images/projects/annotations-screenshot-1.webp"
import annotations2 from "@/assets/images/projects/annotations-screenshot-2.webp"
import risk from "@/assets/images/projects/risk-screenshot.webp"
import lykeion1 from "@/assets/images/projects/lykeion-screenshot-1.webp"
import lykeion2 from "@/assets/images/projects/lykeion-screenshot-2.webp"
import lykeion3 from "@/assets/images/projects/lykeion-screenshot-3.webp"

const projects = [
  {
    id: "lykeion",
    title: "Lykeion",
    description:
      "A Hugo theme built around a strict set of readability principles. Negative interface, high typographic discipline, zero framework dependencies — just HTML, CSS, and JS. A deliberate constraint to sharpen fundamentals.",
    tech: ["Hugo", "HTML", "CSS", "JavaScript"],
    screenshots: [lykeion1, lykeion2, lykeion3],
    links: [{ label: "fabiosol.github.io/Lykeion", href: "https://fabiosol.github.io/Lykeion/" }],
  },
  {
    id: "risk-analysis",
    title: "Risk Analysis Class Tools",
    description:
      "A collection of interactive tools for students studying complex risk models. Built to develop intuition through hands-on exploration rather than passive reading.",
    tech: ["Next.js"],
    screenshots: [risk],
    links: [{ label: "risk-analysis-class-tools.vercel.app", href: "https://risk-analysis-class-tools.vercel.app/" }],
  },
  {
    id: "annotations",
    title: "Annotations App",
    description:
      "Built to support a clinical study on pantomographies. Radiologists annotate DICOM images served via GridFS, with data collected into MongoDB. Containerized and deployed on Kubernetes.",
    tech: ["Next.js", "TypeScript", "Flask", "MongoDB", "GridFS", "Docker", "Kubernetes", "Uvicorn"],
    screenshots: [annotations1, annotations2],
  },
  {
    id: "ailookup",
    title: "AiLookUp",
    description:
      "An early RAG application that lets you load a CSV and query it with natural language. Embeddings are generated with Sentence-BERT and results are retrieved semantically — no cloud dependency, runs fully local.",
    tech: ["Python", "Sentence-BERT", "Peewee", "PyQt5"],
    screenshots: [aiLookUp1, aiLookUp2],
    links: [{ label: "github.com/FabioSol/AiLookUp", href: "https://github.com/FabioSol/AiLookUp" }],
  },
]

export default function Projects() {
  const { hash } = useLocation()

  useEffect(() => {
    const id = hash.slice(1)
    if (!id) return
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView()
      })
    })
  }, [hash])

  return (
    <main className="bg-neutral-950">
      <ProjectsIntroBlock />
      {projects.map((project, i) => (
        <ProjectBlock
          key={project.title}
          index={i + 2}
          imageOnRight={i % 2 !== 0}
          {...project}
        />
      ))}
    </main>
  )
}
