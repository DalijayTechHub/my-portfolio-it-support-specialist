"use client"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Calendar } from "lucide-react"

export default function Certifications() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const certifications = [
    {
      name: "Google IT Support Certificate",
      issuer: "Google",
      date: "October 2021",
      icon: <Award className="h-8 w-8" />,
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "March 2023",
      icon: <Award className="h-8 w-8" />,
    },
    {
      name: "AWS Certified Solution Architect",
      issuer: "Amazon Web Services",
      date: "",
      icon: <Award className="h-8 w-8" />,
    },
    {
      name: "IBM Certificate in Cloud Computing",
      issuer: "IBM",
      date: "July 2023",
      icon: <Award className="h-8 w-8" />,
    },
    {
      name: "Google Data Analytics Certificate",
      issuer: "Google",
      date: "January 2024",
      icon: <Award className="h-8 w-8" />,
    },
  ]

  return (
    <section id="certifications" className="py-16 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Certifications</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="transition-all duration-300 transform hover:-translate-y-1"
              >
                <Card
                  className={`text-center h-full transition-all duration-300 border-l-4 border-primary bg-[#FFF8F2] dark:bg-[#2A1A0A] ${
                    hoveredIndex === index ? "shadow-lg" : ""
                  }`}
                >
                  <CardHeader className="pb-2 flex flex-col items-center">
                    <div className="text-primary mb-2">{cert.icon}</div>
                    <CardTitle className="text-lg text-gray-800 dark:text-gray-100">{cert.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 dark:text-gray-300">{cert.issuer}</CardDescription>
                    <div className="flex items-center justify-center mt-2 text-xs text-primary">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{cert.date}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
