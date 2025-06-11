"use client"

import { useState,useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Search , ChevronDown} from "lucide-react"
import Container from "@/components/ui/container"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

export function Header() {
   const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showNavbarTop, setShowNavbarTop] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShowNavbarTop(false)
      } else {
        setShowNavbarTop(true)
      }
      setLastScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <header>
      <div
        className={`bg-[#F47216] text-white text-md font-light transition-transform duration-300 fixed top-0 left-0 w-full z-50 ${
          showNavbarTop ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ willChange: "transform" }}
      >
        <Container>
        <div className="flex justify-between items-center h-10 md:h-14 py-1">
          <div className="flex gap-3 md:gap-6">
            <div  className="flex items-center gap-3">
            <img src="/social-icons/phone.svg" className="w-4 h-4" alt="phone" /><span className="hidden lg:block"> +91-9999999999</span>
            </div>
            <div className="flex items-center gap-3">
            <img src="/social-icons/mail.svg" className="w-5 h-4" alt="mail" /><span className="hidden lg:block">contact@balyantjaypanda.com</span>
            </div>
          </div>
          <div className="flex gap-3">
          <a href="/"><img className="w-6 h-6 rounded-[2px]" src="/social-icons/facebook.svg" alt="fb" /></a>
          <a href="/"><img className="w-6 h-6 rounded-[2px]" src="/social-icons/instagram.svg" alt="insta" /></a>
          <a href="/"><img className="w-6 h-6 rounded-[2px]" src="/social-icons/youtube.svg" alt="yt" /></a>
          <a href="/"><img className="w-6 h-6 rounded-[2px]" src="/social-icons/twitter.svg" alt="X" /></a>
          <a href="/"><img className="w-6 h-6 rounded-[2px]" src="/social-icons/linkedin.svg" alt="linkedin" /></a>
          </div>
        </div>
        </Container>
      </div>
      <div
        className={`fixed top-0 w-full z-40 transition-all duration-300 flex justify-center  ${showNavbarTop ? "mt-10 md:mt-3.5rem" :""}`}
        // style={{
        //   marginTop: showNavbarTop ? "3.5rem" : "0px", // 56px = h-14
        // }}
      > 
        
        <div className=" bg-[#1B1F3B] flex items-center justify-between h-20 w-full md:w-[90%] lg:h-28 rounded-[6.25rem] border border-black shadow-lg text-white text-sm font-normal px-4 md:px-8"
        style={{boxShadow: '0px 10px 7.7px rgba(0, 0, 0, 0.25)',}}
        >
    
{/* <div className="">
  <img
    className="h-9 w-60 md:h-14 md:w-96 lg:w-[28rem] object-contain"
    src="/social-icons/nav-logo.svg"
    alt=""
  />
</div> */}
<div className="">
  <Image
    className=" object-contain"
    src="/social-icons/nav-logo.png"
    alt=""
    width={415}
    height={60}
  />
</div>

          <nav className="hidden text-sm lg:flex items-center lg:gap-4 xl:gap-8 xl:text-lg">
            <Link href="/" className="text-white hover:text-orange-500 font-normal xl:text-base">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-orange-500 font-normal flex items-center xl:gap-1 xl:text-base">
              About <ChevronDown className="w-4 h-4" />
            </Link>
            <Link href="/policy" className="text-white hover:text-orange-500 font-normal flex items-center xl:gap-1 xl:text-base">
              Policy <ChevronDown className="w-4 h-4" />
            </Link>
            <Link href="/kendrapara" className="text-white hover:text-orange-500 font-normal flex items-center xl:gap-1 xl:text-base">
              Kendrapara <ChevronDown className="w-4 h-4" />
            </Link>
            <Link href="/media" className="text-white hover:text-orange-500 font-normal flex items-center xl:gap-1 xl:text-base">
              Media <ChevronDown className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="text-white hover:text-orange-500 font-normal xl:text-base">
              Contact
            </Link>
            <Search className="w-5 h-5 cursor-pointer" />          
            <Button className="hidden md:block bg-white text-[#F47317] text-sm xl:text-[1rem] hover:bg-orange-600 hover:text-white rounded-[6.25rem]">Work With Me</Button>
          </nav>
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? "" : <Menu className="w-6 h-6" />}
          </button>


        </div>

        {isMenuOpen && (
              <div className="lg:hidden">
<Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
  <SheetTrigger asChild>
    <button className="lg:hidden" aria-label="Open menu">
      <Menu className="w-6 h-6" />
    </button>
  </SheetTrigger>
  <SheetContent side="left" className="bg-[#1B1F3B]">
    <nav className="flex flex-col space-y-4 mt-8">
      <Link href="/" className="text-white hover:text-orange-500 font-medium">
        Home
      </Link>
      <Link href="/about" className="text-white hover:text-orange-500 font-medium flex items-center gap-1">
        About <ChevronDown className="w-4 h-4" />
      </Link>
      <Link href="/policy" className="text-white hover:text-orange-500 font-medium flex items-center gap-1">
        Policy <ChevronDown className="w-4 h-4" />
      </Link>
      <Link href="/kendrapara" className="text-white hover:text-orange-500 font-medium flex items-center gap-1">
        Kendrapara <ChevronDown className="w-4 h-4" />
      </Link>
      <Link href="/media" className="text-white hover:text-orange-500 font-medium flex items-center gap-1">
        Media <ChevronDown className="w-4 h-4" />
      </Link>
      <Link href="/contact" className="text-white hover:text-orange-500 font-medium">
        Contact
      </Link>
    </nav>
  </SheetContent>
</Sheet>
  </div>
        )}
      </div>
    </header>
  )
}
