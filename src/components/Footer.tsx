import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Heart,
  GraduationCap,
  Building,
  Users,
  Award,
  Star,
  Zap,
  BookOpen
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Admissions', href: '#' },
    { name: 'Academics', href: '#' },
    { name: 'Departments', href: '#' },
    { name: 'Placements', href: '#' },
    { name: 'Facilities', href: '#' },
    { name: 'Gallery', href: '#' },
    { name: 'Contact Us', href: '#' }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/share/16or76gYfR/', color: 'hover:text-blue-600', bg: 'hover:bg-blue-50' },
    { icon: Instagram, href: 'https://www.instagram.com/sircrreddypolytechnic?igsh=MXZtYXBmaHB1eDRxMg==', color: 'hover:text-pink-600', bg: 'hover:bg-pink-50' }
  ];

  const stats = [
    { icon: GraduationCap, label: 'Alumni', value: '5000+', gradient: 'from-blue-500 to-cyan-500' },
    { icon: Building, label: 'Companies', value: '200+', gradient: 'from-green-500 to-emerald-500' },
    { icon: Users, label: 'Faculty', value: '100+', gradient: 'from-rose-500 to-pink-500' },
    { icon: Award, label: 'Years Legacy', value: '40+', gradient: 'from-orange-500 to-red-500' }
  ];

  const achievements = [
    { icon: Star, text: 'AICTE Approved Institution' },
    { icon: Award, text: 'SBTET Affiliated College' },
    { icon: Zap, text: '95% Placement Record' },
    { icon: BookOpen, text: 'Industry-Ready Curriculum' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/40 to-cyan-600/40"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/25 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-400/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-400/15 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10">
        {/* Enhanced Stats Section */}
        <div className="border-b border-white/20 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 tracking-wide">Excellence in Numbers</h2>
              <div className="w-32 h-2 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group p-6 bg-white/5 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <div className={`bg-gradient-to-br ${stat.gradient} w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-300 shadow-2xl group-hover:shadow-3xl`}>
                    <stat.icon size={36} className="text-white" />
                  </div>
                  <div className="text-5xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">{stat.value}</div>
                  <div className="text-slate-200 text-base font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-12 gap-16">
              {/* College Info - Enhanced */}
              <div className="lg:col-span-5">
                <div className="flex items-center mb-10">
                  <div className="w-24 h-24 bg-gradient-to-br from-white to-slate-50 rounded-3xl flex items-center justify-center shadow-2xl mr-8 group hover:scale-105 transition-transform border-2 border-white/20">
                    <img 
                      src="/crr logo.jpg" 
                      alt="CRR Polytechnic Logo" 
                      className="w-20 h-20 rounded-2xl object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-3 tracking-wide">CRR Polytechnic</h3>
                    <p className="text-slate-200 text-xl font-semibold">Excellence in Technical Education</p>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-10 leading-relaxed text-xl font-medium">
                  A premier private polytechnic in Andhra Pradesh with 40 years of legacy, 
                  providing world-class technical education and shaping future engineers with 
                  state-of-the-art facilities and experienced faculty.
                </p>
                
                {/* Contact Info - Enhanced */}
                <div className="space-y-8">
                  <div className="flex items-center text-slate-300 group hover:text-white transition-colors">
                    <div className="bg-blue-500/30 p-4 rounded-2xl mr-6 group-hover:bg-blue-500/40 transition-colors shadow-lg">
                      <MapPin size={24} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">Address</p>
                      <p className="text-base">Near Vatluru Flyover,Vatluru, Eluru, 534007,Andhra Pradesh, India</p>
                    </div>
                  </div>
                  <div className="flex items-center text-slate-300 group hover:text-white transition-colors">
                    <div className="bg-green-500/30 p-4 rounded-2xl mr-6 group-hover:bg-green-500/40 transition-colors shadow-lg">
                      <Phone size={24} className="text-green-400" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">Phone</p>
                      <p className="text-base font-semibold">88122 31407</p>
                    </div>
                  </div>
                  <div className="flex items-center text-slate-300 group hover:text-white transition-colors">
                    <div className="bg-pink-500/30 p-4 rounded-2xl mr-6 group-hover:bg-pink-500/40 transition-colors shadow-lg">
                      <Mail size={24} className="text-pink-400" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">Email</p>
                      <p className="text-base">info@crrpolytechnic.edu.in</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links - Enhanced */}
              <div className="lg:col-span-3">
                <h4 className="text-3xl font-bold text-white mb-10 relative">
                  Quick Links
                  <div className="absolute bottom-0 left-0 w-20 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                </h4>
                <ul className="space-y-5">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href} 
                        className="text-slate-300 hover:text-white transition-all duration-300 flex items-center group text-lg font-medium"
                      >
                        <span className="w-3 h-3 bg-amber-500 rounded-full mr-5 group-hover:scale-150 transition-transform"></span>
                        <span className="group-hover:translate-x-2 transition-transform">{link.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements & Social */}
              <div className="lg:col-span-4">
                <h4 className="text-3xl font-bold text-white mb-10 relative">
                  Our Achievements
                  <div className="absolute bottom-0 left-0 w-20 h-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-full"></div>
                </h4>
                
                <div className="space-y-6 mb-12">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center text-slate-300 group hover:text-white transition-colors">
                      <div className="bg-gradient-to-r from-blue-500/30 to-cyan-500/30 p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform shadow-lg">
                        <achievement.icon size={24} className="text-blue-400" />
                      </div>
                      <span className="font-semibold text-lg">{achievement.text}</span>
                    </div>
                  ))}
                </div>

                {/* Newsletter */}
                <div className="mb-12">
                  <h5 className="text-xl font-bold text-white mb-6">Stay Connected</h5>
                  <p className="text-slate-300 mb-6 text-base font-medium">Subscribe to our newsletter for updates</p>
                  <div className="flex">
                    <input 
                      type="email" 
                      placeholder="Enter your email"
                      className="flex-1 px-5 py-4 bg-white/15 border border-white/30 rounded-l-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 backdrop-blur-sm font-medium"
                    />
                    <button className="bg-gradient-to-r from-amber-600 to-orange-600 px-8 py-4 rounded-r-2xl hover:from-amber-700 hover:to-orange-700 transition-all duration-300 font-bold shadow-lg hover:shadow-xl">
                      Subscribe
                    </button>
                  </div>
                </div>

                {/* Enhanced Social Links */}
                <div>
                  <h5 className="text-xl font-bold text-white mb-6">Follow Us</h5>
                  <div className="flex space-x-6">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className={`bg-white/15 p-5 rounded-2xl text-slate-300 ${social.color} ${social.bg} transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20 hover:border-white/40 shadow-lg hover:shadow-2xl`}
                      >
                        <social.icon size={28} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="border-t border-white/20 py-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
              {/* Copyright */}
              <div className="text-center lg:text-left">
                <p className="text-slate-300 text-xl font-semibold tracking-wide">
                  © {currentYear} SIR.C RAMLINGA REDDY POLYTECHNIC. ALL RIGHTS RESERVED
                </p>
                <p className="text-slate-400 text-base mt-3 font-medium">
                  AICTE Approved | SBTET Affiliated | Counselling Code: CRRE
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;