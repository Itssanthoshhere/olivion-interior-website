"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const parallaxData = [
  {
    id: 1,
    tag: "Residential",
    number: "01",
    title: (
      <>
        Industrial <br />
        Elegance Condo
      </>
    ),
    location: "Berlin, Germany",
    year: "2025",
    bg: "/parallax/parallax1.jpg",
  },

  {
    id: 2,
    tag: "Residential",
    number: "02",
    title: (
      <>
        Serene <br />
        Space Studio
      </>
    ),
    location: "Berlin, Germany",
    year: "2025",
    bg: "/parallax/parallax2.jpg",
  },

  {
    id: 3,
    tag: "Residential",
    number: "03",
    title: (
      <>
        Urban Zen
        <br />
        Apartment{" "}
      </>
    ),
    location: "Berlin, Germany",
    year: "2025",
    bg: "/parallax/parallax3.jpg",
  },
];

export default function Parallax() {
  return (
    <div className="mt-20 pb-30">
      {parallaxData.map((item) => (
        <ParallaxSection key={item.id} item={item} />
      ))}
    </div>
  );
}

function ParallaxSection({ item }: { item: any }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <motion.div
      ref={ref}
      className="parallax-wrap sticky top-0 h-full"
      style={{
        backgroundImage: `url(${item.bg})`,
        scale,
        y: translateY,
        zIndex: item.id * 1,
      }}
    >
      <div className="parallax-content flex flex-col justify-between px-[8%] py-20">
        <div className="flex justify-between items-center gap-5">
          <span className="text-white GolosText border border-gray-300 px-4 p-2 rounded-full uppercase">
            {item.tag}
          </span>

          <h1 className="GolosText text-6xl font-bold text-(--primary)">
            {item.number}
          </h1>
        </div>

        <div className="text-gray-300">
          <h1 className="CalSans text-6xl md:text-8xl">{item.title}</h1>
          <p className="mt-3 text-2xl">
            {item.location} <br /> {item.year}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
