// components/AchievementCards.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

type Card = {
  title: string;
  desc: string;
  img: string;
  interactive?: boolean;
};

const cards: Card[] = [
  {
    title: "95+ Brands Served",
    desc: "Helping businesses across various industries achieve their goals",
    img: "/img/art-1.jpg",
  },
  {
    title: "95+ Brands Served",
    desc: "Helping businesses across various industries achieve their goals",
    img: "/img/art-1.jpg",
  },
  // {
  //   title: "8 Years of Experience",
  //   desc: "Bringing seasoned expertise to every project",
  //   img: "/img/avatar-group.jpg", // can be GIF / Lottie / static img
  //   interactive: true,
  // },
  {
    title: "$100,000+ Saved for Brands",
    desc: "so they can reinvest where it matters the most",
    img: "/img/art-3.jpg",
  },
];

export default function AchievementCards() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-3">Our Achievement</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Curious about what we've accomplished? Let our track record speak for
          itself.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, boxShadow: "0 12px 30px rgba(0,0,0,0.15)" }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="bg-white rounded-2xl p-6 shadow-md cursor-pointer overflow-hidden relative"
            >
              {/* Image with hover movement */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="rounded-xl overflow-hidden mb-4"
              >
                <Image
                  src={card.img}
                  alt={card.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
              </motion.div>

              {/* Card Content */}
              <h4 className="font-semibold text-lg mb-2">{card.title}</h4>
              <p className="text-gray-500 text-sm">{card.desc}</p>

              {/* If interactive card */}
              {card.interactive && (
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="mt-4 px-4 py-2 bg-black text-white rounded-lg text-sm"
                  onClick={() => alert("✨ Animate contents / show modal here!")}
                >
                  Animate
                </motion.button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
