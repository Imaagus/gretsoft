import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

const team = [
  {
    name: "Fundador",
    role: "Desarrollo Full Stack",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "#",
      github: "#",
    },
  }
]

export function AboutTeam() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-purple-600 dark:text-purple-400">Nuestro Equipo</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Expertos Apasionados por la Tecnología</p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Conoce al equipo detrás de GretSoft. Profesionales dedicados a crear soluciones web excepcionales.
          </p>
        </div>

        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          {team.map((person) => (
            <Card key={person.name} className="relative group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    className="aspect-[4/5] w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    src={person.image || "/placeholder.svg"}
                    alt={person.name}
                    width={400}
                    height={500}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex justify-center space-x-4">
                      <Link href={person.social.linkedin} className="text-white hover:text-purple-400">
                        <span className="sr-only">LinkedIn</span>
                        <Linkedin className="h-6 w-6" />
                      </Link>
                      <Link href={person.social.github} className="text-white hover:text-purple-400">
                        <span className="sr-only">GitHub</span>
                        <Github className="h-6 w-6" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold">{person.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{person.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </ul>
      </div>
    </section>
  )
}

