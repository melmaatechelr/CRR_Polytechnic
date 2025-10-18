import React, { useState } from 'react';
import { Award, Target, Eye, Users, Building, Mail, Phone } from 'lucide-react';

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('college');

  const tabs = [
    { id: 'college', label: 'About College', icon: Building },
    { id: 'vision', label: 'Vision & Mission', icon: Target },
    { id: 'management', label: 'Management', icon: Users },
    { id: 'principal', label: 'Principal Message', icon: Award },
    { id: 'correspondent', label: 'Correspondent Message', icon: Mail },
    { id: 'admin', label: 'Administrative Office', icon: Phone }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'college':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About Our College</h2>
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
               Sir C Ramalinga Reddy Polytechnic is the first Polytechnic College in private sector in Andhra Pradesh sanctioned and recognized by All India Council for Technical Education (AICTE). This College is permanently affiliated to SBTET Since inception.

Since its inception in 1980, Sir C Ramalinga Reddy Polytechnic has been a premier institute for quality Polytechnic education in Andhra Pradesh under the stewardship of its broad minded and magnanimous management. The last four decades has seen the Institute fulfilling its motto of 'QUALITY SERVICE & VALUE BASED EDUCATION' to the student community.

Adhering to its core values, the institute gives top priority to ethical values and high standards and a commitment to value based education. We believe in working honestly and sincerely, in building trust and in maintaining a long lasting relationship with the Society. Our team comprises of highly qualified and motivated faculty. Core competence and a friendly but efficient work culture play an important role in our overall achievements.

The College is situated near Vatluru Flyover in Eluru, the Head Quarters of West Godavari district. It is surrounded by beautiful paddy fields and is on Chennai-Howrah highway and train route. A large number of buses and trains run via this town. It is easily accessible from any part of the country by rail as well as road.

The College is located in its own sprawling campus with an area of 11.19 acres. Its magnanimous infrastructure and greenery attracts the attention of people who pass by. The vast green campus housing several Departments provides a stimulating environment to the high caliber staff and students of the institution.
The Campus at Vatluru is a place where students from all walks of life are under a single umbrella pursuing their Diploma course.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Our Legacy</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Established in 1999</li>
                    <li>• AICTE Approved Institution</li>
                    <li>• Affiliated to SBTET, Andhra Pradesh</li>
                    <li>• Counselling Code: CRRE</li>
                    <li>• 25+ Years of Excellence</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">Our Achievements</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 2000+ Successful Alumni</li>
                    <li>• 95% Placement Record</li>
                    <li>• State-of-the-art Infrastructure</li>
                    <li>• Industry Partnerships</li>
                    <li>• Research & Innovation Hub</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Our commitment to quality education, combined with modern infrastructure and experienced faculty, 
                ensures that our students receive the best possible technical education. We focus on holistic 
                development, preparing our students not just academically but also professionally and personally 
                for the challenges of the modern world.
              </p>
            </div>
          </div>
        );

      case 'vision':
        return (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Vision & Mission</h2>
              <p className="text-lg text-gray-600">Guiding principles that drive our educational excellence</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 p-3 rounded-full mr-4">
                    <Eye className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-800">Our Vision</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                 Sir Cr Reddy Polytechnic Shall Be The Leading Institution Of Higher Professionals, Lecturer’s And Technical  Education.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
          To Achieve  And  Maintain  The  Status  Of  Internationally  Reputed  Institue  Of  Excellence  In Technical Education.

 </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
A Common Thread In Vision Is Desired To Produce Graduatdes Who Can Contribute To The Betterment Of Society,industry And Nation.                  </li>
                </ul>
              </div>


              
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
                <div className="flex items-center mb-6">
                  <div className="bg-green-600 p-3 rounded-full mr-4">
                    <Target className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-green-800">Our Mission</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    To  Inculcate  Entrepreneurship  Skills & Leadership  Qualities  In  The  Learners  Through A Culture Of Innovation And Excellence. 
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    To Ensure  A Viable Acadamic Ambience Conductive Intellectual  Growth And Skill  Acquisition 
 </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
To Develop Compitent  Engineering Professionals Through High Quality Acadamic Instrucions And  Industry  Collaborations  ,with A Focus On Sustainable And Inclusive Technology.
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
To Provide The Students With Knowledge,skills ,values And Sensitivity To Face The Challenges In Both Acadimic And Personal Life.                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Core Values</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: 'Excellence', desc: 'Striving for the highest standards in education and research' },
                  { title: 'Innovation', desc: 'Encouraging creative thinking and technological advancement' },
                  { title: 'Integrity', desc: 'Maintaining ethical standards in all our endeavors' },
                  { title: 'Inclusivity', desc: 'Providing equal opportunities for all students' },
                  { title: 'Collaboration', desc: 'Building strong partnerships with industry and academia' },
                  { title: 'Sustainability', desc: 'Promoting environmentally responsible practices' }
                ].map((value, index) => (
                  <div key={index} className="text-center">
                    <h4 className="font-semibold text-gray-800 mb-2">{value.title}</h4>
                    <p className="text-sm text-gray-600">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'management':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Management Team</h2>

            <div className="mb-8 flex justify-center">
              <img
                src="/image.png"
                alt="Management Team"
                className="rounded-xl shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        );

      case 'principal':
        return (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center p-8">
                  <div className="text-center">
                    <img
                      src="/Principal.png"
                      alt="Principal"
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg"
                    />
                    <h3 className="text-xl font-bold text-gray-800">Sri CH. SATHISH BABU</h3>
                    <p className="text-blue-600 font-semibold">Principal, M.Tech</p>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Principal's Message</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      It is my pleasure to present my panorama regarding 34 years of my journey with this
                      pioneer technical institute, a tycoon of its kind in the entire state of Andhra Pradesh.
                      Having established a long-long back in 1980, the institute stood as "CREATOR" for so
                      many "FOLLOWERS" in the field of Technical education.
                    </p>
                    <p>
                      Under the umbrella of "SIR CRR EDUCATIONAL INSTITUTIONS" a conglomerate of educational
                      institutions, this Polytechnic is maintained with rapt attention to formulate technicians
                      enriched with present industry need skills.
                    </p>
                    <p>
                      We run this polytechnic with a mission to provide a stream of quality professionals from
                      rural and urban to cater the requirements of industry and man power. We are with a vision
                      to transform every student into industrial leaders and our polytechnic is the center of
                      excellence in the field of technical education. We send our faculty to faculty development
                      programs to be updated with the latest knowledge.
                    </p>
                    <p>
                      To fulfill our goals as a learning community we insist that the objectives of students
                      learning are not compromised. We treat all the students equitably and our student learning
                      achievements are based on academic performances. We make the students ready for job and
                      ready for life.
                    </p>
                    <p className="italic">
                      "Education is a social process; education is growth, education is not a preparation for
                      life but is life itself".
                    </p>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="font-semibold text-gray-800">Sri CH. SATHISH BABU, M.Tech</p>
                    <p className="text-blue-600">Principal, Sir CRR Polytechnic</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'correspondent':
        return (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center p-8">
                  <div className="text-center">
                    <img
                      src="/Correspondents.png"
                      alt="Correspondent"
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg"
                    />
                    <h3 className="text-xl font-bold text-gray-800">Sri Vempalli Kalki Satyanarayana</h3>
                    <p className="text-green-600 font-semibold">Correspondent</p>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Correspondent's Message</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      I consider it a great honor to be an essential part of this philanthropic institution.
                      SIR C.RAMALINGA REDDY POLYTECHNIC has a history crowned with glory and achievements.
                      It has regard for rural student development. It is a full-fledged polytechnic college
                      caters the needs of present generation in technical education.
                    </p>
                    <p>
                      Our institution works to transform every individual into industrial professional.
                      The institution is determined to give quality education. Faculty strive hard to give
                      their best to the students with a motive of success.
                    </p>
                    <p>
                      Education makes children less dependent on others and opens doors to better jobs
                      and career possibilities.
                    </p>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="font-semibold text-gray-800">Sri Vempalli Kalki Satyanarayana</p>
                    <p className="text-green-600">Correspondent, CRR Polytechnic</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'admin':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Administrative Office</h2>
            <p className="text-center text-xl font-semibold text-gray-700 mb-4">SIR C.R.REDDY POLYTECHNIC, ELURU</p>

            <div className="mb-8 flex justify-center">
              <img
                src="/ADMISTRATIVE.png"
                alt="Administrative Office"
                className="rounded-xl shadow-lg max-w-full h-auto"
              />
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-600 to-blue-700">
                      <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">S.No</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">Name of the Employee</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">Qualification</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">Designation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      { sno: 1, name: 'Sri Ch.Satish Babu', qualification: 'M.TECH', designation: 'PRINCIPAL' },
                      { sno: 2, name: 'Sri P. Srinivasa Babu', qualification: 'M.A B.Ed', designation: 'Sr.Asst' },
                      { sno: 3, name: 'Smt A V S Padmaja Rani', qualification: 'M.A public administration', designation: 'Sr.Asst' },
                      { sno: 4, name: 'Mrs J.Madhuri', qualification: 'B.sc Computers', designation: 'Jr.Asst' },
                      { sno: 5, name: 'Mrs K.Surya Kumari', qualification: 'B.com', designation: 'Jr.Asst' },
                      { sno: 6, name: 'Mrs.G.Naga sai madhuri', qualification: 'B.SC Computers', designation: 'Jr.Asst' },
                      { sno: 7, name: 'Mrs P.Sridevi', qualification: 'B.SC Computers', designation: 'Jr.Asst' },
                      { sno: 8, name: 'Miss M.Venkata Kumari', qualification: 'B.SC Electronics', designation: 'Jr.Asst' },
                      { sno: 9, name: 'Mrs K Lakshmi Durga Nagini', qualification: 'B.com', designation: 'Jr.Asst' },
                      { sno: 10, name: 'Sri M.Krishna', qualification: '10th class', designation: 'Attender' },
                      { sno: 11, name: 'Sri V.Pullaiah', qualification: '7th class', designation: 'Attender' },
                      { sno: 12, name: 'Sri A.Murali Krishna', qualification: 'Inter', designation: 'Attender' },
                      { sno: 13, name: 'Sri P.Srinivasa Rao', qualification: 'Inter', designation: 'Attender' },
                      { sno: 14, name: 'Sri T.Sudhakar', qualification: '7th class', designation: 'Sweeper' },
                      { sno: 15, name: 'Sri B.Prem Kumar', qualification: '7th class', designation: 'Sweeper' },
                      { sno: 16, name: 'Smt S.Samrajjam', qualification: '3rd class', designation: 'Scavenger' },
                      { sno: 17, name: 'Smt P.Parvathi', qualification: '7th class', designation: 'Scavenger' },
                      { sno: 18, name: 'Ch.Kumari', qualification: '6th class', designation: 'NMR' },
                      { sno: 19, name: 'A.Annamma', qualification: '5th class', designation: 'NMR' },
                      { sno: 20, name: 'V.Venkatesh', qualification: 'Inter', designation: 'NMR' },
                      { sno: 21, name: 'Ch.Marthamma', qualification: '3rd class', designation: 'NMR' },
                      { sno: 22, name: 'A.Padmavathi', qualification: '7th class', designation: 'NMR' }
                    ].map((employee, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{employee.sno}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{employee.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{employee.qualification}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{employee.designation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

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
        <div className="bg-white rounded-xl shadow-lg p-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;