import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 text-white shadow-2xl">
      {/* Enhanced Top Info Bar */}
      <div className="bg-slate-950/90 backdrop-blur-sm py-2 sm:py-3 md:py-4 border-b border-slate-700/40">
        <div className="container mx-auto px-3 sm:px-4 md:px-6">
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between items-start sm:items-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 md:gap-6 w-full sm:w-auto">
              <div className="flex items-center gap-1.5 sm:gap-2 group hover:text-amber-300 transition-colors duration-300">
                <Phone size={14} className="sm:w-4 sm:h-4 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="font-semibold tracking-wide">9912342028</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 group hover:text-amber-300 transition-colors duration-300">
                <Mail size={14} className="sm:w-4 sm:h-4 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="font-semibold tracking-wide truncate">principal.crrpoly@gmail.com</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 md:gap-6 w-full sm:w-auto">
              <div className="flex items-center gap-1.5 sm:gap-2 group hover:text-amber-300 transition-colors duration-300">
                <MapPin size={14} className="sm:w-4 sm:h-4 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="font-semibold tracking-wide">Vatluru, 534007</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 group hover:text-amber-300 transition-colors duration-300">
                <Clock size={14} className="sm:w-4 sm:h-4 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="font-semibold tracking-wide">Mon-Fri: 10 AM - 4.30 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Main Header */}
      <div className="container mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 w-full lg:w-auto">
            <div className="relative group flex-shrink-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-br from-white to-slate-50 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105 border-4 border-white/20">
                <img
                  src="/crr logo.jpg"
                  alt="CRR Polytechnic Logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-white/30"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 to-orange-400/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 sm:mb-3 leading-tight tracking-wide">
                SIR.C RAMLINGA REDDY POLYTECHNIC
              </h1>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3 md:gap-4 text-slate-200 text-xs sm:text-sm lg:text-base font-medium">
                <span className="bg-slate-800/60 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full backdrop-blur-sm border border-slate-600/40 hover:bg-slate-700/60 transition-colors">
                  Affiliated to SBTET
                </span>
                <span className="bg-slate-800/60 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full backdrop-blur-sm border border-slate-600/40 hover:bg-slate-700/60 transition-colors">
                  Approved by AICTE
                </span>
                <span className="bg-slate-800/60 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full backdrop-blur-sm border border-slate-600/40 hover:bg-slate-700/60 transition-colors">
                  Code: CRRE
                </span>
              </div>
            </div>
          </div>

          <div className="text-center lg:text-right w-full lg:w-auto">
            <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-xl sm:rounded-2xl px-6 py-5 sm:px-8 sm:py-6 md:px-10 md:py-8 border border-white/30 shadow-2xl">
              <div className="flex items-center justify-center lg:justify-end mb-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-amber-400 rounded-full mr-2 sm:mr-3 animate-pulse shadow-lg"></div>
                <p className="text-slate-100 text-sm sm:text-base font-semibold tracking-wide">40+ Years of Excellence in</p>
              </div>
              <p className="text-white font-bold text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent mb-2 sm:mb-3">
                Technical Education
              </p>
              <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-slate-200">
                <span className="bg-amber-400/30 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-semibold border border-amber-400/40">
                  Premier Private Polytechnic
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
