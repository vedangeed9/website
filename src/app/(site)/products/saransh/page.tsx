export const dynamic = "error"

import SafeImage from "@/components/ui/safe-image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export const metadata = {
    title: "SaranshAI - AI Summarization Tool | POYV",
    description: "SaranshAI is a powerful AI summarization tool that simplifies complex information into concise summaries for research, finance, legal, healthcare, and technology sectors."
}

// Feature data with custom SVG icons
const features = [
    {
        title: "Research and Academia",
        description: "Speeds up the research process, improves accuracy in literature reviews, and aids in academic writing and publication.",
        icon: () => (
            <svg className="w-16 h-16 text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        )
    },
    {
        title: "Technology and Software Development",
        description: "Enhances productivity by automating code generation and documentation, and provides quick access to relevant technical information.",
        icon: () => (
            <svg className="w-16 h-16 text-teal-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        )
    },
    {
        title: "Financial Services",
        description: "Facilitates better decision-making by providing concise summaries and actionable insights from complex financial data.",
        icon: () => (
            <svg className="w-16 h-16 text-yellow-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        title: "Legal and Compliance",
        description: "Reduces manual review time and improves accuracy in understanding and managing legal documents and compliance requirements.",
        icon: () => (
            <svg className="w-16 h-16 text-orange-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2-5c0-1.105-.895-2-2-2H9c-1.105 0-2 .895-2 2v6c0 1.105.895 2 2 2h8c1.105 0 2-.895 2-2v-6z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7V4a2 2 0 00-2-2H10a2 2 0 00-2 2v3" />
            </svg>
        )
    },
    {
        title: "Healthcare and Life Sciences",
        description: "Supports faster and more accurate medical research, enhances clinical documentation, and aids in patient data management.",
        icon: () => (
            <svg className="w-16 h-16 text-cyan-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        )
    },
    {
        title: "Integration with Analytics Platforms",
        description: "Provides clear and actionable insights from complex data, improving data-driven decision-making.",
        icon: () => (
            <svg className="w-16 h-16 text-blue-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        )
    }
]

export default function SaranshAIPage() {
    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* Hero Section */}
            <section className="container mx-auto px-6 py-20">
                <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                            Your AI Summarizer,
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-6 font-medium">
                            Simplifying Information in a Snap!
                        </p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-teal-600 mb-8">
                            SaranshAI
                        </h2>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg">
                                <Link href="/contact">Try SaranshAI</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-3 text-lg">
                                <Link href="#features">Learn More</Link>
                            </Button>
                        </div>
                    </div>

                    <div className="flex-1 max-w-lg">
                        <SafeImage
                            src="/images/products/saransh-robot.png"
                            alt="SaranshAI Robot Assistant"
                            className="w-full h-auto max-w-md mx-auto"
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

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {features.map((feature, index) => (
                            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
                                <CardHeader className="pb-4">
                                    <feature.icon />
                                    <CardTitle className="text-xl font-bold text-gray-900">
                                        {feature.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-700 leading-relaxed text-base">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Description Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="flex-1">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                SaranshAI: An AI Summarization Tool
                            </h2>
                            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                                <p>
                                    Saransh AI is a powerful text summarization tool designed to transform complex information into concise,
                                    easy-to-understand summaries. Using advanced natural language processing, Saransh AI analyzes and distills
                                    key points from large volumes of text, making it effortless to grasp essential insights quickly.
                                </p>
                                <p>
                                    Whether you're dealing with lengthy reports, articles, or any text-heavy documents, Saransh AI delivers
                                    accurate, coherent summaries that save you time and enhance productivity.
                                </p>
                            </div>

                            <div className="mt-8">
                                <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
                                    <Link href="/contact">Get Started Today</Link>
                                </Button>
                            </div>
                        </div>

                        <div className="flex-1 max-w-lg">
                            <SafeImage
                                src="/images/products/saransh-screens.png"
                                alt="SaranshAI Application Screenshots"
                                className="w-full h-auto rounded-lg shadow-xl"
                                width={600}
                                height={400}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Features Section - More cards for complete coverage */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                        Extended Use Cases
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="bg-white shadow-lg p-6">
                            <CardHeader>
                                <svg className="w-12 h-12 text-yellow-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <CardTitle>Financial Services</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700">
                                    Facilitates better decision-making by providing concise summaries and actionable insights from complex financial data.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-white shadow-lg p-6">
                            <CardHeader>
                                <svg className="w-12 h-12 text-orange-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2-5c0-1.105-.895-2-2-2H9c-1.105 0-2 .895-2 2v6c0 1.105.895 2 2 2h8c1.105 0 2-.895 2-2v-6z" />
                                </svg>
                                <CardTitle>Legal and Compliance</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700">
                                    Reduces manual review time and improves accuracy in understanding and managing legal documents and compliance requirements.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-white shadow-lg p-6">
                            <CardHeader>
                                <svg className="w-12 h-12 text-cyan-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                <CardTitle>Healthcare and Life Sciences</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700">
                                    Supports faster and more accurate medical research, enhances clinical documentation, and aids in patient data management.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-white shadow-lg p-6">
                            <CardHeader>
                                <svg className="w-12 h-12 text-blue-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                                <CardTitle>Integration with Analytics Platforms</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700">
                                    Provides clear and actionable insights from complex data, improving data-driven decision-making.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-teal-600 text-white py-20">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Simplify Your Information Processing?
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        Experience the power of AI-driven summarization and transform how you work with complex documents and data.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3">
                            <Link href="/contact">Start Free Trial</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3">
                            <Link href="/about">Learn More</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
