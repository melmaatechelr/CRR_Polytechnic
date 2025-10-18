import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare, Building, Globe } from 'lucide-react';

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
    // Handle form submission logic here
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
        'SIR.C RAMLINGA REDDY POLYTECHNIC',
        'Vatluru, 534007',
        'Andhra Pradesh, India'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        'Main Office: 88122 31407',
        'Principal: +91-XXXX-XXXXXX',
        'Admissions: +91-XXXX-XXXXXX'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: [
        'info@crrpolytechnic.edu.in',
        'principal@crrpolytechnic.edu.in',
        'admissions@crrpolytechnic.edu.in'
      ],
      color: 'from-purple-500 to-purple-600'
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

  const departments = [
    { name: 'Admissions Office', phone: '+91-XXXX-XXXXXX', email: 'admissions@crrpolytechnic.edu.in' },
    { name: 'Academic Office', phone: '+91-XXXX-XXXXXX', email: 'academic@crrpolytechnic.edu.in' },
    { name: 'Examination Cell', phone: '+91-XXXX-XXXXXX', email: 'exams@crrpolytechnic.edu.in' },
    { name: 'Placement Cell', phone: '+91-XXXX-XXXXXX', email: 'placements@crrpolytechnic.edu.in' },
    { name: 'Accounts Office', phone: '+91-XXXX-XXXXXX', email: 'accounts@crrpolytechnic.edu.in' },
    { name: 'Hostel Office', phone: '+91-XXXX-XXXXXX', email: 'hostel@crrpolytechnic.edu.in' }
  ];

  const keyPersonnel = [
    {
      name: 'Dr. Principal Name',
      designation: 'Principal',
      phone: '+91-XXXX-XXXXXX',
      email: 'principal@crrpolytechnic.edu.in'
    },
    {
      name: 'Prof. Vice Principal Name',
      designation: 'Vice Principal',
      phone: '+91-XXXX-XXXXXX',
      email: 'viceprincipal@crrpolytechnic.edu.in'
    },
    {
      name: 'Mr. Registrar Name',
      designation: 'Registrar',
      phone: '+91-XXXX-XXXXXX',
      email: 'registrar@crrpolytechnic.edu.in'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Contact Us</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Get in touch with us for admissions, academic queries, or any other information. 
            We're here to help you with all your needs and guide you towards excellence in technical education.
          </p>
        </div>

        {/* Enhanced Contact Information Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {contactInfo.map((info, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className={`bg-gradient-to-r ${info.color} p-8 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                <div className="flex items-center mb-4 relative z-10">
                  <div className="bg-white/20 p-3 rounded-xl mr-4">
                    <info.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold">{info.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-700 font-medium flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Enhanced Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-xl mr-4">
                <MessageSquare className="text-white" size={28} />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Send us a Message</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-4 text-gray-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 font-medium"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>
                <div className="group">
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-4 text-gray-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 font-medium"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-4 text-gray-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 font-medium"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 font-medium"
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
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 font-medium resize-none"
                  placeholder="Enter your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-bold text-lg flex items-center justify-center group shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Send className="mr-3 group-hover:translate-x-1 transition-transform" size={20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Additional Contact Information */}
          <div className="space-y-8">
            {/* Key Personnel */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-xl mr-4">
                  <Building size={24} className="text-white" />
                </div>
                Key Personnel
              </h3>
              <div className="space-y-6">
                {keyPersonnel.map((person, index) => (
                  <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                    <h4 className="font-bold text-gray-800 text-lg">{person.name}</h4>
                    <p className="text-blue-600 font-semibold mb-3">{person.designation}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-gray-600">
                        <Phone size={16} className="mr-3 text-blue-500" />
                        <span className="font-medium">{person.phone}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Mail size={16} className="mr-3 text-blue-500" />
                        <span className="font-medium">{person.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Department Contacts */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl mr-4">
                  <Globe size={24} className="text-white" />
                </div>
                Department Contacts
              </h3>
              <div className="grid gap-4">
                {departments.map((dept, index) => (
                  <div key={index} className="bg-gradient-to-r from-gray-50 to-purple-50 p-5 rounded-xl hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-gray-800 mb-3">{dept.name}</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-gray-600">
                        <Phone size={14} className="mr-3 text-purple-500" />
                        <span className="font-medium">{dept.phone}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Mail size={14} className="mr-3 text-purple-500" />
                        <span className="font-medium">{dept.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Map Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              <MapPin className="mr-4" size={32} />
              Find Us on Map
            </h2>
            <p className="text-blue-100 text-lg">
              Visit our campus located in the heart of Vatluru, Andhra Pradesh
            </p>
          </div>
          
          <div className="p-8">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.6177441852437!2d81.051896!3d16.6960013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3613473fffffff%3A0x4f380aae64ee8309!2sSir%20C%20Ramalinga%20Reddy%20Polytechnic!5e0!3m2!1sen!2sin!4v1751465941058!5m2!1sen!2sin"
                width="100%" 
                height="450" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
            
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                <MapPin className="text-blue-600 mx-auto mb-3" size={32} />
                <h4 className="font-bold text-gray-800 mb-2">Address</h4>
                <p className="text-gray-600 text-sm">Vatluru, 534007<br />Andhra Pradesh, India</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                <Phone className="text-green-600 mx-auto mb-3" size={32} />
                <h4 className="font-bold text-gray-800 mb-2">Phone</h4>
                <p className="text-gray-600 text-sm font-semibold">88122 31407</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                <Clock className="text-purple-600 mx-auto mb-3" size={32} />
                <h4 className="font-bold text-gray-800 mb-2">Visiting Hours</h4>
                <p className="text-gray-600 text-sm">Mon-Fri: 9AM-5PM<br />Sat: 9AM-1PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Quick Contact */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white rounded-2xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-300/10 rounded-full blur-2xl"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">Need Immediate Assistance?</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Call us directly for urgent queries or visit our campus during office hours. 
              Our team is always ready to help you.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:8812231407"
                className="group bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
              >
                <Phone className="inline mr-2 group-hover:scale-110 transition-transform" size={20} />
                Call Now: 88122 31407
              </a>
              <button className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 backdrop-blur-sm">
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