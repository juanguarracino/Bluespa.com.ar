"use client"

import { useEffect } from "react"

const sections = [
  { id: "inicio", path: "/" },
  { id: "nosotros", path: "/nosotros" },
  { id: "servicios", path: "/servicios" },
  { id: "proyectos", path: "/proyectos" },
  { id: "proceso", path: "/proceso" },
  { id: "contacto", path: "/contacto" },
]

export function SectionUrlUpdater() {
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sections.forEach(({ id, path }) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            window.history.replaceState(null, "", path)
          }
        },
        { threshold: 0.4 }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return null
}
