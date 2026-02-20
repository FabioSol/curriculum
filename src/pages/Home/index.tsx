import HeroBlock from "@/components/blocks/HeroBlock"
import AboutBlock from "@/components/blocks/AboutBlock"
import WorkBlock from "@/components/blocks/WorkBlock"
import AcademyBlock from "@/components/blocks/AcademyBlock"
import ContactBlock from "@/components/blocks/ContactBlock"

export default function Home() {
  return (
    <main className="bg-neutral-950">
      <HeroBlock
        label="001 / Portfolio"
        name="Fabio Sol"
        descriptor="Software Engineer · Professor · Data Scientist"
        scrollCue="Scroll to explore"
      />
      <AboutBlock
        label="002 / About"
        title="More than hobbies."
        description="Beyond the screen, I'm drawn to things that demand patience and presence — learning a new chord, calculating three moves ahead, losing myself in a museum, or landing somewhere I've never been before. Art, guitar, chess, and travel are less hobbies and more the way I think."
      />
      <WorkBlock
        label="003 / Work"
        title="Tools & Technologies."
        description="A collection of languages, frameworks, and tools I've worked with across data engineering, web development, and quantitative research."
      />
      <AcademyBlock
        label="004 / Academy"
        title="Where it all started."
        description="A path through financial engineering, data science, and risk — each step building on the last."
      />
      <ContactBlock
        label="005 / Contact"
        heading={<>Let's<br /><span className="text-white/20 italic font-light">create</span><br />together.</>}
        marqueeItems={["Get in touch", "Let's talk", "Say hello", "Work together", "Open to opportunities"]}
        links={[
          { label: "LinkedIn", href: "#" },
          { label: "GitHub",   href: "#" },
          { label: "Email",    href: "#" },
        ]}
      />
    </main>
  )
}
