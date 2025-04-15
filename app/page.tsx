"use client";
import Image from "next/image";
import Link from "next/link";
import { BackgroundGradient } from "../components/BackgroundGradient";
import { Cpu, Layout, Rocket, Headset,Menu,X,ArrowLeft,ArrowRight,} from "lucide-react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const testimonials = [
  {
    text: "This web app has completely transformed how we manage our deliveries. It’s seamless, efficient, and a game-changer for logistics!",
    name: "Daniel Martins",
    role: "Operations Manager, Swift Logistics Ltd.",
    image: "men.jpg"
  },
  {
    text: "Minimalistic Technology's platform has helped us reduce delays and improve tracking. Our clients love the transparency!",
    name: "Elene Rodriguez",
    role: "Founder, Express Freight",
    image: "women.jpg"
  },
  {
    text: "Minimalistic Technology's platform has helped us reduce delays and improve tracking. Our clients love the transparency!",
    name: "Durgesh Nai",
    role: "Founder, Express Freight",
    image: "men1.jpg"
  }
];

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1024);
  const [slideWidth, setSlideWidth] = useState(33.33);


  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setSlideWidth(windowWidth < 600 ? 100 : windowWidth < 1024 ? 50 : 33.33);
  }, [windowWidth]);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const sendData = {
      name: formData.Name,  
      email: formData.Email,  
      message: formData.Message, 
    };

    emailjs
      .send("service_pw3837d", "template_2nfoejq", sendData, "UyZxk9SsnFm5_tP-I")
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          alert("Message sent successfully!");
          setFormData({ Name: "", Email: "", Message: "" }); 
        },
        (error) => {
          console.error("FAILED...", error);
          alert(`Failed to send message: ${error.text || "Unknown error"}`);
        }
      );
  };


  return (
    <div className="min-h-screen font-geist-sans bg-[#222222] text-white">

      <header className="fixed top-0 left-0 w-full z-50 bg-[#222222]/50 backdrop-blur-md text-white p-4 md:flex md:justify-between md:items-center">
      {/* Logo Section */}
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

      {/* Navigation Menu */}
      <nav
        className={`absolute top-full left-0 w-full bg-/50 p-4 space-y-4 md:static md:w-auto md:p-0 md:flex md:space-x-6 md:space-y-0 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <li className="hover:text-green-400 cursor-pointer"><Link href="/">Home</Link></li>
          <li className="hover:text-green-600 cursor-pointer">
            <Link href="/AboutUs">About Us</Link>
          </li>
          <li className="hover:text-green-400 cursor-pointer"><Link href="/Services">Services</Link></li>
        </ul>
      </nav>

      {/* Buttons (Login & Get Started) */}
      <div className="hidden md:flex space-x-2">
        <button className="px-4 py-2 border bg-[#222222] text-green-500 rounded-lg hover:bg-green-400 hover:text-white transition">
          Log In
        </button>
        <button className="px-4 py-2 bg-[#7ED957] text-gray-900 rounded-lg hover:bg-green-500 transition">
          Get Started
        </button>
      </div>
    </header>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full mt-40 sm:mt-60 px-6 sm:px-16">
        <div className="max-w-xl text-left">
          <h1 className="text-5xl sm:text-4xl font-bold">Build Websites Effortlessly</h1>
          <p className="text-base sm:text-lg">From Idea to Live Website - We Make It Seamless</p>
          <div className="text-xs sm:text-sm text-gray-400 mt-4">
            <span>No coding needed</span> | <span>AI powered design</span> | <span>Fast deployment</span>
          </div>
          <button className="bg-[#7ED957] hover:bg-green-600 text-black font-bold py-2 px-6 rounded-lg mt-6">
            Start Building
          </button>
        </div>

        <div className="rounded flex justify-end w-full">
          <Image src="/api_img.jpg" alt="Hero" width={500} height={400} className="rounded-2xl mt-4" />
        </div>
      </div>

      {/* What We Offer Section */}
      <section className="text-white text-center mt-40 p-8">
        <h2 className="text-4xl font-bold mb-6">What We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { Icon:Cpu, title: "AI Powered Website Builder", desc: "Generate layout tailored to your needs" },
            { Icon:Layout, title: "Custom UI/UX Design", desc: "Crafted by expert designers" },
            { Icon:Rocket, title: "Fast Deployment", desc: "Get your site live in 6 weeks" },
            { Icon:Headset,  title: "24/7 Support", desc: "Were here whenever you need help" },
           ].map((offer, index) => (
            <div key={index} className="flex flex-col items-center">
              <offer.Icon size={40} className="bg-white text-black" />  
              <h3 className="text-lg font-semibold mt-2">{offer.title}</h3>
              <p className="text-gray-400 text-sm">{offer.desc}</p>
            </div>
          ))}
        </div>
        <button className="mt-6 bg-green-600 hover:bg-green-600 text-black font-bold py-2 px-6 rounded-lg">
          Try it Now
        </button>
      </section>
  
      <section className="mt-17 text-bklack  text-center px-4">
        <h2 className="text-3xl md:text-3xl font-bold">Pricing Plan</h2>

        <div className="mt-7 flex flex-col md:flex-row justify-center items-center gap-6">
          {/* Starter Plan */}
          <div className="bg-[#7ED957] text-black p-6 rounded-2xl hover:xl: w-full sm:w-3/4 md:w-1/4 shadow-lg">
            <h3 className="text-xl font-semibold ">Starter</h3>
            <p className="text-2xl font-bold ">$49 <span className="text-sm">/month</span></p>
            <button className="mt-4 bg-green-600 text-black hover:text-white px-2 py-2 rounded-lg w-full">
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
          <div className="bg-green-500 text-black p-6 rounded-2xl w-full sm:w-3/4 md:w-1/5 shadow-lg relative">
          <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 bg-green-400 text-black px-3 py-1 text-sm rounded-lg">
          Most Popular
            </div>
            <h3 className="text-xl font-semibold">Professional</h3>
            <p className="text-2xl font-bold">$99 <span className="text-sm">/month</span></p>
            <button className="mt-4 bg-white text-black hover:text-green-600 px-4 py-2 rounded-lg w-full">
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
          <div className="bg-[#7ED957] text-black p-6 rounded-2xl w-full sm:w-3/4 md:w-1/4 shadow-lg">
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

      <>
      {/* Testimonial Cards*/}
      <section className="bg-[#222222] text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-99.99%"
              style={{
                transform: `translateX(-${current * slideWidth}%)`,
                width: `${testimonials.length * slideWidth}%`
              }}
            >
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  className="w-full sm:w-[75%] lg:w-3/7 bg-white text-gray-900 rounded-lg p-6 shadow-lg mx-2 shrink-0 h-auto min-h-[180px]"
                >
                  <p className="text-lg mb-4">{t.text}</p>
                  <div className="flex items-center space-x-4">
                    <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full" />
                    <div>
                      <h4 className="font-semibold">{t.name}</h4>
                      <p className="text-sm text-gray-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end space-x-4 mt-6">
            <button onClick={prevTestimonial} className="text-gray-400 hover:text-white p-3">
              <ArrowLeft className="size-7" />
            </button>
            <button onClick={nextTestimonial} className="text-gray-400 hover:text-white p-3">
              <ArrowRight className="size-7" />
            </button>
          </div>
        </div>
      </section> 
                {/* <div className=" mt-7">
            <BackgroundGradient>

            </BackgroundGradient>
          </div> */}
      {/* Form */}
      <section className="bg-[#222222] text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2  className="text-3xl font-bold text-center mb-2">Get Started Today</h2>
          <p className="text-center mb-10">Kindly fill this form to get started</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="col-span-1 flex flex-col items-center min-h-[50vh] justify-end lg:justify-center text-center">
              <div className="text-[#A8A8A8] text-center">
                <p>Join 1000+ businesses using Minimalistic Technology to build their dream website.</p>
                <p className="mt-2">📧 MinimalisticTechnology.com</p>
                <p>📞 +44-000-000-0000</p>
              </div>
            </div>
            {/* Right Column */}
            <div className="space-y-8 col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Business Information */}
                {/* <div>
                  <h3 className="text-2xl font-bold p-3">Business Information</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <input className="w-full p-3 border border-[#7ED957] bg-transparent text-white placeholder-[#A8A8A8] rounded-md" placeholder="Full Name*" />
                    <input className="w-full p-3 border border-[#7ED957] bg-transparent text-white placeholder-[#A8A8A8] rounded-md" placeholder="Email Address*" />
                    <input className="w-full p-3 border border-[#7ED957] bg-transparent text-white placeholder-[#A8A8A8] rounded-md" placeholder="Phone Number*" />
                    <input className="w-full p-3 border border-[#7ED957] bg-transparent text-white placeholder-[#A8A8A8] rounded-md" placeholder="Business Name*" />
                    <textarea className="w-full p-3 border border-[#7ED957] bg-transparent text-white placeholder-[#A8A8A8] rounded-md" placeholder="Brief Description of Business" rows= {3}></textarea>
                  </div>
                </div> */}

                {/* Project Information */}
                {/* <div>
                  <h3 className="text-2xl font-bold p-3">Project Information</h3>
                  // <div className="grid grid-cols-1 gap-4">
                    <input className="w-full p-3 border border-[#7ED957] bg-transparent text-white placeholder-[#A8A8A8] rounded-md" placeholder="Type of Website*" />
                    <select
                      className="w-full p-3 border border-[#7ED957] bg-transparent text-white placeholder-[#A8A8A8] rounded-md">
                      defaultValue=""
                      <option className="bg-[#222222] text-white" value="" disabled>Select Service*</option>
                      <option className="bg-[#222222] text-white" value="web-design">Web Design</option>
                      <option className="bg-[#222222] text-white" value="erp">ERP</option>
                      <option className="bg-[#222222] text-white" value="ecommerce">E-commerce site</option>
                    </select>
                    <input className="w-full p-3 border border-[#7ED957] bg-transparent text-white placeholder-[#A8A8A8] rounded-md" placeholder="Do you have existing website?" />
                    <textarea className="w-full p-3 border border-[#7ED957] bg-transparent text-white placeholder-[#A8A8A8] rounded-md" placeholder="If yes, please describe" rows= {1}></textarea>
                    <textarea className="w-full p-3 border border-[#7ED957] bg-transparent text-white placeholder-[#A8A8A8] rounded-md" placeholder="Brief Description of Project" rows={3}></textarea>
                  </div>
                </div> */}

<form onSubmit={handleSubmit}>
      <input
        type="text"
        name="Name"
        placeholder="Full Name"
        value={formData.Name}
        onChange={handleChange}
        required
        className="w-full p-3 border border-[#7ED957] bg-transparent text-white placeholder-[#A8A8A8] rounded-md mt-3"
      />
      <input
        type="email"
        name="Email"
        placeholder="Email Address"
        value={formData.Email}
        onChange={handleChange}
        required
        className="w-full p-3 border border-[#7ED957] bg-transparent text-white placeholder-[#A8A8A8] rounded-md mt-3"
      />
      <textarea
        name="Message"
        placeholder="Your Message"
        value={formData.Message}
        onChange={handleChange}
        required
         className="w-full p-3 border border-[#7ED957] bg-transparent text-white placeholder-[#A8A8A8] rounded-md mt-3 mb-3"
      />
      <button type="submit" className="bg-[#7ED957] text-black font-bold py-3 px-9 rounded-md hover:bg-[#6cc44a] transition">Submit</button>
    </form>


              </div>
                            {/* Submit Button */}
                            {/* <div className="flex justify-center mt-8">
                <button className="bg-[#7ED957] text-black font-bold py-3 px-9 rounded-md hover:bg-[#6cc44a] transition">Submit</button></div> */}
            </div> 
          </div>
        </div>
      </section>
            </>
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
        );
      }
export default Home;
