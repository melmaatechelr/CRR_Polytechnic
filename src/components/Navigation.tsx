import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Phone, Mail } from 'lucide-react';

const Navigation = ({ currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'home', label: 'Home', hasDropdown: false },
    {
      id: 'about',
      label: 'About Us',
      hasDropdown: true,
      submenu: [
        'About College',
        'Vision & Mission',
        'Management',
        'Principal Message',
        'Correspondent Message',
        'Administrative Office'
      ]
    },
    {
      id: 'academics',
      label: 'Academics',
      hasDropdown: true,
      submenu: [
        'Courses Offered',
        'Academic Calendar',
        'Curriculum',
        'Rules & Regulations'
      ]
    },
    { id: 'departments', label: 'Departments', hasDropdown: false },
    {
      id: 'placements',
      label: 'Placements',
      hasDropdown: true,
      submenu: [
        'About TNP',
        'Campus Placements',
        'Guidelines & Document for Placement Cell',
        'Recruiters',
        'MOUs'
      ]
    },
    {
      id: 'examinations',
      label: 'Examinations',
      hasDropdown: true,
      submenu: [
        'About Examinations',
        'SBTET Notifications'
      ]
    },
    {
      id: 'alumni',
      label: 'Alumni',
      hasDropdown: true,
      submenu: [
        'Alumni Association',
        'Registration',
        'Directory'
      ]
    },
    { id: 'activities', label: 'Activities', hasDropdown: false },
    { id: 'facilities', label: 'Facilities', hasDropdown: false },
    { id: 'gallery', label: 'Gallery', hasDropdown: false },
    { id: 'contact', label: 'Contact Us', hasDropdown: false }
  ];

  const handleMenuClick = (itemId) => {
    onPageChange(itemId);
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className={`bg-white shadow-xl sticky top-0 z-50 border-b-2 transition-all duration-300 ${
      isScrolled ? 'border-blue-600 shadow-2xl' : 'border-gray-200'
    }`}>
      <div className="container mx-auto px-4">
        {/* Top Bar - Contact Info (Hidden on mobile) */}
        <div className="hidden xl:flex justify-end items-center py-2 border-b border-gray-100">
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Phone size={14} />
              <span className="font-medium">88122 31407</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Mail size={14} />
              <span className="font-medium">info@crrpolytechnic.edu.in</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1 flex-wrap py-1">
            {menuItems.map((item) => (
              <div key={item.id} className="relative group">
                <button
                  onClick={() => !item.hasDropdown && handleMenuClick(item.id)}
                  className={`flex items-center px-5 py-4 text-sm font-bold transition-all duration-300 rounded-lg relative ${
                    currentPage === item.id
                      ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg scale-105'
                      : 'text-gray-700 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 hover:shadow-md'
                  }`}
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.id)}
                  onMouseLeave={() => !item.hasDropdown && setActiveDropdown(null)}
                >
                  <span className="relative z-10">{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown
                      size={16}
                      className={`ml-2 transition-transform duration-300 ${
                        activeDropdown === item.id ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                  {currentPage === item.id && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"></div>
                  )}
                </button>

                {item.hasDropdown && activeDropdown === item.id && (
                  <div
                    className="absolute top-full left-0 bg-white shadow-2xl rounded-2xl py-3 min-w-60 z-50 border-2 border-blue-100 mt-2 animate-in fade-in slide-in-from-top-2 duration-200"
                    onMouseEnter={() => setActiveDropdown(item.id)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.submenu.map((subItem, index) => (
                      <button
                        key={index}
                        className="block w-full text-left px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 hover:text-blue-700 transition-all duration-200 border-l-4 border-transparent hover:border-blue-500 hover:scale-105 hover:pl-8"
                        onClick={() => handleMenuClick(item.id)}
                      >
                        {subItem}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>


          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center justify-between w-full py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold text-gray-800 tracking-wide">CRR Polytechnic</span>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-3 rounded-xl transition-all duration-300 shadow-md ${
                isMenuOpen
                  ? 'bg-gradient-to-r from-red-500 to-red-600 text-white'
                  : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-gradient-to-br from-white to-blue-50 border-t-2 border-blue-200 shadow-2xl rounded-b-3xl">
            <div className="py-4 px-2">
              {menuItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item.id)}
                  className={`block w-full text-left px-6 py-4 mb-2 text-base font-bold transition-all duration-300 rounded-xl border-l-4 ${
                    currentPage === item.id
                      ? 'text-white bg-gradient-to-r from-blue-600 to-cyan-600 border-amber-400 shadow-lg scale-105'
                      : 'text-gray-700 hover:text-blue-700 bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 border-transparent hover:border-blue-500 hover:shadow-md'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.label}</span>
                    {item.hasDropdown && <ChevronDown size={16} className="text-gray-400" />}
                  </div>
                </button>
              ))}
         
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
