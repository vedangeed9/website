export const dynamic = "error"

import SafeImage from "@/components/ui/safe-image"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "About Us - Our Mission, Vision & Team",
  description: "Learn about our mission to harness AI and machine learning for data excellence, our vision for the future, and meet our expert team."
}

const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "CEO & Co-founder",
    image: "/team1.jpg",
    bio: "PhD in AI from Stanford, former Google researcher with 15+ years in machine learning and enterprise AI solutions.",
    linkedin: "https://linkedin.com/in/sarahjohnson",
    expertise: ["AI Strategy", "Machine Learning", "Business Development"]
  },
  {
    name: "Michael Chen",
    role: "CTO & Co-founder", 
    image: "/team2.jpg",
    bio: "Expert in scalable systems and cloud architecture, former Netflix engineering lead with deep expertise in data infrastructure.",
    linkedin: "https://linkedin.com/in/michaelchen",
    expertise: ["System Architecture", "Cloud Computing", "Data Engineering"]
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Head of Data Science",
    image: "/team3.jpg",
    bio: "PhD in Statistics from MIT, specialist in predictive analytics, MLOps, and statistical modeling with 12+ years of experience.",
    linkedin: "https://linkedin.com/in/emilyrodriguez",
    expertise: ["Data Science", "Predictive Analytics", "Statistical Modeling"]
  },
  {
    name: "James Wilson",
    role: "VP of Engineering",
    image: "/team4.jpg",
    bio: "Full-stack engineer with expertise in React, Node.js, and Python. Former tech lead at Microsoft with 10+ years experience.",
    linkedin: "https://linkedin.com/in/jameswilson",
    expertise: ["Full-Stack Development", "Team Leadership", "Product Development"]
  }
]

const values = [
  {
    icon: "🎯",
    title: "Excellence",
    description: "Delivering the highest quality solutions with precision, attention to detail, and commitment to exceeding expectations."
  },
  {
    icon: "🚀", 
    title: "Innovation",
    description: "Pushing boundaries with cutting-edge AI technologies, creative problem-solving, and forward-thinking approaches."
  },
  {
    icon: "🤝",
    title: "Partnership",
    description: "Building lasting relationships through trust, transparency, mutual success, and collaborative growth."
  },
  {
    icon: "🔒",
    title: "Integrity",
    description: "Maintaining the highest ethical standards in all our work, ensuring data privacy and responsible AI development."
  },
  {
    icon: "🌱",
    title: "Growth",
    description: "Fostering continuous learning, adaptation, and improvement in both our team and our clients' success."
  },
  {
    icon: "🌍",
    title: "Impact",
    description: "Creating meaningful solutions that drive positive change and solve real-world challenges across industries."
  }
]

const milestones = [
  { year: "2019", event: "Company Founded", description: "Started with a vision to democratize AI for businesses" },
  { year: "2020", event: "First Major Client", description: "Deployed our first enterprise AI solution" },
  { year: "2021", event: "Series A Funding", description: "Raised $5M to expand our AI platform capabilities" },
  { year: "2022", event: "100+ Clients", description: "Reached milestone of serving over 100 enterprise clients" },
  { year: "2023", event: "Global Expansion", description: "Opened offices in Europe and Asia-Pacific regions" },
  { year: "2024", event: "AI Innovation Award", description: "Recognized as AI Company of the Year" }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">About Our Company</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We're pioneers in harnessing advanced AI to drive data excellence and solve the world's most complex challenges.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 border-l-4 border-l-blue-600">
              <h2 className="text-3xl font-bold mb-6 text-blue-600">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To harness the power of advanced AI and machine learning to drive data excellence, 
                empowering businesses to tackle their most complex challenges and unlock unprecedented 
                growth opportunities through intelligent automation and data-driven insights.
              </p>
            </Card>
            
            <Card className="p-8 border-l-4 border-l-green-600">
              <h2 className="text-3xl font-bold mb-6 text-green-600">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the global leader in AI-driven data transformation, setting new standards for 
                innovation and excellence in artificial intelligence solutions across all industries, 
                while making advanced AI accessible and beneficial for organizations of all sizes.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded in 2019 by a team of AI researchers and industry veterans, we started with a simple belief: 
              that artificial intelligence should be accessible, practical, and transformative for businesses of all sizes. 
              Today, we've helped hundreds of organizations harness the power of AI to drive innovation and growth.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-center mb-8">Key Milestones</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {milestones.map((milestone, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="text-blue-600 font-bold text-xl mb-2">{milestone.year}</div>
                  <h4 className="font-semibold mb-2">{milestone.event}</h4>
                  <p className="text-sm text-gray-600">{milestone.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do and shape our company culture.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Meet Our Leadership Team</h2>
            <p className="text-lg text-gray-600">
              Experienced professionals passionate about AI innovation and business transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="mb-6">
                  <SafeImage
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                    width={128}
                    height={128}
                  />
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-sm mb-2">Expertise:</h4>
                  <div className="flex flex-wrap justify-center gap-1">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Connect on LinkedIn →
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Uptime SLA</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss how our AI expertise can drive innovation and growth for your organization.
          </p>
          <div className="flex gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </a>
            <a 
              href="/services" 
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
