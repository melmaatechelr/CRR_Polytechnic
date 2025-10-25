import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  GraduationCap,
  Building,
  Users,
  Award,
  Star,
  Zap,
  BookOpen,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "#" },
    { name: "Admissions", href: "#" },
    { name: "Academics", href: "#" },
    { name: "Departments", href: "#" },
    { name: "Placements", href: "#" },
    { name: "Facilities", href: "#" },
    { name: "Gallery", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/share/16or76gYfR/",
      color: "hover:text-blue-500",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/sircrreddypolytechnic?igsh=MXZtYXBmaHB1eDRxMg==",
      color: "hover:text-pink-500",
    },
  ];

  const stats = [
    { icon: GraduationCap, label: "Alumni", value: "5000+" },
    { icon: Building, label: "Companies", value: "200+" },
    { icon: Users, label: "Faculty", value: "100+" },
    { icon: Award, label: "Years Legacy", value: "40+" },
  ];

  const achievements = [
    { icon: Star, text: "AICTE Approved Institution" },
    { icon: Award, text: "SBTET Affiliated College" },
    { icon: Zap, text: "95% Placement Record" },
    { icon: BookOpen, text: "Industry-Ready Curriculum" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-200 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-slate-800 opacity-95"></div>
      <div className="relative z-10">
        {/* Stats Section */}
        <div className="py-16 border-b border-slate-700/50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
              Excellence in Numbers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg">
                    <stat.icon size={32} />
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-slate-300 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="container mx-auto px-6 py-20 grid lg:grid-cols-12 gap-16">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center space-x-5">
              <img
                src="/crr logo.jpg"
                alt="CRR Polytechnic Logo"
                className="w-20 h-20 rounded-2xl shadow-lg"
              />
              <div>
                <h3 className="text-3xl font-bold text-white">
                  CRR Polytechnic
                </h3>
                <p className="text-slate-400 text-lg font-medium">
                  Excellence in Technical Education
                </p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed">
              A premier polytechnic institution in Andhra Pradesh with 40+ years
              of legacy, delivering world-class technical education and producing
              skilled engineers ready for tomorrow’s industries.
            </p>

            {/* Contact Info */}
            <div className="space-y-5 text-slate-300">
              <div className="flex items-start space-x-4">
                <MapPin className="text-blue-400 mt-1" />
                <p>
                  Near Vatluru Flyover, Vatluru, Eluru, 534007, Andhra Pradesh,
                  India
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-green-400" />
                <span>9912342028</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-pink-400" />
                <span>principal.crrpoly@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-2xl font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="hover:text-amber-400 transition-colors font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Achievements + Newsletter */}
          <div className="lg:col-span-4 space-y-10">
            <div>
              <h4 className="text-2xl font-semibold text-white mb-6">
                Our Achievements
              </h4>
              <ul className="space-y-4">
                {achievements.map((a, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <a.icon className="text-blue-400" size={20} />
                    <span>{a.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-xl font-semibold mb-4 text-white">
                Stay Connected
              </h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-l-lg focus:ring-2 focus:ring-amber-500 outline-none text-white placeholder-slate-400"
                />
                <button className="bg-gradient-to-r from-amber-600 to-orange-600 px-6 rounded-r-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-5 pt-3">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className={`p-3 bg-white/10 rounded-xl border border-slate-700 hover:bg-white/20 transition-all ${s.color}`}
                >
                  <s.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 py-6">
          <div className="container mx-auto px-6 text-center text-slate-400 text-sm">
            <p>
              © {currentYear} SIR C. RAMALINGA REDDY POLYTECHNIC — All Rights
              Reserved
            </p>
            <p className="mt-2 text-slate-500">
              AICTE Approved | SBTET Affiliated | Code: CRRE
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
