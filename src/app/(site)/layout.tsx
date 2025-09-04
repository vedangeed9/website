import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "@/components/site/header"
import Footer from "@/components/site/footer"
import "@/app/globals.css"

const inter = Inter({ subsets: ["latin"] })

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
