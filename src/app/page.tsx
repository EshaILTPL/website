"use client";

import { Clock, Lock, Infinity } from "lucide-react";
import AchievementCards from "./components/AchievementCards";
import FeaturesSection from "./components/FeaturesSection";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import LogoCarousel from "./components/LogoCarousel";
import StepsWithVideo from "./components/StepsWithVideo";
import TestimonialCard from "./components/Testimonials";
import { useState } from "react";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUs from "./components/WhyChooseUs";

// import { CheckCircle, Clock, Lock, Infinity } from "lucide-react";

export default function HeaderSection() {
      const [hover, setHover] = useState(false);
  
  return (
    <div className="bg-[#f5f5f5e8]">
      {/* Navbar */}
     <nav className="fixed top-0 left-0 w-full border-b border-dashed z-50 bg-[#f5f5f5e8]">
  <div className="max-w-3xl mx-auto flex items-center justify-between px-2 py-2">
    {/* Logo */}
    <div className="font-extrabold text-2xl italic">kree8</div>

    {/* Nav + CTA grouped together */}
    <div className="flex items-center space-x-6">
      <ul className="hidden md:flex space-x-6 text-gray-400 font-small">
        <li><a href="#achievements" className="text-sm text-gray-400 hover:text-black">Achievements</a></li>
        <li><a href="#work" className="text-sm text-gray-400 hover:text-black">Our Work</a></li>
        <li><a href="#comparison" className="text-sm text-gray-400 hover:text-black">Comparison</a></li>
        <li><a href="#faqs" className="text-sm text-gray-400 hover:text-black">FAQs</a></li>
      </ul>

      {/* Slim CTA */}
      <a
        href="#pricing"
                            className="relative inline-flex items-center normal-text justify-center bg-black text-white text-xs font-small px-3 py-3 rounded-full min-w-[50px] transition-all duration-500 overflow-hidden group"
        style={{ letterSpacing: "-0.03em" }}
      >
        {/* Default text */}
        <span className="transition-all duration-500 group-hover:-translate-y-2 group-hover:opacity-0 inline-block text-white-sm normal-text">
          View Plans and pricing
        </span>

        {/* Hover text */}
        <span className="absolute left-1/2 -translate-x-1/2 transition-all duration-500 opacity-0 group-hover:opacity-100 font-light text-white-sm">
          Get started
        </span>
      </a>
    </div>
  </div>
</nav>


      {/* Hero */}
      <Hero />

      {/* Feature Row */}
      {/* <section className="py-10 mt-16">  */}
      <section className="py-16 bg-gray-50 flex justify-center">
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center gap-8 px-4 md:px-6 border-dashed border-t border-gray-300 pb-10">
        <div className="mt-3 sm:border-r border-dashed border-gray-300">
          <Clock className="mx-auto mb-3 text-gray-300 animate-bounce" />
          <h3 className="normal-text">48 Hours Delivery</h3>
        </div>
        <div className="mt-3 sm:border-r border-dashed border-gray-300">
          <Lock className="mx-auto mb-3 text-gray-300 animate-bounce" />
          <h3 className="normal-text">Access to Private Design Portal</h3>
        </div>
        <div>
          <Infinity className="mt-3 mx-auto mb-3 text-gray-300 animate-bounce" />
          <h3 className="normal-text">Unlimited Design Requests</h3>
        </div>
      </div>
      </section>

      {/* <main> */}
      {/* <TestimonialCard /> */}
      <LogoCarousel />
      <FeaturesSection />
      <StepsWithVideo />
      <ServicesSection />
      <Gallery />
      <WhyChooseUs />
      <AchievementCards />

      {/* Footer */}
      <footer className="py-12 text-center text-gray-600">
        <p>
          &copy; {new Date().getFullYear()} Stack Inc. | Privacy Policy | Legal
        </p>
      </footer>
      {/* </main> */}
      {/* </section> */}
    </div>

  );
}
