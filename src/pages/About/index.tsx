import TravelBlock from "@/components/blocks/about/TravelBlock"
import MuseumsBlock from "@/components/blocks/about/MuseumsBlock"
import ChessBlock from "@/components/blocks/about/ChessBlock"
import MusicBlock from "@/components/blocks/about/MusicBlock"

export default function About() {
  return (
    <main className="bg-neutral-950">
      <MusicBlock />
      <TravelBlock />
      <ChessBlock />
      <MuseumsBlock />
    </main>
  )
}
