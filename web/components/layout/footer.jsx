import Image from 'next/image';
import React from 'react';
import { FaInstagram, FaFacebookF, FaYoutube, FaTimes, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import Container from '@/components/ui/container';

const Footer = () => {
  return (
    <footer className="bg-[#1B1D3A] text-white py-12 px-6 md:px-16">
        <Container className="lg:px-10">
      <div className="grid md:grid-cols-5 gap-20">
        {/* Logo & Description */}
        <div className='md:col-span-2'>
          <div className="flex items-center space-x-2">
            <Image
                className=" object-contain"
                src="/social-icons/nav-logo.png"
                alt=""
                width={415}
                height={60}
              />
          </div>
          <p className="text-[#F5F5F5] mt-6 text-sm font-light">
            Lorem ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley interiors, beautiful results. specimen book.
          </p>
        </div>

        {/* Quick Links */}
        <div className='col-span-1'>
          <h3 className="font-normal text-xl mb-4">Quick Links</h3>
          <div className='flex gap-4 font-light text-sm'>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Policy</a></li>
          </ul>
          <ul className="space-y-2 text-gray-300">
          <li><a href="#">Kendrapara</a></li>
            <li><a href="#">Media</a></li>
            <li><a href="#">Contact</a></li>
            </ul>
            </div>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-2">
          <h3 className="font-semibold text-lg mb-4">Subscribe Our Newsletter</h3>
          <div className="flex max-w-md">
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full px-4 py-2 bg-[#0F1128] text-white placeholder-gray-400 rounded-l-md outline-none"
            />
            <button className="bg-white text-[#1B1D3A] font-medium px-5 py-2 rounded-r-md border-l border-orange-500">
              SUBSCRIBE
            </button>
          </div>

          {/* Contact */}
          <div className="mt-8">
            <h4 className="font-semibold text-lg mb-2">Get In Touch</h4>
            <div className="flex items-center space-x-3 text-gray-300 text-sm">
              <FaPhoneAlt />
              <span>+91 00000 00000</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300 text-sm mt-2">
              <FaEnvelope />
              <span>jaypanda@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-500 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© 2025 Baijayant “Jay” Panda, All Rights Reserved.</p>
        <div className="flex space-x-5 mt-4 md:mt-0">
          <FaFacebookF />
          <FaInstagram />
          <FaYoutube />
          <FaTimes />
        </div>
      </div>
      </Container>
    </footer>
  );
};

export default Footer;
