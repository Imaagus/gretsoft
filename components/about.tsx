import { Users, Target, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const values = [
  {
    title: "Experiencia",
    description:
      "Más de 2 años desarrollando soluciones web innovadoras y efectivas para empresas de diversos sectores.",
    icon: Users,
  },
  {
    title: "Compromiso",
    description:
      "Nos comprometemos con cada proyecto para entregar resultados excepcionales que superen las expectativas.",
    icon: Target,
  },
  {
    title: "Innovación",
    description:
      "Utilizamos las últimas tecnologías y mejores prácticas para crear soluciones web modernas y escalables.",
    icon: Lightbulb,
  },
]

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Sobre Nosotros</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Transformando negocios a través de la tecnología
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
          En GretSoft, creemos que cada negocio merece una presencia digital única y poderosa. Nuestra misión es transformar ideas en soluciones web innovadoras, siempre priorizando la satisfacción del cliente.
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Nos diferenciamos por nuestra cercanía y compromiso: trabajamos de la mano con cada cliente, asegurándonos de que el resultado final sea exactamente lo que necesita. Para nosotros, un proyecto no está terminado hasta que el cliente está completamente satisfecho.
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Fundamos GretSoft con una visión clara: solucionar problemas y crear oportunidades a través de la tecnología. Nos apasiona desarrollar experiencias digitales que no solo funcionen, sino que también aporten valor real a quienes las utilizan.
          Miramos hacia el futuro con la convicción de que la innovación es clave. Por eso, estamos en constante evolución, explorando nuevas tecnologías y adaptándonos a las necesidades cambiantes del mundo digital.
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Si buscas un equipo que te escuche, te acompañe y haga realidad tu visión con precios accesibles y un servicio personalizado, GretSoft es para vos. 🚀
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <Card key={value.title} className="border-none shadow-none">
                <CardContent className="pt-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <value.icon className="h-6 w-6 text-primary-foreground" aria-hidden="true" />
                  </div>
                  <dt className="mt-4 text-lg font-semibold leading-7">{value.title}</dt>
                  <dd className="mt-2 leading-7 text-muted-foreground">{value.description}</dd>
                </CardContent>
              </Card>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

