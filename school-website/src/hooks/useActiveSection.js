import { useEffect, useState } from 'react'

// Returns the id of the section currently in view (used to highlight the nav link).
export default function useActiveSection(ids, fallback = ids[0]) {
  const [active, setActive] = useState(fallback)

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      // a section becomes "active" when it crosses the middle band of the screen
      { rootMargin: '-40% 0px -55% 0px' },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return active
}
