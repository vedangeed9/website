"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    
    const formData = new FormData(e.currentTarget)
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "")
    formData.append("subject", "New inquiry from website")

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })
      const data = await res.json()
      if (data.success) {
        setStatus("success")
        e.currentTarget.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Ready to transform your operations with our technology solutions? Get in touch with our experts.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Send us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" name="firstName" required />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" name="lastName" required />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" name="email" required />
              </div>
              
              <div>
                <Label htmlFor="company">Company</Label>
                <Input id="company" name="company" />
              </div>
              
              <div>
                <Label htmlFor="product">Product Interest</Label>
                <select name="product" className="w-full p-2 border rounded-md">
                  <option value="">Select a product</option>
                  <option value="aqua-level">AquaLevel</option>
                  <option value="digimedic">DigiMedic</option>
                  <option value="saransh">Saransh</option>
                  <option value="weather">Weather System</option>
                  <option value="custom">Custom Solution</option>
                </select>
              </div>
              
              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea id="message" name="message" rows={5} required />
              </div>

              {/* Honeypot */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
              
              <Button type="submit" disabled={status === "sending"} className="w-full">
                {status === "sending" ? "Sending..." : "Send Message"}
              </Button>
              
              {status === "success" && (
                <p className="text-green-600 text-sm">Thank you! We'll get back to you within 24 hours.</p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-sm">Something went wrong. Please try again or email us directly.</p>
              )}
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">info@yourcompany.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-gray-600">
                    123 Business Street<br />
                    Suite 100<br />
                    City, State 12345
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium">Business Hours</p>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Map */}
          <Card>
            <CardContent className="p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890!2d-74.0059413!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjEuNCJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
