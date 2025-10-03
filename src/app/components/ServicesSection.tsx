import { useState } from "react";

const services = [
    { title: "Website Design", img: "/img/art-1.jpg" },
    { title: "Mobile App Design", img: "/img/art-2.jpg" },
    { title: "Framer and Webflow Development (No-Code)", img: "/img/art-2.jpg" },
    { title: "Social Media Graphics", img: "/img/art-2.jpg" },
    { title: "Pitch Decks", img: "/img/art-1.jpg" },
    { title: "Branding", img: "/img/art-2.jpg" },
    { title: "Business Cards", img: "/img/art-2.jpg" },
    { title: "Logos", img: "/img/art-1.jpg" },
    { title: "Packaging", img: "/img/art-2.jpg" },
];

export default function ServicesSection() {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <section className="w-full bg-[#f5f5f5e8] py-12 border-gray-300 border border-dashed">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <div className="w-1/2 max-w-sm mx-auto mb-4">
                        <h2 className="text-2xl md:text-md subheader-text font-bold mb-4">
                            We are here to Serve...
                        </h2>
                        <div className="text-sm normal-text text-black max-sm mx-auto">
                            <p>Stop stressing yourself in finding out the perfect person for a particular design needs</p>
                        </div>
                    </div>
                </div>

                <p className="text-black text-xs normal-text border-t border-dashed border-gray-300 pt-4 mb-4">
                    Tip: Hover on the images
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 border-t border-dashed border-gray-300 pt-6">
                    {services.map((service, i) => (
                        <div
                            key={i}
                            className="relative flex flex-col items-center group cursor-pointer border-t border-l border-dashed border-gray-300 p-4"
                            onMouseEnter={() => setHovered(i)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            {/* Image styled like cards */}
                            <div className="relative w-32 h-20">
                                {/* Left image */}
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="absolute bottom-0 left-0 w-32 h-20 object-cover rounded shadow-md transform -rotate-10 transition duration-300 group-hover:rotate-0"
                                />

                                {/* Right image */}
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="absolute bottom-0 right-0 w-32 h-20 object-cover rounded shadow-md transform rotate-10 transition duration-300 group-hover:rotate-0"
                                />
                            </div>


                            <h3 className="mt-3 text-gray-600 text-xs normal-text">{service.title}</h3>

                            {/* Hover Tooltip */}
                            {hovered === i && (
                                <div className="absolute -top-32 bg-white p-2 rounded-lg shadow-xl border border-gray-200">
                                    <img
                                        src={service.img}
                                        alt={service.title}
                                        className="w-40 h-28 object-cover rounded"
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <p className="text-gray-600 border-t border-gray-300 border-dashed text-xs normal-text mt-5">
                    That’s not it we do even <span style={{ fontWeight: "500" }} className="font-bold normal-text text-black text-md">More...</span>
                </p>
            </div>
        </section>
    );
}
