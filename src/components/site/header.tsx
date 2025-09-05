"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useState } from "react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/products",
    label: "Products",
    subLinks: [
      { href: "/products/aqua-level", label: "AquaLevel" },
      { href: "/products/digimedic", label: "DigiMedic" },
      { href: "/products/saransh", label: "Saransh" },
      { href: "/products/weather", label: "Weather System" },
    ],
  },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/80 transition-all duration-300 hover:bg-white/90">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2 group transition-transform duration-300 hover:scale-105">
          <div className="h-8 w-8 bg-gradient-to-br from-slate-700 to-slate-800 rounded-md flex items-center justify-center border border-slate-600 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-3">
            <span className="text-white font-bold text-sm">ST</span>
          </div>
          <span className="font-bold text-xl text-slate-800 group-hover:text-slate-900 transition-colors duration-300">
            SerenyxTech
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <div key={link.href} className="relative group">
              <Link
                href={link.href}
                className="text-sm font-medium text-slate-700 transition-all duration-300 hover:text-slate-900 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-slate-800 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
              {link.subLinks && (
                <div className="absolute top-full left-0 mt-2 w-48 rounded-lg border border-white/20 bg-white/90 backdrop-blur-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="py-2">
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.href}
                        href={subLink.href}
                        className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-100/50 hover:text-slate-900 transition-all duration-200 rounded-md mx-2"
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            asChild
            className="hidden md:flex bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
          >
            <Link href="/contact">Get Quote</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-slate-700 hover:text-slate-900 hover:bg-slate-100/50 transition-all duration-300 hover:scale-110"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white/95 backdrop-blur-xl border-white/20">
              <div className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      className="block py-2 text-lg font-medium text-slate-800 hover:text-slate-900 transition-colors duration-300"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                    {link.subLinks && (
                      <div className="ml-4 space-y-2">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.href}
                            href={subLink.href}
                            className="block py-1 text-sm text-slate-600 hover:text-slate-800 transition-colors duration-300"
                            onClick={() => setOpen(false)}
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}