import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import { WhatsAppButton } from "@/components/whatsapp-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "GretSoft | Soluciones Web Profesionales",
  description: "Desarrollo de landing pages, e-commerce y soluciones web personalizadas",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}

