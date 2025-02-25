"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { Toaster } from "@/components/ui/toaster"
import { Mail, Phone, MapPin } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

export function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    // Simular envío del formulario
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    })

    setIsSubmitting(false)
    ;(event.target as HTMLFormElement).reset()
  }

  return (
    <section id="contact" className="relative isolate bg-muted">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-10 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-10">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight">Contáctanos</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              ¿Listo para comenzar tu proyecto? Contáctanos y te ayudaremos a hacer realidad tu visión digital.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Dirección</span>
                  <MapPin className="h-7 w-6 text-primary" aria-hidden="true" />
                </dt>
                <dd>
                  Banfield
                  <br />
                  Buenos Aires, Argentina
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Teléfono</span>
                  <Phone className="h-7 w-6 text-primary" aria-hidden="true" />
                </dt>
                <dd>
                  <Link className="hover:text-primary" href="tel:+541126763301">
                    +54 11 2676 3301
                  </Link>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <Mail className="h-7 w-6 text-primary" aria-hidden="true" />
                </dt>
                <dd>
                  <Link className="hover:text-primary" href="mailto:gretsoft@gmail.com">
                    gretsoft@gmail.com
                  </Link>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="px-6 pb-24 pt-10 sm:pb-32 lg:px-8 lg:py-10">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <div className="mt-2.5">
                  <Input type="text" name="name" placeholder="Nombre completo" required />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="mt-2.5">
                  <Input type="email" name="email" placeholder="Email" required />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="mt-2.5">
                  <Input type="tel" name="phone" placeholder="Teléfono" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="mt-2.5">
                  <Textarea name="message" rows={4} placeholder="¿Cómo podemos ayudarte?" required />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              </Button>
            </div>
          </div>
        </form>
      </div>
      <Toaster />
    </section>
  )
}

