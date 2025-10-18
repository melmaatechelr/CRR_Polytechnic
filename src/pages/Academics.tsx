import React, { useState } from 'react';
import { BookOpen, Calendar, FileText, Shield, Download, Clock, Award } from 'lucide-react';

const Academics = () => {
  const [activeTab, setActiveTab] = useState('courses');

  const courses = [
    {
      code: 'DCME',
      name: 'Diploma in Civil Engineering',
      duration: '3 Years',
      intake: '60',
      description: 'Comprehensive program covering construction, structural design, and infrastructure development.'
    },
    {
      code: 'DCE',
      name: 'Diploma in Computer Engineering',
      duration: '3 Years',
      intake: '60',
      description: 'Modern curriculum focusing on programming, software development, and emerging technologies.'
    },
    {
      code: 'DEEE',
      name: 'Diploma in Electrical & Electronics Engineering',
      duration: '3 Years',
      intake: '60',
      description: 'Integrated approach to electrical systems, electronics, and power engineering.'
    },
    {
      code: 'DME',
      name: 'Diploma in Mechanical Engineering',
      duration: '3 Years',
      intake: '60',
      description: 'Traditional engineering discipline covering design, manufacturing, and thermal systems.'
    },
    {
      code: 'DAIML',
      name: 'Diploma in Artificial Intelligence & Machine Learning',
      duration: '3 Years',
      intake: '30',
      description: 'Cutting-edge program in AI, ML, data science, and intelligent systems.'
    },
    {
      code: 'DCCN',
      name: 'Diploma in Computer Communication Networks',
      duration: '3 Years',
      intake: '30',
      description: 'Specialized program in networking, cybersecurity, and communication systems.'
    }
  ];

  const academicCalendar = [
    { event: 'Admission Process Begins', date: 'June 1, 2024', type: 'admission' },
    { event: 'First Semester Begins', date: 'July 15, 2024', type: 'semester' },
    { event: 'Mid-Semester Examinations', date: 'September 15-20, 2024', type: 'exam' },
    { event: 'Diwali Break', date: 'October 28 - November 5, 2024', type: 'holiday' },
    { event: 'End Semester Examinations', date: 'December 10-20, 2024', type: 'exam' },
    { event: 'Winter Break', date: 'December 21, 2024 - January 5, 2025', type: 'holiday' },
    { event: 'Second Semester Begins', date: 'January 6, 2025', type: 'semester' },
    { event: 'Technical Symposium', date: 'February 15-16, 2025', type: 'event' },
    { event: 'Mid-Semester Examinations', date: 'March 15-20, 2025', type: 'exam' },
    { event: 'End Semester Examinations', date: 'May 10-20, 2025', type: 'exam' }
  ];

  const rules = [
    {
      category: 'Attendance',
      rules: [
        'Minimum 75% attendance is mandatory for all subjects',
        'Students with less than 75% attendance will not be allowed to appear for examinations',
        'Medical leave requires proper documentation',
        'Attendance is calculated separately for theory and practical classes'
      ]
    },
    {
      category: 'Examinations',
      rules: [
        'Students must carry valid ID cards during examinations',
        'Mobile phones and electronic devices are strictly prohibited',
        'Malpractice in any form will result in cancellation of examination',
        'Re-examination fees apply for absent students'
      ]
    },
    {
      category: 'Discipline',
      rules: [
        'Students must maintain proper dress code',
        'Ragging is strictly prohibited and punishable',
        'Smoking and consumption of alcohol is banned on campus',
        'Students must respect faculty and staff members'
      ]
    },
    {
      category: 'Academic',
      rules: [
        'Assignment submission deadlines must be strictly followed',
        'Plagiarism in assignments and projects is not tolerated',
        'Students must maintain minimum CGPA for progression',
        'Industrial training is mandatory for final year students'
      ]
    }
  ];

  const renderCourses = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Courses Offered & Admissions</h2>
        <p className="text-lg text-gray-600">AICTE Approved Programs with Industry-Relevant Curriculum</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {courses.map((course, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{course.name}</h3>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {course.code}
                </span>
              </div>
              <div className="text-right text-sm text-gray-600">
                <p><strong>Duration:</strong> {course.duration}</p>
                <p><strong>Intake:</strong> {course.intake} seats</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">{course.description}</p>
            <div className="flex justify-between items-center">
              <button className="text-blue-600 hover:text-blue-800 font-semibold">
                View Curriculum
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 rounded-xl p-8 mt-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Admission Process</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: '1', title: 'Online Application', desc: 'Fill the application form online' },
            { step: '2', title: 'Document Verification', desc: 'Submit required documents' },
            { step: '3', title: 'Merit List', desc: 'Check merit list publication' },
            { step: '4', title: 'Counseling & Admission', desc: 'Attend counseling and confirm admission' }
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

  const renderCalendar = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Academic Calendar 2024-25</h2>
        <p className="text-lg text-gray-600">Important dates and events for the academic year</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-blue-600 text-white p-6">
          <h3 className="text-xl font-bold flex items-center">
            <Calendar className="mr-3" size={24} />
            Academic Year 2024-25
          </h3>
        </div>
        
        <div className="divide-y divide-gray-200">
          {academicCalendar.map((item, index) => (
            <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className={`w-3 h-3 rounded-full ${
                    item.type === 'admission' ? 'bg-green-500' :
                    item.type === 'semester' ? 'bg-blue-500' :
                    item.type === 'exam' ? 'bg-red-500' :
                    item.type === 'holiday' ? 'bg-yellow-500' :
                    'bg-purple-500'
                  }`}></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{item.event}</h4>
                    <p className="text-sm text-gray-600 capitalize">{item.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-800">{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center mx-auto">
          <Download className="mr-2" size={20} />
          Download Full Calendar (PDF)
        </button>
      </div>
    </div>
  );

  const renderCurriculum = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Curriculum Structure</h2>
        <p className="text-lg text-gray-600">Industry-aligned curriculum designed for practical learning</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen className="text-blue-600" size={32} />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Theory Courses</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Core Engineering Subjects</li>
            <li>• Mathematics & Sciences</li>
            <li>• Communication Skills</li>
            <li>• Environmental Studies</li>
            <li>• Professional Ethics</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Award className="text-green-600" size={32} />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Practical Training</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Laboratory Experiments</li>
            <li>• Workshop Practice</li>
            <li>• Industrial Training</li>
            <li>• Project Work</li>
            <li>• Seminar Presentations</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Clock className="text-purple-600" size={32} />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Assessment</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Continuous Assessment</li>
            <li>• Mid-Semester Exams</li>
            <li>• End-Semester Exams</li>
            <li>• Practical Evaluations</li>
            <li>• Project Assessment</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Semester-wise Structure</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((sem) => (
            <div key={sem} className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-bold text-blue-600 mb-3">Semester {sem}</h4>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Theory:</strong> 6-7 subjects</p>
                <p><strong>Practical:</strong> 3-4 labs</p>
                <p><strong>Credits:</strong> 22-25</p>
                {sem === 6 && <p><strong>Project:</strong> Major Project</p>}
              </div>
              <button className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-semibold">
                View Detailed Syllabus
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderRules = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Rules & Regulations</h2>
        <p className="text-lg text-gray-600">Guidelines for maintaining academic excellence and discipline</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {rules.map((section, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Shield className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800">{section.category}</h3>
            </div>
            <ul className="space-y-3">
              {section.rules.map((rule, ruleIndex) => (
                <li key={ruleIndex} className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span className="text-gray-700">{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-red-50 border border-red-200 rounded-xl p-6">
        <h3 className="text-xl font-bold text-red-800 mb-4">Important Notice</h3>
        <p className="text-red-700">
          All students are required to read and understand the complete rules and regulations. 
          Violation of any rule may result in disciplinary action including suspension or expulsion. 
          For detailed regulations, please refer to the student handbook.
        </p>
        <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
          Download Student Handbook
        </button>
      </div>
    </div>
  );

  const tabs = [
    { id: 'courses', label: 'Courses & Admissions', icon: BookOpen },
    { id: 'calendar', label: 'Academic Calendar', icon: Calendar },
    { id: 'curriculum', label: 'Curriculum', icon: FileText },
    { id: 'rules', label: 'Rules & Regulations', icon: Shield }
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
                className={`flex items-center px-6 py-4 text-sm font-medium transition-colors flex-1 min-w-0 ${
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
        <div className="bg-white rounded-xl shadow-lg p-8">
          {activeTab === 'courses' && renderCourses()}
          {activeTab === 'calendar' && renderCalendar()}
          {activeTab === 'curriculum' && renderCurriculum()}
          {activeTab === 'rules' && renderRules()}
        </div>
      </div>
    </div>
  );
};

export default Academics;