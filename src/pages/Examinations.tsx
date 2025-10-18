import React, { useState } from 'react';
import { FileText, Bell, Calendar, Download, AlertCircle, CheckCircle } from 'lucide-react';

const Examinations = () => {
  const [activeTab, setActiveTab] = useState('about');

  const examSchedule = [
    {
      exam: 'Mid-Semester Examination',
      semester: 'All Semesters',
      date: 'March 15-20, 2024',
      status: 'upcoming',
      subjects: ['Theory', 'Practical']
    },
    {
      exam: 'End-Semester Examination',
      semester: 'All Semesters',
      date: 'May 10-25, 2024',
      status: 'scheduled',
      subjects: ['Theory', 'Practical', 'Project Evaluation']
    },
    {
      exam: 'Supplementary Examination',
      semester: 'All Semesters',
      date: 'July 5-15, 2024',
      status: 'scheduled',
      subjects: ['Theory', 'Practical']
    }
  ];

  const notifications = [
    {
      title: 'Examination Form Submission Deadline',
      date: '2024-03-01',
      type: 'deadline',
      description: 'Last date for examination form submission with late fee'
    },
    {
      title: 'Hall Ticket Release',
      date: '2024-03-10',
      type: 'info',
      description: 'Hall tickets for mid-semester examinations available for download'
    },
    {
      title: 'Practical Examination Schedule',
      date: '2024-03-05',
      type: 'schedule',
      description: 'Practical examination timetable published for all departments'
    },
    {
      title: 'Result Declaration',
      date: '2024-02-28',
      type: 'result',
      description: 'Previous semester results declared and available online'
    }
  ];

  const examRules = [
    {
      category: 'General Rules',
      rules: [
        'Students must carry valid hall tickets and ID cards',
        'Entry to examination hall closes 15 minutes after commencement',
        'Mobile phones and electronic devices are strictly prohibited',
        'Students cannot leave the examination hall before 1 hour',
        'Use only blue/black ball point pen for writing'
      ]
    },
    {
      category: 'Attendance Requirements',
      rules: [
        'Minimum 75% attendance required to appear for examinations',
        'Students with shortage of attendance need special permission',
        'Medical certificates must be submitted for medical leave',
        'Condonation of attendance requires valid reasons and documentation'
      ]
    },
    {
      category: 'Malpractice',
      rules: [
        'Any form of malpractice will result in cancellation of examination',
        'Copying from books, notes, or other students is strictly prohibited',
        'Communication with other students during examination is not allowed',
        'Possession of unauthorized material will be considered malpractice'
      ]
    }
  ];

  const renderAbout = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Examinations</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our examination system is designed to fairly assess student learning and ensure 
          academic excellence through comprehensive evaluation methods.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Examination Pattern</h3>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Theory Examinations</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Duration: 3 hours</li>
                <li>• Maximum Marks: 80</li>
                <li>• Internal Assessment: 20 marks</li>
                <li>• Passing Marks: 35% (28 marks)</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Practical Examinations</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Duration: 3-4 hours</li>
                <li>• Maximum Marks: 50</li>
                <li>• Continuous Assessment: 25 marks</li>
                <li>• Passing Marks: 35% (18 marks)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Grading System</h3>
          <div className="space-y-3">
            {[
              { grade: 'O', range: '90-100', points: '10', desc: 'Outstanding' },
              { grade: 'A+', range: '80-89', points: '9', desc: 'Excellent' },
              { grade: 'A', range: '70-79', points: '8', desc: 'Very Good' },
              { grade: 'B+', range: '60-69', points: '7', desc: 'Good' },
              { grade: 'B', range: '50-59', points: '6', desc: 'Above Average' },
              { grade: 'C', range: '40-49', points: '5', desc: 'Average' },
              { grade: 'P', range: '35-39', points: '4', desc: 'Pass' },
              { grade: 'F', range: '0-34', points: '0', desc: 'Fail' }
            ].map((item, index) => (
              <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                <div className="flex items-center space-x-4">
                  <span className="font-bold text-lg text-gray-800 w-8">{item.grade}</span>
                  <span className="text-gray-600">{item.desc}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">{item.range}%</div>
                  <div className="text-xs text-gray-500">{item.points} points</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Examination Schedule</h3>
        <div className="space-y-4">
          {examSchedule.map((exam, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-bold text-gray-800">{exam.exam}</h4>
                  <p className="text-gray-600">{exam.semester}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  exam.status === 'upcoming' ? 'bg-yellow-100 text-yellow-800' :
                  exam.status === 'scheduled' ? 'bg-blue-100 text-blue-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {exam.status.charAt(0).toUpperCase() + exam.status.slice(1)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">Date: <span className="font-semibold">{exam.date}</span></p>
                  <p className="text-sm text-gray-600">Subjects: {exam.subjects.join(', ')}</p>
                </div>
                <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {examRules.map((section, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">{section.category}</h3>
            <ul className="space-y-3">
              {section.rules.map((rule, ruleIndex) => (
                <li key={ruleIndex} className="flex items-start text-sm text-gray-700">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );

  const renderNotifications = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">SBTET Notifications</h2>
        <p className="text-lg text-gray-600">Latest updates and notifications from State Board of Technical Education</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-blue-600 text-white p-6">
          <h3 className="text-xl font-bold flex items-center">
            <Bell className="mr-3" size={24} />
            Recent Notifications
          </h3>
        </div>
        <div className="divide-y divide-gray-200">
          {notifications.map((notification, index) => (
            <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className={`p-2 rounded-full ${
                    notification.type === 'deadline' ? 'bg-red-100' :
                    notification.type === 'info' ? 'bg-blue-100' :
                    notification.type === 'schedule' ? 'bg-yellow-100' :
                    'bg-green-100'
                  }`}>
                    {notification.type === 'deadline' ? <AlertCircle className="text-red-600" size={20} /> :
                     notification.type === 'info' ? <FileText className="text-blue-600" size={20} /> :
                     notification.type === 'schedule' ? <Calendar className="text-yellow-600" size={20} /> :
                     <CheckCircle className="text-green-600" size={20} />}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-2">{notification.title}</h4>
                    <p className="text-gray-600 text-sm mb-2">{notification.description}</p>
                    <p className="text-xs text-gray-500">{notification.date}</p>
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-semibold ml-4">
                  <Download size={16} className="inline mr-1" />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Important Links</h3>
          <div className="space-y-4">
            {[
              'SBTET Official Website',
              'Examination Results Portal',
              'Hall Ticket Download',
              'Examination Form Submission',
              'Academic Calendar',
              'Syllabus and Curriculum'
            ].map((link, index) => (
              <button key={index} className="w-full text-left p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                <span className="text-blue-800 font-medium">{link}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Examination Section</h4>
              <p className="text-sm text-gray-600">Phone: +91-XXXX-XXXXXX</p>
              <p className="text-sm text-gray-600">Email: exams@crrpolytechnic.edu.in</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Academic Office</h4>
              <p className="text-sm text-gray-600">Phone: +91-XXXX-XXXXXX</p>
              <p className="text-sm text-gray-600">Email: academic@crrpolytechnic.edu.in</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Office Hours</h4>
              <p className="text-sm text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p className="text-sm text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'about', label: 'About Examinations', icon: FileText },
    { id: 'notifications', label: 'SBTET Notifications', icon: Bell }
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
          {activeTab === 'about' && renderAbout()}
          {activeTab === 'notifications' && renderNotifications()}
        </div>
      </div>
    </div>
  );
};

export default Examinations;