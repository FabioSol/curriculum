import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Loader from "@/components/layout/Loader"
import PageWrapper from "@/components/layout/PageWrapper"
import Home from "@/pages/Home"
import Work from "@/pages/Work"
import Academy from "@/pages/Academy"
import About from "@/pages/About"
import Contact from "@/pages/Contact"

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PageWrapper />}>
            <Route path="/work" element={<Work />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
