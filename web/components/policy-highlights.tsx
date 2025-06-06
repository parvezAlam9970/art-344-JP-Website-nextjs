import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function PolicyHighlights() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Policy <span className="text-orange-500">Initiatives</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Key policy areas and developmental initiatives for the progress of Kendrapara and Odisha.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Image src="/government-emblem.png" alt="Government emblem" width={24} height={24} />
              </div>
              <CardTitle className="text-blue-900">Infrastructure Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Focus on improving roads, bridges, and connectivity infrastructure across Kendrapara.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Image src="/government-emblem.png" alt="Government emblem" width={24} height={24} />
              </div>
              <CardTitle className="text-blue-900">Education & Healthcare</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Strengthening educational institutions and healthcare facilities for better public services.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Image src="/government-emblem.png" alt="Government emblem" width={24} height={24} />
              </div>
              <CardTitle className="text-blue-900">Agricultural Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Supporting farmers with modern techniques and financial assistance programs.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Image src="/government-emblem.png" alt="Government emblem" width={24} height={24} />
              </div>
              <CardTitle className="text-blue-900">Digital India</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Promoting digital literacy and technology adoption in rural areas.</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Image src="/government-emblem.png" alt="Government emblem" width={24} height={24} />
              </div>
              <CardTitle className="text-blue-900">Environmental Protection</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Initiatives for environmental conservation and sustainable development.</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Image src="/government-emblem.png" alt="Government emblem" width={24} height={24} />
              </div>
              <CardTitle className="text-blue-900">Youth Empowerment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Creating opportunities for youth through skill development and employment programs.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            View All Policies
          </Button>
        </div>
      </div>
    </section>
  )
}
