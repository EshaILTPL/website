"use client";

import { motion } from "framer-motion";
import {
  Bike,
  Coffee,
  Laptop,
  Wifi,
  Users,
  Beer,
} from "lucide-react";

const features = [
  {
    icon: Bike,
    title: "Central Location",
    desc: "Stack comes with integration for Mail Chimp and Campaign Monitor forms - ideal for modern marketing campaigns",
  },
  {
    icon: Coffee,
    title: "Premium Facilities",
    desc: "Combine blocks from a range of categories to build pages that are rich in visual style and interactivity",
  },
  {
    icon: Laptop,
    title: "Device Lab",
    desc: "Including the premium Icons Mind icon kit, Stack features a highly diverse set of icons suitable for all purposes.",
    label: "New",
  },
  {
    icon: Wifi,
    title: "Superfast Internet",
    desc: "Stack comes with integration for Mail Chimp and Campaign Monitor forms - ideal for modern marketing campaigns",
  },
  {
    icon: Users,
    title: "Meeting Spaces",
    desc: "Combine blocks from a range of categories to build pages that are rich in visual style and interactivity",
  },
  {
    icon: Beer,
    title: "Regular Events",
    desc: "Including the premium Icons Mind icon kit, Stack features a highly diverse set of icons suitable for all purposes.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-50 flex justify-center">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-md subheader-text font-bold mb-4 text-black">
            Benefit of kree8
          </h2>
          <div className="text-sm normal-text text-black max-sm mx-auto">
            <p>We do things a little differently, here's a quick overview of just a</p>
            <p>few of Stack Coworking's unique offerings.</p>
          </div>
        </div>

        {/* Features Grid */}
        <div style={{ width: "calc(100% + 40px)" }} className="px-[40px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-center border-dashed border-t border-gray-300 pt-10">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="relative border-dashed border-r border-b border-gray-300 px-4 py-4">
                {/* Floating Icon */}
                <motion.div
                  className="flex justify-center mb-4"
                  animate={{ y: [0, -6, 0] }} // up-down float
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                    delay: idx * 0.2, // staggered start
                  }}
                >
                  <Icon className="w-8 h-8 text-gray-400" />
                </motion.div>

                <h3 className="text-sm subheader-text font-semibold mb-2">{feature.title}</h3>
                <p className="text-black text-xs normal-text">{feature.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
