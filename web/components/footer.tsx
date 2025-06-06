import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">BJP</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Balyant 'Jay' Panda</h3>
                <p className="text-sm text-gray-300">Member of Parliament</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Dedicated to serving the people of Kendrapara and working towards the development of Odisha.
            </p>
            <div className="flex space-x-4">
              <span className="text-xl cursor-pointer hover:text-orange-500">📘</span>
              <span className="text-xl cursor-pointer hover:text-orange-500">🐦</span>
              <span className="text-xl cursor-pointer hover:text-orange-500">📷</span>
              <span className="text-xl cursor-pointer hover:text-orange-500">📺</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-orange-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-orange-500">
                  About
                </Link>
              </li>
              <li>
                <Link href="/policy" className="text-gray-300 hover:text-orange-500">
                  Policy
                </Link>
              </li>
              <li>
                <Link href="/kendrapara" className="text-gray-300 hover:text-orange-500">
                  Kendrapara
                </Link>
              </li>
              <li>
                <Link href="/media" className="text-gray-300 hover:text-orange-500">
                  Media
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-orange-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Subscribe Our Newsletter</h4>
            <p className="text-gray-300 text-sm mb-4">Stay updated with the latest news and developments.</p>
            <div className="flex space-x-2">
              <Input
                placeholder="Enter Email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="bg-orange-500 hover:bg-orange-600">Subscribe</Button>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Get In Touch</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-300">📞 +91-9999999999</p>
              <p className="text-gray-300">✉️ contact@balyantjaypanda.com</p>
              <p className="text-gray-300">📍 Parliament House, New Delhi</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">© 2023 Balyant 'Jay' Panda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
