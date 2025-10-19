import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare, Building } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: [
        'SIR C R REDDY POLYTECHNIC',
        'NEAR VATLURU FLYOVER',
        'VATLURU, ELURU, 534007',
        'Andhra Pradesh, India'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        'Main Office: +91-9959112939',
        'Admissions: +91-9912342028'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: [
        'principal.crrpoly@gmail.com'
      ],
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: [
        'Monday - Friday: 9:00 AM - 5:00 PM',
        'Saturday: 9:00 AM - 1:00 PM',
        'Sunday: Closed'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const keyPersonnel = [
    {
      name: 'CH.SATISH BABU, M.TECH',
      designation: 'Principal',
      phone: '+91-9912342028',
      email: 'principal.crrpoly@gmail.com'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">Contact Us</h1>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Get in touch with us for admissions, academic queries, or any other information.
            We're here to help you with all your needs and guide you towards excellence in technical education.
          </p>
        </div>

        {/* Enhanced Contact Information Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
          {contactInfo.map((info, index) => (
            <div key={index} className="group bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className={`bg-gradient-to-r ${info.color} p-5 sm:p-6 md:p-8 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full -translate-y-8 sm:-translate-y-10 translate-x-8 sm:translate-x-10"></div>
                <div className="flex items-center mb-3 sm:mb-4 relative z-10">
                  <div className="bg-white/20 p-2 sm:p-3 rounded-lg sm:rounded-xl mr-3 sm:mr-4">
                    <info.icon size={window.innerWidth < 640 ? 20 : 28} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold">{info.title}</h3>
                </div>
              </div>
              <div className="p-4 sm:p-5 md:p-6">
                <div className="space-y-2 sm:space-y-3">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-xs sm:text-sm md:text-base text-gray-700 font-medium flex items-start">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></span>
                      <span className="break-words">{detail}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 mb-12 sm:mb-16 md:mb-20">
          {/* Enhanced Contact Form */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 border border-gray-100">
            <div className="flex items-center mb-6 sm:mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-3 sm:p-4 rounded-lg sm:rounded-xl mr-3 sm:mr-4">
                <MessageSquare className="text-white" size={window.innerWidth < 640 ? 20 : 28} />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">Send us a Message</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 md:space-y-8">
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div className="group">
                  <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2 sm:mb-3">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 sm:left-4 top-3 sm:top-4 text-gray-400 group-focus-within:text-blue-600 transition-colors" size={window.innerWidth < 640 ? 16 : 20} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 font-medium text-sm sm:text-base"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>
                <div className="group">
                  <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2 sm:mb-3">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 sm:left-4 top-3 sm:top-4 text-gray-400 group-focus-within:text-blue-600 transition-colors" size={window.innerWidth < 640 ? 16 : 20} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 font-medium text-sm sm:text-base"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div className="group">
                  <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2 sm:mb-3">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 sm:left-4 top-3 sm:top-4 text-gray-400 group-focus-within:text-blue-600 transition-colors" size={window.innerWidth < 640 ? 16 : 20} />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 font-medium text-sm sm:text-base"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2 sm:mb-3">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 font-medium text-sm sm:text-base"
                  >
                    <option value="">Select Subject</option>
                    <option value="admission">Admission Inquiry</option>
                    <option value="academic">Academic Information</option>
                    <option value="placement">Placement Query</option>
                    <option value="hostel">Hostel Information</option>
                    <option value="general">General Query</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2 sm:mb-3">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-3 sm:px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 font-medium resize-none text-sm sm:text-base"
                  placeholder="Enter your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 sm:py-4 rounded-lg sm:rounded-xl hover:from-blue-700 hover:to-teal-700 transition-all duration-300 font-bold text-base sm:text-lg flex items-center justify-center group shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Send className="mr-2 sm:mr-3 group-hover:translate-x-1 transition-transform" size={window.innerWidth < 640 ? 16 : 20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Key Personnel Only */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8 flex items-center">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-2.5 sm:p-3 rounded-lg sm:rounded-xl mr-3 sm:mr-4">
                  <Building size={window.innerWidth < 640 ? 20 : 24} className="text-white" />
                </div>
                Key Personnel
              </h3>
              <div className="space-y-4 sm:space-y-6">
                {keyPersonnel.map((person, index) => (
                  <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 p-5 sm:p-6 rounded-lg sm:rounded-xl border-l-4 border-blue-500">
                    <h4 className="font-bold text-gray-800 text-base sm:text-lg">{person.name}</h4>
                    <p className="text-blue-600 font-semibold mb-3 text-sm sm:text-base">{person.designation}</p>
                    <div className="space-y-2 text-xs sm:text-sm">
                      <div className="flex items-center text-gray-600">
                        <Phone size={14} className="mr-2 sm:mr-3 text-blue-500 flex-shrink-0" />
                        <span className="font-medium">{person.phone}</span>
                      </div>
                      <div className="flex items-center text-gray-600 break-all">
                        <Mail size={14} className="mr-2 sm:mr-3 text-blue-500 flex-shrink-0" />
                        <span className="font-medium">{person.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Campus Visit Info */}
            <div className="bg-gradient-to-br from-blue-500 to-teal-600 text-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Visit Our Campus</h3>
              <p className="text-blue-50 mb-6 text-sm sm:text-base leading-relaxed">
                Experience our world-class facilities firsthand. Schedule a campus tour and discover why we're the premier choice for technical education.
              </p>
              <button className="w-full bg-white text-blue-600 px-6 py-3 rounded-lg sm:rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg text-sm sm:text-base">
                Schedule Campus Visit
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Map Section */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 flex items-center flex-wrap gap-3">
              <MapPin className="flex-shrink-0" size={window.innerWidth < 640 ? 24 : 32} />
              <span>Find Us on Map</span>
            </h2>
            <p className="text-blue-100 text-sm sm:text-base md:text-lg leading-relaxed">
              Visit our Campus. Sir C R Reddy Polytechnic is located in a campus abutting NH-5, about 7 km from the heart of Eluru town, West Godavari District, Andhra Pradesh. The college is situated near Vatluru Railway Gate in Eluru and is on Chennai-Howrah Highway and train route. It is easily accessible from any part of the country by rail as well as road.
            </p>
          </div>

          <div className="p-4 sm:p-6 md:p-8">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.6177441852437!2d81.051896!3d16.6960013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3613473fffffff%3A0x4f380aae64ee8309!2sSir%20C%20Ramalinga%20Reddy%20Polytechnic!5e0!3m2!1sen!2sin!4v1751465941058!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{border:0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full sm:h-96 md:h-450"
              />
            </div>

            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg sm:rounded-xl">
                <MapPin className="text-blue-600 mx-auto mb-2 sm:mb-3" size={window.innerWidth < 640 ? 24 : 32} />
                <h4 className="font-bold text-gray-800 mb-2 text-sm sm:text-base">Address</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Vatluru, 534007<br />Andhra Pradesh, India</p>
              </div>
              <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg sm:rounded-xl">
                <Phone className="text-green-600 mx-auto mb-2 sm:mb-3" size={window.innerWidth < 640 ? 24 : 32} />
                <h4 className="font-bold text-gray-800 mb-2 text-sm sm:text-base">Phone</h4>
                <p className="text-gray-600 text-xs sm:text-sm font-semibold">88122 31407</p>
              </div>
              <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg sm:rounded-xl">
                <Clock className="text-orange-600 mx-auto mb-2 sm:mb-3" size={window.innerWidth < 640 ? 24 : 32} />
                <h4 className="font-bold text-gray-800 mb-2 text-sm sm:text-base">Visiting Hours</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Mon-Fri: 9AM-5PM<br />Sat: 9AM-1PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Quick Contact */}
        <div className="mt-12 sm:mt-16 md:mt-20 bg-gradient-to-r from-blue-600 via-teal-600 to-cyan-700 text-white rounded-xl sm:rounded-2xl p-8 sm:p-10 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-5 sm:top-10 left-5 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-5 sm:bottom-10 right-5 sm:right-10 w-32 h-32 sm:w-40 sm:h-40 bg-blue-300/10 rounded-full blur-2xl"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Need Immediate Assistance?</h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-blue-100 max-w-2xl mx-auto px-4">
              Call us directly for urgent queries or visit our campus during office hours.
              Our team is always ready to help you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <a
                href="tel:8812231407"
                className="group bg-white text-blue-600 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg text-sm sm:text-base"
              >
                <Phone className="inline mr-2 group-hover:scale-110 transition-transform" size={window.innerWidth < 640 ? 16 : 20} />
                Call Now: 88122 31407
              </a>
              <button className="group border-2 border-white text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 backdrop-blur-sm text-sm sm:text-base">
                Schedule Campus Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
