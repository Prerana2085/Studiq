import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  GraduationCap,
  Users,
  Trophy,
  BookOpen,
  Clock,
  HeadphonesIcon,
  Star,
  Target,
} from "lucide-react"

export function WhyChooseUs() {
  const features = [
    {
      icon: GraduationCap,
      title: "Expert Faculty",
      description: "Learn from experienced educators and subject matter experts with proven track records.",
    },
    {
      icon: Users,
      title: "50,000+ Students",
      description: "Join our large community of successful students who have achieved their career goals.",
    },
    {
      icon: Trophy,
      title: "95% Success Rate",
      description: "Our students consistently achieve high success rates in competitive examinations.",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Study Material",
      description: "Access to updated, well-researched study materials covering entire syllabus.",
    },
    {
      icon: Clock,
      title: "24/7 Learning Access",
      description: "Study at your own pace with round-the-clock access to courses and materials.",
    },
    {
      icon: HeadphonesIcon,
      title: "Dedicated Support",
      description: "Get personalized support and guidance from our dedicated student success team.",
    },
    {
      icon: Star,
      title: "Quality Content",
      description: "High-quality video lectures, notes, and practice materials designed by experts.",
    },
    {
      icon: Target,
      title: "Result-Oriented Approach",
      description: "Focused methodology designed to maximize your chances of success in exams.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">🧑‍🏫 Why Choose StudyIQ?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what makes StudyIQ the preferred choice for thousands of students preparing for competitive exams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-blue-100 rounded-full group-hover:bg-blue-600 transition-colors duration-300">
                    <feature.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-600 font-medium">Courses Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-gray-600 font-medium">Happy Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Expert Teachers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600 font-medium">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
