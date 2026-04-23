import Link from "next/link"
import { Phone, Mail, MapPin, Instagram, Facebook, ArrowUp } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#servicios", label: "Servicios" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#proceso", label: "Proceso" },
    { href: "#contacto", label: "Contacto" },
  ]

  return (
    <footer className="bg-foreground text-background relative">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 flex items-center justify-center">
                <img
                  src="/images/logo-bluespa.png"
                  alt="BlueSpa Natatorios"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-background block leading-tight">BLUESPA</span>
                <span className="text-xs tracking-[0.2em] text-background/60">NATATORIOS</span>
              </div>
            </Link>
            <p className="text-background/70 leading-relaxed mb-6 max-w-xs">
              Más de 25 años construyendo sueños en Berazategui. Especialistas en piscinas de hormigón de alta calidad.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/bluespa.bluespa.natatorios/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-blue-600/20 transition-colors group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-background/70 group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/piscinasbluespanatatorios/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-pink-500/20 transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-background/70 group-hover:text-pink-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-6">Enlaces rápidos</h4>
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-background/70 hover:text-secondary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-background mb-6">Servicios</h4>
            <ul className="space-y-3 text-background/70">
              <li>Construcción de piscinas</li>
              <li>Movimiento de suelo</li>
              <li>Estructura y hormigón</li>
              <li>Sistema hidráulico</li>
              <li>Revestimiento y venecitas</li>
              <li>Terminaciones premium</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-background mb-6">Contacto</h4>
            <div className="space-y-4">
              <a
                href="tel:+5491163782095"
                className="flex items-center gap-3 text-background/70 hover:text-secondary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>11 6378-2095</span>
              </a>
              <a
                href="mailto:consultas@bluespa.com.ar"
                className="flex items-center gap-3 text-background/70 hover:text-secondary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>consultas@bluespa.com.ar</span>
              </a>
              <div className="flex items-start gap-3 text-background/70">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Berazategui, Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/50 text-sm text-center md:text-left">
              © {currentYear} BlueSpa Natatorios. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6 text-sm text-background/50">
              <span>Diseñado by JG.Cellstore</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <Link
        href="#inicio"
        className="fixed bottom-8 right-8 w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-40"
        aria-label="Volver arriba"
      >
        <ArrowUp className="w-5 h-5" />
      </Link>
    </footer>
  )
}
