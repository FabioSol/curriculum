import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import EarlyCareerBlock from "@/components/blocks/work/EarlyCareerBlock"
import SpanBlock from "@/components/blocks/work/SpanBlock"

export default function Work() {
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
      <EarlyCareerBlock />
      <SpanBlock />
    </main>
  )
}
