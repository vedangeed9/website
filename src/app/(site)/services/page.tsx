export const dynamic = "error"
import { Cpu, Database, Zap, BarChart3, Shield, Users } from "lucide-react"

const services = [
  { 
    id: 1, 
    title: "AI Strategy & Consulting", 
    description: "Expert guidance on AI adoption, strategy development, and digital transformation roadmaps.", 
    icon: Cpu,
    details: ["AI Readiness Assessment", "Strategy Development", "Technology Selection", "Implementation Planning"]
  },
  { 
    id: 2, 
    title: "Data Engineering & Architecture", 
    description: "Build robust, scalable data infrastructure for modern AI and analytics workloads.", 
    icon: Database,
    details: ["Data Pipeline Design", "Cloud Migration", "Real-time Processing", "Data Quality Management"]
  },
  { 
    id: 3, 
    title: "Custom Machine Learning", 
    description: "Tailored ML models and algorithms designed specifically for your business challenges.", 
    icon: Zap,
    details: ["Model Development", "Feature Engineering", "Model Training", "Performance Optimization"]
  },
  { 
    id: 4, 
    title: "Business Intelligence", 
    description: "Transform data into actionable insights with advanced analytics and visualization.", 
    icon: BarChart3,
    details: ["Dashboard Development", "Report Automation", "KPI Tracking", "Predictive Analytics"]
  },
  { 
    id: 5, 
    title: "AI Security & Governance", 
    description: "Ensure your AI systems are secure, compliant, and ethically responsible.", 
    icon: Shield,
    details: ["Model Security", "Bias Detection", "Compliance Management", "Risk Assessment"]
  },
  { 
    id: 6, 
    title: "Training & Support", 
    description: "Comprehensive training programs to upskill your team in AI and data science.", 
    icon: Users,
    details: ["Technical Training", "Workshop Facilitation", "Ongoing Support", "Knowledge Transfer"]
  },
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Comprehensive AI and data science services to accelerate your digital transformation journey.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {services.map(service => {
          const IconComponent = service.icon
          return (
            <div key={service.id} className="bg-white border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <IconComponent className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-xl font-semibold">{service.title}</h2>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900">What's Included:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {service.details.map((detail, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-blue-500 mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
