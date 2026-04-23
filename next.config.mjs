/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Evita que el sitio sea embebido en iframes (clickjacking)
          { key: "X-Frame-Options", value: "DENY" },
          // Evita que el browser adivine el tipo de contenido
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Controla qué info se manda en el Referer
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Desactiva features del browser que no se usan
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
          // Fuerza HTTPS (activo cuando el sitio esté en producción con SSL)
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          // Protección XSS básica para browsers viejos
          { key: "X-XSS-Protection", value: "1; mode=block" },
          // Protección contra XS-Leaks y ataques cross-origin
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Cross-Origin-Embedder-Policy", value: "require-corp" },
          { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
          // Content Security Policy
          ...(process.env.NODE_ENV === "production"
            ? [
                {
                  key: "Content-Security-Policy",
                  value: [
                    "default-src 'self'",
                    "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com https://challenges.cloudflare.com",
                    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
                    "font-src 'self' https://fonts.gstatic.com",
                    "img-src 'self' data: https: blob:",
                    "connect-src 'self' https://vitals.vercel-insights.com https://va.vercel-scripts.com https://challenges.cloudflare.com",
                    "media-src 'self'",
                    "object-src 'none'",
                    "base-uri 'self'",
                    "form-action 'self' https://wa.me",
                    "frame-src https://challenges.cloudflare.com",
                    "frame-ancestors 'none'",
                    "upgrade-insecure-requests",
                  ].join("; "),
                },
              ]
            : []),
        ],
      },
    ]
  },
}

export default nextConfig
