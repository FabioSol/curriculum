import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

export default function PageWrapper() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  )
}
