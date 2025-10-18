import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 text-white shadow-2xl">
      {/* Enhanced Top Info Bar */}
      <div className="bg-slate-950/90 backdrop-blur-sm py-4 border-b border-slate-700/40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm font-medium">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 group hover:text-amber-300 transition-colors duration-300">
                <Phone size={16} className="group-hover:scale-110 transition-transform" />
                <span className="font-semibold tracking-wide">88122 31407</span>
              </div>
              <div className="flex items-center space-x-2 group hover:text-amber-300 transition-colors duration-300">
                <Mail size={16} className="group-hover:scale-110 transition-transform" />
                <span className="font-semibold tracking-wide">info@crrpolytechnic.edu.in</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 group hover:text-amber-300 transition-colors duration-300">
                <MapPin size={16} className="group-hover:scale-110 transition-transform" />
                <span className="font-semibold tracking-wide">Vatluru, 534007</span>
              </div>
              <div className="flex items-center space-x-2 group hover:text-amber-300 transition-colors duration-300">
                <Clock size={16} className="group-hover:scale-110 transition-transform" />
                <span className="font-semibold tracking-wide">Mon-Fri: 9AM-5PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Main Header */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex items-center space-x-8 mb-6 lg:mb-0">
            <div className="relative group">
              <div className="w-28 h-28 bg-gradient-to-br from-white to-slate-50 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105 border-4 border-white/20">
                <img 
                  src="/crr logo.jpg" 
                  alt="CRR Polytechnic Logo" 
                  className="w-24 h-24 rounded-full object-cover border-2 border-white/30"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 to-orange-400/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            </div>
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight tracking-wide">
                SIR.C RAMLINGA REDDY POLYTECHNIC
              </h1>
              <div className="flex flex-wrap gap-4 text-slate-200 text-sm lg:text-base font-medium">
                <span className="bg-slate-800/60 px-4 py-2 rounded-full backdrop-blur-sm border border-slate-600/40 hover:bg-slate-700/60 transition-colors">
                  Affiliated to SBTET
                </span>
                <span className="bg-slate-800/60 px-4 py-2 rounded-full backdrop-blur-sm border border-slate-600/40 hover:bg-slate-700/60 transition-colors">
                  Approved by AICTE
                </span>
                <span className="bg-slate-800/60 px-4 py-2 rounded-full backdrop-blur-sm border border-slate-600/40 hover:bg-slate-700/60 transition-colors">
                  Code: CRRE
                </span>
              </div>
            </div>
          </div>
          
          <div className="text-center lg:text-right">
            <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-2xl px-10 py-8 border border-white/30 shadow-2xl">
              <div className="flex items-center justify-center lg:justify-end mb-2">
                <div className="w-3 h-3 bg-amber-400 rounded-full mr-3 animate-pulse shadow-lg"></div>
                <p className="text-slate-100 text-base font-semibold tracking-wide">40 Years of Excellence in</p>
              </div>
              <p className="text-white font-bold text-2xl bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent mb-2">
                Technical Education
              </p>
              <div className="mt-4 text-sm text-slate-200">
                <span className="bg-amber-400/30 px-4 py-2 rounded-full font-semibold border border-amber-400/40">
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