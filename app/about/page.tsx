import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { About } from "@/components/about"
import { AboutTimeline } from "@/components/about-timeline"

export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="relative overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />

          {/* Animated shapes */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl opacity-20">
              <div className="aspect-square h-96 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 animate-blob" />
            </div>
            <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 blur-3xl opacity-20">
              <div className="aspect-square h-96 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 animate-blob animation-delay-2000" />
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <p className="text-base font-semibold leading-7 text-purple-600 dark:text-purple-400">
                  Conoce Nuestra Historia
                </p>
                <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">Impulsando el Éxito Digital</h1>
                <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl">
                  En GretSoft, combinamos creatividad y tecnología para crear soluciones web que transforman negocios y
                  superan expectativas.
                </p>
              </div>
            </div>
          </div>
        </div>
        <About />
        <AboutTimeline />
      </main>
      <SiteFooter />
    </div>
  )
}

