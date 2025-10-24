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
        The Alumni Association has been officially established and is duly registered under Registration No. 321/2012, functioning to foster a strong network among former students and support ongoing initiatives for the growth and development of its members.
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

  const renderDirectory = () => {
    const executiveCommittee = [
      { sno: 1, name: 'G Krishna Reddy', designation: 'President' },
      { sno: 2, name: 'Kaja Srinivasa Rao', designation: 'Vice-President' },
      { sno: 3, name: 'Y Venkata Ramana', designation: 'Secretary' },
      { sno: 4, name: 'K Kondaiah Chowdary', designation: 'Joint Secretary' },
      { sno: 5, name: 'N N V A Prasad', designation: 'Treasurer' },
      { sno: 6, name: 'N Subrahmaneswara Rao', designation: 'Executive Member' },
      { sno: 7, name: 'S V Satya Pahanindranath', designation: 'Executive Member' },
      { sno: 8, name: 'B Srinivasa Rao', designation: 'Executive Member' },
      { sno: 9, name: 'R Praveen Kumar', designation: 'Executive Member' },
      { sno: 10, name: 'D ANITHA KUMARI', designation: 'Member' },
      { sno: 11, name: 'K SRINIVASA RAO', designation: 'Member' },
      { sno: 12, name: 'K NAVEEN BALAJI', designation: 'Member' },
      { sno: 13, name: 'A RAMA KRISHNA', designation: 'Member' },
      { sno: 14, name: 'A D L CHARI', designation: 'Member' },
      { sno: 15, name: 'K RAMU', designation: 'Member' },
      { sno: 16, name: 'S N MANIKYALA RAO', designation: 'Member' },
      { sno: 17, name: 'MOHAMMAD SIDDIGH', designation: 'Member' },
      { sno: 18, name: 'K HARSHITHA LAKSHMI', designation: 'Member' },
      { sno: 19, name: 'D MOHAN KALYANI', designation: 'Member' },
      { sno: 20, name: 'K YAMINI', designation: 'Member' },
      { sno: 21, name: 'M HARI RANJITHA NALINI', designation: 'Member' }
    ];

    return (
      <div className="space-y-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Alumni Directory</h2>
          <p className="text-lg text-gray-600">
            Executive Committee and Alumni Activities
          </p>
        </div>

        {/* Executive Committee Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-4 border-blue-500 inline-block pb-2">
            Executive Committee
          </h3>
          <p className="text-gray-700 mt-4 mb-6">
            Executive Committee was formed periodically. The following are the active committee members as on date:
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="border border-gray-300 px-6 py-3 text-left font-semibold">S.NO</th>
                  <th className="border border-gray-300 px-6 py-3 text-left font-semibold">NAME OF THE MEMBER</th>
                  <th className="border border-gray-300 px-6 py-3 text-left font-semibold">DESIGNATION</th>
                </tr>
              </thead>
              <tbody>
                {executiveCommittee.map((member, index) => (
                  <tr
                    key={member.sno}
                    className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className="border border-gray-300 px-6 py-3 text-gray-700">{member.sno}</td>
                    <td className="border border-gray-300 px-6 py-3 text-gray-800 font-medium">{member.name}</td>
                    <td className="border border-gray-300 px-6 py-3 text-gray-700">{member.designation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Alumni Activities Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-4 border-green-500 inline-block pb-2">
            Alumni Activities
          </h3>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-800 mb-3 text-lg">Guest Lectures by Alumni</h4>
              <p>
                One of the activities of the Association is to arrange and invite guest lectures by the Alumni for the final year students. The lectures shall be pertaining to the relevant topics of all disciplines of students in a rotation manner. Alumni employed in foreign countries like United States, Dubai etc., are very much interested in visiting the college and sharing their experience.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-800 mb-3 text-lg">Career Guidance & Job Opportunities</h4>
              <p>
                This helps in a great way for our young Diploma passed out engineers to get to know the various avenues available for jobs. This is also another way for our students to know about the various non-formal continuing education programs especially in professional fields. The Alumni Association acts as a liaison between employed experienced engineers with fresh Diploma holders.
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-bold text-orange-800 mb-3 text-lg">Committees & Department Associations</h4>
              <p className="mb-3">
                Separate committees consisting of Alumni members are formed to monitor the regular activities including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Arranging invited lectures for Polytechnic College students</li>
                <li>Publishing newsletters</li>
                <li>Department associations constituted for each department with one or two alumni as members</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl shadow-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
          <p className="mb-6 text-blue-100">
            For more information about alumni activities or to get involved, please contact us:
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-lg">
            <div className="flex items-center justify-center">
              <Mail size={20} className="mr-2" />
              <span>alumni@crrpolytechnic.edu.in</span>
            </div>
            <div className="flex items-center justify-center">
              <Phone size={20} className="mr-2" />
              <span>+91-XXXX-XXXXXX</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

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