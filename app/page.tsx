"use client";
import Image from "next/image";
import { Cpu, Layout, Rocket, Headset,Menu,X} from "lucide-react";
import { useState } from "react";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen font-geist-sans bg-[#0A0A0A] text-white">

      <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md text-white p-4 md:flex md:justify-between md:items-center">
      {/* Logo Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image src="/logo.jpg" alt="Logo" className= "backdrop-blur-2xl" width={40} height={40} />
          <div className="flex flex-col text-green-400 text-xl font-bold">
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

      {/* Navigation Menu */}
      <nav
        className={`absolute top-full left-0 w-full bg-black/50 p-4 space-y-4 md:static md:w-auto md:p-0 md:flex md:space-x-6 md:space-y-0 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <li className="hover:text-green-400 cursor-pointer">Home</li>
          <li className="hover:text-green-400 cursor-pointer">About Us</li>
          <li className="hover:text-green-400 cursor-pointer">Services</li>
        </ul>
      </nav>

      {/* Buttons (Login & Get Started) */}
      <div className="hidden md:flex space-x-2">
        <button className="px-4 py-2 border border-green-400 text-green-400 rounded-lg hover:bg-green-400 hover:text-white transition">
          Log In
        </button>
        <button className="px-4 py-2 bg-green-400 text-gray-900 rounded-lg hover:bg-green-500 transition">
          Get Started
        </button>
      </div>
    </header>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full mt-40 sm:mt-60 px-6 sm:px-16">
        <div className="max-w-xl text-left">
          <h1 className="text-3xl sm:text-4xl font-bold">Build Websites Effortlessly</h1>
          <p className="text-base sm:text-lg">From Idea to Live Website - We Make It Seamless</p>
          <div className="text-xs sm:text-sm text-gray-400 mt-4">
            <span>No coding needed</span> | <span>AI powered design</span> | <span>Fast deployment</span>
          </div>
          <button className="bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-6 rounded-lg mt-6">
            Start Building
          </button>
        </div>

        <div className="rounded flex justify-end w-full">
          <Image src="/api_img.jpg" alt="Hero" width={500} height={400} className="rounded-2xl mt-4" />
        </div>
      </div>

      {/* What We Offer Section */}
      <section className="text-white text-center mt-12 p-8">
        <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { Icon:Cpu, title: "AI Powered Website Builder", desc: "Generate layout tailored to your needs" },
            { Icon:Layout, title: "Custom UI/UX Design", desc: "Crafted by expert designers" },
            { Icon:Rocket, title: "Fast Deployment", desc: "Get your site live in 6 weeks" },
            { Icon:Headset,  title: "24/7 Support", desc: "Were here whenever you need help" },
           ].map((offer, index) => (
            <div key={index} className="flex flex-col items-center">
              <offer.Icon size={40} className="text-green-400" />  
              <h3 className="text-lg font-semibold mt-2">{offer.title}</h3>
              <p className="text-gray-400 text-sm">{offer.desc}</p>
            </div>
          ))}
        </div>
        <button className="mt-6 bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-6 rounded-lg">
          Try it Now
        </button>
      </section>
  
      <section className="mt-7 text-white text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold">Pricing Plan</h2>

        <div className="mt-7 flex flex-col md:flex-row justify-center items-center gap-6">
          {/* Starter Plan */}
          <div className="bg-green-400 p-6 rounded-2xl hover:xl: w-full sm:w-3/4 md:w-1/4 shadow-lg">
            <h3 className="text-xl font-semibold">Starter</h3>
            <p className="text-2xl font-bold">$49 <span className="text-sm">/month</span></p>
            <button className="mt-4 bg-green-500 text-black hover:text-white px-2 py-2 rounded-lg w-full">
              Get Started
            </button>
            <ul className="mt-4 text-left space-y-2">
              <li>✅ 5-page custom website</li>
              <li>✅ Mobile & SEO-friendly design</li>
              <li>✅ Basic contact form integration</li>
              <li>✅ Standard hosting (1 year)</li>
              <li>✅ Email support</li>
            </ul>
          </div>

          {/* Professional Plan */}
          <div className="bg-green-500 p-6 rounded-2xl w-full sm:w-3/4 md:w-1/4 shadow-lg relative">
          <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 bg-green-600 text-black px-3 py-1 text-sm rounded-lg">
          Most Popular
            </div>
            <h3 className="text-xl font-semibold">Professional</h3>
            <p className="text-2xl font-bold">$99 <span className="text-sm">/month</span></p>
            <button className="mt-4 bg-green-400 text-black hover:text-white px-4 py-2 rounded-lg w-full">
              Get Started
            </button>
            <ul className="mt-4 text-left space-y-2">
              <li>✅ Mobile, SEO & speed optimized</li>
              <li>✅ Blog & social media integration</li>
              <li>✅ Standard hosting (1 year)</li>
              <li>✅ 3 months of free maintenance</li>
              <li>✅ Priority support</li>
            </ul>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-green-400 p-6 rounded-2xl w-full sm:w-3/4 md:w-1/4 shadow-lg">
            <h3 className="text-xl font-semibold">Enterprise</h3>
            <p className="text-2xl font-bold">$199 <span className="text-sm">/month</span></p>
            <button className="mt-4 bg-green-500 text-black hover:text-amber-50 px-4 py-2 rounded-lg w-full">
              Get Started
            </button>
            <ul className="mt-4 text-left space-y-2">
              <li>✅ E-commerce,custom web app</li>
              <li>✅ API integrations & automation</li>
              <li>✅ Premium hosting (1 year)</li>
              <li>✅ 5 months of free maintenance</li>
              <li>✅ Dedicated manager,24/7 support</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
 }
export default Home;
