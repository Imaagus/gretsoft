"use client"

import { motion } from "framer-motion"
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
    <section className="py-24 sm:py-32 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-purple-600 dark:text-purple-400">Testimonios</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            Lo Que Dicen Nuestros Clientes
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Descubre por qué las empresas confían en nosotros para sus proyectos digitales más ambiciosos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="relative bg-background/60 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group">
                <CardContent className="relative p-6">
                  <Quote className="absolute top-6 right-6 h-8 w-8 text-primary opacity-20 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-center gap-x-4">
                    <Image
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/20 group-hover:ring-primary transition-all duration-300"
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                    />
                    <div>
                      <div className="font-semibold group-hover:text-primary transition-colors duration-300">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </div>
                  <p className="mt-6 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {testimonial.content}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

