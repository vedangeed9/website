export const dynamic = "error"

import SafeImage from "@/components/ui/safe-image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export const metadata = {
  title: "DigiMedic - Electronic Health Record (EHR) Solution | POYV",
  description: "DigiMedic revolutionizes healthcare with AI-powered EHR solution for digitizing patient data, early diagnosis, and personalized treatment plans."
}

const features = [
  {
    icon: () => (
      <svg className="w-12 h-12 text-teal-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
    title: "GenAI Tool",
    description: "DigiMedic is equipped with cutting-edge Artificial Intelligence and Machine Learning algorithms, designed to predict cancer and chronic diseases with high accuracy."
  },
  {
    icon: () => (
      <svg className="w-12 h-12 text-yellow-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
      </svg>
    ),
    title: "Versatile Data Handling",
    description: "Analyzes health records for early diagnosis, improving outcomes and personalizing treatment plans."
  },
  {
    icon: () => (
      <svg className="w-12 h-12 text-orange-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2-5c0-1.105-.895-2-2-2H9c-1.105 0-2 .895-2 2v6c0 1.105.895 2 2 2h8c1.105 0 2-.895 2-2v-6z"/>
      </svg>
    ),
    title: "Comprehensive Patient History",
    description: "Provides comprehensive patient histories, aiding accurate diagnoses."
  },
  {
    icon: () => (
      <svg className="w-12 h-12 text-blue-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>
      </svg>
    ),
    title: "Integration of Data Sources",
    description: "Integrates diverse data sources for thorough evaluation."
  },
  {
    icon: () => (
      <svg className="w-12 h-12 text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    ),
    title: "Monitoring",
    description: "Tracks patient progress for continuous improvement."
  },
  {
    icon: () => (
      <svg className="w-12 h-12 text-teal-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
      </svg>
    ),
    title: "Population Health Management",
    description: "Data analysis identifies high-risk individuals for early intervention."
  }
]

export default function DigiMedicPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Revolutionizing Healthcare
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6 font-medium">
              One Digital Step at a Time
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-teal-600 mb-8">
              DigiMedic
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-3 text-lg">
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>
          
          <div className="flex-1 max-w-lg">
            <SafeImage
              src="/images/products/digimedic-illustration.png"
              alt="DigiMedic Healthcare Digital Platform Illustration"
              className="w-full h-auto"
              width={500}
              height={400}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-blue-50 py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">Features</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center">
                <CardHeader className="pb-4">
                  <div className="flex justify-center">
                    <feature.icon />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About DigiMedic Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              DigiMedic
            </h2>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  DigiMedic is an Electronic Health Record (EHR) solution designed to digitize and centralize patient data. 
                  By organizing and storing all patient health records in one accessible digital platform, it streamlines 
                  the process for doctors, making it easier to retrieve and review patient information.
                </p>
                <p>
                  DigiMedic is equipped with cutting-edge Artificial Intelligence and Machine Learning algorithms, 
                  designed to predict cancer and chronic diseases with high accuracy. By analyzing patient histories, 
                  imaging data, and other health records, this feature aids in early diagnosis and intervention, 
                  thereby improving patient outcomes and offering personalized treatment plans through the EHR system.
                </p>
              </div>
              
              <div className="mt-8">
                <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
                  <Link href="/contact">Request Demo</Link>
                </Button>
              </div>
            </div>
            
            <div className="flex-1 max-w-lg">
              <SafeImage
                src="/images/products/digimedic-dashboard.png"
                alt="DigiMedic EHR Dashboard Interface"
                className="w-full h-auto rounded-lg shadow-xl"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Transform Your Healthcare Practice
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Streamline patient care, improve diagnoses, and enhance treatment outcomes with our comprehensive EHR solution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white shadow-lg p-6 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <CardTitle>Early Detection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">AI algorithms analyze patient data to predict and detect diseases at early stages, improving treatment success rates.</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg p-6 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"/>
                  </svg>
                </div>
                <CardTitle>Streamlined Workflow</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Centralized patient records and automated processes reduce administrative burden and improve efficiency.</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg p-6 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                  </svg>
                </div>
                <CardTitle>Better Patient Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Personalized treatment plans and comprehensive patient histories lead to improved healthcare outcomes.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-600 text-white py-20">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Revolutionize Your Healthcare Practice?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of healthcare professionals using DigiMedic to improve patient outcomes and streamline operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3">
              <Link href="/contact">Schedule Demo</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Contact Us</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-3">Address:</h4>
              <p className="text-gray-700 mb-4">
                POYV Private Limited<br />
                59/6/279 Sadguru Nagar Malmatta<br />
                Bhosari Pune-411039<br />
                Maharashtra, India
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-3">Get in Touch:</h4>
              <p className="text-gray-700 mb-2">
                <strong>Phone:</strong> +91 9834394898 / +91 8329229074
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> info@poyv.in
              </p>
              <p className="text-gray-700">
                <strong>Hours:</strong> Monday - Friday: 9am - 6pm
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
