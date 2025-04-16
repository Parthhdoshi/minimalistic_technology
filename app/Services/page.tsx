"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {X,Menu,ArrowRight,Cpu, Layout, Rocket, Headset,Mail,Phone} from "lucide-react"
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const services = () => {
    const [isOpen, setIsOpen] = useState(false);
    const steps = [
      { src: '/srvcimg1.jpg', label: 'Launch' },
      { src: '/srvcimg2.jpg', label: 'Design' },
      { src: '/srvcimg3.jpg', label: 'Development' },
      { src: '/srvcimg4.jpg', label: 'Learn' },
    ];
    

  return (
      <div className="bg-[#222222] min-h-screen font-geist-sans text-white ">
          <header className ="fixed top-0 left-0 w-full z-50 bg-[#222222]/10  backdrop-blur-xl text-white p-4 md:flex md:justify-between md:items-center">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image src="/logo.jpg" alt="Logo" className= "backdrop-blur-2xl bg-[#222222]"  width={40} height={40} />
          <div className="flex flex-colbg- text-green-600 text-xl font-bold">
            <span>Minimilistic</span>
            <span>Technology</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>
            <nav
            className={`absolute top-full left-0 w-full bg-/50 p-4 space-y-4 md:static md:w-auto md:p-0 md:flex md:space-x-6 md:space-y-0 ${
                isOpen ? "block" : "hidden"
                }`}
            >    
             <ul className = "flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 ">
                <li className ="hover:text-green-600 cursor-pointer"><Link href="/">Home</Link></li>
                <li className ="hover:text-green-600 cursor-pointer"><Link href="/AboutUs">About Us</Link></li>
                <li className ="hover:text-green-600 cursor-pointer">Services</li>
             </ul>
            </nav>
            <div className="hidden md:flex space-x-2">
            <button className = "px-4 py-2 border bg-[#222222] text-green-600 rounded-lg hover:bg-green-400 hover:text-white transition">
                Log In
            </button>
            <button className = "px-4 py-2 border bg-green-600 text-black rounded-lg hover:bg-green-400 hover:text-white transition">
                Get Started
            </button>
            </div>
          </header>
        <div>
        <section className="flex flex-col items-center justify-center text-center min-h-[80vh] px-4 bg-[#222222] text-white">
          <h1 className="text-5xl font-bold mb-4">Build Websites Effortlessly</h1>
          <p className="text-lg  mt-5 mb-2">From idea to Live Website - We Make It Seamless</p>
          <p className="text-sm mt-3 mb-6">No coding needed | Super user-friendly | Fast deployment</p>
          <button className="bg-green-400 text-black px-6 py-2 rounded hover:bg-green-500 transition mt-2">
            Start Building
          </button>
        </section>  
        <div className="overflow-x-auto whitespace-nowrap py-8 px-4 flex gap-4 items-center scrollbar-hide">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          {/* Image Card */}
          <div className="inline-block w-64 flex-shrink-0">
            <Image
              src={step.src}
              alt={step.label}
              width={256}
              height={160}
              className="rounded-xl w-full h-40 object-cover mb-2"
            />
            <p className="text-center text-white">{step.label}</p>
          </div>
          {index < steps.length - 1 && (
            <div className="mx-2 text-white">
              <ArrowRight size={30} />
            </div>
              )}
            </div>
          ))}
        </div>
        
                  <div className="bg-green-700 text-center text-white rounded-xl px-6 py-4 mx-auto w-full max-w-4xl mt-8 sm:w-3/4">
            <p className="text-lg font-medium">Trusted by:</p>

            <p className="text-base mt-1">
              Agencies, Developers, and Entrepreneurs around the world
            </p>

            <div className="flex justify-center items-center gap-1 mt-3 mb-5 text-xl">
              <span>⭐ ⭐ ⭐ ⭐ ⭐</span>
          
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                      { Icon:Cpu, title: "AI Powered Website Builder", desc: "Generate layout tailored to your needs" },
                      { Icon:Layout, title: "Custom UI/UX Design", desc: "Crafted by expert designers" },
                      { Icon:Rocket, title: "Fast Deployment", desc: "Get your site live in 6 weeks" },
                      { Icon:Headset,  title: "24/7 Support", desc: "Were here whenever you need help" },
                    ].map((offer, index) => (
                      <div key={index} className="flex flex-col justify-end mt-10  mb-10 ml-10">
                        <offer.Icon size={40} className="bg-white text-black" />  
                        <h3 className="text-lg font-semibold mt-2">{offer.title}</h3>
                        <p className="text-gray-400 text-sm">{offer.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center py-4">
                  <button className= "text-black bg-green-600 py-3 px-10 rounded-lg mb-10">Try Now</button>
                  </div>







            <section className="flex flex-col md:flex-row items-center justify-between bg-[#222222] p-8 rounded-lg relative">
              <div className="md:w-1/2 text-white">
                <h2 className="text-4xl font-semibold mb-4">Get Started Today</h2>
                <p className="text-md text-gray-300 mb-6">
                  Join 1000+ businesses using minimalistic technology to build their dream website.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-green-300">
                    <Mail size={20} />
                    <span>Hi@minimalisticTechnology.com</span>
                  </div>
                  <div className="flex items-center space-x-2 text-green-300">
                    <Phone size={20} />
                    <span>+44-000-000-0000</span>
                  </div>
                </div>
              </div>

              <div className="relative flex justify-end w-full sm:w-3/4 md:w-1/2 mt-6 md:mt-0">
              <div 
                className="
                  absolute 
                  -top-2 sm:-top-4 lg:-top-4 
                  -bottom-6 sm:-bottom-8 lg:-bottom-8 
                  left-auto 
                  -right-6 sm:-right-8 lg:-right-10 
                  w-[80%] h-[100%] 
                  bg-green-200 
                  rounded-lg
                "
              ></div>
              <Image
                src="/meeting.jpg"
                alt="Team working on laptops"
                width={550}
                height={50}
                className="relative z-10 translate-x-1 translate-y-1"
              />
            </div>
            </section>






          <footer className="bg-[#222222] text-gray-300">cx
    <div className="border-b-2 w-full border-gray-500"></div>
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">

          <div>
            <h3 className="text-white font-semibold text-lg mb-3">Minimalistic Learning</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Services</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Contact Us</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-3">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">Book a Service</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Domain Name</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Support</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="absolute left-0 right-0 border-b-2 border-gray-700 "></div>
        <div className="text-white flex space-x-4 text-start h-3 md:mt-0">@ 2025 Minimilistic Technology All Rights Resserved</div>
        <div className="flex space-x-4 justify-end mt-4 mb-5 md:mt-0">
            <a href="#" className="hover:text-white transition">
              <FaFacebook size={24} className="text-white hover:text-white" />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaTwitter size={24} className="text-white hover:text-white" />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaYoutube size={24} className="text-white hover:text-white" />
            </a>
          </div>
        </div>
    </footer>

        </div>
      </div> 
 );
}
export default services;