import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ask Your MP</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            People can drop their questions and concerns. Your voice matters.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Your Voice <span className="text-orange-500">Matters</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the
                industry's standard dummy text ever since the 1500s.
              </p>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-blue-900">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-orange-500">📞</span>
                    <span>+91-9999999999</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-orange-500">✉️</span>
                    <span>contact@balyantjaypanda.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-orange-500">📍</span>
                    <span>Parliament House, New Delhi</span>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-blue-900">Office Hours</h3>
                <div className="text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-900">Send Your Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <Input placeholder="Enter your first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <Input placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone No.</label>
                      <Input placeholder="Enter your phone number" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <Input type="email" placeholder="Enter your email" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <Textarea placeholder="Enter your message or question" rows={6} />
                  </div>

                  <Button className="w-full bg-orange-500 hover:bg-orange-600">Submit</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
