"use client";

import Link from "next/link";
import React, { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { linksData } from "@/constants/Links";
import FormModal from "@/components/modal/FormModal"

const MenuLinks = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <nav className="hidden text-sm lg:flex items-center lg:gap-4 xl:gap-8 xl:text-lg">
      {linksData.map((item, idx) => (
        <div key={idx} className="relative group">
          {item.children ? (
            <span className="text-white hover:text-orange-500 font-normal flex items-center xl:gap-1 xl:text-base cursor-default">
              {item.label}
              <ChevronDown className="w-4 h-4" />
            </span>
          ) : (
            <Link
              href={item.href}
              className="text-white hover:text-orange-500 font-normal flex items-center xl:gap-1 xl:text-base"
            >
              {item.label}
            </Link>
          )}

          {/* Dropdown */}
          {item.children && (
            <div className="absolute top-full left-0 mt-2 origin-top overflow-hidden  scale-y-0 group-hover:scale-y-100 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white shadow-lg rounded-[5px] min-w-[180px] z-50">
              <ul className="text-black text-sm">
                {item.children.map((child, cIdx) => (
                  <li key={cIdx}>
                    <Link
                      href={child.href}
                      className="block px-4 py-2 hover:bg-orange-100"
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}

      <Search className="w-5 h-5 cursor-pointer text-white" />
      <Button
        onClick={() => setIsOpen(true)}
        className="hidden md:block bg-white text-[#F47317] text-sm xl:text-[1rem] hover:bg-orange-600 hover:text-white rounded-[6.25rem]"
      >
        Work With Me
      </Button>

     
    </nav>

 {isOpen && (
        <FormModal {...{setIsOpen,isOpen}} />
      )}
    </>
  );
};

export default MenuLinks;
