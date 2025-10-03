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
    <section className="py-16 bg-gray-50 flex justify-center">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="w-1/2 max-w-sm mx-auto mb-14">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-2xl md:text-md subheader-text font-bold mb-4">
              How simple it can be to get your Projects Done
            </h2>
            <div className="text-sm normal-text text-gray-600 max-sm mx-auto">
              <p>        Just step away from those traditional old methods of hiring plus managing and see for yourself
              </p>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
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
                initial={{ opacity: 0.5 }}
                animate={{
                  opacity: activeStep === i ? 1 : 0.5,
                  x: activeStep === i ? 10 : 0,
                }}
                transition={{ duration: 0.4 }}
                className={`p-5 rounded-xl border ${activeStep === i
                  ? "bg-white shadow-lg border-gray-100"
                  : "bg-gray-100 border-gray-300"
                  } cursor-pointer`}
                onClick={() => setActiveStep(i)}
              >
                <h4 className="font-semibold text-base md:text-lg">
                  Step {step.id} – {step.title}
                </h4>
                <p className="text-gray-500 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>


  );
}
