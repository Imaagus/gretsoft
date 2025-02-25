import { HeartHandshake, MessageCircle, Wrench, RefreshCw, Shield, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Servicio Pre y Post Venta",
    description:
      "Asesoramiento completo antes de tu proyecto y soporte continuo después del lanzamiento para garantizar tu éxito.",
    icon: HeartHandshake,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Asesoramiento Personalizado",
    description:
      "Te guiamos en cada paso del proceso, ayudándote a tomar las mejores decisiones para tu proyecto digital.",
    icon: MessageCircle,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Mantenimiento Continuo",
    description:
      "Servicio de mantenimiento regular para mantener tu sitio actualizado, seguro y funcionando de manera óptima.",
    icon: Wrench,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Actualizaciones Periódicas",
    description:
      "Mantén tu sitio al día con las últimas tecnologías y tendencias mediante actualizaciones programadas.",
    icon: RefreshCw,
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Seguridad Garantizada",
    description: "Implementación de medidas de seguridad robustas y monitoreo constante para proteger tu inversión.",
    icon: Shield,
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    title: "Soporte 24/7",
    description: "Asistencia técnica disponible en todo momento para resolver cualquier incidencia que pueda surgir.",
    icon: Clock,
    gradient: "from-pink-500 to-rose-500",
  },
]

export function SupportServices() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1800px] px-4 lg:px-6">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-purple-600 dark:text-purple-400">
            Servicios de Soporte
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Comprometidos con tu Éxito</p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Ofrecemos un servicio integral que va más allá del desarrollo. Nos aseguramos de que tu proyecto digital sea
            un éxito continuo.
          </p>
        </div>

        <div className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="relative overflow-hidden border-none bg-background/60 backdrop-blur-sm transition-transform hover:scale-105"
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
                <CardTitle className="mt-4 text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

