import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Learn more about my journey, experience, and commitment to public service.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Balyant Jay Panda"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Balyant 'Jay' Panda</h2>
              <p className="text-gray-600 mb-6">
                Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting.
              </p>
              <p className="text-gray-600 mb-6">
                Remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Education</h4>
                  <p className="text-gray-600 text-sm">MBA, Engineering Background</p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Experience</h4>
                  <p className="text-gray-600 text-sm">20+ Years in Public Service</p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Constituency</h4>
                  <p className="text-gray-600 text-sm">Kendrapara, Odisha</p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Party</h4>
                  <p className="text-gray-600 text-sm">Bharatiya Janata Party</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Parliamentary Career</h3>
                <p className="text-gray-600 mb-4">
                  Extensive experience in both Lok Sabha and Rajya Sabha, contributing to various committees and policy
                  discussions.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Member of Parliament (Lok Sabha)</li>
                  <li>• Former Member of Rajya Sabha</li>
                  <li>• Committee Member on Various Portfolios</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Business Leadership</h3>
                <p className="text-gray-600 mb-4">
                  Proven track record in business management and entrepreneurship before entering politics.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Corporate Executive Experience</li>
                  <li>• Strategic Planning & Management</li>
                  <li>• Innovation & Technology Focus</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Social Initiatives</h3>
                <p className="text-gray-600 mb-4">
                  Active involvement in various social causes and community development programs.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Education & Healthcare Initiatives</li>
                  <li>• Rural Development Programs</li>
                  <li>• Environmental Conservation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
