import { LayoutTemplate, ShoppingCart, Globe, Smartphone, Search, BarChart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Landing Pages",
    description: "Páginas de aterrizaje optimizadas para convertir visitantes en clientes.",
    icon: LayoutTemplate,
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "E-commerce",
    description: "Tiendas online completas y personalizadas para vender tus productos.",
    icon: ShoppingCart,
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    title: "Sitios Web Corporativos",
    description: "Presencia web profesional para tu empresa con diseño personalizado.",
    icon: Globe,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Aplicaciones Web",
    description: "Desarrollo de aplicaciones web escalables y responsivas.",
    icon: Smartphone,
    gradient: "from-teal-500 to-emerald-500",
  },
  {
    title: "SEO",
    description: "Optimización para motores de búsqueda y mejora de visibilidad online.",
    icon: Search,
    gradient: "from-orange-500 to-amber-500",
  },
  {
    title: "Analytics",
    description: "Implementación de análisis y métricas para tomar mejores decisiones.",
    icon: BarChart,
    gradient: "from-red-500 to-pink-500",
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-purple-600 dark:text-purple-400">Nuestros Servicios</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Soluciones web completas para tu negocio</p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Ofrecemos una amplia gama de servicios web para ayudarte a establecer y hacer crecer tu presencia digital.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.title}
                className="relative overflow-hidden border-none bg-background/60 backdrop-blur-sm"
              >
                {/* Gradient border effect */}
                <div
                  className="absolute inset-0 rounded-lg bg-gradient-to-r opacity-10 transition-opacity hover:opacity-20 duration-300 ease-in-out"
                  style={{ backgroundImage: `linear-gradient(to right, ${service.gradient})` }}
                />
                <CardHeader>
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${service.gradient}`}
                  >
                    <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <CardTitle className="mt-4 text-lg font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

