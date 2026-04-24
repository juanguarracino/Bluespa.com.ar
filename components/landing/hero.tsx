"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Play } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/proyecto2/6.jpeg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
      </div>

      {/* Animated Water Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 animate-pulse" style={{
          background: "repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,255,255,0.03) 50px, rgba(255,255,255,0.03) 100px)"
        }} />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >

          {/* Main Headline */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-card font-bold leading-[1.1] mb-6 text-balance">
            Piscinas de Hormigón
            <span className="block text-secondary mt-2">Premium</span>
          </h1>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/10 backdrop-blur-sm border border-card/20 rounded-full px-4 py-2 mb-8 max-w-[90vw]">
            <span className="w-2 h-2 shrink-0 bg-secondary rounded-full animate-pulse" />
            <span className="text-card/90 text-xs sm:text-sm font-medium tracking-wide text-center">
              Más de 25 años de experiencia en Berazategui
            </span>
          </div>

          {/* Subheadline */}
          <p className="text-card/85 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed text-pretty">
            Diseñamos y construimos la piscina de tus sueños con los más altos estándares de calidad. 
            Obra integral desde el movimiento de suelo hasta la entrega final.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-secondary/30 hover:scale-105 transition-all duration-300"
            >
              <Link href="#contacto" onClick={(e) => { e.preventDefault(); document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" }) }}>
                Solicitar Presupuesto Gratis
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-card/30 text-card hover:bg-card/10 hover:border-card/50 font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300"
            >
              <Link href="#proyectos" className="flex items-center gap-2" onClick={(e) => { e.preventDefault(); document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" }) }}>
                <Play className="w-5 h-5" />
                Ver Proyectos
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto mb-20">
            {[
              { number: "25+", label: "Años de experiencia" },
              { number: "500+", label: "Piscinas construidas" },
              { number: "100%", label: "Clientes satisfechos" },
              { number: "10", label: "Años de garantía" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center p-4 rounded-2xl bg-card/5 backdrop-blur-sm border border-card/10 transition-all duration-700 delay-${(index + 1) * 100} ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
              >
                <div className="font-serif text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-card/70 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => document.getElementById("nosotros")?.scrollIntoView({ behavior: "smooth" })}
            className="flex flex-col items-center gap-2 text-card/60 hover:text-card transition-colors"
          >
            <span className="text-xs tracking-widest uppercase">Descubrir más</span>
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
