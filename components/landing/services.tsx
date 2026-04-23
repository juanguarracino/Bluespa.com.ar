"use client"

import { useEffect, useRef, useState } from "react"
import { Shovel, Building2, Droplets, Grid3X3, Wrench, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"

export function Services() {
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

  const services = [
    {
      icon: Shovel,
      title: "Movimiento de Suelo",
      description: "Excavación profesional con maquinaria especializada. Preparamos el terreno con precisión milimétrica para garantizar la estabilidad de tu piscina.",
      features: ["Excavación precisa", "Nivelación del terreno", "Retiro de escombros"],
    },
    {
      icon: Building2,
      title: "Estructura y Hormigón",
      description: "Construcción de la estructura con hormigón de alta resistencia y armadura de acero. La base sólida para una piscina que dure generaciones.",
      features: ["Hormigón H-25", "Armadura de acero", "Impermeabilización"],
    },
    {
      icon: Droplets,
      title: "Sistema Hidráulico",
      description: "Instalación completa del sistema de filtrado, bombeo y recirculación del agua. Equipos de primeras marcas con garantía.",
      features: ["Filtros premium", "Bombas eficientes", "Skimmers y retornos"],
    },
    {
      icon: Grid3X3,
      title: "Revestimiento y Venecitas",
      description: "Colocación artesanal de venecitas importadas o nacionales. Diseños personalizados que transforman tu piscina en una obra de arte.",
      features: ["Venecitas premium", "Diseños exclusivos", "Acabado perfecto"],
    },
    {
      icon: Wrench,
      title: "Instalaciones Complementarias",
      description: "Iluminación LED subacuática, escaleras de acero inoxidable, cascadas y jets de hidromasaje para una experiencia completa.",
      features: ["Iluminación LED", "Escaleras de acero", "Hidromasaje"],
    },
    {
      icon: Sparkles,
      title: "Terminaciones y Entrega",
      description: "Solados perimetrales, deck de madera o cemento alisado. Entregamos tu piscina lista para disfrutar, con agua cristalina.",
      features: ["Solados premium", "Deck opcional", "Puesta en marcha"],
    },
  ]

  return (
    <section
      id="servicios"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-primary relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

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
              Nuestros Servicios
            </span>
            <span className="w-12 h-px bg-secondary" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-6 text-balance">
            Obra integral de principio a fin
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed">
            Nos encargamos de todo el proceso constructivo para que vos solo te 
            preocupes por elegir el diseño de tu piscina ideal.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-card/10 backdrop-blur-sm border border-primary-foreground/10 rounded-3xl p-5 sm:p-8 hover:bg-card/20 hover:border-primary-foreground/20 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary/30 group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-8 h-8 text-secondary" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-bold text-primary-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-primary-foreground/60">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Link
            href="#contacto"
            className="inline-flex items-center gap-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 py-4 rounded-full shadow-2xl hover:shadow-secondary/30 transition-all duration-300 group"
          >
            <span>Consultá por tu proyecto</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
