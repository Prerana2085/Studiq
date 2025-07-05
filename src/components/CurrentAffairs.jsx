import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export function CurrentAffairs() {
  const articles = [
    {
      id: 1,
      title: "Union Budget 2024: Key Highlights for Competitive Exams",
      excerpt: "Important budget announcements that are crucial for UPSC, SSC, and Banking exams preparation.",
      category: "Economy",
      date: "2024-02-01",
      readTime: "5 min read",
      image: "/placeholder.svg?height=200&width=300",
      isNew: true,
    },
    {
      id: 2,
      title: "India's Space Missions: Recent Achievements and Future Plans",
      excerpt: "Comprehensive coverage of ISRO's recent missions and their significance for current affairs.",
      category: "Science & Technology",
      date: "2024-01-28",
      readTime: "7 min read",
      image: "/placeholder.svg?height=200&width=300",
      isNew: true,
    },
    {
      id: 3,
      title: "Climate Change Summit 2024: India's Commitments",
      excerpt: "Key takeaways from the recent climate summit and India's environmental policies.",
      category: "Environment",
      date: "2024-01-25",
      readTime: "6 min read",
      image: "/placeholder.svg?height=200&width=300",
      isNew: false,
    },
    {
      id: 4,
      title: "Digital India Initiative: Progress and Impact",
      excerpt: "Latest developments in Digital India program and its implications for governance.",
      category: "Governance",
      date: "2024-01-22",
      readTime: "4 min read",
      image: "/placeholder.svg?height=200&width=300",
      isNew: false,
    },
  ]

  const getCategoryColor = (category) => {
    const colors = {
      Economy: "bg-blue-100 text-blue-800",
      "Science & Technology": "bg-purple-100 text-purple-800",
      Environment: "bg-green-100 text-green-800",
      Governance: "bg-orange-100 text-orange-800",
    }
    return colors[category] || "bg-gray-100 text-gray-800"
  }

  return (
    <section id="current-affairs" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">📰 Current Affairs Updates</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest current affairs and important news that matter for your competitive exam
            preparation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles.map((article) => (
            <Card key={article.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                {article.isNew && <Badge className="absolute top-4 left-4 bg-red-600">New</Badge>}
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className={getCategoryColor(article.category)}>
                    {article.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-semibold line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">{article.excerpt}</CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(article.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {article.readTime}
                  </div>
                </div>

                <Button variant="ghost" className="w-full justify-between p-0 h-auto text-blue-600 hover:text-blue-700">
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  )
}
