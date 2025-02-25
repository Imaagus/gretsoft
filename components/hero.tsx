import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <div id="home" className="relative isolate min-h-screen">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#808080] to-[#404040] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <h1 className="max-w-lg text-4xl font-bold tracking-tight sm:text-6xl">
            Transformamos ideas en experiencias digitales
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Desarrollamos soluciones web profesionales y personalizadas para hacer crecer tu negocio. Desde landing
            pages hasta e-commerce, creamos experiencias digitales que destacan.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button asChild size="lg">
              <Link href="#contact">
                Comienza tu proyecto
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <Link href="/portfolio">Ver nuestro trabajo</Link>
            </Button>
          </div>
        </div>
        <div className="mt-16 mx-auto sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow ">
          <Image
            src="/banner (1).jpg"
            alt="Dashboard preview"
            width={600}
            height={600}
            className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl sm:w-[28.875rem] rounded-sm"
          />
        </div>
      </div>
    </div>
  )
}

