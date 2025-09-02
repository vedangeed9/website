export const dynamic = "error"

import SafeImage from "@/components/ui/safe-image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export const metadata = {
    title: "Acqua Level - Real-Time Water Level Monitoring System | POYV",
    description: "Acqua Level provides smart, precise monitoring of water levels with wireless sensors, alerts, data logging, and advanced analytics for optimal water management."
}

const features = [
    {
        icon: () => (
            <svg className="w-12 h-12 text-teal-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        title: "Real time monitoring",
        description: "Provides continuous monitoring of levels in tanks, reservoirs, rivers, or other water bodies."
    },
    {
        icon: () => (
            <svg className="w-12 h-12 text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: "Data Logging and History",
        description: "Records historical data on water levels over time, allowing for trend analysis and reporting."
    },
    {
        icon: () => (
            <svg className="w-12 h-12 text-orange-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
        ),
        title: "Alert and Notification",
        description: "Sends alerts (via SMS, email, or app notifications) when water levels reach predefined thresholds, such as high or low levels."
    },
    {
        icon: () => (
            <svg className="w-12 h-12 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
        ),
        title: "Battery Backup and Power Management",
        description: "Equipped with battery backup to ensure continuous operation during power outages."
    },
    {
        icon: () => (
            <svg className="w-12 h-12 text-blue-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        title: "Remote Access",
        description: "Allows users to monitor and control water levels from remote locations through internet-connected devices."
    },
    {
        icon: () => (
            <svg className="w-12 h-12 text-yellow-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: "Security Features",
        description: "Ensures data integrity and secure access to the monitoring system through encryption and user authentication."
    }
]

export default function AcquaLevelPage() {
    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* Hero Section */}
            <section className="container mx-auto px-6 py-20">
                <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                            Real-Time Insights
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-6 font-medium">
                            for Accurate Water Levels!
                        </p>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-cyan-600 mb-8">
                            Acqua Level
                        </h2>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 text-lg">
                                <Link href="/contact">Request Demo</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 px-8 py-3 text-lg">
                                <Link href="#features">Learn More</Link>
                            </Button>
                        </div>
                    </div>

                    <div className="flex-1 max-w-lg">
                        <SafeImage
                            src="/images/products/acqua-level-illustration.png"
                            alt="Acqua Level Water Monitoring Illustration"
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

            {/* How It Works Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="flex-1 max-w-lg">
                            <SafeImage
                                src="/images/products/acqua-level-diagram.png"
                                alt="Acqua Level System Diagram showing sensor, Wi-Fi, cloud database, and result display"
                                className="w-full h-auto"
                                width={500}
                                height={400}
                            />
                        </div>

                        <div className="flex-1">
                            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                                <p>
                                    Our Water level Monitoring System tracks water inflow, outflow, and levels in real-time.
                                    It offers usage analytics, historical data, and three-level indicators (Sufficient, Moderate, Critical)
                                    for easy monitoring. The system ensures accurate, efficient monitoring with remote access for convenience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Water Level Monitoring System Section */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Water level Monitoring System
                        </h2>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="flex-1">
                            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                                <p>
                                    Acqua Level is a smart system that monitors water levels in tanks in real-time using wireless sensors.
                                    It prevents shortages and overflows, eliminating manual checks and reducing labor costs and human error.
                                    Integrating IoT and software optimizes resources, saves energy, and lowers operating costs.
                                </p>
                            </div>

                            <div className="mt-8">
                                <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white">
                                    <Link href="/contact">Get Started</Link>
                                </Button>
                            </div>
                        </div>

                        <div className="flex-1 max-w-lg">
                            <SafeImage
                                src="/images/products/acqua-level-dashboard.png"
                                alt="Acqua Level Dashboard Interface showing analytics and monitoring data"
                                className="w-full h-auto rounded-lg shadow-xl"
                                width={600}
                                height={400}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-cyan-600 text-white py-20">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Optimize Your Water Management?
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        Experience precise water level monitoring with real-time insights, alerts, and analytics to prevent shortages and overflows.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3">
                            <Link href="/contact">Request Demo</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-3">
                            <Link href="/about">Learn More</Link>
                        </Button>
                    </div>
                </div>
            </section>

        </div>
    )
}
