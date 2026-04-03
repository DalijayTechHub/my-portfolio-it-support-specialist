"use client"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Server, Cloud, Terminal, LineChart, Headphones, GitBranch, Workflow } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export default function Skills() {
  const [activeTab, setActiveTab] = useState("categories")

  const skillCategories = [
    {
      category: "Operating Systems",
      skills: "Linux (Ubuntu, Amazon Linux), Windows, Mac OS",
      icon: <Server className="h-6 w-6" />,
    },
    {
      category: "Cloud & DevOps Tools",
      skills: "AWS (EC2, S3, IAM), Terraform, Jenkins, GitHub Actions",
      icon: <Cloud className="h-6 w-6" />,
    },
    {
      category: "Scripting & Coding",
      skills: "Bash, Python",
      icon: <Terminal className="h-6 w-6" />,
    },
    {
      category: "Monitoring & Logging",
      skills: "CloudWatch, UptimeRobot",
      icon: <LineChart className="h-6 w-6" />,
    },
    {
      category: "IT Support Tools",
      skills: "Microsoft 365, AnyDesk, TeamViewer, VPN, DNS, DHCP",
      icon: <Headphones className="h-6 w-6" />,
    },
    {
      category: "Version Control",
      skills: "Git, GitHub",
      icon: <GitBranch className="h-6 w-6" />,
    },
    {
      category: "CI/CD Pipelines",
      skills: "Jenkins, GitHub Actions",
      icon: <Workflow className="h-6 w-6" />,
    },
  ]

  const skillLevels = [
    { name: "Linux Administration", level: 85 },
    { name: "AWS Cloud Services", level: 80 },
    { name: "Windows Server", level: 75 },
    { name: "Jenkins & CI/CD", level: 70 },
    { name: "Terraform", level: 65 },
    { name: "Python Scripting", level: 60 },
    { name: "Bash Scripting", level: 85 },
    { name: "Network Configuration", level: 75 },
    { name: "Security Practices", level: 70 },
    { name: "Docker", level: 60 },
  ]

  return (
    <section id="skills" className="py-16 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Technical Skills</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
          </div>

          <Tabs defaultValue="categories" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-6">
              <TabsTrigger value="categories">By Category</TabsTrigger>
              <TabsTrigger value="proficiency">By Proficiency</TabsTrigger>
            </TabsList>

            <TabsContent value="categories" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((skill, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden transition-all duration-300 hover:shadow-md border-l-4 border-primary bg-[#FFF8F2] dark:bg-[#2A1A0A]"
                  >
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <div className="text-primary">{skill.icon}</div>
                        <CardTitle className="text-lg text-gray-800 dark:text-gray-100">{skill.category}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm text-gray-600 dark:text-gray-300">
                        {skill.skills}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="proficiency" className="mt-0">
              <Card className="border-l-4 border-primary bg-[#FFF8F2] dark:bg-[#2A1A0A]">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {skillLevels.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium text-gray-800 dark:text-gray-100">{skill.name}</span>
                          <span className="text-sm text-primary font-medium">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
