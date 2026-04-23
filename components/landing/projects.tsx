"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeProject, setActiveProject] = useState(0)
  const [activeImage, setActiveImage] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  const projects = [
    {
      title: "Club de campo Abril Barrio Los Cisnes Lote 1",
      location: "Hudson",
      dimensions: "8m x 4m",
      style: "Minimalista",
      images: [
        "/images/proyecto1/0.png",
        "/images/proyecto1/1.jpeg",
        "/images/proyecto1/2.jpeg",
        "/images/proyecto1/3.jpeg",
        "/images/proyecto1/4.jpeg",
        "/images/proyecto1/5.jpeg",
        "/images/proyecto1/6.jpeg",
        "/images/proyecto1/7.jpeg",
      ],
      description: "Piscina de diseño contemporáneo con bordes infinitos y sistema de hidromasaje integrado.",
    },
    {
      title: "Club de campo Abril Barrio Los Búhos Lote 1",
      location: "Hudson",
      dimensions: "10m x 5m",
      style: "Remodelación",
      images: [
        "/images/proyecto2/1.jpeg",
        "/images/proyecto2/2.jpeg",
        "/images/proyecto2/3.jpeg",
        "/images/proyecto2/4.jpeg",
        "/images/proyecto2/5.jpeg",
        "/images/proyecto2/6.jpeg",
        "/images/proyecto2/7.jpeg",
      ],
      description: "Remodelación integral de una pileta abandonada. Recuperación completa desde cero, renovando estructura, revestimiento y sistema hidráulico.",
    },
    {
      title: "Barrio privado Las Golondrinas Lote 217",
      location: "Guillermo Enrique Hudson",
      dimensions: "12m x 6m",
      style: "Premium con Hidromasaje",
      images: [
        "/images/proyecto3/2.jpeg",
        "/images/proyecto3/3.jpeg",
        "/images/proyecto3/4.jpeg",
        "/images/proyecto3/5.jpeg",
        "/images/proyecto3/6.jpeg",
        "/images/proyecto3/7.jpeg",
        "/images/proyecto3/8.jpeg",
      ],
      description: "Pileta de gran porte con hidromasaje integrado y banquetas acuáticas perimetrales. Un espacio diseñado para el relax total, donde la familia puede disfrutar del agua en todos sus rincones.",
    },
    {
      title: "Club de campo Miralagos Lote 222",
      location: "Ruta 2 Km 65",
      dimensions: "10m x 5m",
      style: "Clásico Premium",
      images: [
        "/images/proyecto4/1.jpeg",
        "/images/proyecto4/2.jpeg",
        "/images/proyecto4/3.jpeg",
        "/images/proyecto4/4.jpeg",
        "/images/proyecto4/5.jpeg",
        "/images/proyecto4/6.jpeg",
        "/images/proyecto4/7.jpeg",
      ],
      description: "Una pileta de hormigón a pura elegancia, rodeada de un entorno natural privilegiado. Terminaciones de primer nivel con revestimiento venecita y solado perimetral que invitan al descanso y al disfrute en cada rincón.",
    },
  ]

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

  // Reset image index when changing project
  useEffect(() => {
    setActiveImage(0)
  }, [activeProject])

  // Precargar todas las imágenes del proyecto activo
  useEffect(() => {
    const images = projects[activeProject].images
    images.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [activeProject])


  const handlePrevImage = () => {
    const images = projects[activeProject].images
    setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNextImage = () => {
    const images = projects[activeProject].images
    setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <section
      id="proyectos"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 lg:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-12 h-px bg-secondary" />
            <span className="text-secondary font-semibold text-sm tracking-widest uppercase">
              Portfolio
            </span>
            <span className="w-12 h-px bg-secondary" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 text-balance">
            Proyectos que hablan por nosotros
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Cada piscina es única, diseñada especialmente para adaptarse al espacio 
            y estilo de vida de nuestros clientes.
          </p>
        </div>

        {/* Projects Display */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Main Image with Carousel */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Contenedor principal relativo para overlay externo */}
            <div className="relative rounded-3xl shadow-2xl aspect-[4/3]">

              {/* Contenedor de imágenes con overflow-hidden separado */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                {projects[activeProject].images.map((src, idx) => (
                  <img
                    key={`${activeProject}-${idx}`}
                    src={src}
                    alt={`${projects[activeProject].title} - Imagen ${idx + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${idx === activeImage ? "opacity-100" : "opacity-0"}`}
                    style={{ zIndex: idx === activeImage ? 1 : 0 }}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" style={{ zIndex: 2 }} />
              </div>

              {/* Overlay texto — fuera del overflow-hidden */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-4 sm:p-8 transition-all duration-500`}
                style={{ zIndex: 10, opacity: activeImage === 0 ? 1 : 0, pointerEvents: activeImage === 0 ? "auto" : "none" }}
              >
                <div className="flex items-center gap-2 text-white/80 mb-1 sm:mb-2">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm font-medium">{projects[activeProject].location}</span>
                </div>
                <h3 className="font-serif text-lg sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2 line-clamp-2">
                  {projects[activeProject].title}
                </h3>
                <p className="text-white/80 text-xs sm:text-sm lg:text-base leading-relaxed max-w-md hidden sm:block">
                  {projects[activeProject].description}
                </p>
                <div className="flex gap-6 mt-4 pt-4 border-t border-white/20">
                  <div>
                    <span className="text-white/60 text-xs uppercase tracking-wider">Dimensiones</span>
                    <p className="text-white font-semibold">{projects[activeProject].dimensions}</p>
                  </div>
                  <div>
                    <span className="text-white/60 text-xs uppercase tracking-wider">Estilo</span>
                    <p className="text-white font-semibold">{projects[activeProject].style}</p>
                  </div>
                </div>
              </div>

              {/* Flechas de navegación */}
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-all duration-300 hover:scale-110"
                style={{ zIndex: 10 }}
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-all duration-300 hover:scale-110"
                style={{ zIndex: 10 }}
                aria-label="Siguiente imagen"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Contador */}
              <div className="absolute top-4 right-4 bg-black/50 text-white text-xs font-medium px-3 py-1.5 rounded-full" style={{ zIndex: 10 }}>
                {activeImage + 1} / {projects[activeProject].images.length}
              </div>

              {/* Image Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2" style={{ zIndex: 10 }}>
                {projects[activeProject].images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeImage === idx
                        ? "bg-card w-6"
                        : "bg-card/50 hover:bg-card/80"
                    }`}
                    aria-label={`Ver imagen ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Project Thumbnails */}
          <div
            className={`space-y-4 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`w-full flex items-center gap-3 p-3 rounded-2xl text-left transition-all duration-300 group ${
                  activeProject === index
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted/50 hover:bg-muted text-foreground"
                }`}
              >
                {/* Thumbnail */}
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className={`flex items-center gap-1 text-xs sm:text-sm mb-1 ${
                    activeProject === index ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}>
                    <MapPin className="w-3 h-3 flex-shrink-0" />
                    <span className="truncate">{project.location}</span>
                  </div>
                  <h4 className="font-semibold text-sm sm:text-base leading-tight line-clamp-2">{project.title}</h4>
                  <p className={`text-xs sm:text-sm mt-1 ${
                    activeProject === index ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}>
                    {project.dimensions} · {project.style}
                  </p>
                </div>

                {/* Arrow */}
                <ArrowUpRight className={`w-4 h-4 flex-shrink-0 hidden sm:block transition-all duration-300 ${
                  activeProject === index
                    ? "text-secondary rotate-0"
                    : "text-muted-foreground -rotate-45 opacity-0 group-hover:opacity-100 group-hover:rotate-0"
                }`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
