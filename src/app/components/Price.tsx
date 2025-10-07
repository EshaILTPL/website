import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { CheckCircle, Star } from "lucide-react";

const Price = () => {

    const [toggled, setToggled] = useState(false);
    const [toggledForWhite, setToggledForWhite] = useState(false);

    return (
        <section
            id="pricing"
            className="w-full bg-[#f5f5f5e8] py-12d border-t-[1.5px] border-dashed border-black/20">
            <div className="max-w-4xl mx-auto px-6 text-center text-black border-r-[1.5px] border-l-[1.5px] border-dashed border-black/20">
                <div className="max-w-4xl mx-auto px-6 py-6">
                    <div className="max-w-6xl mx-auto">
                        {/* Header Section */}
                        <div className="max-w-4xl mx-auto">
                            <div className="w-1/2 max-w-sm mx-auto mb-10">
                                <h2 className="text-2xl md:text-md subheader-text font-bold mb-4">
                                    No Contract, No Surprises
                                </h2>
                                <div className="text-xs w-1/2 max-w-md mx-auto normal-text text-black">
                                    <p>Consistent Pricing and Value Each Month, with the Flexibility to Cancel Anytime</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* First Card */}
                            <motion.div
                                className={`relative p-6 rounded-4xl shadow-xl border transition-all duration-500
          ${toggled ? "bg-black border-gray-800" : "bg-black"}`}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                {/* Top-right icon */}
                                <div className="absolute top-4 left-4">
                                    {toggled ? (
                                        <Star className="w-6 h-6 text-green-500 tex-xs animate-bounce" />
                                    ) : (
                                        <CheckCircle className="w-6 h-6 text-gray-400 animate-rotate" />
                                    )}
                                </div>

                                {/* Header + Toggle */}
                                <div className="flex justify-between items-center mb-4 mt-6">
                                    <h2 className={'text-xl font-bold'}>
                                        {toggled ? (
                                            <p className='text-3xl font-medium text-white'>Retainer Boost</p>
                                        ) : (
                                            <p className='text-3xl font-medium text-white'>Retainer</p>
                                        )}
                                    </h2>
                                    <button
                                        onClick={() => setToggled(!toggled)}
                                        className={`w-12 h-6 rounded-full transition-colors duration-300
              ${toggled ? "bg-green-500" : "bg-gray-400"}`}
                                    >
                                        <div
                                            className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform
                ${toggled ? "translate-x-6" : "translate-x-0"}`}
                                        ></div>
                                    </button>
                                </div>

                                {/* Middle rounded background section */}
                                <div className={`p-4 rounded-2xl mb-6 ${toggled ? "bg-green-50 text-green-600" : "bg-gray-200 text-gray-700 tex-xs"}`}>
                                    <p className="text-xs">
                                        {toggled
                                            ? "You have activated the Retainer plan! Unlimited requests, priority support."
                                            : "Ideal for ongoing design support with one active request at a time."}
                                    </p>
                                </div>
                                {/* Divider */}
                                <hr className="border-gray-300 my-4" />

                                {/* Features */}
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start text-xs">
                                        {toggled ? (
                                            <> <span className="text-green-500 tex-xs mr-2">•</span>
                                                <span className="text-green-700 tex-xs">2 Active request at a time
                                                </span>
                                            </>
                                        ) : (
                                            <> <span className="text-green-500 tex-xs mr-2">•</span>
                                                <span className="text-gray-700 tex-xs">Wireframes</span>
                                            </>
                                        )}
                                    </li>
                                    <li className="flex items-start text-xs">
                                        {toggled ? (<> <span className="text-green-500 tex-xs mr-2">•</span>
                                            <span className="text-green-700 tex-xs">3X Senior designer
                                            </span></>) : (
                                            <> <span className="text-green-500 tex-xs mr-2">•</span>
                                                <span className="text-gray-700 tex-xs">Designer</span>
                                            </>
                                        )}
                                    </li>
                                    <li className="flex items-start text-xs">
                                        <span className="text-green-500 tex-xs mr-2">•</span>
                                        <span className="text-gray-700 tex-xs">Desktop, Tablet, Mobile Responsive Design</span>
                                    </li>
                                    <li className="flex items-start text-xs">
                                        <span className="text-green-500 tex-xs mr-2">•</span>
                                        <span className="text-gray-700 tex-xs">Brand Consistency</span>
                                    </li>
                                    <li className="flex items-start text-xs">
                                        <span className="text-green-500 tex-xs mr-2">•</span>
                                        <span className="text-gray-700 tex-xs">Figma File</span>
                                    </li>
                                    <li className="flex items-start text-xs">
                                        <span className="text-green-500 tex-xs mr-2">•</span>
                                        <span className="text-gray-700 tex-xs">Updates every 48 hours</span>
                                    </li>
                                    <li className="flex items-start text-xs">
                                        <span className="text-green-500 tex-xs mr-2">•</span>
                                        <span className="text-gray-700 tex-xs">2X Revision</span>
                                    </li>
                                    <li className="flex items-start text-xs">
                                        <span className="text-green-500 tex-xs mr-2">•</span>
                                        <span className="text-gray-700 tex-xs">+$400 For Each Extra Page</span>
                                    </li>
                                    <li className="flex items-start text-xs">
                                        <span className="text-green-500 tex-xs mr-2">•</span>
                                        <span className="text-gray-700 tex-xs">Website development (Fizmer) +2x</span>
                                    </li>
                                </ul>

                                {/* Price */}
                                <div className="mb-4 flex items-center space-x-2">
                                    {toggled ? (
                                        <h3 className="text-xl text-white">$6199</h3>

                                    ) : (
                                        <h3 className="text-xl text-white">$9499</h3>

                                    )}
                                    <p className="text-sm text-gray-600">/per month</p>
                                </div>

                                {/* Bottom Buttons */}
                                <div className="flex space-x-4 mt-6">
                                    {/* Book a Call */}
                                    <a
                                        href="#pricing"
                                        className="flex-1 py-3 rounded-full bg-white text-black text-xs font-light text-center shadow-xl transition-all duration-300 hover:bg-gray-100"
                                    >
                                        Book a Call
                                    </a>

                                    {/* Connect on Telegram */}
                                    <a
                                        href="#pricing"
                                        className="flex-1 py-3 rounded-full bg-white text-black text-xs font-light text-center shadow-xl transition-all duration-300 hover:bg-gray-100"
                                    >
                                        Connect on Telegram
                                    </a>
                                </div>

                            </motion.div>

                            {/* Second Card - Example */}
                            <motion.div
                                className={`relative p-6 rounded-4xl shadow-xl transition-all bg-white duration-500`}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                {/* Top-right icon */}
                                <div className="absolute top-4 left-4">
                                    {toggledForWhite ? (
                                        <Star className="w-6 h-6 text-green-500 tex-xs animate-bounce" />
                                    ) : (
                                        <CheckCircle className="w-6 h-6 text-gray-400 animate-rotate" />
                                    )}
                                </div>

                                {/* Header + Toggle */}
                                <div className="flex justify-between items-center mb-4 mt-6">
                                    <h2 className={'text-xl font-bold'}>
                                     {toggledForWhite ? (
                                           <p className='text-3xl font-medium text-black'>Landing page Design </p>
                                     ) : (
                                           <p className='text-3xl font-medium text-black'>Landing page Design + Dev</p>
                                     )} 
                                    </h2>

                                </div>

                                {/* Middle rounded background section */}
                                <div className={`p-4 rounded-2xl mb-6 ${toggledForWhite ? "bg-green-50 text-green-600" : "bg-gray-200 text-gray-700 tex-xs"}`}>
                                    <p className="text-xs">
                                        {toggled
                                            ? "You have activated the Retainer plan! Unlimited requests, priority support."
                                            : "Ideal for ongoing design support with one active request at a time."}
                                    </p>
                                </div>
                                {/* Divider */}
                                <hr className="border-gray-300 my-4" />

                                {/* Features */}
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start text-xs">
                                        {toggledForWhite ? (
                                            <> <span className="text-green-500 tex-xs mr-2">•</span>
                                                <span className="text-green-700 tex-xs">2 Active request at a time
                                                </span>
                                            </>
                                        ) : (
                                            <> <span className="text-green-500 tex-xs mr-2">•</span>
                                                <span className="text-gray-700 tex-xs">Wireframes</span>
                                            </>
                                        )}
                                    </li>
                                    <li className="flex items-start text-xs">
                                        {toggledForWhite ? (<> <span className="text-green-500 tex-xs mr-2">•</span>
                                            <span className="text-green-700 tex-xs">3X Senior designer
                                            </span></>) : (
                                            <> <span className="text-green-500 tex-xs mr-2">•</span>
                                                <span className="text-gray-700 tex-xs">Designer</span>
                                            </>
                                        )}
                                    </li>
                                    <li className="flex items-start text-xs">
                                        <span className="text-green-500 tex-xs mr-2">•</span>
                                        <span className="text-gray-700 tex-xs">Desktop, Tablet, Mobile Responsive Design</span>
                                    </li>
                                    <li className="flex items-start text-xs">
                                        <span className="text-green-500 tex-xs mr-2">•</span>
                                        <span className="text-gray-700 tex-xs">Brand Consistency</span>
                                    </li>
                                    <li className="flex items-start text-xs">
                                        <span className="text-green-500 tex-xs mr-2">•</span>
                                        <span className="text-gray-700 tex-xs">Figma File</span>
                                    </li>
                                    <li className="flex items-start text-xs">
                                        <span className="text-green-500 tex-xs mr-2">•</span>
                                        <span className="text-gray-700 tex-xs">Updates every 48 hours</span>
                                    </li>
                                    <li className="flex items-start text-xs">
                                        <span className="text-green-500 tex-xs mr-2">•</span>
                                        <span className="text-gray-700 tex-xs">2X Revision</span>
                                    </li>
                                    <li className="flex items-start text-xs">
                                        <span className="text-green-500 tex-xs mr-2">•</span>
                                        <span className="text-gray-700 tex-xs">+$400 For Each Extra Page</span>
                                    </li>
                                    <li className="flex items-start text-xs">
                                        <span className="text-green-500 tex-xs mr-2">•</span>
                                        <span className="text-gray-700 tex-xs">Website development (Fizmer) +2x</span>
                                    </li>
                                </ul>
                                <div className="flex space-x-2">
                                <button
                                    onClick={() => setToggledForWhite(!toggledForWhite)}
                                    className={`w-12 h-6 rounded-full transition-colors duration-300
              ${toggledForWhite ? "bg-green-500" : "bg-gray-400"}`}
                                >
                                    <div
                                        className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform
                ${toggledForWhite ? "translate-x-6" : "translate-x-0"}`}
                                    ></div>
                                </button>
                                    <h3 className={'text-xl font-bold'}>Website Development</h3>
                                </div>
                                {/* Price */}
                                <div className="mb-4 flex items-center space-x-2">
                                    {toggledForWhite ? (
                                        <h3 className="text-xl text-black">$6199</h3>

                                    ) : (
                                        <h3 className="text-xl text-black">$9499</h3>

                                    )}
                                    <p className="text-sm text-gray-600">/per month</p>
                                </div>

                                {/* Bottom Buttons */}
                                <div className="flex space-x-4 mt-6">
                                    {/* Book a Call */}
                                    <a
                                        href="#pricing"
                                        className="flex-1 py-3 rounded-full bg-white text-black text-xs font-light text-center shadow-xl transition-all duration-300 hover:bg-gray-100"
                                    >
                                        Book a Call
                                    </a>

                                    {/* Connect on Telegram */}
                                    <a
                                        href="#pricing"
                                        className="flex-1 py-3 rounded-full bg-white text-black text-xs font-light text-center shadow-xl transition-all duration-300 hover:bg-gray-100"
                                    >
                                        Connect on Telegram
                                    </a>
                                </div>

                            </motion.div>
                        </div>

                        {/* View Plans and Pricing Link */}
                        <div className="text-center mt-8">
                            <button className="text-blue-600 hover:text-blue-800 font-medium underline">
                                View Plans and Pricing
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Price;