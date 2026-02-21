interface Props {
  label: string
  title: string
}

export default function DummyBlock({ label, title }: Props) {
  return (
    <section className="relative bg-neutral-950 h-[100dvh] flex flex-col justify-center px-8 md:px-20 border-t border-white/[0.06]">
      <p className="font-mono text-[10px] tracking-[0.3em] text-white/20 uppercase mb-4">
        {label}
      </p>
      <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[0.95] tracking-tight text-white/10">
        {title}
      </h2>
    </section>
  )
}
