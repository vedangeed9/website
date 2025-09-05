import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import SafeImage from "@/components/ui/safe-image"

export const dynamic = "error" // SSG

const products = [
  {
    id: "aqua-level",
    title: "AquaLevel",
    description: "Advanced water level monitoring system with real-time alerts and analytics.",
    image: "/images/products/aqua-level.jpg",
    features: ["Real-time Monitoring", "Alert System", "Data Analytics", "Mobile App"],
    href: "/products/aqua-level"
  },
  {
    id: "digimedic",
    title: "DigiMedic",
    description: "Comprehensive digital healthcare management platform for medical professionals.",
    image: "/images/products/digimedic.jpg", 
    features: ["Patient Management", "Digital Records", "Appointment Scheduling", "Telemedicine"],
    href: "/products/digimedic"
  },
  {
    id: "saransh",
    title: "Saransh",
    description: "Intelligent health monitoring and analysis system with AI-powered insights.",
    image: "/images/products/saransh.jpg",
    features: ["Health Analytics", "AI Insights", "Predictive Analysis", "Report Generation"],
    href: "/products/saransh"
  },
  {
    id: "weather",
    title: "Weather System",
    description: "Professional weather monitoring and forecasting solution for various industries.",
    image: "/images/products/weather.jpg",
    features: ["Weather Monitoring", "Forecasting", "Historical Data", "API Integration"],
    href: "/products/weather"
  }
]

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Products</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Innovative technology solutions designed to improve healthcare, monitoring, and data management across industries.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video relative overflow-hidden">
              <SafeImage
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">{product.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">{product.description}</p>
              
              <div>
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Button asChild className="w-full">
                  <Link href={product.href}>Learn More</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
