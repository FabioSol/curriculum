export default function ProjectsIntroBlock() {
  return (
    <section className="bg-neutral-950 h-screen flex items-end px-8 md:px-20 pb-24">
      <div className="max-w-5xl mx-auto">
        <p className="label text-white/30 mb-6">001 / Projects</p>
        <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[0.95] tracking-tight text-white max-w-2xl">
          Things I've built along the way.
        </h2>
        <p className="mt-8 text-white/40 text-sm leading-relaxed max-w-md">
          A mix of tools, experiments, and side projects — each one driven by a problem worth solving or a concept worth understanding.
        </p>
      </div>
    </section>
  )
}
