import React, { useState } from 'react';
import { Users, UserPlus, BookOpen, Mail, Phone, MapPin, Briefcase } from 'lucide-react';

const Alumni = () => {
  const [activeTab, setActiveTab] = useState('association');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    graduationYear: '',
    department: '',
    currentCompany: '',
    designation: '',
    address: ''
  });

  const alumniStats = [
    { label: 'Total Alumni', value: '5000+', icon: Users },
    { label: 'Countries', value: '15+', icon: MapPin },
    { label: 'Companies', value: '200+', icon: Briefcase },
    { label: 'Success Stories', value: '100+', icon: BookOpen }
  ];

  const notableAlumni = [
    {
      name: 'Mr. Alumni Name 1',
      year: '2010',
      department: 'Computer Engineering',
      position: 'Senior Software Engineer',
      company: 'Google India',
      achievement: 'Leading AI research projects'
    },
    {
      name: 'Ms. Alumni Name 2',
      year: '2012',
      department: 'Civil Engineering',
      position: 'Project Manager',
      company: 'L&T Construction',
      achievement: 'Managing infrastructure projects worth ₹500 crores'
    },
    {
      name: 'Mr. Alumni Name 3',
      year: '2015',
      department: 'Mechanical Engineering',
      position: 'Entrepreneur',
      company: 'Own Manufacturing Unit',
      achievement: 'Founded successful manufacturing company'
    }
  ];

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
    alert('Registration submitted successfully!');
  };

  const renderAssociation = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Alumni Association</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our Alumni Association connects graduates across the globe, fostering lifelong relationships 
          and creating opportunities for professional and personal growth.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {alumniStats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <stat.icon className="text-blue-600" size={32} />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">About Our Association</h3>
        <div className="prose max-w-none text-gray-700">
          <p className="mb-4">
            The SIR.C RAMLINGA REDDY POLYTECHNIC Alumni Association was established to maintain 
            strong connections between the institution and its graduates. Our association serves 
            as a bridge between past, present, and future students, creating a network of 
            professionals who support each other's growth and success.
          </p>
          <p className="mb-4">
            Through various initiatives, events, and programs, we aim to give back to our alma 
            mater while providing valuable opportunities for career advancement, mentorship, 
            and professional networking among our members.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-blue-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-blue-800 mb-6">Our Mission</h3>
          <ul className="space-y-3">
            {[
              'Foster lifelong connections among alumni',
              'Support current students through mentorship',
              'Contribute to institutional development',
              'Promote professional networking opportunities',
              'Organize reunions and social events',
              'Facilitate career guidance and job placements'
            ].map((mission, index) => (
              <li key={index} className="flex items-center text-blue-700">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                {mission}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-green-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-green-800 mb-6">Benefits of Membership</h3>
          <ul className="space-y-3">
            {[
              'Access to exclusive alumni network',
              'Career development resources',
              'Mentorship opportunities',
              'Industry insights and updates',
              'Invitation to special events',
              'Professional development workshops'
            ].map((benefit, index) => (
              <li key={index} className="flex items-center text-green-700">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Notable Alumni</h3>
        <div className="grid lg:grid-cols-3 gap-6">
          {notableAlumni.map((alumni, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={32} className="text-blue-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-800">{alumni.name}</h4>
                <p className="text-blue-600 font-semibold">{alumni.position}</p>
                <p className="text-gray-600 text-sm">{alumni.company}</p>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Graduation:</strong> {alumni.year}</p>
                <p><strong>Department:</strong> {alumni.department}</p>
                <p><strong>Achievement:</strong> {alumni.achievement}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderRegistration = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Alumni Registration</h2>
        <p className="text-lg text-gray-600">Join our alumni network and stay connected with your alma mater</p>
      </div>

      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Graduation Year *
              </label>
              <select
                name="graduationYear"
                value={formData.graduationYear}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select Year</option>
                {Array.from({ length: 25 }, (_, i) => 2024 - i).map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Department *
            </label>
            <select
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select Department</option>
              <option value="DCME">Civil Engineering</option>
              <option value="DCE">Computer Engineering</option>
              <option value="DEEE">Electrical & Electronics Engineering</option>
              <option value="DME">Mechanical Engineering</option>
              <option value="DAIML">AI & Machine Learning</option>
              <option value="DCCN">Computer Communication Networks</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Company
              </label>
              <input
                type="text"
                name="currentCompany"
                value={formData.currentCompany}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your current company"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Designation
              </label>
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your designation"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Address
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your current address"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Register Now
            </button>
          </div>
        </form>
      </div>

      <div className="bg-blue-50 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Why Register?</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Stay Connected', desc: 'Keep in touch with classmates and faculty' },
            { title: 'Career Opportunities', desc: 'Access job openings and career guidance' },
            { title: 'Give Back', desc: 'Mentor current students and support the institution' },
            { title: 'Networking', desc: 'Build professional relationships with fellow alumni' },
            { title: 'Events & Reunions', desc: 'Get invited to exclusive alumni events' },
            { title: 'Industry Updates', desc: 'Stay informed about industry trends and news' }
          ].map((reason, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserPlus size={24} />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">{reason.title}</h4>
              <p className="text-sm text-gray-600">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderDirectory = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Alumni Directory</h2>
        <p className="text-lg text-gray-600">Connect with fellow alumni from your batch and department</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Search by Name</label>
            <input
              type="text"
              placeholder="Enter name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Year</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="">All Years</option>
              {Array.from({ length: 25 }, (_, i) => 2024 - i).map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Department</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="">All Departments</option>
              <option value="DCME">Civil Engineering</option>
              <option value="DCE">Computer Engineering</option>
              <option value="DEEE">Electrical & Electronics</option>
              <option value="DME">Mechanical Engineering</option>
              <option value="DAIML">AI & Machine Learning</option>
              <option value="DCCN">Computer Networks</option>
            </select>
          </div>
        </div>

        <div className="text-center py-16">
          <BookOpen size={64} className="text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">Alumni Directory</h3>
          <p className="text-gray-500">
            The alumni directory is currently being updated. Please check back soon or 
            contact the alumni office for specific alumni information.
          </p>
          <div className="mt-6 space-y-2">
            <div className="flex items-center justify-center text-gray-600">
              <Mail size={16} className="mr-2" />
              alumni@crrpolytechnic.edu.in
            </div>
            <div className="flex items-center justify-center text-gray-600">
              <Phone size={16} className="mr-2" />
              +91-XXXX-XXXXXX
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'association', label: 'Alumni Association', icon: Users },
    { id: 'registration', label: 'Registration Form', icon: UserPlus },
    { id: 'directory', label: 'Directory', icon: BookOpen }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Tab Navigation */}
        <div className="bg-white rounded-xl shadow-lg mb-8 overflow-hidden">
          <div className="flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-8 py-4 text-sm font-medium transition-colors flex-1 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <tab.icon size={18} className="mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div>
          {activeTab === 'association' && renderAssociation()}
          {activeTab === 'registration' && renderRegistration()}
          {activeTab === 'directory' && renderDirectory()}
        </div>
      </div>
    </div>
  );
};

export default Alumni;