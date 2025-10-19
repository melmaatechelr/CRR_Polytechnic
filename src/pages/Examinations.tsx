import React, { useState } from 'react';
import {
  FileText,
  Bell,
  Calendar,
  Download,
  AlertCircle,
  CheckCircle,
  ChevronDown,
} from 'lucide-react';

const Examinations = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const examSchedule = [
    {
      exam: 'Mid-Semester Examination',
      semester: 'All Semesters',
      date: 'March 15-20, 2024',
      status: 'upcoming',
      subjects: ['Theory', 'Practical'],
    },
    {
      exam: 'End-Semester Examination',
      semester: 'All Semesters',
      date: 'May 10-25, 2024',
      status: 'scheduled',
      subjects: ['Theory', 'Practical', 'Project Evaluation'],
    },
    {
      exam: 'Supplementary Examination',
      semester: 'All Semesters',
      date: 'July 5-15, 2024',
      status: 'scheduled',
      subjects: ['Theory', 'Practical'],
    },
  ];

  const notifications = [
    {
      title: 'Examination Form Submission Deadline',
      date: '2024-03-01',
      type: 'deadline',
      description: 'Last date for examination form submission with late fee',
    },
    {
      title: 'Hall Ticket Release',
      date: '2024-03-10',
      type: 'info',
      description:
        'Hall tickets for mid-semester examinations available for download',
    },
    {
      title: 'Practical Examination Schedule',
      date: '2024-03-05',
      type: 'schedule',
      description:
        'Practical examination timetable published for all departments',
    },
    {
      title: 'Result Declaration',
      date: '2024-02-28',
      type: 'result',
      description:
        'Previous semester results declared and available online',
    },
  ];

  const examRules = [
    {
      category: 'General Rules',
      rules: [
        'Students must carry valid hall tickets and ID cards',
        'Entry to examination hall closes 15 minutes after commencement',
        'Mobile phones and electronic devices are strictly prohibited',
        'Students cannot leave the examination hall before 1 hour',
        'Use only blue/black ball point pen for writing',
      ],
    },
    {
      category: 'Attendance Requirements',
      rules: [
        'Minimum 75% attendance required to appear for examinations',
        'Students with shortage of attendance need special permission',
        'Medical certificates must be submitted for medical leave',
        'Condonation of attendance requires valid reasons and documentation',
      ],
    },
    {
      category: 'Malpractice',
      rules: [
        'Any form of malpractice will result in cancellation of examination',
        'Copying from books, notes, or other students is strictly prohibited',
        'Communication with other students during examination is not allowed',
        'Possession of unauthorized material will be considered malpractice',
      ],
    },
  ];

  const AccordionItem = ({ index, title, children }) => (
    <div className="border border-gray-200 rounded-lg">
      <button
        onClick={() => toggleAccordion(index)}
        className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-blue-50 transition-colors"
      >
        <span className="font-semibold text-gray-800">{title}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-600 transform transition-transform duration-300 ${
            openAccordion === index ? 'rotate-180' : ''
          }`}
        />
      </button>
      {openAccordion === index && (
        <div className="p-6 bg-white text-gray-700 space-y-4">{children}</div>
      )}
    </div>
  );

  const renderAbout = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          About Examinations
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our examination system is designed to fairly assess student learning
          and ensure academic excellence through comprehensive evaluation
          methods.
        </p>
      </div>

      {/* Examination Pattern and Grading System */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Pattern */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Examination Pattern
          </h3>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">
                Theory Examinations
              </h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Duration: 3 hours</li>
                <li>• Maximum Marks: 80</li>
                <li>• Internal Assessment: 20 marks</li>
                <li>• Passing Marks: 35% (28 marks)</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">
                Practical Examinations
              </h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Duration: 3-4 hours</li>
                <li>• Maximum Marks: 50</li>
                <li>• Continuous Assessment: 25 marks</li>
                <li>• Passing Marks: 35% (18 marks)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Grading */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Grading System
          </h3>
          <div className="space-y-3">
            {[
              { grade: 'O', range: '90-100', points: '10', desc: 'Outstanding' },
              { grade: 'A+', range: '80-89', points: '9', desc: 'Excellent' },
              { grade: 'A', range: '70-79', points: '8', desc: 'Very Good' },
              { grade: 'B+', range: '60-69', points: '7', desc: 'Good' },
              { grade: 'B', range: '50-59', points: '6', desc: 'Above Average' },
              { grade: 'C', range: '40-49', points: '5', desc: 'Average' },
              { grade: 'P', range: '35-39', points: '4', desc: 'Pass' },
              { grade: 'F', range: '0-34', points: '0', desc: 'Fail' },
            ].map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0"
              >
                <div className="flex items-center space-x-4">
                  <span className="font-bold text-lg text-gray-800 w-8">
                    {item.grade}
                  </span>
                  <span className="text-gray-600">{item.desc}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">{item.range}%</div>
                  <div className="text-xs text-gray-500">
                    {item.points} points
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Examination Regulations Accordion Section */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Examination Regulations
        </h3>
        <div className="space-y-4">
          <AccordionItem index={1} title="1.1 Eligibility (Attendance to Appear for the End Examination)">
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>
                A candidate shall be permitted to appear for the end examination
                if he or she has attended a minimum of 75% of working days.
              </li>
              <li>
                Condonation up to 10% (65%-75%) attendance may be granted on
                medical grounds with fee.
              </li>
              <li>Candidates below 65% attendance shall be detained.</li>
              <li>
                Students not paying condonation fee are not eligible for exams
                and must seek re-admission.
              </li>
              <li>Examination fee: ₹550</li>
            </ul>
            <h4 className="font-semibold mt-4">Industrial Training:</h4>
            <ul className="list-disc pl-6 text-sm space-y-1">
              <li>Minimum 90% attendance required during Industrial Training.</li>
              <li>
                If below 90%, student must repeat 6 months of training at own
                expense.
              </li>
            </ul>
          </AccordionItem>

          <AccordionItem index={2} title="1.2 Readmission">
            <ul className="list-disc pl-6 text-sm space-y-2">
              <li>
                Granted by Principal/Regional Joint Director within 15 days of
                class commencement (except Industrial Training).
              </li>
              <li>
                For Industrial Training, readmission before training
                commencement.
              </li>
              <li>
                Within 30 days after class commencement for other courses;
                otherwise next year.
              </li>
              <li>
                Attendance counted from the official start date of regular class
                work.
              </li>
            </ul>
          </AccordionItem>

          <AccordionItem index={3} title="1.3 Scheme of Evaluation">
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-2 border">Course Type</th>
                    <th className="p-2 border">End Exam</th>
                    <th className="p-2 border">Internal Marks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border">Theory (I Year)</td>
                    <td className="p-2 border">80 marks / 3 hrs</td>
                    <td className="p-2 border">20 marks</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">Practical (I Year)</td>
                    <td className="p-2 border">60/30 marks / 3 hrs</td>
                    <td className="p-2 border">40/20 marks</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">Theory (III–VII Sem)</td>
                    <td className="p-2 border">80 marks / 3 hrs</td>
                    <td className="p-2 border">20 marks</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">Practical (III–VII Sem)</td>
                    <td className="p-2 border">60/30 marks / 3 hrs</td>
                    <td className="p-2 border">40/20 marks</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AccordionItem>

          <AccordionItem index={4} title="1.4 Internal Assessment Scheme">
            <p className="text-sm">
              Internal assessment consists of mid exams, assignments, and
              dynamic learning activities.
            </p>
            <div className="overflow-x-auto mt-4">
              <table className="min-w-full text-sm border border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-2 border">Type of Assessment</th>
                    <th className="p-2 border">Weightage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border">
                      Mid Examinations (Mid-1, Mid-2, Mid-3)
                    </td>
                    <td className="p-2 border">40</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">Assignments</td>
                    <td className="p-2 border">5</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">
                      Dynamic Learning Activities (Projects, Seminars, Quizzes,
                      etc.)
                    </td>
                    <td className="p-2 border">5</td>
                  </tr>
                  <tr className="font-semibold bg-gray-50">
                    <td className="p-2 border">Total</td>
                    <td className="p-2 border">50</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm mt-4">
              Internal marks are scaled down to 20. Practical courses include
              continuous assessment, and drawing/lab evaluations follow SBTET
              norms.
            </p>
          </AccordionItem>
        </div>
      </div>

      {/* Examination Schedule */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Examination Schedule
        </h3>
        <div className="space-y-4">
          {examSchedule.map((exam, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-bold text-gray-800">
                    {exam.exam}
                  </h4>
                  <p className="text-gray-600">{exam.semester}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    exam.status === 'upcoming'
                      ? 'bg-yellow-100 text-yellow-800'
                      : exam.status === 'scheduled'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  {exam.status.charAt(0).toUpperCase() +
                    exam.status.slice(1)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">
                    Date: <span className="font-semibold">{exam.date}</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Subjects: {exam.subjects.join(', ')}
                  </p>
                </div>
                <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rules Section */}
      <div className="grid lg:grid-cols-3 gap-8">
        {examRules.map((section, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              {section.category}
            </h3>
            <ul className="space-y-3">
              {section.rules.map((rule, ruleIndex) => (
                <li
                  key={ruleIndex}
                  className="flex items-start text-sm text-gray-700"
                >
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
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          SBTET Notifications
        </h2>
        <p className="text-lg text-gray-600">
          Latest updates and notifications from State Board of Technical
          Education
        </p>
      </div>

      {/* Notifications List */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-blue-600 text-white p-6">
          <h3 className="text-xl font-bold flex items-center">
            <Bell className="mr-3" size={24} />
            Recent Notifications
          </h3>
        </div>
        <div className="divide-y divide-gray-200">
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="p-6 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div
                    className={`p-2 rounded-full ${
                      notification.type === 'deadline'
                        ? 'bg-red-100'
                        : notification.type === 'info'
                        ? 'bg-blue-100'
                        : notification.type === 'schedule'
                        ? 'bg-yellow-100'
                        : 'bg-green-100'
                    }`}
                  >
                    {notification.type === 'deadline' ? (
                      <AlertCircle className="text-red-600" size={20} />
                    ) : notification.type === 'info' ? (
                      <FileText className="text-blue-600" size={20} />
                    ) : notification.type === 'schedule' ? (
                      <Calendar className="text-yellow-600" size={20} />
                    ) : (
                      <CheckCircle className="text-green-600" size={20} />
                    )}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      {notification.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">
                      {notification.description}
                    </p>
                    <p className="text-xs text-gray-500">
                      Date: {notification.date}
                    </p>
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm flex items-center space-x-1">
                  <Download size={16} />
                  <span>Download</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-16">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center mb-10 gap-4">
        {[
          { id: 'about', label: 'About Examinations' },
          { id: 'notifications', label: 'SBTET Notifications' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'about' ? renderAbout() : renderNotifications()}
    </section>
  );
};

export default Examinations;
