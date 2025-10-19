import React from 'react';
import { Award, Users, BookOpen, Building, ChevronRight, Star, Calendar, MapPin, Trophy, Zap } from 'lucide-react';

const Home = () => {
  const stats = [
    { icon: Users, label: 'Students Enrolled', value: '2000+', color: 'from-blue-500 to-blue-600' },
    { icon: BookOpen, label: 'Courses Offered', value: '7', color: 'from-green-500 to-green-600' },
    { icon: Award, label: 'Years of Excellence', value: '40+', color: 'from-amber-500 to-amber-600' },
    { icon: Building, label: 'Modern Labs', value: '50+', color: 'from-orange-500 to-orange-600' }
  ];

  const highlights = [
    {
      title: 'AICTE Approved',
      description: 'Recognized by All India Council for Technical Education',
      icon: Award,
      gradient: 'from-emerald-400 to-emerald-600'
    },
    {
      title: 'SBTET Affiliated',
      description: 'State Board of Technical Education and Training',
      icon: BookOpen,
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Industry Connect',
      description: 'Strong placement record with top companies',
      icon: Building,
      gradient: 'from-teal-400 to-teal-600'
    },
    {
      title: 'Modern Infrastructure',
      description: 'State-of-the-art facilities and laboratories',
      icon: Star,
      gradient: 'from-amber-400 to-amber-600'
    }
  ];

  const announcements = [
    {
      date: '2024-01-15',
      title: 'Admission Open for Academic Year 2024-25',
      type: 'Admission',
      priority: 'high'
    },
    {
      date: '2024-01-10',
      title: 'Campus Placement Drive - TCS, Infosys',
      type: 'Placement',
      priority: 'medium'
    },
    {
      date: '2024-01-05',
      title: 'Technical Symposium - TechFest 2024',
      type: 'Event',
      priority: 'medium'
    }
  ];

  const quickLinks = [
    { name: 'Admissions', icon: BookOpen, color: 'bg-gradient-to-br from-blue-500 to-blue-600' },
    { name: 'Examinations', icon: Award, color: 'bg-gradient-to-br from-green-500 to-green-600' },
    { name: 'Placements', icon: Trophy, color: 'bg-gradient-to-br from-orange-500 to-orange-600' },
    { name: 'Campus Life', icon: Zap, color: 'bg-gradient-to-br from-pink-500 to-pink-600' }
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-cyan-600/30"></div>

        {/* Animated background elements */}
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-40 h-40 sm:w-80 sm:h-80 bg-blue-400/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-48 h-48 sm:w-96 sm:h-96 bg-cyan-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Premier Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 px-4 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 rounded-full font-bold text-xs sm:text-sm md:text-base mb-6 sm:mb-8 shadow-xl border border-amber-300/50">
              <Star className="mr-1.5 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4" />
              <span className="truncate">Premier Private Polytechnic in AP</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold mb-6 sm:mb-8 md:mb-10 leading-tight tracking-wide">
              Shaping Tomorrow's
              <span className="bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent"> Engineers</span>
            </h1>

            {/* Enhanced tagline */}
            <div className="bg-white/15 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 md:mb-10 border border-white/30 shadow-2xl">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-slate-100 leading-relaxed font-medium">
                A premier private polytechnic in Andhra Pradesh with a <span className="text-amber-300 font-bold">legacy of 40 years</span>,
                featuring state-of-the-art laboratories, expansive infrastructure, and a team of
                <span className="text-blue-300 font-bold"> highly qualified and experienced faculty</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center">
              <button className="group bg-gradient-to-r from-white to-slate-50 text-blue-900 px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-5 rounded-xl sm:rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex items-center justify-center text-sm sm:text-base md:text-lg border border-white/20">
                Apply Now
                <ChevronRight className="ml-2 sm:ml-3 group-hover:translate-x-2 transition-transform w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button className="group border-2 border-white/60 text-white px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-5 rounded-xl sm:rounded-2xl font-bold hover:bg-white hover:text-blue-900 transition-all duration-300 backdrop-blur-sm text-sm sm:text-base md:text-lg hover:shadow-2xl transform hover:-translate-y-2">
                Virtual Campus Tour
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            {stats.map((stat, index) => (
              <div key={index} className="group text-center p-4 sm:p-5 md:p-6 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`bg-gradient-to-br ${stat.color} w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-all duration-300 shadow-xl`}>
                  <stat.icon className="text-white" size={window.innerWidth < 640 ? 28 : window.innerWidth < 768 ? 32 : 40} />
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4 group-hover:text-blue-700 transition-colors">{stat.value}</h3>
                <p className="text-gray-600 font-semibold text-xs sm:text-sm md:text-base lg:text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Highlights Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 md:mb-8 tracking-wide">
              Why Choose CRR Polytechnic?
            </h2>
            <div className="w-20 sm:w-24 md:w-32 h-1.5 sm:h-2 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium px-4">
              We provide world-class technical education with industry-relevant curriculum,
              modern facilities, and a commitment to excellence that spans four decades
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
            {highlights.map((highlight, index) => (
              <div key={index} className="group bg-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100 hover:border-blue-200">
                <div className={`bg-gradient-to-br ${highlight.gradient} w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <highlight.icon className="text-white" size={window.innerWidth < 640 ? 24 : 32} />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 group-hover:text-blue-700 transition-colors">{highlight.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Announcements & Quick Links */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Latest Announcements */}
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-12 flex items-center">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4 rounded-2xl mr-6 shadow-lg">
                  <Calendar className="text-white" size={32} />
                </div>
                Latest Announcements
              </h2>
              <div className="space-y-8">
                {announcements.map((announcement, index) => (
                  <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-6 border-blue-500">
                    <div className="flex justify-between items-start mb-4">
                      <span className={`px-5 py-2 rounded-full text-sm font-bold ${
                        announcement.type === 'Admission' ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800' :
                        announcement.type === 'Placement' ? 'bg-gradient-to-r from-blue-100 to-blue-100 text-blue-800' :
                        'bg-gradient-to-r from-pink-100 to-pink-100 text-pink-800'
                      }`}>
                        {announcement.type}
                      </span>
                      <span className="text-sm text-gray-500 font-semibold">{announcement.date}</span>
                    </div>
                    <h3 className="font-bold text-gray-800 group-hover:text-blue-700 transition-colors text-xl">{announcement.title}</h3>
                  </div>
                ))}
              </div>
              <button className="mt-10 text-blue-600 font-bold hover:text-blue-800 flex items-center group text-lg">
                View All Announcements 
                <ChevronRight size={20} className="ml-3 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

            {/* Enhanced Quick Links */}
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-12 flex items-center">
                <div className="bg-gradient-to-r from-orange-600 to-pink-600 p-4 rounded-2xl mr-6 shadow-lg">
                  <MapPin className="text-white" size={32} />
                </div>
                Quick Access
              </h2>
              <div className="grid grid-cols-2 gap-6">
                {quickLinks.map((link, index) => (
                  <button key={index} className={`group ${link.color} text-white p-8 rounded-2xl transition-all duration-300 text-left transform hover:-translate-y-2 hover:shadow-2xl`}>
                    <div className="flex items-center justify-between mb-3">
                      <link.icon size={28} className="group-hover:scale-110 transition-transform" />
                      <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
                    </div>
                    <span className="font-bold text-lg">{link.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-80 h-80 bg-white/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300/15 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 tracking-wide">
            Ready to Start Your Engineering Journey?
          </h2>
          <p className="text-2xl mb-12 text-slate-100 max-w-4xl mx-auto leading-relaxed font-medium">
            Join thousands of successful engineers who started their career at CRR Polytechnic. 
            Experience excellence in technical education with our 40-year legacy.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <button className="group bg-white text-blue-700 px-12 py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all duration-300 transform hover:-translate-y-2 shadow-xl hover:shadow-2xl text-lg border border-white/20">
              Apply for Admission
              <ChevronRight className="inline ml-3 group-hover:translate-x-2 transition-transform" size={22} />
            </button>
            <button className="group border-2 border-white/60 text-white px-12 py-5 rounded-2xl font-bold hover:bg-white hover:text-blue-700 transition-all duration-300 backdrop-blur-sm text-lg hover:shadow-2xl transform hover:-translate-y-2">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;