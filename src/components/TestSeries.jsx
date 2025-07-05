import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Clock, TrendingUp, Award } from "lucide-react"

export function TestSeries() {
  const testSeries = [
    {
      id: 1,
      title: "UPSC Prelims Test Series 2024",
      description: "Comprehensive test series with 50+ mock tests and detailed analysis.",
      tests: 50,
      duration: "3 hours each",
      attempts: "25,000+",
      price: "₹2,999",
      features: ["Detailed Solutions", "Performance Analysis", "All India Ranking"],
    },
    {
      id: 2,
      title: "SSC CGL Mock Test Series",
      description: "Practice with our expertly designed mock tests for SSC CGL preparation.",
      tests: 30,
      duration: "2 hours each",
      attempts: "18,000+",
      price: "₹1,999",
      features: ["Instant Results", "Weak Area Analysis", "Previous Year Papers"],
    },
    {
      id: 3,
      title: "Banking PO Test Series",
      description: "Master banking exams with our comprehensive test series and analysis.",
      tests: 40,
      duration: "3 hours each",
      attempts: "12,000+",
      price: "₹2,499",
      features: ["Sectional Tests", "Full Length Mocks", "Expert Analysis"],
    },
  ]

  return (
    <section id="test-series" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">📝 Test Series</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Practice with our comprehensive test series designed to simulate real exam conditions and boost your
            confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testSeries.map((series) => (
            <Card key={series.id} className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Active
                  </Badge>
                  <div className="text-2xl font-bold text-blue-600">{series.price}</div>
                </div>
                <CardTitle className="text-xl font-semibold">{series.title}</CardTitle>
                <CardDescription>{series.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-semibold">{series.tests}</div>
                      <div className="text-sm text-gray-600">Tests</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-semibold">{series.duration}</div>
                      <div className="text-sm text-gray-600">Duration</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-600">
                    <span className="font-semibold">{series.attempts}</span> students attempted
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Key Features:</h4>
                  <ul className="space-y-1">
                    {series.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <Award className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">Start Test Series</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
