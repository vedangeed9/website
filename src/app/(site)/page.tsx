"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export const dynamic = "error"

const features = [
  { 
    title: "AI Solutions", 
    description: "Custom AI products designed for your business needs and industry challenges.",
    icon: "🤖"
  },
  { 
    title: "Data Engineering", 
    description: "Streamline data pipelines for actionable insights and better decision making.",
    icon: "⚙️"
  },
  { 
    title: "Consulting Services", 
    description: "Expert guidance to maximize your AI investment and digital transformation.",
    icon: "💡"
  },
]

const testimonials = [
  {
    quote: "SerenyxTech transformed our data infrastructure completely. ROI was visible within 3 months.",
    author: "Sarah Chen",
    company: "TechCorp Industries",
    image: "/testimonial1.jpg"
  },
  {
    quote: "Their AI solutions helped us reduce operational costs by 40% while improving accuracy.",
    author: "Michael Rodriguez",
    company: "DataFlow Solutions",
    image: "/testimonial2.jpg"
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900">
            Harness Advanced AI to <span className="text-blue-600">Transform</span> Your Business
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Data excellence powered by cutting-edge machine learning and AI. 
            We help enterprises unlock the full potential of their data.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">About Serenyx Tech</h2>
          <p className="text-lg text-gray-600 mb-8">
            We are pioneers in harnessing the power of advanced AI to drive data excellence 
            and tackle the most complex challenges across industries.
          </p>
          <Button asChild variant="outline">
            <Link href="/about">Learn More About Us</Link>
          </Button>
        </div>
      </section>

      {/* Products/Services Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Services</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="space-y-4">
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${testimonial.author}&background=3b82f6&color=fff`
                      }}
                    />
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-8 text-gray-600">Trusted by Industry Leaders</h2>
          <div className="flex justify-center items-center gap-12 flex-wrap opacity-60">
            {/* Placeholder for client logos */}
            <div className="h-12 w-24 bg-gray-300 rounded flex items-center justify-center">Logo 1</div>
            <div className="h-12 w-24 bg-gray-300 rounded flex items-center justify-center">Logo 2</div>
            <div className="h-12 w-24 bg-gray-300 rounded flex items-center justify-center">Logo 3</div>
            <div className="h-12 w-24 bg-gray-300 rounded flex items-center justify-center">Logo 4</div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Business?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how our AI solutions can transform your operations and drive growth.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
