// data/testimonials.ts
export type Testimonial = {
  id: string;
  images: string[];      // two images shown on top
  quote: string;
  author: string;
  role?: string;
  avatar?: string;
  reply?: { text: string; from?: string };
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    images: ["/img/accom-1.jpg", "/img/accom-2.jpg"], // put real images in public/img
    quote:
      "KREE8's graphic design quality is unmatched. Whether it's branding or marketing materials, their service keeps everything seamless and affordable",
    author: "Rohan Jhaveri",
    role: "Founder of 505 Coffee",
    avatar: "/img/rohan.png",
    reply: { text: "We’ll love to work with you ❤️", from: "kree8" },
  },
  {
    id: "t2",
    images: ["/img/accom-1.jpg", "/img/accom-2.jpg"], // put real images in public/img
    quote:
      "KREE8's graphic design quality is unmatched. Whether it's branding or marketing materials, their service keeps everything seamless and affordable",
    author: "Rohan Jhaveri",
    role: "Founder of 505 Coffee",
    avatar: "/img/rohan.png",
    reply: { text: "We’ll love to work with you ❤️", from: "kree8" },
  },
  {
    id: "t3",
    images: ["/img/accom-1.jpg", "/img/accom-2.jpg"], // put real images in public/img
    quote:
      "KREE8's graphic design quality is unmatched. Whether it's branding or marketing materials, their service keeps everything seamless and affordable",
    author: "Rohan Jhaveri",
    role: "Founder of 505 Coffee",
    avatar: "/img/rohan.png",
    reply: { text: "We’ll love to work with you ❤️", from: "kree8" },
  },
  {
    id: "t4",
    images: ["/img/accom-1.jpg", "/img/accom-2.jpg"], // put real images in public/img
    quote:
      "KREE8's graphic design quality is unmatched. Whether it's branding or marketing materials, their service keeps everything seamless and affordable",
    author: "Rohan Jhaveri",
    role: "Founder of 505 Coffee",
    avatar: "/img/rohan.png",
    reply: { text: "We’ll love to work with you ❤️", from: "kree8" },
  },
  {
    id: "t5",
    images: ["/img/accom-1.jpg", "/img/accom-2.jpg"], // put real images in public/img
    quote:
      "KREE8's graphic design quality is unmatched. Whether it's branding or marketing materials, their service keeps everything seamless and affordable",
    author: "Rohan Jhaveri",
    role: "Founder of 505 Coffee",
    avatar: "/img/rohan.png",
    reply: { text: "We’ll love to work with you ❤️", from: "kree8" },
  },
];
