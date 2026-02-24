import { Link } from "react-router-dom"

const links = [
  { label: "Work",     to: "/work" },
  { label: "Academy",  to: "/academy" },
  { label: "About",    to: "/about" },
  { label: "Projects", to: "/projects" },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex items-center justify-between mix-blend-difference">
      <Link to="/" className="text-sm font-mono tracking-widest uppercase text-white hover:text-white/70 transition-colors">
        FS
      </Link>
      <nav className="flex items-center gap-8">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="text-sm text-white hover:text-white/70 transition-colors tracking-wide"
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
