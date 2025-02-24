"use client"

import * as React from "react"
import Image from "next/image"
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
    <section id="portfolio" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Portfolio</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Nuestros Proyectos</p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Explora algunos de nuestros trabajos más destacados y descubre cómo podemos ayudarte a alcanzar tus
            objetivos.
          </p>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden transition-all hover:scale-105">
              <CardContent className="p-0">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2 text-muted-foreground">{project.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

