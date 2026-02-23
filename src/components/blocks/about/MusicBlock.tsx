import deskImg from "@/assets/images/about/music/side-desk.webp"

export default function MusicBlock() {
  return (
    <section className="h-screen bg-neutral-950 flex overflow-hidden">

      {/* Photo */}
      <div className="hidden md:block w-[45%] shrink-0">
        <img
          src={deskImg}
          alt="Music setup"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center px-8 md:px-16 gap-6">
        <p className="label text-white/30">001 / Music</p>
        <h2 className="text-[clamp(1.8rem,3vw,3rem)] font-bold leading-[1.1] tracking-tight text-white max-w-sm">
          "Without music, life would be a mistake."
        </h2>
        <p className="label text-white/30">— Friedrich Nietzsche</p>
        <p className="text-white/50 text-sm leading-relaxed max-w-sm">
          A compulsive listener. When a song lands, I'll play it for weeks straight.
          I also make music — guitar, recording, producing — mostly as a way to understand
          what I love about the songs I can't stop hearing.
        </p>
      </div>

    </section>
  )
}
