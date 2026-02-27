import { useState, useRef, useEffect } from "react"
import { createPortal } from "react-dom"
import { AnimatePresence, motion } from "motion/react"
import useClickOutside from "@/components/ui/useClickOutside"
import { Lens } from "@/components/ui/lens"

function ImageLightbox({ src, alt, description, onClose }: {
  src: string
  alt: string
  description?: string
  onClose: () => void
}) {
  const ref = useRef<HTMLDivElement>(null!)
  useClickOutside(ref, onClose)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [onClose])

  return createPortal(
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        ref={ref}
        className="bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        style={{ maxWidth: "min(90vw, 800px)", maxHeight: "90vh" }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <Lens zoomFactor={2} lensSize={150} ariaLabel={alt}>
          <img
            src={src}
            alt={alt}
            className="w-full h-auto object-contain"
            style={{ maxHeight: "70vh" }}
          />
        </Lens>
        {description && (
          <p className="px-5 py-4 text-sm text-neutral-400 leading-relaxed shrink-0">{description}</p>
        )}
      </motion.div>
    </motion.div>,
    document.body
  )
}

export function ClickableImage({ src, alt, width, height, description, className }: {
  src: string
  alt: string
  width?: number
  height?: number
  description?: string
  className?: string
}) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <img
        src={src}
        alt={alt}
        style={{ width, height, display: "block" }}
        className={className}
        onClick={() => setOpen(true)}
      />
      <AnimatePresence>
        {open && (
          <ImageLightbox
            src={src}
            alt={alt}
            description={description}
            onClose={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
