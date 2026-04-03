"use client"
import { useState } from "react"

export default function Journey() {
  const [active, setActive] = useState<number | null>(null)

  const timelineItems = [
    {
      year: "Present",
      title: "ALX Cloud Computing Program",
      description:
        "Currently enrolled in the ALX Cloud Computing program, to deepen my knowledge and understanding on AWS Core Services and gain hands-on experience with AWS services, CI/CD pipelines, and infrastructure automation.",
    },
    {
      year: "2024",
      title: "Freelance WordPress & AWS Website Deployment",
      description:
        "Designed and deployed websites like Dalijay Tech Hub using AWS EC2, Route 53. Combined frontend customization with secure cloud hosting.",
    },
    {
      year: "October – December 2024",
      title: "DevOps Internship – ExLearn Technologies",
      description:
        "Joined ExLearn Technologies as a remote DevOps intern, where I built CI/CD pipelines, managed AWS infrastructure, and gained hands-on experience with Terraform and Linux server optimization.",
    },
    {
      year: "April – September 2023",
      title: "IT Instructor – Charlotte Dolphyne Technical Institute",
      description:
        "Taught Web Design and C++ programming, configured classroom network environments, and provided IT support for smooth operations.",
    },
    {
      year: "2022 – Present",
      title: "System Administrator – Kolonos BV",
      description:
        "Configured and optimized network systems, managed data backup and recovery, and provided technical support while monitoring system performance to maintain uptime and efficiency.",
    },
    {
      year: "2021",
      title: "Google IT Support Certificate",
      description:
        "Began my IT career by earning the Google IT Support Certificate, building a strong foundation in networking, operating systems, system administration, and IT security.",
    },
  ]

  return (
    <section id="journey" className="py-16 scroll-mt-20">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Professional Journey</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
          </div>

          <div className="relative mt-10">
            <div className="absolute top-0 left-[15px] sm:left-1/2 w-0.5 h-full bg-primary/30 -translate-x-1/2 z-0 rounded-full" />

            <div className="relative z-10">
              {timelineItems.map((item, index) => (
                <div
                  key={index}
                  className={`mb-8 flex flex-col sm:flex-row ${index % 2 === 0 ? "sm:flex-row-reverse" : ""}`}
                >
                  <div className="sm:w-1/2 flex items-center justify-center sm:justify-end sm:pr-8">
                    <div
                      onClick={() => setActive(index)}
                      className={`
                        cursor-pointer rounded-lg p-6 w-full
                        transition-all duration-300 ease-in-out
                        ${
                          active === index
                            ? "bg-[#FFF8F2] border-l-4 sm:border-l-0 sm:border-r-4 border-primary dark:bg-[#2A1A0A]"
                            : "bg-card hover:bg-card/80"
                        }
                        ${index % 2 === 0 ? "sm:text-right sm:border-r-0 sm:border-l-4" : ""}
                      `}
                    >
                      <h3 className={`text-xl font-bold ${active === index ? "text-gray-800 dark:text-gray-100" : ""}`}>
                        {item.title}
                      </h3>
                      <p className="text-primary font-medium">{item.year}</p>
                      <p className={`mt-2 ${active === index ? "text-gray-600 dark:text-gray-300" : "text-muted-foreground"}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex sm:w-9 justify-center my-4 sm:my-0">
                    <div
                      className={`w-5 h-5 rounded-full border-4 ${
                        active === index ? "bg-primary border-background" : "bg-primary/30 border-background"
                      }`}
                    />
                  </div>

                  <div className="sm:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
