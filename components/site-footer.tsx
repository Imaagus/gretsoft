import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-muted">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="flex justify-center">
          <Link href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">GretSoft</span>
            <Image
              className="h-16 w-auto"
              src="/gretsoft.png"
              alt="GretSoft Logo"
              width={1000}
              height={1000}
            />
          </Link>
        </div>
        <nav className="columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          <div className="pb-6">
            <Link href="/" className="text-sm leading-6 hover:text-primary">
              Inicio
            </Link>
          </div>
          <div className="pb-6">
            <Link href="/about" className="text-sm leading-6 hover:text-primary">
              Nosotros
            </Link>
          </div>
          <div className="pb-6">
            <Link href="/portfolio" className="text-sm leading-6 hover:text-primary">
              Portfolio
            </Link>
          </div>
          <div className="pb-6">
            <Link href="/#contact" className="text-sm leading-6 hover:text-primary">
              Contacto
            </Link>
          </div>
        </nav>
        <div className="flex justify-center space-x-10">
          <Link href="#" className="text-muted-foreground hover:text-primary">
            <span className="sr-only">Facebook</span>
            <Facebook className="h-6 w-6" />
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary">
            <span className="sr-only">Instagram</span>
            <Instagram className="h-6 w-6" />
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary">
            <span className="sr-only">Twitter</span>
            <Twitter className="h-6 w-6" />
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" />
          </Link>
        </div>
        <p className="mt-4 text-center text-xs leading-5 text-muted-foreground">
          &copy; {new Date().getFullYear()} GretSoft. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

