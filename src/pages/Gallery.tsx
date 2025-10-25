import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
  const slides = [
    { id: 1, image: "public/GALLERY/ENTRY GATE.jpg", caption: "Main Entry Gate" },
    { id: 2, image: "public/GALLERY/STATE LEVEL IPSGM.jpg", caption: "State Level IPSGM Event" },
    { id: 3, image: "public/GALLERY/INDUSRIAL VIST FOLLOWED BY OUR STUDENTS.jpeg", caption: "Industrial Visit" },
    { id: 4, image: "public/GALLERY/CME LAB.jpg", caption: "CME Laboratory" },
    { id: 5, image: "public/GALLERY/TECH FEST FOLLOWED BY OUR STUDENTS.jpeg", caption: "Tech Fest Highlights" },
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 4 seconds
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

  // Swipe handlers
  const handleSwipe = (event, info) => {
    if (info.offset.x > 100) prevSlide(); // swipe right → previous
    else if (info.offset.x < -100) nextSlide(); // swipe left → next
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center overflow-hidden">
      {/* Slide Container */}
      <div className="relative w-[92%] md:w-[80%] h-[65vh] sm:h-[70vh] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.6)] border border-gray-700">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleSwipe}
            className="absolute inset-0 flex items-center justify-center bg-black"
          >
            <img
              src={slides[current].image}
              alt={`Slide ${current + 1}`}
              loading="lazy"
              className="w-full h-full object-contain bg-black/90 transition-transform duration-700 hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>

            {/* Caption */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute bottom-10 text-center w-full px-4"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white tracking-wide drop-shadow-md">
                {slides[current].caption}
              </h2>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 sm:p-3 transition transform hover:scale-110 backdrop-blur-sm"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 sm:p-3 transition transform hover:scale-110 backdrop-blur-sm"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="flex mt-6 space-x-2">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrent(index)}
            whileHover={{ scale: 1.3 }}
            className={`h-3 rounded-full transition-all ${
              index === current ? "bg-blue-500 w-6" : "bg-gray-500 w-3"
            }`}
          ></motion.button>
        ))}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-10 text-gray-300 text-center px-4"
      >
        <Camera size={22} className="inline-block mr-2 text-blue-400" />
        <span className="text-base sm:text-lg font-medium tracking-wide">
          Moments Captured at{" "}
          <span className="text-blue-400 font-semibold">CRR Polytechnic</span>
        </span>
      </motion.div>
    </div>
  );
};

export default Gallery;
