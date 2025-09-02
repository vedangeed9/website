import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "@/components/site/header"
import Footer from "@/components/site/footer"
import "@/app/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "POYV - Pursuit of Your Vision",
    template: "%s | POYV"
  },
  description: "Leading provider of healthcare technology solutions including AquaLevel, DigiMedic, Saransh, and Weather monitoring systems.",
  keywords: "healthcare technology, medical devices, water level monitoring, digital health, weather systems",
  openGraph: {
    title: "POYV - Pursuit of Your Vision",
    description: "Leading provider of healthcare technology solutions",
    url: "https://poyv.com",
    siteName: "POYV",
    images: [{ url: "/images/og-image.jpg" }],
    locale: "en_US",
    type: "website",
  },
}

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={inter.className}>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  )
}
