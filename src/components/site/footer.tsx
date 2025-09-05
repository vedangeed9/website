import Link from "next/link"
import { Linkedin, Twitter, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const socialLinks = [
  { href: "https://linkedin.com/company/Serenyx Tech", icon: Linkedin, label: "LinkedIn" },
  { href: "https://twitter.com/Serenyx Tech", icon: Twitter, label: "Twitter" },
  { href: "https://instagram.com/Serenyx Tech", icon: Instagram, label: "Instagram" },
  { href: "https://facebook.com/Serenyx Tech", icon: Facebook, label: "Facebook" },
]

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact Us" },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 text-white py-12 border-t border-gray-800/20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 font-bold text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Serenyx Tech
          </div>
          <p className="text-sm text-gray-300">
            At Serenyx Tech, we are pioneers in harnessing the power of advanced AI to drive data excellence and tackle
            the most complex challenges.
          </p>
        </div>

        {/* Reach Us */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Reach us</h3>
          <div className="space-y-2 text-sm">
            <p>📞 +1-512-423-4289</p>
            <p>✉️ engage@SerenyxTech.com</p>
            <p className="text-gray-300">
              17350 State Hwy 249, suite220
              <br />
              #14635 Houston, Texas 77064
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/careers" className="text-gray-300 hover:text-white transition-colors">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/resources" className="text-gray-300 hover:text-white transition-colors">
                Resources
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Newsletter</h3>
          <div className="flex gap-2 mb-4">
            <Input
              placeholder="sample@mail.com"
              className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-gray-500"
            />
            <Button className="bg-gray-800 hover:bg-gray-700 border border-gray-600">Subscribe</Button>
          </div>
          <div>
            <p className="text-sm mb-2">Follow us on</p>
            <div className="flex gap-3">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 bg-gray-800 border border-gray-600 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-8 mt-8 border-t border-gray-700 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Serenyx Tech. All rights reserved.
      </div>
    </footer>
  )
}
