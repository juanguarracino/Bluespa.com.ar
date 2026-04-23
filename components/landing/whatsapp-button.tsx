"use client"

import { useState, useEffect } from "react"
import { MessageCircle, ArrowUp } from "lucide-react"

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`w-12 h-12 bg-card hover:bg-muted rounded-full flex items-center justify-center shadow-lg hover:shadow-xl border border-border transition-all duration-300 hover:scale-110 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Volver arriba"
      >
        <ArrowUp className="w-5 h-5 text-foreground" />
      </button>

      {/* WhatsApp Button */}
      <div className="flex items-center gap-3">
        {/* Tooltip */}
        <div
          className={`bg-card text-foreground px-4 py-2 rounded-full shadow-lg border border-border text-sm font-medium transition-all duration-300 whitespace-nowrap ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
          }`}
        >
          Chateá por WhatsApp
        </div>

        {/* Button */}
        <a
          href="https://wa.me/5491163782095?text=Hola!%20Me%20contacto%20desde%20la%20web.%20Quisiera%20consultar%20por%20una%20piscina."
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative block"
        >
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25" />
          <div className="relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
            <MessageCircle className="w-7 h-7 text-white" />
          </div>
        </a>
      </div>
    </div>
  )
}
