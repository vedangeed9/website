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
    ]
  },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-blue-600 rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-sm">YC</span>
          </div>
          <span className="font-bold text-xl">Your Company</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <div key={link.href} className="relative group">
              <Link 
                href={link.href} 
                className="text-sm font-medium transition-colors hover:text-blue-600"
              >
                {link.label}
              </Link>
              {link.subLinks && (
                <div className="absolute top-full left-0 mt-2 w-48 rounded-md border bg-background shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.href}
                        href={subLink.href}
                        className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
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
          <Button asChild className="hidden md:flex">
            <Link href="/contact">Get Quote</Link>
          </Button>
          
          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      className="block py-2 text-lg font-medium"
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
                            className="block py-1 text-sm text-gray-600"
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
