import React from "react";
import { testimonials } from "../data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


export default function TestimonialsCarousel() {
    return (
<div
  style={{ backgroundColor: "#f5f5f5e8" }}
  className="w-full overflow-x-visible px-4 sm:px-6 md:px-8"
>
            <Swiper
  modules={[Pagination, Autoplay]}
  loop={true}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
  pagination={{ el: ".custom-pagination", clickable: true }}
  spaceBetween={16}
  centeredSlides={true}
  breakpoints={{
    0: { slidesPerView: 1.05, spaceBetween: 12, centeredSlides: true },
    480: { slidesPerView: 1.15, spaceBetween: 14, centeredSlides: true },
    640: { slidesPerView: 1.25, spaceBetween: 16, centeredSlides: true },
    768: { slidesPerView: 2, spaceBetween: 20, centeredSlides: false },
    1024: { slidesPerView: "auto", spaceBetween: 24, centeredSlides: false },
  }}
  className="py-10 w-full !overflow-visible"
>

                {testimonials.map((item, index) => (
                    <SwiperSlide
  key={item.id ?? index}
  className="!w-[85%] sm:!w-[90%] md:!w-[340px] lg:!w-[360px] flex justify-center"
>

                        <div className="max-w-md mx-auto relative overflow-visible">
                            {/* card wrapper with hover grow + overlap */}
  <div className="group relative transform transition-all duration-500 hover:scale-105 hover:z-20">
                                <div className="rounded-3xl bg-white transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-gray-200 overflow-hidden">

                                    {/* Top images area */}
                                    {/* Top images area with border + hover color effect */}
                                    <div className="p-2">
                                        <div className="rounded-2xl bg-white"> {/* outer round border */}
                                            <div className="rounded-xl bg-gray-400/50 p-4 transition-colors duration-500 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-blue-300">
                                                <div className="flex items-center justify-center gap-6 h-44">
                                                    {item.images.map((src, i) => (
                                                        <img
                                                            key={i}
                                                            src={src}
                                                            alt={`${item.author} image ${i}`}
                                                            className="w-40 rounded-lg shadow-md object-cover"
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    {/* Quote */}
                                    <div className="px-6 py-4 bg-gray-50">
                                        <p className="text-gray-800 text-sm leading-relaxed">{item.quote}</p>
                                        <p className="text-gray-400 text-xs mt-3">{item.author}</p>
                                    </div>

                                    {/* Reply bubble */}
                                    {item.reply && (
                                        <div className="px-6 pb-4">
                                            <div className="flex justify-end">
                                                <div className="inline-block bg-black text-white text-sm px-4 py-2 rounded-2xl shadow-md">
                                                    {item.reply.text}
                                                    {item.reply.from && (
                                                        <span className="ml-3 text-xs text-gray-300"> {item.reply.from}</span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Footer */}
                                    <div className="px-6 py-4 flex items-center gap-3">
                                        <img
                                            src={item.avatar ?? "/img/avatar-placeholder.png"}
                                            alt={item.author}
                                            className="w-10 h-10 rounded-full object-cover"
                                        />
                                        <div>
                                            <p className="text-sm font-semibold text-gray-800">{item.author}</p>
                                            {item.role && <p className="text-xs text-gray-500">{item.role}</p>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                ))}
                <div className="custom-pagination flex justify-center mt-6"></div>

            </Swiper>
        </div>
    );
}

