import React, { useState } from 'react';
import { BookOpen, Calendar, FileText, Shield, Download, Clock, Award } from 'lucide-react';

const Academics = () => {
  const [activeTab, setActiveTab] = useState('courses');

  const courses = [
    {
      code: 'DCE',
      name: 'Diploma in Civil Engineering',
      duration: '3 Years',
      intake: '66',
      description: 'Comprehensive program covering construction, structural design, and infrastructure development.'
    },
    {
      code: 'DCME',
      name: 'Diploma in Computer Engineering',
      duration: '3 Years',
      intake: '198',
      description: 'Modern curriculum focusing on programming, software development, and emerging technologies.'
    },
    {
      code: 'DECE',
      name: 'Diploma in Electronics and Communication Engineering',
      duration: '3 Years',
      intake: '264',
      description: 'Advanced program in electronics, communication systems, and signal processing.'
    },
    {
      code: 'DEEE',
      name: 'Diploma in Electrical and Electronics Engineering',
      duration: '3 Years',
      intake: '66',
      description: 'Integrated approach to electrical systems, electronics, and power engineering.'
    },
    {
      code: 'DME',
      name: 'Diploma in Mechanical Engineering',
      duration: '3 Years',
      intake: '132',
      description: 'Traditional engineering discipline covering design, manufacturing, and thermal systems.'
    },
    {
      code: 'DAIM',
      name: 'Diploma in Artificial Intelligence and Machine Learning',
      duration: '3 Years',
      intake: '66',
      description: 'Cutting-edge program in AI, ML, data science, and intelligent systems.'
    },
    {
      code: 'DCCN',
      name: 'Diploma in Communication and Computer Networking',
      duration: '3 Years',
      intake: '66',
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
    'All candidates who secure admission in the college are deemed to have agreed to all the rules and regulations, given hereunder and such other rules and regulations as to be added, or amended from time to time.',
    'Students, admitted in this college, will have to give an undertaking that he/she will not involve in any sort of ragging or any other indisciplinary act; if involved, he/she is liable to be punished accordingly.',
    'The students must necessarily wear uniform.',
    'All the students should speak in English in the class rooms as well as in the college campus. They should maintain punctuality and decorum of the college. They should not shout or talk loudly in the college campus.',
    'Students should not stand in corridors/ near cycle stand for gossiping. Students should not sit on the parapet walls, railings, steps or stair-cases. Loitering in the corridors or in the campus during college working hours is strictly prohibited.',
    'Students should put up a minimum attendance of 75% in all subjects of the year/semester, as laid down by STATE BOARD OF TECHNICAL EDUCATION(SBTET). Students, falling short of 75% of attendance shall not be allowed for the SEMESTER examinations at the end of the year in case of first year or semester in case of 2nd,and 3 year and shall not be allowed for promotion to the next semester of study. He/she shall be required to repeat the same course of study.',
    'Students should maintain strict discipline inside the class rooms as well as in the college campus. They should keep the class rooms/college campus neat and tidy.',
    'Students should not bring cell phones to the college. If any student is found with a cell phone, it will be taken away from him/her and confiscated by the principal as a part of disciplinary action.',
    'Smoking in the college campus is strictly prohibited.',
    'The gates of the college will be closed except during break time.',
    'Names, Slogans, Sticking of posters, pamphlets on number plates/vehicles are strictly prohibited.',
    'Ragging is strictly prohibited as per Government Orders.',
    'Students should display identity cards on person during their stay in the college campus.',
    'No student shall leave the classroom without the permission of the teacher or until the class is over.',
    'Students should keep their vehicles only at the places allotted for that purpose.',
    'Students should not bring any unauthorized persons into the campus.',
    'Students are prohibited from resorting to strikes and demonstrations, as it shall automatically result in suspension from the college.',
    'Students are prohibited organizing any meetings or entertainment programmes or collection of money for any purpose within the college or outside the college without the permission of the Principal.',
    'Criticizing or abusing the girl students in foul language is strictly prohibited in the campus.',
    'Organizing birthday or any other personal functions within the campus is strictly prohibited.',
    'No student should be present in the canteen during the class work.',
    'Students are expected to spend their free time in the Library/Reading Room.',
    'A student who disturbs a lesson or makes mischief in a class should be expelled from the class.',
    'A fine will be imposed if anybody behaves contrary to the above rules and the amount so collected will be utilized for the student welfare activities.',
    'All students admitted into this college, will be required to pay the prescribed tuition fee and other specified fees. Failure of the same will result in the cancellation of admission. No portion of fees will be refunded under any circumstances. If any student wishes to change the college or discontinue the course at any time for any reason, he/she shall not be permitted to do so unless he/she pays the balance amount of fees for the remaining years of course of study. His/her original certificates including T.C., etc., will be issued only after all the dues stated above are cleared by the student.'
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

      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center mb-6">
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <Shield className="text-blue-600" size={24} />
          </div>
          <h3 className="text-xl font-bold text-gray-800">College Rules & Regulations</h3>
        </div>
        <div className="space-y-4">
          {rules.map((rule, index) => (
            <div key={index} className="flex items-start border-b border-gray-100 pb-4 last:border-b-0">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4 font-semibold text-sm">
                {index + 1}
              </span>
              <p className="text-gray-700 leading-relaxed pt-1">{rule}</p>
            </div>
          ))}
        </div>
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