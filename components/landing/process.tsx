"use client"

import { useEffect, useRef, useState } from "react"
import { MessageSquare, Ruler, HardHat, Waves, Check } from "lucide-react"

export function Process() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Consulta Inicial",
      description: "Nos contactás y coordinamos una visita sin cargo a tu domicilio para conocer el espacio y escuchar tus ideas.",
      duration: "1-2 días",
    },
    {
      number: "02",
      icon: Ruler,
      title: "Diseño y Presupuesto",
      description: "Elaboramos un diseño personalizado y un presupuesto detallado con todas las especificaciones técnicas.",
      duration: "3-5 días",
    },
    {
      number: "03",
      icon: HardHat,
      title: "Construcción",
      description: "Nuestro equipo ejecuta la obra completa: excavación, estructura, hormigón, instalaciones y revestimientos.",
      duration: "45-60 días",
    },
    {
      number: "04",
      icon: Waves,
      title: "Llenado y Pruebas",
      description: "Realizamos el llenado, la puesta en marcha del sistema de filtrado y todas las pruebas de funcionamiento.",
      duration: "2-3 días",
    },
    {
      number: "05",
      icon: Check,
      title: "Entrega Final",
      description: "Te entregamos tu piscina lista para usar, con manual de mantenimiento y garantía por escrito.",
      duration: "1 día",
    },
  ]

  return (
    <section
      id="proceso"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-muted relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 lg:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-12 h-px bg-secondary" />
            <span className="text-secondary font-semibold text-sm tracking-widest uppercase">
              Cómo Trabajamos
            </span>
            <span className="w-12 h-px bg-secondary" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 text-balance">
            Tu piscina en 5 simples pasos
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Un proceso transparente y organizado para que estés informado 
            en cada etapa de la construcción de tu piscina.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                {/* Step Card */}
                <div className="bg-card rounded-3xl p-6 lg:p-8 shadow-lg border border-border hover:shadow-xl hover:border-primary/20 transition-all duration-300 h-full">
                  {/* Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-4xl font-bold text-primary/20">
                      {step.number}
                    </span>
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-semibold text-lg text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Duration Badge */}
                  <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1.5 rounded-full text-xs font-semibold">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    {step.duration}
                  </div>
                </div>

                {/* Connector Dot - Desktop */}
                <div className="hidden lg:flex absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-card border-4 border-primary rounded-full items-center justify-center shadow-lg">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
