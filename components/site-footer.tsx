import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteFooter() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="sr-only">GretSoft</span>
              <Image className="h-16 w-auto" src="/gretsoft.png" alt="GretSoft Logo" width={1000} height={1000} />
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Soluciones web profesionales y personalizadas para hacer crecer tu negocio digital.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full hover:bg-primary/10 hover:text-primary"
              >
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full hover:bg-primary/10 hover:text-primary"
              >
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full hover:bg-primary/10 hover:text-primary"
              >
                <Link href="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full hover:bg-primary/10 hover:text-primary"
              >
                <Link href="#" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Navegación</h3>
            <ul className="space-y-3">
              {[
                { name: "Inicio", href: "/" },
                { name: "Nosotros", href: "/about" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Contacto", href: "/#contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Servicios</h3>
            <ul className="space-y-3">
              {[
                { name: "Landing Pages", href: "/#services" },
                { name: "E-commerce", href: "/#services" },
                { name: "Sitios Web Corporativos", href: "/#services" },
                { name: "Aplicaciones Web", href: "/#services" },
                { name: "SEO", href: "/#services" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="text-sm text-muted-foreground">
                <span className="block">Email:</span>
                <Link href="mailto:info@gretsoft.com" className="hover:text-primary transition-colors duration-200">
                  info@gretsoft.com
                </Link>
              </li>
              <li className="text-sm text-muted-foreground">
                <span className="block">Teléfono:</span>
                <Link href="tel:+123456789" className="hover:text-primary transition-colors duration-200">
                  +1 (234) 567-89
                </Link>
              </li>
              <li className="text-sm text-muted-foreground">
                <span className="block">Dirección:</span>
                <address className="not-italic">
                  Calle Principal 123
                  <br />
                  Ciudad, País
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} GretSoft. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacy"
              className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Política de Privacidad
            </Link>
            <Link
              href="/terms"
              className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

