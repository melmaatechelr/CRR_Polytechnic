import React, { useState } from "react";
import {
  FileText,
  Bell,
  Calendar,
  Download,
  AlertCircle,
  CheckCircle,
  ChevronDown,
} from "lucide-react";

const Examinations: React.FC = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const notifications = [
    {
      title: "Examination Form Submission Deadline",
      date: "2024-03-01",
      type: "deadline",
      description: "Last date for examination form submission with late fee",
    },

  ];

  const examRules = [
    {
      category: "General Rules",
      rules: [
        "Students must carry valid hall tickets and ID cards",
        "Entry to examination hall closes 15 minutes after commencement",
        "Mobile phones and electronic devices are strictly prohibited",
        "Students cannot leave the examination hall before 1 hour",
        "Use only blue/black ball point pen for writing",
      ],
    },
    {
      category: "Attendance Requirements",
      rules: [
        "Minimum 75% attendance required to appear for examinations",
        "Students with shortage of attendance need special permission",
        "Medical certificates must be submitted for medical leave",
        "Condonation of attendance requires valid reasons and documentation",
      ],
    },
    {
      category: "Malpractice",
      rules: [
        "Any form of malpractice will result in cancellation of examination",
        "Copying from books, notes, or other students is strictly prohibited",
        "Communication with other students during examination is not allowed",
        "Possession of unauthorized material will be considered malpractice",
      ],
    },
  ];

  const AccordionItem: React.FC<{
    index: number;
    title: string;
    children: React.ReactNode;
  }> = ({ index, title, children }) => (
    <div className="border border-gray-200 rounded-lg">
      <button
        onClick={() => toggleAccordion(index)}
        className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-blue-50 transition-colors"
      >
        <span className="font-semibold text-gray-800">{title}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-600 transform transition-transform duration-300 ${
            openAccordion === index ? "rotate-180" : ""
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
                <li>• Duration: 3–4 hours</li>
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
              { grade: "O", range: "90-100", points: "10", desc: "Outstanding" },
              { grade: "A+", range: "80-89", points: "9", desc: "Excellent" },
              { grade: "A", range: "70-79", points: "8", desc: "Very Good" },
              { grade: "B+", range: "60-69", points: "7", desc: "Good" },
              { grade: "B", range: "50-59", points: "6", desc: "Above Average" },
              { grade: "C", range: "40-49", points: "5", desc: "Average" },
              { grade: "P", range: "35-39", points: "4", desc: "Pass" },
              { grade: "F", range: "0-34", points: "0", desc: "Fail" },
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

      {/* Examination Regulations Section */}
      <section className="p-8 bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 inline-block">
          Examination Regulations
        </h2>

        {/* Part A */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Part A: Theory Courses
          </h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
            <li>Each theory course shall be evaluated for 100 marks in total.</li>
            <li>
              Internal Assessment (Sessional Marks) shall carry{" "}
              <strong>40 marks</strong> and the End Examination shall carry{" "}
              <strong>60 marks</strong>.
            </li>
            <li>
              Internal Assessment shall consist of:
              <ul className="list-decimal list-inside ml-6 space-y-1">
                <li>Two Unit Tests — each for 20 marks.</li>
                <li>Average of both tests will be taken as internal marks for each course.</li>
              </ul>
            </li>
            <li>The duration of each unit test shall be <strong>90 minutes</strong>.</li>
            <li>The question paper pattern for unit tests shall be as per the Board Examination format.</li>
            <li>
              The student should secure at least <strong>35% marks</strong> in the End Examination and overall{" "}
              <strong>40% marks</strong> including internal marks to pass a course.
            </li>
            <li>All answer scripts and records related to internal evaluation shall be preserved for inspection by competent authorities.</li>
          </ul>
        </div>

        <div className="my-8 border-t border-gray-300" />

        {/* Part B */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Part B: Practical Courses
          </h3>

          {/* Drawing Courses */}
          <div className="mb-10">
            <h4 className="text-lg font-semibold text-gray-700 mb-2">
              (i) Drawing Courses
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              The award of Sessional marks for internal assessment shall be as given in the following table:
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-blue-100 text-gray-800">
                  <tr>
                    <th className="border px-4 py-2 text-left">
                      Distribution of Marks for Internal Assessment
                    </th>
                    <th className="border px-4 py-2 text-left">
                      First Year (Total: 40 Marks)
                    </th>
                    <th className="border px-4 py-2 text-left">
                      Semesters (Total: 40 Marks)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2 font-medium text-gray-700">
                      Maximum Marks
                    </td>
                    <td className="border px-4 py-2">20 (Tests) + 20 (Class Work)</td>
                    <td className="border px-4 py-2">20 (Tests) + 20 (Class Work)</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-medium text-gray-700">
                      Assessment Criteria
                    </td>
                    <td className="border px-4 py-2">
                      Average of 3 Unit Tests & Regular Class Work Exercises
                    </td>
                    <td className="border px-4 py-2">
                      Average of 2 Unit Tests & Regular Class Work Exercises
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1">
              <li>Each Unit Test will be conducted for a duration of <strong>2 hours</strong> with a maximum of <strong>40 marks</strong>.</li>
              <li><strong>Part A:</strong> 4 questions × 5 marks = 20 marks.</li>
              <li><strong>Part B:</strong> 2 questions × 10 marks = 20 marks.</li>
              <li>Semester drawing exams shall follow the Board End Examination pattern.</li>
              <li>All drawing exercises are to be filed in serial order and secured for further scrutiny by competent authority.</li>
            </ul>
          </div>

          {/* Laboratory Courses */}
          <div>
            <h4 className="text-lg font-semibold text-gray-700 mb-2">
              (ii) Laboratory Courses
            </h4>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1">
              <li>Students' performance in Laboratories / Workshops shall be assessed for <strong>40 marks</strong> during the year/semester in each practical course.</li>
              <li>
                Evaluation for Laboratory Courses (other than Drawing Courses):
                <ul className="list-decimal list-inside ml-6 space-y-1">
                  <li>Instruction shall be task/competency-based as delineated in laboratory sheets.</li>
                  <li>Internal assessment shall be based on tasks performed as specified in the lab sheets.</li>
                  <li>End-semester evaluation question papers shall also be task-based and prepared by SBTET.</li>
                </ul>
              </li>
              <li>Internal assessment in Labs / Workshops / Survey Field work shall be conducted by the concerned teacher.</li>
              <li>
                For practical examinations (except Drawing), there shall be two examiners:
                <ul className="list-decimal list-inside ml-6 space-y-1">
                  <li>
                    External Examiner — appointed by the Principal in consultation with HoD, preferably from:
                    <ul className="list-disc list-inside ml-6">
                      <li>Nearby Industry</li>
                      <li>Govt/Semi-Govt organizations (R&B, PWD, PR, Railways, BSNL, APSRTC, APSEB, etc.)</li>
                      <li>Govt/University Engineering College</li>
                      <li>HoD/Senior Lecturer (Selection Grade II) from Govt Polytechnic</li>
                    </ul>
                  </li>
                  <li>Internal Examiner — concerned teacher responsible for internal assessment.</li>
                </ul>
              </li>
              <li>The end examination shall be held along with all theory papers in respect of Drawing.</li>
              <li>Practical question papers shall test multiple skills — handling, testing, troubleshooting, repair, assembling, dismantling, etc.</li>
              <li>All internal assessment records (theory & practical) must be maintained for official inspection.</li>
            </ul>

            <div className="mt-6">
              <p className="text-gray-700 mb-3">
                In diploma programs having Industrial Training, internal assessment and summative evaluation shall be done as follows:
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 text-sm">
                  <thead className="bg-blue-100 text-gray-800">
                    <tr>
                      <th className="border px-4 py-2">Assessment No.</th>
                      <th className="border px-4 py-2">Upon Completion of</th>
                      <th className="border px-4 py-2">By</th>
                      <th className="border px-4 py-2">Based On</th>
                      <th className="border px-4 py-2">Max Marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2 text-center">1</td>
                      <td className="border px-4 py-2 text-center">12 weeks</td>
                      <td className="border px-4 py-2">
                        1. Faculty Guide<br />2. Industry Mentor
                      </td>
                      <td className="border px-4 py-2">
                        Learning outcomes as per the scheme of assessment
                      </td>
                      <td className="border px-4 py-2 text-center">120</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2 text-center">2</td>
                      <td className="border px-4 py-2 text-center">22 weeks</td>
                      <td className="border px-4 py-2">
                        1. Faculty Guide<br />2. Industry Mentor
                      </td>
                      <td className="border px-4 py-2">
                        Learning outcomes as per the scheme of assessment
                      </td>
                      <td className="border px-4 py-2 text-center">120</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2 text-center">3</td>
                      <td className="border px-4 py-2 text-center">24 weeks</td>
                      <td className="border px-4 py-2">
                        1. Faculty Member<br />2. HoD Concerned<br />3. External Examiner
                      </td>
                      <td className="border px-4 py-2">
                        1. Demonstration of skill – 30 Marks<br />
                        2. Training Report – 20 Marks<br />
                        3. Viva Voce – 10 Marks
                      </td>
                      <td className="border px-4 py-2 text-center">60</td>
                    </tr>
                    <tr className="bg-gray-100 font-semibold">
                      <td colSpan={4} className="border px-4 py-2 text-right">
                        TOTAL
                      </td>
                      <td className="border px-4 py-2 text-center">300</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mt-3">
                Each staff member, including the Head of Section, shall be assigned a batch of 10–15 students for assessment during Industrial Training.
              </p>
            </div>
          </div>
        </div>
      </section>

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
            <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div
                    className={`p-2 rounded-full ${
                      notification.type === "deadline"
                        ? "bg-red-100"
                        : notification.type === "info"
                        ? "bg-blue-100"
                        : notification.type === "schedule"
                        ? "bg-yellow-100"
                        : "bg-green-100"
                    }`}
                  >
                    {notification.type === "deadline" ? (
                      <AlertCircle className="text-red-600" size={20} />
                    ) : notification.type === "info" ? (
                      <FileText className="text-blue-600" size={20} />
                    ) : notification.type === "schedule" ? (
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
          { id: "about", label: "About Examinations" },
          { id: "notifications", label: "SBTET Notifications" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              activeTab === tab.id
                ? "bg-blue-600 text-white shadow-lg scale-105"
                : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "about" ? renderAbout() : renderNotifications()}
    </section>
  );
};

export default Examinations;
