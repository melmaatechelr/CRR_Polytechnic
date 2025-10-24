import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
  const slides = [
    {
      id: 1,
      title: "Main Building",
      description: "The iconic main building of CRR Polytechnic",
      image: "/api/placeholder/1200/600",
    },
    {
      id: 2,
      title: "Computer Lab",
      description: "State-of-the-art computer laboratory",
      image: "/api/placeholder/1200/600",
    },
    {
      id: 3,
      title: "Graduation Ceremony",
      description: "Convocation ceremony for graduating students",
      image: "/api/placeholder/1200/600",
    },
    {
      id: 4,
      title: "Robotics Competition",
      description: "Students showcasing their robotics projects",
      image: "/api/placeholder/1200/600",
    },
    {
      id: 5,
      title: "Auditorium",
      description: "Modern auditorium for events and seminars",
      image: "/api/placeholder/1200/600",
    },
    {
      id: 6,
      title: "Group Study",
      description: "Students collaborating on projects",
      image: "/api/placeholder/1200/600",
    },
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
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 drop-shadow-lg">
        CRR Polytechnic Photo Gallery
      </h1>

      {/* Slide container */}
      <div className="relative w-[90%] md:w-[80%] h-[60vh] rounded-2xl overflow-hidden shadow-2xl">
        <AnimatePresence>
          <motion.div
            key={slides[current].id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src={slides[current].image}
              alt={slides[current].title}
              className="w-full h-full object-cover"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

            {/* Text overlay */}
            <div className="absolute bottom-10 left-10 text-white max-w-lg">
              <h2 className="text-3xl font-bold mb-2">{slides[current].title}</h2>
              <p className="text-lg text-gray-200">{slides[current].description}</p>
            </div>
          </motion.div>
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
