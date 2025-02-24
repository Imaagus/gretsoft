"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { MenuIcon, XIcon } from "lucide-react"

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contacto", href: "/#contact" },
]

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-sm shadow-sm" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/gretsoft.png" className="-m-1.5 p-1.5">
            <span className="sr-only">GretSoft</span>
            <Image
              className="h-24 w-auto" 
              src="/gretsoft.png"
              alt="GretSoft Logo"
              width={1000}
              height={1000}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menú principal</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-base font-semibold leading-6 text-foreground hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
      <div
        className={cn("lg:hidden", mobileMenuOpen ? "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm" : "hidden")}
      >
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">GretSoft</span>
              <Image
                className="h-12 w-auto"
                src="/gretsoft.png"
                alt="GretSoft Logo"
                width={48}
                height={48}
              />
            </Link>
            <Button variant="ghost" className="-m-2.5 rounded-md p-2.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Cerrar menú</span>
              <XIcon className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-muted"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

