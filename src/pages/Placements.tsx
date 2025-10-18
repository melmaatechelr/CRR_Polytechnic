import React, { useState } from 'react';
import { Briefcase, Building, Users, TrendingUp, Award, Handshake } from 'lucide-react';

const Placements = () => {
  const [activeTab, setActiveTab] = useState('about');

  const placementStats = [
    { label: 'Placement Rate', value: '95%', icon: TrendingUp },
    { label: 'Companies Visited', value: '50+', icon: Building },
    { label: 'Students Placed', value: '450+', icon: Users },
    { label: 'Highest Package', value: '₹8 LPA', icon: Award }
  ];

  const topRecruiters = [
    'TCS', 'Infosys', 'Wipro', 'Cognizant', 'Accenture', 'IBM', 'HCL Technologies',
    'Tech Mahindra', 'Capgemini', 'L&T Technology Services', 'Mindtree', 'Mphasis'
  ];

  const placementDrives = [
    {
      company: 'TCS',
      date: '2024-02-15',
      positions: 25,
      package: '₹3.5 LPA',
      status: 'Completed'
    },
    {
      company: 'Infosys',
      date: '2024-02-20',
      positions: 30,
      package: '₹4.0 LPA',
      status: 'Completed'
    },
    {
      company: 'Wipro',
      date: '2024-03-05',
      positions: 20,
      package: '₹3.8 LPA',
      status: 'Upcoming'
    }
  ];

  const mous = [
    {
      company: 'Tech Solutions Pvt Ltd',
      type: 'Training & Placement',
      year: '2024',
      benefits: ['Industrial Training', 'Guest Lectures', 'Placement Opportunities']
    },
    {
      company: 'Innovation Labs',
      type: 'Research Collaboration',
      year: '2023',
      benefits: ['Joint Research Projects', 'Student Internships', 'Faculty Exchange']
    },
    {
      company: 'Manufacturing Corp',
      type: 'Industry Partnership',
      year: '2023',
      benefits: ['Plant Visits', 'Live Projects', 'Skill Development']
    }
  ];

  const renderAbout = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Training & Placement Cell</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our dedicated Training & Placement Cell works tirelessly to bridge the gap between 
          academia and industry, ensuring our students are well-prepared for successful careers.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {placementStats.map((stat, index) => (
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
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Mission</h3>
        <div className="prose max-w-none text-gray-700">
          <p className="mb-4">
            The Training & Placement Cell at SIR.C RAMLINGA REDDY POLYTECHNIC is committed to 
            providing comprehensive career guidance and placement assistance to our students. 
            We work closely with leading companies to create opportunities that match our 
            students' skills and aspirations.
          </p>
          <p className="mb-4">
            Our approach includes personality development, technical skill enhancement, 
            interview preparation, and continuous industry interaction to ensure our 
            graduates are industry-ready from day one.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-blue-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-blue-800 mb-6">Training Programs</h3>
          <ul className="space-y-3">
            {[
              'Soft Skills Development',
              'Technical Interview Preparation',
              'Group Discussion Training',
              'Resume Writing Workshops',
              'Mock Interview Sessions',
              'Industry Interaction Programs'
            ].map((program, index) => (
              <li key={index} className="flex items-center text-blue-700">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                {program}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-green-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-green-800 mb-6">Placement Services</h3>
          <ul className="space-y-3">
            {[
              'Campus Recruitment Drives',
              'Industry Partnerships',
              'Internship Coordination',
              'Career Counseling',
              'Alumni Network Support',
              'Entrepreneurship Guidance'
            ].map((service, index) => (
              <li key={index} className="flex items-center text-green-700">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  const renderPlacements = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Campus Placements</h2>
        <p className="text-lg text-gray-600">Recent placement drives and opportunities</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-blue-600 text-white p-6">
          <h3 className="text-xl font-bold">Placement Records for Last Four Years</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">S.NO.</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">ACADEMIC YEAR</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">TOTAL COUNT</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-gray-700">1</td>
                <td className="px-6 py-4 text-gray-700 font-medium">2023-2024</td>
                <td className="px-6 py-4 text-gray-700 font-semibold">10</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-gray-700">2</td>
                <td className="px-6 py-4 text-gray-700 font-medium">2022-2023</td>
                <td className="px-6 py-4 text-gray-700 font-semibold">12</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-gray-700">3</td>
                <td className="px-6 py-4 text-gray-700 font-medium">2021-2022</td>
                <td className="px-6 py-4 text-gray-700 font-semibold">11</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-gray-700">4</td>
                <td className="px-6 py-4 text-gray-700 font-medium">2020-2021</td>
                <td className="px-6 py-4 text-gray-700 font-semibold">14</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-green-600 text-white p-6">
          <h3 className="text-xl font-bold">List of Recruiters</h3>
        </div>
        <div className="p-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200 hover:border-blue-500 transition-all hover:shadow-md">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center mb-4 p-2">
                  <img src="/crr logo.jpg" alt="Isuzu Motors" className="max-w-full max-h-full object-contain" />
                </div>
                <h4 className="font-semibold text-gray-800 text-center">Isuzu Motors Ltd.</h4>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200 hover:border-blue-500 transition-all hover:shadow-md">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center mb-4 p-2">
                  <Building className="text-blue-600" size={48} />
                </div>
                <h4 className="font-semibold text-gray-800 text-center">Larsen & Toubro</h4>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200 hover:border-blue-500 transition-all hover:shadow-md">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center mb-4 p-2">
                  <Building className="text-blue-600" size={48} />
                </div>
                <h4 className="font-semibold text-gray-800 text-center">Efftronics Systems Pvt Ltd</h4>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200 hover:border-blue-500 transition-all hover:shadow-md">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center mb-4 p-2">
                  <Building className="text-blue-600" size={48} />
                </div>
                <h4 className="font-semibold text-gray-800 text-center">Deepak Nexgen Foods And Feeds Private Limited</h4>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200 hover:border-blue-500 transition-all hover:shadow-md">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center mb-4 p-2">
                  <Building className="text-blue-600" size={48} />
                </div>
                <h4 className="font-semibold text-gray-800 text-center">VEM Technologies Pvt. Ltd.</h4>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200 hover:border-blue-500 transition-all hover:shadow-md">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center mb-4 p-2">
                  <img src="/Melmaatech Logo Final.PNG" alt="MelmaaTech" className="max-w-full max-h-full object-contain" />
                </div>
                <h4 className="font-semibold text-gray-800 text-center">MelmaaTech</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Placement Process</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: '1', title: 'Registration', desc: 'Students register with placement cell' },
            { step: '2', title: 'Pre-placement Training', desc: 'Comprehensive training programs' },
            { step: '3', title: 'Company Visits', desc: 'Campus recruitment drives' },
            { step: '4', title: 'Final Selection', desc: 'Interview and offer process' }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                {item.step}
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderInteraction = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Industry-Institute Interaction</h2>
        <p className="text-lg text-gray-600">Building strong partnerships with industry leaders</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Industry Visits</h3>
          <div className="space-y-4">
            {[
              { company: 'Manufacturing Plant Visit', date: 'March 2024', students: '45 students' },
              { company: 'IT Company Tour', date: 'February 2024', students: '60 students' },
              { company: 'Construction Site Visit', date: 'January 2024', students: '30 students' }
            ].map((visit, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800">{visit.company}</h4>
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>{visit.date}</span>
                  <span>{visit.students}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Guest Lectures</h3>
          <div className="space-y-4">
            {[
              { topic: 'Emerging Technologies in Engineering', speaker: 'Industry Expert', date: 'March 2024' },
              { topic: 'Career Opportunities in IT', speaker: 'HR Manager, TCS', date: 'February 2024' },
              { topic: 'Entrepreneurship in Engineering', speaker: 'Startup Founder', date: 'January 2024' }
            ].map((lecture, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800">{lecture.topic}</h4>
                <p className="text-sm text-gray-600 mt-1">By: {lecture.speaker}</p>
                <p className="text-sm text-gray-500">{lecture.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Interaction Programs</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Industry Mentorship', desc: 'One-on-one guidance from industry professionals' },
            { title: 'Live Projects', desc: 'Real-world projects from partner companies' },
            { title: 'Skill Development', desc: 'Industry-specific training programs' },
            { title: 'Internship Programs', desc: 'Structured internship opportunities' },
            { title: 'Research Collaboration', desc: 'Joint research initiatives with industry' },
            { title: 'Technology Transfer', desc: 'Knowledge sharing and technology adoption' }
          ].map((program, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-2">{program.title}</h4>
              <p className="text-sm text-gray-600">{program.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderRecruiters = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Recruiters</h2>
        <p className="text-lg text-gray-600">Leading companies that trust our graduates</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Top Recruiting Companies</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {topRecruiters.map((company, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg text-center hover:bg-blue-50 transition-colors">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Building className="text-blue-600" size={24} />
              </div>
              <p className="font-semibold text-gray-800">{company}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">IT Sector</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Software Development</li>
            <li>• Web Development</li>
            <li>• Mobile App Development</li>
            <li>• Database Administration</li>
            <li>• System Administration</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Core Engineering</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Design Engineering</li>
            <li>• Production Engineering</li>
            <li>• Quality Control</li>
            <li>• Project Management</li>
            <li>• Technical Support</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Emerging Fields</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Data Science</li>
            <li>• Artificial Intelligence</li>
            <li>• IoT Development</li>
            <li>• Cybersecurity</li>
            <li>• Cloud Computing</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderMOUs = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Memorandums of Understanding</h2>
        <p className="text-lg text-gray-600">Strategic partnerships for mutual growth and development</p>
      </div>

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {mous.map((mou, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
              <h3 className="text-xl font-bold mb-2">{mou.company}</h3>
              <div className="flex justify-between items-center">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">{mou.type}</span>
                <span className="text-sm">{mou.year}</span>
              </div>
            </div>
            <div className="p-6">
              <h4 className="font-semibold text-gray-800 mb-3">Key Benefits:</h4>
              <ul className="space-y-2">
                {mou.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-gray-700 text-sm">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-green-50 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">MOU Benefits</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Student Internships', desc: 'Structured internship programs' },
            { title: 'Faculty Development', desc: 'Training and skill enhancement' },
            { title: 'Research Collaboration', desc: 'Joint research projects' },
            { title: 'Knowledge Exchange', desc: 'Technology and expertise sharing' }
          ].map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake size={24} />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">{benefit.title}</h4>
              <p className="text-sm text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'about', label: 'About TNP', icon: Briefcase },
    { id: 'placements', label: 'Campus Placements', icon: Users },
    { id: 'interaction', label: 'Industry Interaction', icon: Building },
    { id: 'recruiters', label: 'List of Recruiters', icon: Award },
    { id: 'mous', label: 'MOUs', icon: Handshake }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Tab Navigation */}
        <div className="bg-white rounded-xl shadow-lg mb-8 overflow-hidden">
          <div className="flex flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-4 text-sm font-medium transition-colors flex-1 min-w-0 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <tab.icon size={18} className="mr-2 flex-shrink-0" />
                <span className="truncate">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div>
          {activeTab === 'about' && renderAbout()}
          {activeTab === 'placements' && renderPlacements()}
          {activeTab === 'interaction' && renderInteraction()}
          {activeTab === 'recruiters' && renderRecruiters()}
          {activeTab === 'mous' && renderMOUs()}
        </div>
      </div>
    </div>
  );
};

export default Placements;