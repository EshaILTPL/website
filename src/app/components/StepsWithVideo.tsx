"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Choose Your Plan",
    desc: "Select the best plan that suits your requirement",
    video: "/video/video.mp4",
  },
  {
    id: 2,
    title: "Submit Your Request",
    desc: "Use our private design portal to submit your design needs.",
    video: "/video/video.mp4",
  },
  {
    id: 3,
    title: "Receive Your Designs",
    desc: "Our talented team delivers in 2-3 days with revisions included.",
    video: "/video/video.mp4",
  },
];

export default function StepsWithVideo() {
  const [activeStep, setActiveStep] = useState(0);

  // Auto-cycle through steps every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="border-dashed border-b-[1.5px] border-black/20 flex justify-center">
      <div className="max-w-3xl mx-auto border-dashed border-r-[1.5px] border-l-[1.5px] border-black/20">
        {/* Heading */}
        <div className="w-1/2 max-w-sm mx-auto mb-14">
          <div className="text-center">
            <h2 className="text-2xl md:text-md subheader-text font-bold mb-4 text-black">
              How simple it can be to get your Projects Done
            </h2>
            <h3 className="text-xs text-black mx-auto px-6 max-w-[80%] leading-relaxed">
              Just step away from those traditional old methods of hiring plus managing and see for yourself
            </h3>

          </div>
        </div>

        {/* Content Grid */}
        <div className="py-2 px-4 grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT: Video */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <AnimatePresence mode="wait">
              <motion.video
                key={steps[activeStep].id}
                src={steps[activeStep].video}
                autoPlay
                loop
                muted
                className="w-full h-[320px] object-cover rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div>

          {/* RIGHT: Steps */}
          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0.5, scale: 1 }}
                animate={{
                  opacity: activeStep === i ? 1 : 0.7,
                  x: activeStep === i ? 10 : 0,
                }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`p-5 rounded-xl border ${activeStep === i
                    ? "bg-white shadow-lg border-gray-100"
                    : "bg-gray-100 border-gray-300"
                  } cursor-pointer`}
                onClick={() => setActiveStep(i)}
                onMouseEnter={() => {
                  setActiveStep(i);
                  const video = document.getElementById(`video-${i}`);
                  if (video) video.play();
                }}
                onMouseLeave={() => {
                  const video = document.getElementById(`video-${i}`);
                  if (video) {
                    video.pause();
                    video.currentTime = 0; // optional: restart
                  }
                }}
              >
                <h4 className="font-semibold text-base md:text-lg text-black mb-5">
                  Step {step.id}
                </h4>
                <h4 className="font-semibold text-base md:text-sm text-black">
                  {step.title}
                </h4>
                <p className="text-gray-700 text-xs">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>


  );
}
