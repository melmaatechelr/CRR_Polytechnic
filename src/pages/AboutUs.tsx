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
                <p className="text-gray-700 leading-relaxed text-lg">
        Sir Cr Reddy Polytechnic Shall Be The Leading Institution Of Higher Professionals, Lecturer’s And Technical  Education.
       To Achieve  And  Maintain  The  Status  Of  Internationally  Reputed  Institue  Of  Excellence  In Technical Education.
       A  Common Thread In Vision Is Desired To Produce Graduatdes Who Can Contribute To The Betterment Of Society,industry And Nation.
                </p>
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
                    Maintain strong industry partnerships for practical exposure
                  </li>
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
            
            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'Sri. C. Ramlinga Reddy',
                  position: 'Chairman & Founder',
                  image: '/api/placeholder/200/200',
                  description: 'Visionary leader with 30+ years in education sector'
                },
                {
                  name: 'Smt. Lakshmi Reddy',
                  position: 'Vice Chairperson',
                  image: '/api/placeholder/200/200',
                  description: 'Educational administrator with focus on student welfare'
                },
                {
                  name: 'Sri. Venkat Reddy',
                  position: 'Managing Director',
                  image: '/api/placeholder/200/200',
                  description: 'Industry expert with extensive corporate experience'
                }
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <Users size={64} className="text-blue-600" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-semibold mb-3">{member.position}</p>
                    <p className="text-gray-600 text-sm">{member.description}</p>
                  </div>
                </div>
              ))}
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
                    <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award size={48} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Dr. Principal Name</h3>
                    <p className="text-blue-600 font-semibold">Principal</p>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Principal's Message</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      "Welcome to SIR.C RAMLINGA REDDY POLYTECHNIC, where we transform dreams into reality 
                      through quality technical education. As the Principal of this esteemed institution, 
                      I am proud to lead a team of dedicated faculty and staff who are committed to 
                      nurturing the next generation of engineers and technologists."
                    </p>
                    <p>
                      "Our college has consistently maintained high standards of academic excellence, 
                      and we continue to evolve with the changing technological landscape. We believe 
                      in providing not just theoretical knowledge but also practical skills that make 
                      our students industry-ready from day one."
                    </p>
                    <p>
                      "I encourage all our students to make the most of the opportunities available 
                      here and to strive for excellence in all their endeavors. Together, we will 
                      continue to uphold the legacy of this great institution."
                    </p>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="font-semibold text-gray-800">Dr. Principal Name</p>
                    <p className="text-blue-600">Principal, CRR Polytechnic</p>
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
                    <div className="w-32 h-32 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail size={48} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Sri. Correspondent Name</h3>
                    <p className="text-green-600 font-semibold">Correspondent</p>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Correspondent's Message</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      "It gives me immense pleasure to welcome you to SIR.C RAMLINGA REDDY POLYTECHNIC. 
                      As the Correspondent of this institution, I have witnessed the remarkable growth 
                      and achievements of our college over the years."
                    </p>
                    <p>
                      "Our commitment to providing quality education remains unwavering. We have 
                      continuously invested in infrastructure, faculty development, and student 
                      facilities to ensure that our students receive the best possible education."
                    </p>
                    <p>
                      "I am confident that our students will continue to excel and make significant 
                      contributions to society. We remain dedicated to fostering an environment 
                      of learning, innovation, and growth."
                    </p>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="font-semibold text-gray-800">Sri. Correspondent Name</p>
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
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Office Hours</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-semibold text-gray-700">Monday - Friday</span>
                    <span className="text-blue-600">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-semibold text-gray-700">Saturday</span>
                    <span className="text-blue-600">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-semibold text-gray-700">Sunday</span>
                    <span className="text-red-600">Closed</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Personnel</h3>
                <div className="space-y-4">
                  {[
                    { title: 'Registrar', name: 'Mr. Admin Name', ext: '101' },
                    { title: 'Academic Officer', name: 'Ms. Academic Name', ext: '102' },
                    { title: 'Accounts Officer', name: 'Mr. Accounts Name', ext: '103' },
                    { title: 'Student Affairs', name: 'Ms. Student Name', ext: '104' }
                  ].map((person, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                      <div>
                        <p className="font-semibold text-gray-800">{person.name}</p>
                        <p className="text-sm text-gray-600">{person.title}</p>
                      </div>
                      <span className="text-blue-600">Ext: {person.ext}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Services Available</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  'Student Registration',
                  'Fee Payment',
                  'Certificate Verification',
                  'Transcript Services',
                  'Admission Counseling',
                  'Scholarship Information',
                  'Hostel Admission',
                  'Library Services',
                  'Placement Assistance'
                ].map((service, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg text-center shadow-sm">
                    <p className="font-semibold text-gray-800">{service}</p>
                  </div>
                ))}
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