import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function AboutSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            About <span className="text-orange-500">Balyant 'Jay' Panda</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the
            industry's standard dummy text.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Image
              src="/indian-politician-portrait.png"
              alt="Balyant Jay Panda"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Dedicated Public Service</h3>
            <p className="text-gray-600 mb-6">
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                Member of Parliament, Kendrapara
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                Former Member of Rajya Sabha
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                Business Leader & Entrepreneur
              </li>
            </ul>
            <Button className="bg-orange-500 hover:bg-orange-600">Read Full Biography</Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Parliamentary Experience</h3>
              <p className="text-gray-600">
                Extensive experience in parliamentary procedures and legislative processes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Business Leadership</h3>
              <p className="text-gray-600">Proven track record in business management and entrepreneurship.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Community Service</h3>
              <p className="text-gray-600">Dedicated to serving the people of Kendrapara and Odisha.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
