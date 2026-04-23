"use client"

import { useEffect, useRef, useState } from "react"
import { Award, Users, Shield, Clock } from "lucide-react"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: Award,
      title: "Excelencia Garantizada",
      description: "Cada proyecto refleja nuestro compromiso con la calidad y los acabados de primer nivel.",
    },
    {
      icon: Users,
      title: "Equipo Especializado",
      description: "Profesionales con décadas de experiencia en construcción de piscinas de hormigón.",
    },
    {
      icon: Shield,
      title: "Garantía Extendida",
      description: "10 años de garantía en estructura de la pileta y 1 año en sistemas de iluminación y sistemas filtrantes.",
    },
    {
      icon: Clock,
      title: "Cumplimiento de Plazos",
      description: "Planificación rigurosa para entregar tu piscina en el tiempo acordado.",
    },
  ]

  return (
    <section
      id="nosotros"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-24 items-center">
          {/* Image Column */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/proyecto1/4.jpeg"
                  alt="Piscina de lujo con diseño moderno"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 bg-card rounded-2xl p-4 sm:p-6 shadow-xl border border-border max-w-[200px] sm:max-w-[240px]">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center">
                    <span className="font-serif text-2xl font-bold text-secondary">25+</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Años</p>
                    <p className="text-sm text-muted-foreground">de trayectoria</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative Shape */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
            </div>
          </div>

          {/* Content Column */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-12 h-px bg-secondary" />
              <span className="text-secondary font-semibold text-sm tracking-widest uppercase">
                Sobre Nosotros
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 text-balance">
              Construimos sueños en{" "}
              <span className="text-primary">hormigón y agua</span>
            </h2>

            {/* Description */}
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Somos una empresa familiar con más de 25 años de experiencia en Berazategui, 
              especializada en la construcción integral de piscinas de hormigón. Desde el 
              primer movimiento de tierra hasta la colocación de la última venecita, 
              nos encargamos de cada detalle para que disfrutes del verano en tu propia pileta.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-10">
              Nuestra trayectoria nos respalda: cientos de familias ya disfrutan de las 
              piscinas que construimos con pasión, dedicación y los más altos estándares 
              de calidad del mercado.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group p-5 rounded-2xl bg-muted/50 hover:bg-card hover:shadow-lg border border-transparent hover:border-border transition-all duration-300 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
