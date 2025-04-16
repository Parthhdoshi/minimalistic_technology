"use client";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import {X , Menu,} from "lucide-react";
import {FaFacebook, FaTwitter,FaYoutube} from "react-icons/fa"
import { motion } from "framer-motion";
 
const images = ["/ourSrvc1.jpg", "/ourSrvc.jpg", "/ourSrvc2.jpg"];

const AboutUs = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(1); 

     
    
    return (
        <div className ="bg-[#222222] min-h-screen font-geist-sans text-white" >
          <header className ="fixed top-0 left-0 w-full z-50 bg-[#222222]/10  backdrop-blur-xl text-white p-4 md:flex md:justify-between md:items-center">
          <div className ="flex items-center  justify-between">
          <div className = "flex items-center space-x-2">
            <Image src="/logo.jpg" alt="LOGO" className = "backdrop-blur-2xl"width={40} height={40} />
            <div className = "flex flex-colbg-[#7ed957] text-green-600 text-xl font-bold">
                <span>Minimilistic</span>
                <span> Tecnology</span>
                </div>
                </div>
                <button
                    className = "md:hidden p-2 text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={30} /> : <Menu size={30}/>}
                </button>
            </div>
            <nav
            className={`absolute top-full left-0 w-full bg-/50 p-4 space-y-4 md:static md:w-auto md:p-0 md:flex md:space-x-6 md:space-y-0 ${
                isOpen ? "block" : "hidden"
                }`}
            >    
             <ul className = "flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 ">
                <li className ="hover:text-green-600 cursor-pointer"><Link href="/">Home</Link></li>
                <li className ="hover:text-green-600 cursor-pointer">About Us</li>
                <li className ="hover:text-green-600 cursor-pointer"><Link href="/Services">Services</Link></li>
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
          <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-[#222222] mt-7 text-white">
          <div className="text-center md:text-left md:w-1/2">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                We help <br /> <span className="text-green-500">Startups</span> <br /> bring their ideas to life
                </h1>
                <button className="mt-6 px-6 py-3 bg-green-500 text-gray-900 rounded-lg font-bold hover:bg-green-600 transition">
                Start Building
                </button>
          </div>
      
            <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
                <Image
                src="/startup.jpg"
                alt="Startup Illustration"
                width={500} 
                height={350} 
                className="w-full max-w-md mt-7 rounded-2xl"
                />
            </div>
            </section>
            <section className = "text-white text-center mt-10 p-8 ">
                <h2 className = "text-white text-4xl font-bold m-6"> Who we are</h2>
                <div className = "text-white text-center mb-7 text-xl">
                    Minimalistic Technology is a team of innovative web developers,<br />
                    designers, and strategistsdedicated to transforming ideas into<br/> 
                    world-class digital products.
                </div>
                <div className="w-full mt-7 flex justify-center">
                <Image 
                    src="/weAre.jpg"
                    alt="weAre"
                    width={1200}   
                    height={700}   
                    className="w-[100%] md:w-[60%] lg:w-[60%] h-auto mt-10 rounded-2xl shadow-lg"
                />
                </div>
            </section>
            <section>
            <div className="text-center text-3xl mt-10">Our Services</div>
            <div className="flex justify-center overflow-x-auto lg:space-x-15 sm:space-x-15 p-4 mt-7 mb-7 scrollbar-hide w-full">
                {images.map((src, index) => (
                    <motion.div
                        key={index}
                        initial={{ scale: 0.9, opacity: 0.5 }}
                        animate={{
                            scale: index === activeIndex ? 1.1 : 0.9,
                            opacity: index === activeIndex ? 1 : 0.7,
                        }}
                        transition={{ duration: 0.5 }}
                        onClick={() => setActiveIndex(index)}
                        className="cursor-pointer"
                    >
                        <Image
                            src={src}
                            alt="our services"
                            width={300} 
                            height={100}
                            className="w-[80vw] sm:w-[350px] h-auto rounded-lg"
                        />
                    </motion.div>
                ))}
            </div>
            <div className =" text-white font-bold text-3xl text-center ">
                Mobile Design
                <p className=" text-white text-xl mt-1 ">Creating seamless and responsive mobile experiences for apps and websites.</p>
                </div>
        </section>
        <div className="flex flex-col items-center justify-center text-center mt-10 ">
        <div className="w-full max-w-full bg-gradient-to-r from-transparent via-green-400 to-green-700 py-10  shadow-lg">
            <p className="text-4xl text-white font-semibold">
            Let's build something amazing together
            </p>
            <button className="bg-green-500 text-xl text-black rounded-lg mt-10 py-3 px-6 shadow-md">
            Get Started
            </button>
            
        </div>
        </div>
    <footer className="bg-[#222222] text-gray-300">
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
        <div className="text-white flex space-x-4 text-start mt-7 md:mt-0">@ 2025 Minimilistic Technology All Rights Resserved</div>
        <div className="flex space-x-4 justify-end mt-4 md:mt-0">
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
export default AboutUs;