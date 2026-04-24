"use client"

import { useEffect, useRef, useState } from "react"
import { z } from "zod"
import { Turnstile } from "@marsidev/react-turnstile"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Instagram, Facebook } from "lucide-react"

const contactSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres").max(100).trim(),
  telefono: z.string().regex(/^[0-9\s\-+()]*$/, "Teléfono inválido").max(20),
  email: z.string().email("Email inválido").max(100),
  tipoProyecto: z.string().max(100),
  mensaje: z.string().max(1000, "El mensaje no puede superar los 1000 caracteres").trim(),
})

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [formState, setFormState] = useState({
    nombre: "",
    telefono: "",
    email: "",
    mensaje: "",
    tipoProyecto: "",
  })
  const [honeypot, setHoneypot] = useState("")
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormErrors({})

    // Honeypot check
    if (honeypot) return

    // Turnstile check
    if (!turnstileToken) {
      setFormErrors({ captcha: "Por favor completá la verificación." })
      return
    }

    const result = contactSchema.safeParse(formState)
    if (!result.success) {
      const errors: Record<string, string> = {}
      result.error.errors.forEach((err) => {
        if (err.path[0]) errors[err.path[0] as string] = err.message
      })
      setFormErrors(errors)
      return
    }

    const d = result.data
    const message = [
      "¡Hola! Me contacto desde la web.",
      "",
      `*Nombre:* ${d.nombre}`,
      `*Teléfono:* ${d.telefono}`,
      `*Email:* ${d.email}`,
      `*Tipo de proyecto:* ${d.tipoProyecto}`,
      `*Mensaje:* ${d.mensaje}`,
    ].join("\n")

    const whatsappUrl = `https://wa.me/5491163782095?text=${encodeURIComponent(message)}`
    const whatsappWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer")

    if (whatsappWindow) {
      whatsappWindow.opener = null
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      label: "Teléfono",
      value: "11 6378-2095",
      href: "tel:+5491163782095",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "11 6378-2095",
      href: "https://wa.me/5491163782095",
    },
    {
      icon: Mail,
      label: "Email",
      value: "consultas@bluespa.com.ar",
      href: "mailto:consultas@bluespa.com.ar",
    },
    {
      icon: MapPin,
      label: "Zona de cobertura",
      value: "Berazategui y alrededores",
      href: "#",
    },
  ]

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-primary relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
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
            <span className="w-12 h-px bg-white" />
            <span className="text-white font-semibold text-sm tracking-widest uppercase">
              Contacto
            </span>
            <span className="w-12 h-px bg-white" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-6 text-balance">
            Empezá a construir tu sueño hoy
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed">
            Contactanos para una visita sin cargo. Te asesoramos y presupuestamos 
            tu proyecto sin compromiso.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-8">
              Información de contacto
            </h3>

            <div className="space-y-6 mb-10">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-5 group"
                >
                  <div className="w-14 h-14 bg-primary-foreground/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-primary-foreground/60 text-sm mb-0.5">{item.label}</p>
                    <p className="text-primary-foreground font-semibold group-hover:text-secondary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Schedule */}
            <div className="bg-primary-foreground/5 rounded-2xl p-6 border border-primary-foreground/10">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-white" />
                <h4 className="font-semibold text-primary-foreground">Horario de atención</h4>
              </div>
              <div className="space-y-2 text-primary-foreground/80">
                <p className="flex justify-between">
                  <span>Lunes a Viernes</span>
                  <span className="font-medium">8:00 - 18:00</span>
                </p>
                <p className="flex justify-between">
                  <span>Sábados</span>
                  <span className="font-medium">9:00 - 13:00</span>
                </p>
                <p className="flex justify-between">
                  <span>Domingos</span>
                  <span className="font-medium text-white">Cerrado</span>
                </p>
              </div>
            </div>

            {/* Social */}
            <div className="mt-8">
              <p className="text-primary-foreground/60 text-sm mb-4">Seguinos en redes</p>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/bluespa.bluespa.natatorios/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-blue-600/20 transition-colors group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-primary-foreground group-hover:text-blue-400 transition-colors" />
                </a>
                <a
                  href="https://www.instagram.com/piscinasbluespanatatorios/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-pink-500/20 transition-colors group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-primary-foreground group-hover:text-pink-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-3xl p-5 sm:p-8 lg:p-10 shadow-2xl"
            >
              <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                Solicitá tu presupuesto
              </h3>
              <p className="text-muted-foreground mb-8">
                Completá el formulario y te contactamos a la brevedad.
              </p>

              <div className="space-y-5">
                {/* Nombre */}
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    required
                    value={formState.nombre}
                    onChange={(e) => setFormState({ ...formState, nombre: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all ${formErrors.nombre ? "border-red-500" : "border-input"}`}
                    placeholder="Tu nombre"
                  />
                  {formErrors.nombre && <p className="text-red-500 text-xs mt-1">{formErrors.nombre}</p>}
                </div>

                {/* Teléfono y Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      required
                      value={formState.telefono}
                      onChange={(e) => setFormState({ ...formState, telefono: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all ${formErrors.telefono ? "border-red-500" : "border-input"}`}
                      placeholder="11 6378-2095"
                    />
                    {formErrors.telefono && <p className="text-red-500 text-xs mt-1">{formErrors.telefono}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all ${formErrors.email ? "border-red-500" : "border-input"}`}
                      placeholder="tu@email.com"
                    />
                    {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
                  </div>
                </div>

                {/* Tipo de Proyecto */}
                <div>
                  <label htmlFor="tipoProyecto" className="block text-sm font-medium text-foreground mb-2">
                    Tipo de proyecto
                  </label>
                  <select
                    id="tipoProyecto"
                    value={formState.tipoProyecto}
                    onChange={(e) => setFormState({ ...formState, tipoProyecto: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  >
                    <option value="">Seleccioná una opción</option>
                    <option value="Piscina nueva">Piscina nueva</option>
                    <option value="Refacción">Refacción de piscina existente</option>
                    <option value="Mantenimiento">Mantenimiento</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    rows={4}
                    value={formState.mensaje}
                    onChange={(e) => setFormState({ ...formState, mensaje: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                    placeholder="Contanos sobre tu proyecto, dimensiones aproximadas, ubicación..."
                  />
                </div>

                {/* Honeypot — invisible para humanos */}
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Turnstile CAPTCHA */}
                <div>
                  <Turnstile
                    siteKey="0x4AAAAAADB5x3e3I2PSLv9-"
                    onSuccess={(token) => setTurnstileToken(token)}
                    onExpire={() => setTurnstileToken(null)}
                    onError={() => setTurnstileToken(null)}
                    options={{ language: "es" }}
                  />
                  {formErrors.captcha && <p className="text-red-500 text-xs mt-1">{formErrors.captcha}</p>}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Enviar por WhatsApp
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Al enviar, serás redirigido a WhatsApp para completar tu consulta.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
