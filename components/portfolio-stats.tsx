import { Card, CardContent } from "@/components/ui/card"
import { Code2, Users, Star, Award } from "lucide-react"

const stats = [
  { name: "Soluciones a Medida", value: "100%", icon: Code2 },
  { name: "Cercanía con el Cliente", value: "Siempre", icon: Users },
  { name: "Proyectos en Crecimiento", value: "Cada Día", icon: Star },
  { name: "Visión a Futuro", value: "Innovación Constante", icon: Award },
]


export function PortfolioStats() {
  return (
    <div className="relative pt-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.name} className="relative overflow-hidden border-none bg-background/60 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="absolute top-4 right-4 text-purple-500 dark:text-purple-400">
                  <stat.icon className="h-6 w-6" />
                </div>
                <dt className="text-sm font-medium text-muted-foreground truncate">{stat.name}</dt>
                <dd className="mt-2 text-3xl font-semibold tracking-tight">{stat.value}</dd>
              </CardContent>
            </Card>
          ))}
        </dl>
      </div>
    </div>
  )
}

