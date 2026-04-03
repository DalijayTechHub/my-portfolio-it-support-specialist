import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Brain, Search, Shuffle } from "lucide-react"

export default function Qualities() {
  const qualities = [
    {
      title: "Strong Communicator",
      description:
        "Excellent at explaining technical concepts to non-technical stakeholders and collaborating with team members.",
      icon: <MessageSquare className="h-6 w-6" />,
    },
    {
      title: "Problem Solver",
      description: "Quick to identify issues and implement effective solutions with a methodical approach.",
      icon: <Brain className="h-6 w-6" />,
    },
    {
      title: "Detail-Oriented",
      description: "Meticulous attention to detail with a focus on security, reliability, and best practices.",
      icon: <Search className="h-6 w-6" />,
    },
    {
      title: "Adaptable",
      description:
        "Comfortable working in diverse environments, both on-site and remote, with the ability to quickly learn new technologies.",
      icon: <Shuffle className="h-6 w-6" />,
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Professional Qualities</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualities.map((quality, index) => (
              <Card key={index} className="border-l-4 border-primary bg-[#FFF8F2] dark:bg-[#2A1A0A]">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <div className="text-primary">{quality.icon}</div>
                    <CardTitle className="text-lg text-gray-800 dark:text-gray-100">{quality.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-gray-600 dark:text-gray-300">
                    {quality.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
