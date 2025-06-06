import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Play } from "lucide-react"

export function MediaSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Media <span className="text-orange-500">Coverage</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Latest news, interviews, and media appearances covering key political and developmental issues.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="relative">
                <Image
                  src="/political-interview-meeting.png"
                  alt="Media coverage"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-blue-900 ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-blue-900 mb-2">Parliamentary Session Highlights</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Key discussions and interventions in the recent parliamentary session.
                </p>
                <span className="text-orange-500 text-sm font-medium">2 days ago</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="relative">
                <Image
                  src="/political-leader-speech.png"
                  alt="Media coverage"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-blue-900 ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-blue-900 mb-2">Development Projects Review</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Review of ongoing development projects in Kendrapara constituency.
                </p>
                <span className="text-orange-500 text-sm font-medium">1 week ago</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="relative">
                <Image
                  src="/community-political-meeting.png"
                  alt="Media coverage"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-blue-900 ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-blue-900 mb-2">Community Interaction</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Direct interaction with constituents addressing their concerns and feedback.
                </p>
                <span className="text-orange-500 text-sm font-medium">2 weeks ago</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            View All Media
          </Button>
        </div>
      </div>
    </section>
  )
}
