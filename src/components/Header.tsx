import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 text-white shadow-lg">
      {/* 🔹 Top Info Bar */}
      <div className="bg-slate-950/90 backdrop-blur-md border-b border-slate-700/40">
        <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row flex-wrap justify-between items-center text-xs sm:text-sm text-slate-300 font-medium">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 mb-2 sm:mb-0">
            <div className="flex items-center gap-2 hover:text-amber-300 transition-all duration-300">
              <Phone size={14} />
              <span className="font-semibold">9912342028</span>
            </div>
            <div className="flex items-center gap-2 hover:text-amber-300 transition-all duration-300">
              <Mail size={14} />
              <span className="font-semibold truncate">
                principal.crrpoly@gmail.com
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            <div className="flex items-center gap-2 hover:text-amber-300 transition-all duration-300">
              <MapPin size={14} />
              <span className="font-semibold">Vatluru, 534007</span>
            </div>
            <div className="flex items-center gap-2 hover:text-amber-300 transition-all duration-300">
              <Clock size={14} />
              <span className="font-semibold">Mon-Fri: 10 AM – 4:30 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Main Header */}
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left - Logo & Title */}
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full lg:w-auto">
            {/* Logo with glow */}
            <div className="relative group">
              <div className="w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-white/10 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/crr logo.jpg"
                  alt="Official Logo of CRR Polytechnic"
                  className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>

            {/* Title */}
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-wide drop-shadow-md">
                SIR C. RAMLINGA REDDY POLYTECHNIC
              </h1>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-3">
                {["Affiliated to SBTET", "Approved by AICTE", "Code: CRRE"].map(
                  (tag, index) => (
                    <span
                      key={index}
                      className="bg-slate-800/60 px-3 py-1.5 rounded-full border border-slate-600/40 text-xs sm:text-sm text-slate-200 hover:bg-slate-700/60 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Right - Tagline */}
          <div className="text-center lg:text-right w-full lg:w-auto">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl px-8 py-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center justify-center lg:justify-end mb-2">
                <div className="w-3 h-3 bg-amber-400 rounded-full mr-2 animate-pulse shadow-lg"></div>
                <p className="text-slate-100 font-medium text-sm sm:text-base tracking-wide">
                  40+ Years of Excellence in
                </p>
              </div>
              <h2 className="text-transparent bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text font-bold text-xl sm:text-2xl md:text-3xl leading-snug">
                Technical Education
              </h2>
             <p className="mt-3 text-xs sm:text-sm text-slate-300 font-medium whitespace-nowrap">
  Premier Private Polytechnic in Andhra Pradesh
</p>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
