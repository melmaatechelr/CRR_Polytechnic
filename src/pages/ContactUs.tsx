import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare } from 'lucide-react';

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
        'Monday - Saturday: 10:00 AM - 4:30 PM',
        'Sunday: Closed'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            Contact Us
          </h1>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Get in touch with us for admissions, academic queries, or any other information.
            We're here to help you with all your needs and guide you towards excellence in technical education.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
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
                    <p
                      key={idx}
                      className="text-xs sm:text-sm md:text-base text-gray-700 font-medium flex items-start"
                    >
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></span>
                      <span className="break-words">{detail}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 border border-gray-100">
            <div className="flex items-center mb-6 sm:mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-3 sm:p-4 rounded-lg sm:rounded-xl mr-3 sm:mr-4">
                <MessageSquare className="text-white" size={window.innerWidth < 640 ? 20 : 28} />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">Send us a Message</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 md:space-y-8">
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-gray-400" size={18} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-3 py-3 border-2 border-gray-200 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all font-medium"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-3 py-3 border-2 border-gray-200 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all font-medium"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-3 py-3 border-2 border-gray-200 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all font-medium"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-3 border-2 border-gray-200 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all font-medium"
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
                <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-3 py-3 border-2 border-gray-200 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all font-medium resize-none"
                  placeholder="Enter your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all font-bold text-base flex items-center justify-center group shadow-lg hover:shadow-xl"
              >
                <Send className="mr-2 group-hover:translate-x-1 transition-transform" size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden border border-gray-100 mb-12 sm:mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 flex items-center gap-3">
              <MapPin className="flex-shrink-0" size={28} />
              <span>Find Us on Map</span>
            </h2>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Sir C R Reddy Polytechnic is located near Vatluru Flyover, Eluru — easily accessible via NH-5 and railway routes.
            </p>
          </div>
          <div className="p-4 sm:p-6 md:p-8">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10361.973541413625!2d81.0466238407657!3d16.701459540474225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3613473fffffff%3A0x4f380aae64ee8309!2sSir%20C%20Ramalinga%20Reddy%20Polytechnic!5e0!3m2!1sen!2sin!4v1761416738877!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full rounded-xl"
                title="Sir C R Reddy Polytechnic Map"
              />
            </div>
          </div>
        </div>

        {/* Quick Contact */}
        <div className="mt-12 sm:mt-16 md:mt-20 bg-gradient-to-r from-blue-600 via-teal-600 to-cyan-700 text-white rounded-xl sm:rounded-2xl p-8 sm:p-10 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Need Immediate Assistance?</h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 text-blue-100 max-w-2xl mx-auto">
              Call us directly for urgent queries or visit our campus during office hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919912342028"
                className="group bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-all shadow-lg"
              >
                <Phone className="inline mr-2 group-hover:scale-110 transition-transform" size={18} />
                Call Now:+91 99123 42028
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
