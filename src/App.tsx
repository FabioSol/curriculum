import { lazy, Suspense, useState, useEffect } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Loader from "@/components/layout/Loader"
import PageWrapper from "@/components/layout/PageWrapper"
import Home from "@/pages/Home"

const Work     = lazy(() => import("@/pages/Work"))
const Academy  = lazy(() => import("@/pages/Academy"))
const About    = lazy(() => import("@/pages/About"))
const Projects = lazy(() => import("@/pages/Projects"))
const NotFound = lazy(() => import("@/pages/NotFound"))

// Prefetch all lazy chunks non-blocking after initial render
function Prefetch() {
  useEffect(() => {
    const id = requestIdleCallback(() => {
      import("@/pages/Work")
      import("@/pages/Academy")
      import("@/pages/About")
      import("@/pages/Projects")
      import("@/pages/NotFound")
    })
    return () => cancelIdleCallback(id)
  }, [])
  return null
}

function AppRoutes() {
  const { pathname } = useLocation()
  const [loaded, setLoaded] = useState(false)
  const isHome = pathname === "/"

  return (
    <>
      {isHome && !loaded && <Loader onComplete={() => setLoaded(true)} />}

      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PageWrapper />}>
            <Route path="/work"     element={<Work />} />
            <Route path="/academy"  element={<Academy />} />
            <Route path="/about"    element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Prefetch />
      <AppRoutes />
    </BrowserRouter>
  )
}
