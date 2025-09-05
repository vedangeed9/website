"use client"
import { Button } from "@/components/ui/button"
import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Brain, Database, Lightbulb, Zap, Shield, TrendingUp } from "lucide-react"
import { useEffect, useState, useRef } from "react"

const TypewriterText = ({ text, delay = 100 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, delay)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, delay])

  return (
    <span>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

const AnimatedCounter = ({ value, duration = 2000 }: { value: string; duration?: number }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const numericValue = Number.parseInt(value.replace(/\D/g, ""))
    if (isNaN(numericValue)) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * numericValue))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, value, duration])

  const suffix = value.replace(/\d/g, "")

  return (
    <div ref={ref} className="text-2xl md:text-3xl font-bold text-white mb-1">
      {count}
      {suffix}
    </div>
  )
}

const ScrollReveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      {children}
    </div>
  )
}

const features = [
  {
    title: "AI Solutions",
    description: "Custom AI products designed for your business needs and industry challenges.",
    icon: Brain,
    gradient: "from-primary/20 to-primary/10",
  },
  {
    title: "Data Engineering",
    description: "Streamline data pipelines for actionable insights and better decision making.",
    icon: Database,
    gradient: "from-secondary/20 to-secondary/10",
  },
  {
    title: "Consulting Services",
    description: "Expert guidance to maximize your AI investment and digital transformation.",
    icon: Lightbulb,
    gradient: "from-accent/20 to-accent/10",
  },
]

const testimonials = [
  {
    quote: "SerenyxTech transformed our data infrastructure completely. ROI was visible within 3 months.",
    author: "Sarah Chen",
    company: "TechCorp Industries",
    image: "/testimonial1.jpg",
  },
  {
    quote: "Their AI solutions helped us reduce operational costs by 40% while improving accuracy.",
    author: "Michael Rodriguez",
    company: "DataFlow Solutions",
    image: "/testimonial2.jpg",
  },
]

const stats = [
  { value: "500+", label: "AI Models Deployed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "40%", label: "Average Cost Reduction" },
  { value: "24/7", label: "Support Coverage" },
]

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
        {/* Tech pattern background */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 animate-pulse"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.3'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='7' r='1'/%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3Ccircle cx='7' cy='53' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              animationDuration: "4s",
            }}
          />
        </div>

        <div className="relative container mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gray-800/80 text-gray-200 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-[slideUp_0.8s_ease-out] border border-gray-700">
              <Zap className="w-4 h-4 animate-pulse text-blue-400" />
              Powering the Future of AI
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold mb-12 text-balance text-white">
              Transform Your Business with
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                <TypewriterText text="Advanced AI" delay={150} />
              </span>
            </h1>

            <p className="text-xl md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto text-pretty animate-[fadeIn_1s_ease-out_0.5s_both]">
              Data excellence powered by cutting-edge machine learning and AI. We help enterprises unlock the full
              potential of their data infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                asChild
                size="lg"
                className="bg-gray-800 text-white hover:bg-gray-700 border border-gray-600 group animate-[slideUp_0.8s_ease-out_0.8s_both] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-200 hover:bg-gray-800/50 bg-gray-900/30 animate-[slideUp_0.8s_ease-out_1s_both] hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              >
                <Link href="/services">Explore Solutions</Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="text-center group hover:scale-110 transition-transform duration-300">
                    <AnimatedCounter value={stat.value} />
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <ScrollReveal>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Our Core Capabilities</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Comprehensive AI solutions designed to accelerate your digital transformation journey
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <ScrollReveal key={index} delay={index * 200}>
                    <Card className="group hover:shadow-xl transition-all duration-500 border border-border/50 bg-card hover:scale-105 hover:-translate-y-2">
                      <CardHeader className="pb-4">
                        <div
                          className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                        >
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                        <Button
                          variant="ghost"
                          className="mt-4 p-0 h-auto text-primary hover:text-primary/80 group/btn"
                        >
                          Learn more
                          <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* About Section */}
      <ScrollReveal>
        <section className="py-24 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-800">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-gray-700/80 text-gray-200 px-3 py-1 rounded-full text-sm font-medium mb-6 animate-pulse border border-gray-600">
                    <Shield className="w-4 h-4" />
                    Trusted Innovation
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance text-white">About SerenyxTech</h2>
                  <p className="text-lg text-white/90 mb-8 leading-relaxed">
                    We are pioneers in harnessing the power of advanced AI to drive data excellence and tackle the most
                    complex challenges across industries. Our mission is to democratize AI technology and make it
                    accessible for businesses of all sizes.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-gray-600 text-gray-200 hover:bg-gray-700/50 bg-gray-800/30 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                  >
                    <Link href="/about" className="flex items-center gap-2">
                      Our Story
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-gray-700/40 to-gray-800/30 rounded-2xl flex items-center justify-center animate-[float_3s_ease-in-out_infinite] border border-gray-600/30">
                    <Brain className="w-24 h-24 text-gray-400 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Testimonials Section */}
      <ScrollReveal>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Success Stories</h2>
              <p className="text-xl text-muted-foreground">See how we've transformed businesses with AI</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <ScrollReveal key={index} delay={index * 300}>
                  <Card className="border-0 bg-gradient-to-br from-card to-muted/30 hover:shadow-lg transition-all duration-500 hover:scale-105">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className="w-4 h-4 text-accent animate-[sparkle_2s_ease-in-out_infinite]"
                            style={{ animationDelay: `${i * 0.2}s` }}
                          >
                            ★
                          </div>
                        ))}
                      </div>
                      <blockquote className="text-lg text-foreground mb-6 leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center gap-4">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.author}
                          className="w-12 h-12 rounded-full object-cover bg-muted hover:scale-110 transition-transform duration-300"
                          onError={(e) => {
                            e.currentTarget.src = `https://ui-avatars.com/api/?name=${testimonial.author}&background=609380&color=fff`
                          }}
                        />
                        <div>
                          <p className="font-semibold text-foreground">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Partners Section */}
      <ScrollReveal>
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-lg font-semibold mb-8 text-muted-foreground">Trusted by Industry Leaders</h3>
            <div className="flex justify-center items-center gap-12 flex-wrap opacity-40">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-8 w-24 bg-foreground/20 rounded flex items-center justify-center text-xs font-medium hover:scale-110 transition-transform duration-300 animate-[slideIn_1s_ease-out] hover:opacity-80"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  Partner {i}
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal>
        <section className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-800 to-slate-800">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px] animate-[drift_10s_linear_infinite]" />
          </div>

          <div className="relative container mx-auto px-6 text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-gray-700/80 text-gray-200 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-pulse border border-gray-600">
              <TrendingUp className="w-4 h-4" />
              Ready to Scale?
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-12 text-white/90 max-w-2xl mx-auto text-pretty">
              Let's discuss how our AI solutions can revolutionize your operations and accelerate growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gray-800 text-white hover:bg-gray-700 border border-gray-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Start Your Journey
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-200 hover:bg-gray-700/50 bg-gray-800/30 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              >
                <Link href="/demo">Book a Demo</Link>
              </Button>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  )
}

export default Index
