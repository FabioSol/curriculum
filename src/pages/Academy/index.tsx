import AcademyPageBlock from "@/components/blocks/academy/AcademyPageBlock.tsx"
import imgFinancialEng from "@/assets/images/academy/financial-eng.webp"
import imgDataScience  from "@/assets/images/academy/data-science.webp"
import imgRiskAnalysis from "@/assets/images/academy/risk-analysis.webp"

export default function Academy() {
  return (
    <main className="bg-neutral-950">
      <AcademyPageBlock slides={[
        {
          label: "001 / Bachelors",
          title: "Financial Eng.",
          description: "What happens when you teach a computer to think like a banker and a mathematician at the same time. Derivatives, risk models, and the math behind why markets move.",
          image: imgFinancialEng,
          place: "ITESO — Guadalajara, México",
          dates: "2019 – 2024",
        },
        {
          label: "002 / Masters",
          title: "Data Science.",
          description: "Teaching machines to find patterns in data so humans don't have to. Statistics, algorithms, and the art of turning noise into something useful.",
          image: imgDataScience,
          place: "ITESO — Guadalajara, México",
          dates: "2024 – 2026",
        },
        {
          label: "003 / Professor",
          title: "Risk Analysis.",
          description: "Every financial decision carries risk — market swings, credit defaults, liquidity crunches. This course breaks down how to measure, model, and manage each one.",
          image: imgRiskAnalysis,
          place: "ITESO — Guadalajara, México",
          dates: "2025 – Present",
        },
      ]} />
    </main>
  )
}
