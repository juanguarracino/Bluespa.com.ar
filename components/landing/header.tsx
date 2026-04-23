"use client"

import { useState, useEffect } from "react"
import { Menu, X, MessageCircle, Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#servicios", label: "Servicios" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#proceso", label: "Proceso" },
    { href: "#contacto", label: "Contacto" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#inicio"
            className="flex items-center gap-3 group"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("inicio")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <div className="relative flex items-center justify-center transition-all duration-300">
              <img
                src="/images/logo-bluespa.png"
                alt="BlueSpa Natatorios"
                className="object-contain transition-transform duration-300 group-hover:scale-110"
                style={{ width: "60px", height: "60px" }}
              />
            </div>
            <div className={`transition-colors duration-300 ${isScrolled ? "text-foreground" : "text-card"}`}>
              <span className="font-serif text-lg font-bold tracking-tight block leading-tight">BLUESPA</span>
              <span className="text-xs tracking-[0.2em] font-medium opacity-80">NATATORIOS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-all duration-300 hover:opacity-100 relative group ${
                  isScrolled ? "text-foreground" : "text-card"
                } opacity-85`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Social Links */}
            <a
              href="https://wa.me/5491163782095?text=Hola!%20Me%20contacto%20desde%20la%20web.%20Quisiera%20consultar%20por%20una%20piscina."
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                isScrolled 
                  ? "text-muted-foreground hover:text-green-500 hover:bg-green-500/10" 
                  : "text-card/80 hover:text-green-400 hover:bg-card/10"
              }`}
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/bluespa.bluespa.natatorios/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                isScrolled 
                  ? "text-muted-foreground hover:text-blue-600 hover:bg-blue-600/10" 
                  : "text-card/80 hover:text-blue-400 hover:bg-card/10"
              }`}
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/piscinasbluespanatatorios/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                isScrolled 
                  ? "text-muted-foreground hover:text-pink-500 hover:bg-pink-500/10" 
                  : "text-card/80 hover:text-pink-400 hover:bg-card/10"
              }`}
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            
            <Button
              asChild
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ml-1"
            >
              <Link href="#contacto">Solicitar Presupuesto</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-foreground" : "text-card"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="bg-card rounded-2xl p-6 shadow-xl space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 px-4 text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border mt-4 space-y-3">
              {/* Social Links Mobile */}
              <div className="flex items-center justify-center gap-4 py-2">
                <a
                  href="https://wa.me/5491163782095?text=Hola!%20Me%20contacto%20desde%20la%20web.%20Quisiera%20consultar%20por%20una%20piscina."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-green-500/10 text-green-600 hover:bg-green-500/20 transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-6 h-6" />
                </a>
                <a
                  href="https://www.facebook.com/bluespa.bluespa.natatorios/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-blue-600/10 text-blue-600 hover:bg-blue-600/20 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/piscinasbluespanatatorios/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-pink-500/10 text-pink-500 hover:bg-pink-500/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
              <Button
                asChild
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-full"
              >
                <Link href="#contacto">Solicitar Presupuesto</Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
