import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
  const slides = [
    { id: 1, image: "public/GALLERY/ENTRY GATE.jpg" },
    { id: 2, image: "public/GALLERY/STATE LEVEL IPSGM.jpg" },
    { id: 3, image: "public/GALLERY/INDUSRIAL VIST FOLLOWED BY OUR STUDENTS.jpeg" },
    { id: 4, image: "public/GALLERY/CME LAB.jpg" },
    { id: 5, image: "public/GALLERY/TECH FEST FOLLOWED BY OUR STUDENTS.jpeg" },

  ];

  const [current, setCurrent] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full min-h-screen bg-gray-900 flex flex-col items-center justify-center overflow-hidden">
      {/* Slide container */}
      <div className="relative w-[90%] md:w-[80%] h-[60vh] rounded-2xl overflow-hidden shadow-2xl">
        <AnimatePresence>
          <motion.img
            key={slides[current].id}
            src={slides[current].image}
            alt={`Slide ${current + 1}`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }} // subtle zoom effect
            className="w-full h-full object-cover transition-transform duration-500"
          />
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-3 transition"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-3 transition"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="flex mt-6 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? "bg-blue-500 w-6" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-10 text-gray-300 text-center">
        <Camera size={24} className="inline-block mr-2 text-blue-400" />
        <span className="text-lg">Moments captured at CRR Polytechnic</span>
      </div>
    </div>
  );
};

export default Gallery;
