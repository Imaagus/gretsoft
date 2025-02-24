import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    content:
      "GretSoft transformó nuestra visión en una realidad digital excepcional. Su atención al detalle y profesionalismo son incomparables.",
    author: "Director de Marketing",
    company: "Empresa de Tecnología",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    content:
      "El equipo de GretSoft superó todas nuestras expectativas. Nuestro e-commerce ha visto un crecimiento significativo desde su implementación.",
    author: "CEO",
    company: "Tienda Online",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    content:
      "Trabajar con GretSoft fue una experiencia excepcional. Su enfoque en UX/UI resultó en una plataforma que nuestros usuarios adoran.",
    author: "Product Manager",
    company: "Startup Digital",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export function PortfolioTestimonials() {
  return (
    <section className="py-24 sm:py-32 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-purple-600 dark:text-purple-400">Testimonios</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Lo Que Dicen Nuestros Clientes</p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Descubre por qué las empresas confían en nosotros para sus proyectos digitales.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative bg-background/60 backdrop-blur-sm">
              <CardContent className="relative p-6">
                <Quote className="absolute top-6 right-6 h-8 w-8 text-muted-foreground/20" />
                <div className="flex items-center gap-x-4">
                  <Image
                    className="h-12 w-12 rounded-full object-cover"
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                  />
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
                <p className="mt-6 text-muted-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

