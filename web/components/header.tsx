"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Search } from "lucide-react"
import Container from "./ui/container"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="bg-orange-500 text-white text-sm py-1">
        <Container>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-4">
            <span>📞 +91-9999999999</span>
            <span>✉️ contact@balyantjaypanda.com</span>
          </div>
          <div className="flex space-x-2">
            <span>🌐</span>
            <span>📘</span>
            <span>🐦</span>
            <span>📷</span>z
            <span>📺</span>
          </div>
        </div>
        </Container>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">BJP</span>
              </div>
              <div>
                <h1 className="font-bold text-lg text-blue-900">Balyant 'Jay' Panda</h1>
                <p className="text-xs text-gray-600">Member of Parliament • Kendrapara, Odisha</p>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-orange-500 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-orange-500 font-medium">
              About
            </Link>
            <Link href="/policy" className="text-gray-700 hover:text-orange-500 font-medium">
              Policy
            </Link>
            <Link href="/kendrapara" className="text-gray-700 hover:text-orange-500 font-medium">
              Kendrapara
            </Link>
            <Link href="/media" className="text-gray-700 hover:text-orange-500 font-medium">
              Media
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-orange-500 font-medium">
              Contact
            </Link>
            <Search className="w-5 h-5 text-gray-600 cursor-pointer" />
          </nav>

          <Button className="hidden md:block bg-orange-500 hover:bg-orange-600">Get In Touch</Button>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-orange-500 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-orange-500 font-medium">
                About
              </Link>
              <Link href="/policy" className="text-gray-700 hover:text-orange-500 font-medium">
                Policy
              </Link>
              <Link href="/kendrapara" className="text-gray-700 hover:text-orange-500 font-medium">
                Kendrapara
              </Link>
              <Link href="/media" className="text-gray-700 hover:text-orange-500 font-medium">
                Media
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-orange-500 font-medium">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
