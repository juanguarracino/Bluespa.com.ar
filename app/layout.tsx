import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'BlueSpa Natatorios | Construcción de Piscinas de Hormigón en Berazategui y GBA',
  description: 'BlueSpa Natatorios — Más de 25 años construyendo piscinas de hormigón en Berazategui y GBA Sur. Obra integral desde el movimiento de suelo hasta la última venecita. Presupuesto sin cargo.',
  keywords: [
    'piscinas de hormigón Berazategui',
    'construcción de piletas GBA',
    'piletas de material Hudson',
    'piscinas hormigón zona sur',
    'construcción piscinas Quilmes',
    'piletas Florencio Varela',
    'piscinas de hormigón Buenos Aires',
    'constructora de piletas',
    'bluespa natatorios',
    'presupuesto piscina hormigón',
    'piletas con hidromasaje',
    'venecitas piscinas',
  ],
  authors: [{ name: 'BlueSpa Natatorios' }],
  creator: 'BlueSpa Natatorios',
  publisher: 'BlueSpa Natatorios',
  category: 'Construcción de piscinas',
  metadataBase: new URL('https://bluespa.com.ar'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://bluespa.com.ar',
    siteName: 'BlueSpa Natatorios',
    title: 'BlueSpa Natatorios | Piscinas de Hormigón en Berazategui y GBA',
    description: 'Más de 25 años construyendo piscinas de hormigón en el GBA. Obra integral, hidromasaje, venecitas y terminaciones premium. Pedí tu presupuesto sin cargo.',
    images: [
      {
        url: '/images/proyecto1/1.jpeg',
        width: 1200,
        height: 630,
        alt: 'Piscina de hormigón construida por BlueSpa Natatorios en Hudson',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BlueSpa Natatorios | Piscinas de Hormigón en Berazategui y GBA',
    description: 'Más de 25 años construyendo piscinas de hormigón en el GBA. Presupuesto sin cargo.',
    images: ['/images/proyecto1/1.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1e5a7e',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'BlueSpa Natatorios',
  description: 'Empresa especializada en construcción de piscinas de hormigón en Berazategui y GBA Sur. Más de 25 años de experiencia.',
  url: 'https://bluespa.com.ar',
  telephone: '+5491163782095',
  email: 'info@bluespanatatorios.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Berazategui',
    addressRegion: 'Buenos Aires',
    addressCountry: 'AR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -34.7639,
    longitude: -58.2106,
  },
  sameAs: [
    'https://www.facebook.com/bluespa.bluespa.natatorios/',
    'https://www.instagram.com/piscinasbluespanatatorios/',
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '18:00',
  },
  image: 'https://bluespa.com.ar/images/proyecto1/1.jpeg',
  priceRange: '$$',
  areaServed: [
    'Berazategui', 'Hudson', 'Quilmes', 'Florencio Varela', 'La Plata', 'GBA Sur'
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
