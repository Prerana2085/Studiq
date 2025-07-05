import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Star } from "lucide-react"

export function TopCourses() {
  const courses = [
    {
      id: 1,
      title: "UPSC Civil Services Complete Course",
      description: "Comprehensive preparation for UPSC CSE with expert faculty and updated curriculum.",
      image: "/placeholder.svg?height=200&width=300",
      duration: "12 months",
      students: "15,000+",
      rating: 4.8,
      price: "₹25,999",
      originalPrice: "₹35,999",
      badge: "Bestseller",
    },
    {
      id: 2,
      title: "SSC CGL Complete Package",
      description: "Master SSC CGL exam with our structured approach and practice tests.",
      image: "/placeholder.svg?height=200&width=300",
      duration: "8 months",
      students: "12,000+",
      rating: 4.7,
      price: "₹15,999",
      originalPrice: "₹22,999",
      badge: "Popular",
    },
    {
      id: 3,
      title: "Banking PO Complete Course",
      description: "Crack banking exams with our expert-designed curriculum and mock tests.",
      image: "/placeholder.svg?height=200&width=300",
      duration: "6 months",
      students: "8,500+",
      rating: 4.9,
      price: "₹12,999",
      originalPrice: "₹18,999",
      badge: "New",
    },
    {
      id: 4,
      title: "Railway Group D Complete Course",
      description: "Comprehensive preparation for Railway Group D with practice sessions.",
      image: "/placeholder.svg?height=200&width=300",
      duration: "4 months",
      students: "6,200+",
      rating: 4.6,
      price: "₹8,999",
      originalPrice: "₹12,999",
      badge: "Trending",
    },
  ]

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">📚 Top Courses</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully curated courses designed by experts to help you succeed in competitive exams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge className="absolute top-4 left-4 bg-blue-600">{course.badge}</Badge>
              </div>

              <CardHeader>
                <CardTitle className="text-lg font-semibold line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">{course.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {course.students}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium">{course.rating}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-600">{course.price}</div>
                    <div className="text-sm text-gray-500 line-through">{course.originalPrice}</div>
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Enroll Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  )
}
