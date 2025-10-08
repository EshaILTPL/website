import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
    {
        id: "faq1",
        q: "Who's behind InspiringLife?",
        a: "InspiringLife is led by a passionate team Ved, a brand strategist and creative mind, and Jay, a talented designer and developer. Together, they deliver innovative design solutions tailored to each client’s unique needs and help brands unlock their full potential through strategic, impactful, and visually stunning designs.",
    },
    {
        id: "faq2",
        q: "How does the delivery process work?",
        a: "Once you submit a design request, our team reviews it and begins work immediately. You'll receive updates within 24–48 hours and revisions until you're happy.",
    },
    {
        id: "faq3",
        q: "Is there a limit to how many design requests I can have?",
        a: "You can queue unlimited requests. We’ll complete them one by one based on priority.",
    },
    {
        id: "faq4",
        q: "How fast will I receive my designs?",
        a: "Most designs are delivered within 1–2 business days depending on complexity.",
    },
    {
        id: "faq5",
        q: "How fast will I receive my designs?",
        a: "Most designs are delivered within 1–2 business days depending on complexity.",
    },
    {
        id: "faq6",
        q: "How fast will I receive my designs?",
        a: "Most designs are delivered within 1–2 business days depending on complexity.",
    },
    {
        id: "faq7",
        q: "How fast will I receive my designs?",
        a: "Most designs are delivered within 1–2 business days depending on complexity.",
    },
    {
        id: "faq8",
        q: "How fast will I receive my designs?",
        a: "Most designs are delivered within 1–2 business days depending on complexity.",
    },
];

export default function FaqChatSection() {
    const [openId, setOpenId] = useState<string | null>("faq1");

    const handleToggle = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section id="faqs" className="w-full bg-[#f5f5f5e8] py-12">
            <div className="max-w-6xl mx-auto px-6 text-center border-black/20 border-r-[1.5px] border-l-[1.5px] border-dashed">
                <div className="border-black/20 border-b-[1.5px] border-dashed mb-4">
                    <div className="w-1/2 max-w-sm mx-auto mb-4">
                        <div className="text-3xl text-black md:text-md subheader-text font-bold mb-4">
                            <h2 className="text-2xl md:text-md subheader-text font-bold mb-4 text-black"> Frequently Asked Questions</h2>
                        </div>
                        <div className="max-w-4xl mx-auto px-8 text-center mb-4">
                            <h2 className="text-black text-sm px-8 normal-text mt-2">
                                We Get It—Curiosity Leads to Success! Got questions? That’s a great sign. Here are some
                            </h2></div>

                    </div>
                </div>
            </div>
            {/* FAQ Chat Bubbles */}
            <motion.div
                className="max-w-xl mx-auto text-center flex flex-col py-2 gap-4 px-10 border-black/20 border-r-[1.5px] border-b-[1.5px] border-l-[1.5px] border-dashed"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
            >                {faqs.map((faq) => (
                <div key={faq.id} className="w-full">
                    {/* Question bubble (right side) */}
                    <div className="flex justify-end items-center gap-2">
                        {/* + Button */}
                        <motion.button
                            layout
                            onClick={() => handleToggle(faq.id)}
                            className={`w-8 h-8 rounded-full border border-dashed border-black/20 flex items-center justify-center transition-all duration-300 ${openId === faq.id
                                ? "bg-black text-white"
                                : "bg-white text-black hover:bg-gray-100"
                                }`}
                        >
                            <motion.span
                                animate={{ rotate: openId === faq.id ? 45 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Plus
                                    size={16}
                                    className={`transition-colors ${openId === faq.id ? "text-white" : "text-black"
                                        }`}
                                />
                            </motion.span>
                        </motion.button>
                        {/* Question Text */}
                        <div className="bg-white border border-dashed border-black/20 px-4 py-2 rounded-full flex items-center justify-center max-w-[70%] text-black text-sm">
                            <span>{faq.q}</span>
                        </div>
                    </div>

                    {/* Answer bubble (left side) */}
                    <AnimatePresence>
                        {openId === faq.id && (
                            <motion.div
                                key={faq.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 30 }}
                                transition={{ duration: 0.4 }}
                                className="flex flex-col justify-start mt-3 items-start"
                            >
                                <div className="max-w-[70%] bg-white border border-dashed border-black/20 rounded-tr-xl rounded-tl-xl rounded-br-xl p-3 shadow-sm text-black text-sm leading-relaxed">
                                    <p>{faq.a}</p>
                                </div>

                                {/* Profile image below answer */}
                                <img
                                    src="/img/art-1.jpg"
                                    alt="profile"
                                    className="w-8 h-8 rounded-full mt-2 ml-2 border border-black/20"
                                />

                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
            </motion.div>
            <div className="max-w-xl mx-auto text-center flex flex-col gap-4 px-10 border-black/20 border-r-[1.5px] border-b-[1.5px] border-l-[1.5px] border-dashed">
                <div className="flex items-center justify-between mb-4">
                    {/* Left text */}
                    <p className="text-black text-sm normal-text pt-4 mb-0">
                        Can’t find your answer?
                    </p>
                    <div className="mt-8">
                        <button
                            className="bg-black shadow-xl text-white rounded-full transition-all duration-300 relative overflow-hidden min-w-[50px]"
                        >
                            <a
                                href="#pricing"
                                className="relative inline-flex items-center normal-text justify-center bg-black text-white text-sm font-small px-4 py-4 rounded-full min-w-[50px] transition-all duration-500 overflow-hidden group"
                            >
                                {/* Default text */}
                                <span className="transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-gray-400 group-hover:opacity-0">
                                    Send us a Mail
                                </span>

                                {/* Hover text */}
                                <span className="absolute transition-all duration-500 opacity-0 group-hover:opacity-100 font-light">
                                    Get Started Today
                                </span>
                            </a>

                        </button>
                    </div>
                </div>
            </div>
        </section>

    );
}
