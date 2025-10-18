import React, { useState } from 'react';
import { ArrowLeft, Users, Building, Calendar, Trophy, Clock, Mail, Phone } from 'lucide-react';

const DepartmentDetail = ({ department, onBack }) => {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', label: 'Home', icon: Building },
    { id: 'faculty', label: 'Faculty', icon: Users },
    { id: 'infrastructure', label: 'Infrastructure & Labs', icon: Building },
    { id: 'students', label: 'Student Info', icon: Users },
    { id: 'timetable', label: 'Time Table', icon: Clock },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'achievements', label: 'Achievements', icon: Trophy }
  ];

  const sampleFaculty = [
    {
      name: 'Dr. Faculty Name 1',
      designation: 'Professor & HOD',
      qualification: 'Ph.D, M.Tech',
      experience: '15 years',
      specialization: 'Structural Engineering',
      email: 'faculty1@crrpolytechnic.edu.in',
      phone: '+91-XXXX-XXXXXX',
      type: 'teaching'
    },
    {
      name: 'Prof. Faculty Name 2',
      designation: 'Associate Professor',
      qualification: 'M.Tech, B.Tech',
      experience: '12 years',
      specialization: 'Transportation Engineering',
      email: 'faculty2@crrpolytechnic.edu.in',
      phone: '+91-XXXX-XXXXXX',
      type: 'teaching'
    },
    {
      name: 'Mr. Staff Name 1',
      designation: 'Lab Assistant',
      qualification: 'Diploma',
      experience: '8 years',
      specialization: 'Laboratory Management',
      email: 'staff1@crrpolytechnic.edu.in',
      phone: '+91-XXXX-XXXXXX',
      type: 'non-teaching'
    }
  ];

  const sampleLabs = [
    {
      name: 'Concrete Technology Lab',
      area: '200 sq.m',
      capacity: '30 students',
      equipment: ['Compression Testing Machine', 'Flexural Testing Machine', 'Concrete Mixer'],
      incharge: 'Prof. Lab Incharge'
    },
    {
      name: 'Surveying Lab',
      area: '150 sq.m',
      capacity: '25 students',
      equipment: ['Total Station', 'Theodolite', 'Dumpy Level', 'Chain & Tape'],
      incharge: 'Dr. Survey Expert'
    }
  ];

  const renderHome = () => (
    <div className="space-y-8">
      <div className={`bg-gradient-to-r ${department.color} text-white p-8 rounded-xl`}>
        <div className="flex items-center mb-6">
          <department.icon size={64} className="mr-6" />
          <div>
            <h1 className="text-4xl font-bold mb-2">{department.name}</h1>
            <p className="text-xl opacity-90">Department Code: {department.code}</p>
          </div>
        </div>
        <p className="text-lg opacity-90">{department.description}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Stats</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Total Students:</span>
              <span className="font-semibold">{department.students}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Faculty Members:</span>
              <span className="font-semibold">{department.faculty}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Laboratories:</span>
              <span className="font-semibold">{department.labs}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Intake Capacity:</span>
              <span className="font-semibold">60 per year</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Head of Department</h3>
          <div className="text-center">
            <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Users size={32} className="text-gray-600" />
            </div>
            <h4 className="font-semibold text-gray-800">{department.hod}</h4>
            <p className="text-gray-600 text-sm">Professor & HOD</p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-center text-sm text-gray-600">
                <Mail size={16} className="mr-2" />
                hod@crrpolytechnic.edu.in
              </div>
              <div className="flex items-center justify-center text-sm text-gray-600">
                <Phone size={16} className="mr-2" />
                +91-XXXX-XXXXXX
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Specializations</h3>
          <div className="space-y-2">
            {department.specializations.map((spec, index) => (
              <div key={index} className="bg-blue-50 p-3 rounded-lg">
                <p className="text-blue-800 font-medium text-sm">{spec}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Department Overview</h3>
        <div className="prose max-w-none text-gray-700">
          <p className="mb-4">
            The {department.name} department at SIR.C RAMLINGA REDDY POLYTECHNIC is committed to 
            providing quality technical education and fostering innovation in the field. Our department 
            combines theoretical knowledge with practical application to prepare students for successful 
            careers in the industry.
          </p>
          <p className="mb-4">
            With state-of-the-art laboratories, experienced faculty, and strong industry connections, 
            we ensure that our students receive comprehensive education that meets current industry 
            standards and prepares them for future challenges.
          </p>
          <p>
            Our graduates have successfully established careers in leading companies and have made 
            significant contributions to their respective fields. We continue to evolve our curriculum 
            and teaching methodologies to stay current with technological advancements.
          </p>
        </div>
      </div>
    </div>
  );

  const renderFaculty = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Faculty Members</h2>
        <p className="text-lg text-gray-600">Meet our experienced and dedicated faculty team</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Teaching Faculty</h3>
          <div className="space-y-6">
            {sampleFaculty.filter(f => f.type === 'teaching').map((faculty, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users size={24} className="text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-800">{faculty.name}</h4>
                    <p className="text-blue-600 font-semibold">{faculty.designation}</p>
                    <div className="mt-3 space-y-1 text-sm text-gray-600">
                      <p><strong>Qualification:</strong> {faculty.qualification}</p>
                      <p><strong>Experience:</strong> {faculty.experience}</p>
                      <p><strong>Specialization:</strong> {faculty.specialization}</p>
                    </div>
                    <div className="mt-3 space-y-1 text-sm">
                      <div className="flex items-center text-gray-600">
                        <Mail size={14} className="mr-2" />
                        {faculty.email}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Phone size={14} className="mr-2" />
                        {faculty.phone}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Non-Teaching Staff</h3>
          <div className="space-y-6">
            {sampleFaculty.filter(f => f.type === 'non-teaching').map((staff, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <Users size={24} className="text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-800">{staff.name}</h4>
                    <p className="text-green-600 font-semibold">{staff.designation}</p>
                    <div className="mt-3 space-y-1 text-sm text-gray-600">
                      <p><strong>Qualification:</strong> {staff.qualification}</p>
                      <p><strong>Experience:</strong> {staff.experience}</p>
                      <p><strong>Area:</strong> {staff.specialization}</p>
                    </div>
                    <div className="mt-3 space-y-1 text-sm">
                      <div className="flex items-center text-gray-600">
                        <Mail size={14} className="mr-2" />
                        {staff.email}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Phone size={14} className="mr-2" />
                        {staff.phone}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderInfrastructure = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Infrastructure & Laboratories</h2>
        <p className="text-lg text-gray-600">Modern facilities equipped with latest technology</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {sampleLabs.map((lab, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-blue-600 text-white p-6">
              <h3 className="text-xl font-bold">{lab.name}</h3>
              <p className="text-blue-100">Lab Incharge: {lab.incharge}</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-600">Area</p>
                  <p className="font-semibold text-gray-800">{lab.area}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Capacity</p>
                  <p className="font-semibold text-gray-800">{lab.capacity}</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-3">Major Equipment</p>
                <div className="space-y-2">
                  {lab.equipment.map((item, idx) => (
                    <div key={idx} className="bg-gray-50 p-2 rounded text-sm">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Department Infrastructure</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Classrooms', count: '8', description: 'Smart classrooms with modern AV equipment' },
            { title: 'Laboratories', count: department.labs.toString(), description: 'Well-equipped labs for practical learning' },
            { title: 'Faculty Rooms', count: '6', description: 'Dedicated spaces for faculty members' },
            { title: 'Seminar Hall', count: '1', description: 'Air-conditioned hall for 100 students' },
            { title: 'Project Room', count: '2', description: 'Dedicated spaces for student projects' },
            { title: 'Library Section', count: '1', description: 'Department-specific books and journals' }
          ].map((item, index) => (
            <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">{item.count}</div>
              <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return renderHome();
      case 'faculty':
        return renderFaculty();
      case 'infrastructure':
        return renderInfrastructure();
      case 'students':
        return (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Student Information</h2>
            <p className="text-gray-600">Student information section coming soon...</p>
          </div>
        );
      case 'timetable':
        return (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Time Table</h2>
            <p className="text-gray-600">Time table section coming soon...</p>
          </div>
        );
      case 'events':
        return (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Department Events</h2>
            <p className="text-gray-600">Events section coming soon...</p>
          </div>
        );
      case 'achievements':
        return (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Achievements</h2>
            <p className="text-gray-600">Achievements section coming soon...</p>
          </div>
        );
      default:
        return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-6 font-semibold"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Departments
        </button>

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
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default DepartmentDetail;