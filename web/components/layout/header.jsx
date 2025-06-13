"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import Container from "@/components/ui/container";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import MenuLinks from "./MenuLinks";
import { linksData } from "@/constants/Links";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbarTop, setShowNavbarTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShowNavbarTop(false);
      } else {
        setShowNavbarTop(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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
              <div className="flex items-center gap-3">
                <img
                  src="/social-icons/phone.svg"
                  className="w-4 h-4"
                  alt="phone"
                />
                <span className="hidden lg:block"> +91-9999999999</span>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="/social-icons/mail.svg"
                  className="w-5 h-4"
                  alt="mail"
                />
                <span className="hidden lg:block">
                  contact@balyantjaypanda.com
                </span>
              </div>
            </div>
            <div className="flex gap-3">
              <a href="/">
                <img
                  className="w-6 h-6 rounded-[2px]"
                  src="/social-icons/facebook.svg"
                  alt="fb"
                />
              </a>
              <a href="/">
                <img
                  className="w-6 h-6 rounded-[2px]"
                  src="/social-icons/instagram.svg"
                  alt="insta"
                />
              </a>
              <a href="/">
                <img
                  className="w-6 h-6 rounded-[2px]"
                  src="/social-icons/youtube.svg"
                  alt="yt"
                />
              </a>
              <a href="/">
                <img
                  className="w-6 h-6 rounded-[2px]"
                  src="/social-icons/twitter.svg"
                  alt="X"
                />
              </a>
              <a href="/">
                <img
                  className="w-6 h-6 rounded-[2px]"
                  src="/social-icons/linkedin.svg"
                  alt="linkedin"
                />
              </a>
            </div>
          </div>
        </Container>
      </div>
      <div
        className={`fixed top-0 w-full z-40 transition-all duration-300 flex justify-center  ${
          showNavbarTop ? "mt-10 md:mt-[3.5rem]" : ""
        }`}
        // style={{
        //   marginTop: showNavbarTop ? "3.5rem" : "0px", // 56px = h-14
        // }}
      >
        <div
          className=" bg-[#1B1F3B] flex items-center justify-between h-20 w-full md:w-[90%] lg:h-28 rounded-[6.25rem] border border-black shadow-lg text-white text-sm font-normal px-4 md:px-8"
          style={{ boxShadow: "0px 10px 7.7px rgba(0, 0, 0, 0.25)" }}
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

          <MenuLinks />
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
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
              <SheetContent
                side="left"
                className="bg-[#1B1F3B] text-white w-72"
              >
                <ul className="mt-6 space-y-2">
                  {linksData?.map((link, index) => (
                    <MobileMenuItem key={index} link={link} {...{setIsMenuOpen,isMenuOpen}} />
                  ))}
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        )}
      </div>
    </header>
  );
}

const MobileMenuItem = ({ link ,setIsMenuOpen,isMenuOpen}) => {
  const [open, setOpen] = useState(false);

  return (
    <li>
      <div className="flex justify-between items-center">
        <Link href={link?.href} onClick={() => setIsMenuOpen(!isMenuOpen)} className="block py-2 text-base font-medium">
          {link.label}
        </Link>
        {link.children && (
          <button
            onClick={() => setOpen(!open)}  
            className="text-white focus:outline-none"
          >
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>
        )}
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {link.children && (
          <ul className="pl-4 mt-1 space-y-1 border-l border-gray-600">
            {link.children.map((child, index) => (
              <MobileMenuItem key={index} link={child} />
            ))}
          </ul>
        )}
      </div>
    </li>
  );
};
