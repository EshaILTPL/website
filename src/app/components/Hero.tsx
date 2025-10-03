"use client";
import React, { useState } from "react";
import { ReactTyped } from "react-typed";

export default function Hero() {
    const [hover, setHover] = useState(false);

    return (
        <header >
            <div className="relative pt-32 pb-16 text-center max-w-3xl mx-auto px-6" style={{ marginTop: '4%' }} >
                {/* Status */}
                <div className="flex items-center justify-center space-x-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <span className="text-black text-xs normal-text">Available for New Projects</span>
                </div>

                {/* Headline */}
                <h1 className="text-3xl md:text-5xl font-extrabold leading-tight max-w-3xl mx-auto header-text">
                    A DEDICATED DESIGN TEAM <br />
                    FOR{" "}
                    <ReactTyped
                        strings={["Startups", "Sales Leaders", "Founders"]}
                        typeSpeed={80}
                        backSpeed={50}
                        backDelay={1500}
                        loop
                        className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400"
                    />
                </h1>

                {/* Subheadline */}
                <p className="mt-4 text-gray-600 text-base text-sm normal-text">
                    We don&apos;t just design, we solve your brand&apos;s biggest challenges
                </p>

                {/* Button */}
                <div className="mt-8">
                    <button
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        className="bg-black shadow-md text-white psx-10 pys-3 rounded-full transition-all duration-300 relative overflow-hidden min-w-[50px]" style={{letterSpacing:"-0.04em"}}
                    >
                        <a
                            href="#pricing"
                            className="relative inline-flex items-center normal-text justify-center bg-black text-white text-xs font-small px-3 py-3 rounded-full min-w-[50px] transition-all duration-500 overflow-hidden group"
                        >
                            {/* Default text */}
                            <span className="transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-gray-200 group-hover:opacity-0">
                                View Plans and Pricing
                            </span>

                            {/* Hover text */}
                            <span className="absolute transition-all duration-500 opacity-0 group-hover:opacity-100 font-light">
                                Let&apos;s Go →
                            </span>
                        </a>

                    </button>
                </div>

            </div>
        </header>
    );
}


