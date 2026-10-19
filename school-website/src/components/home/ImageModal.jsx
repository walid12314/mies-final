import { useEffect } from 'react'

// Full-screen image preview. Closes on Escape, backdrop click or the × button.
export default function ImageModal({ image, onClose }) {
  useEffect(() => {
    if (!image) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    const previousOverflow = document.body.style.overflow

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [image, onClose])

  if (!image) return null

  return (
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-sm"
        onClick={() => onClose()}
        role="dialog"
        aria-modal="true"
        aria-label="Image preview"
      >
        {/* Close button */}
        <button
          type="button"
          onClick={() => onClose()}
          aria-label="Close image preview"
          className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-3xl leading-none text-white shadow-lg transition duration-200 hover:rotate-90 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
        >
          &times;
        </button>

        {/* Full image preview */}
        <img
          src={image.src}
          alt={image.alt}
          onClick={(event) => event.stopPropagation()}
          className="max-h-[88vh] max-w-[92vw] cursor-default object-contain shadow-[0_0_35px_rgba(59,130,246,0.3)]"
        />
      </div>
  )
}
