import DummyBlock from "@/components/blocks/DummyBlock"
import TravelBlock from "@/components/blocks/about/TravelBlock"
import MuseumsBlock from "@/components/blocks/about/MuseumsBlock"

export default function About() {
  return (
    <main className="bg-neutral-950">
      <TravelBlock />
      <MuseumsBlock />
      <DummyBlock label="002 / Chess"   title="Three moves ahead." />
      <DummyBlock label="003 / Chess"   title="Three moves ahead." />
      <DummyBlock label="004 / Chess"   title="Three moves ahead." />
      <DummyBlock label="005 / Music"   title="Finding the chord." />
      <DummyBlock label="006 / Music"   title="Finding the chord." />
      <DummyBlock label="007 / Music"   title="Finding the chord." />
      <DummyBlock label="008 / Music"   title="Finding the chord." />
      <DummyBlock label="009 / Art"     title="What I see." />
      <DummyBlock label="010 / Art"     title="What I see." />
    </main>
  )
}
