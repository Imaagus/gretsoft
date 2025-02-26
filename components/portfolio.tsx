"use client"

import * as React from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"


const projects = [
  {
    title: "E-commerce de Moda",
    description: "Tienda online completa con catálogo, carrito y pasarela de pago",
    image: "/placeholder.svg?height=400&width=600",
    category: "e-commerce",
  },
  {
    title: "Landing Page Inmobiliaria",
    description: "Página de aterrizaje para promoción de desarrollos inmobiliarios",
    image: "/placeholder.svg?height=400&width=600",
    category: "landing",
  },
  {
    title: "Web Corporativa Tecnológica",
    description: "Sitio web institucional para empresa de tecnología",
    image: "/placeholder.svg?height=400&width=600",
    category: "corporate",
  },
  {
    title: "App de Gestión",
    description: "Aplicación web para gestión de recursos empresariales",
    image: "/placeholder.svg?height=400&width=600",
    category: "app",
  },
  {
    title: "Landing Page SaaS",
    description: "Página de aterrizaje para producto SaaS",
    image: "/placeholder.svg?height=400&width=600",
    category: "landing",
  },
  {
    title: "E-commerce de Electrónica",
    description: "Tienda online de productos electrónicos",
    image: "/placeholder.svg?height=400&width=600",
    category: "e-commerce",
  },
]

const categories = [
  { id: "all", label: "Todos" },
  { id: "e-commerce", label: "E-commerce" },
  { id: "landing", label: "Landing Pages" },
  { id: "corporate", label: "Sitios Corporativos" },
  { id: "app", label: "Aplicaciones" },
]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = React.useState("all")

  const filteredProjects = projects.filter((project) => activeCategory === "all" || project.category === activeCategory)

  return (
    <section id="portfolio" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-primary">Portfolio</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            Nuestros Proyectos Destacados
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Explora nuestra galería de innovaciones digitales y descubre cómo transformamos visiones en realidades
            impactantes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="mb-2"
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group relative flex flex-col overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                        <Button
                          variant="secondary"
                          className="transform translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                        >
                          Ver Proyecto
                        </Button>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-muted-foreground">{project.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

