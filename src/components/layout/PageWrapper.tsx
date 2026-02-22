import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import { ScrollProgress } from "../ui/scroll-progress"

export default function PageWrapper() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <ScrollProgress
        className="!fixed !bottom-0 !top-auto left-0 h-[1px] bg-[linear-gradient(to_right,rgba(255,255,255,0),rgba(255,255,255,0.6)_75%,rgba(255,255,255,0.6)_100%)]"
        springOptions={{ stiffness: 280, damping: 18, mass: 0.3 }}
      />
    </>
  )
}
