"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Quote } from "lucide-react"

export function Testimonials() {
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

  const testimonials = [
    {
      name: "María González",
      location: "Berazategui Centro",
      text: "Increíble el trabajo que hicieron. Desde el primer día hasta la entrega, todo fue impecable. La piscina quedó espectacular y el trato siempre fue de primera. 100% recomendables.",
      rating: 5,
      project: "Piscina 8x4m con hidromasaje",
    },
    {
      name: "Carlos Rodríguez",
      location: "Ranelagh",
      text: "Llevaba años queriendo hacer la pileta y no me decidía. Cuando conocí a estos profesionales, no dudé más. Cumplieron con los tiempos y el resultado superó todas mis expectativas.",
      rating: 5,
      project: "Piscina 10x5m con cascada",
    },
    {
      name: "Laura Martínez",
      location: "Hudson",
      text: "La mejor inversión que hicimos para nuestra casa. El equipo es súper profesional, te asesoran en todo y se nota que aman lo que hacen. Mi familia está feliz con la pileta.",
      rating: 5,
      project: "Piscina familiar 12x6m",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
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
              Testimonios
            </span>
            <span className="w-12 h-px bg-secondary" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 text-balance">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            La satisfacción de nuestros clientes es nuestro mejor reconocimiento. 
            Conocé sus experiencias trabajando con nosotros.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-3xl p-8 shadow-lg border border-border hover:shadow-xl hover:border-primary/20 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 right-8">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-5 h-5 text-secondary-foreground" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-secondary text-secondary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-6 text-pretty">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Project */}
              <div className="text-sm text-muted-foreground mb-6 pb-6 border-b border-border">
                Proyecto: <span className="text-primary font-medium">{testimonial.project}</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="font-serif text-lg font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div
          className={`mt-16 lg:mt-20 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-primary/5 rounded-3xl p-8 lg:p-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { value: "500+", label: "Piscinas construidas" },
                { value: "98%", label: "Clientes satisfechos" },
                { value: "25+", label: "Años de experiencia" },
                { value: "5★", label: "Valoración promedio" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
