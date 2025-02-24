import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Portfolio } from "@/components/portfolio"
import { PortfolioStats } from "@/components/portfolio-stats"
import { PortfolioTestimonials } from "@/components/portfolio-testimonials"

export default function PortfolioPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="relative overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />

          {/* Animated shapes */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl opacity-20">
              <div className="aspect-square h-96 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 animate-blob" />
            </div>
            <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 blur-3xl opacity-20">
              <div className="aspect-square h-96 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 animate-blob animation-delay-2000" />
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <p className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">Nuestros Proyectos</p>
                <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">Transformando Ideas en Realidad</h1>
                <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl">
                  Explora nuestra colección de proyectos exitosos y descubre cómo ayudamos a empresas como la tuya a
                  alcanzar sus objetivos digitales.
                </p>
              </div>
            </div>
          </div>
        </div>
        <PortfolioStats />
        <Portfolio />
        <PortfolioTestimonials />
      </main>
      <SiteFooter />
    </div>
  )
}

