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
      sno: 1,
      company: 'Deepak nextgen feed',
      issueDate: '29th November, 2022'
    },
    {
      sno: 2,
      company: 'IBSC',
      issueDate: '12th February, 2024'
    },
    {
      sno: 3,
      company: 'MELMAA PRIVATE LTD.',
      issueDate: '12th November, 2024'
    },
    {
      sno: 4,
      company: 'ShiftEduTech',
      issueDate: '28th November, 2024'
    },
    {
      sno: 5,
      company: 'CSC Academy',
      issueDate: '2nd March, 2025'
    },
    {
      sno: 6,
      company: 'Techin IT',
      issueDate: '6th May, 2025'
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

  const renderGuidelines = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Guidelines & Document for Placement Cell</h2>
        <p className="text-lg text-gray-600">Important guidelines and policies for campus placements</p>
      </div>

      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-blue-100">
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 p-6">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
              <Building className="text-white" size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Guidelines for Placement</h3>
              <p className="text-blue-100 text-sm">Please read carefully</p>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-5 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border-l-4 border-blue-600 hover:shadow-md transition-all duration-300">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  The role of T&P (Training & Placement) Cell is a facilitator for placement related activities. <span className="font-semibold text-gray-900">T&P does not guarantee a job.</span>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-5 bg-gradient-to-r from-cyan-50 to-teal-50 rounded-xl border-l-4 border-cyan-600 hover:shadow-md transition-all duration-300">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  Students will be informed about any campus drive through emails & their HODs will also be marked.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-5 bg-gradient-to-r from-teal-50 to-green-50 rounded-xl border-l-4 border-teal-600 hover:shadow-md transition-all duration-300">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  The Placement facility is available to all the students registered with T&P Cell through the policy <span className="font-semibold text-gray-900">ONE JOB TO ONE STUDENT AT THE FIRST INSTANCE</span>. The students are required to submit a certificate showing their academic performance.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-l-4 border-green-600 hover:shadow-md transition-all duration-300">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  Participants should always carry <span className="font-semibold text-gray-900">2 copies of resumes</span> during interviews.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-5 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border-l-4 border-amber-600 hover:shadow-md transition-all duration-300">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">5</span>
                </div>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  Any negative remark in this regard made by any faculty or warden against any student will make him/her <span className="font-semibold text-red-700">ineligible for the entire campus placement process</span>.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-5 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border-l-4 border-red-600 hover:shadow-md transition-all duration-300">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">6</span>
                </div>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  Besides, any student against whom <span className="font-semibold text-red-700">more than one warning letter is issued will not be allowed to appear in campus interview</span>.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-5 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl border-l-4 border-purple-600 hover:shadow-md transition-all duration-300">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">7</span>
                </div>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  Selected participants need to submit a copy of their <span className="font-semibold text-gray-900">offer letter to Placement department to obtain NOC</span> for joining.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-blue-600 hover:shadow-md transition-all duration-300">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">8</span>
                </div>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  All students must be with <span className="font-semibold text-gray-900">uniform and identity card</span> while going to TNP training.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 rounded-2xl p-8 border-2 border-amber-200 shadow-lg">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-md">
              <Award className="text-white" size={24} />
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Important Note</h4>
            <p className="text-gray-700 leading-relaxed">
              Students are advised to maintain professional conduct throughout the placement process. Any violation of the above guidelines may result in disciplinary action. For any queries, please contact the Training & Placement Cell.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderRecruiters = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">List of Recruiters</h2>
        <p className="text-lg text-gray-600">Leading companies that trust our graduates</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-blue-600 text-white p-6">
          <h3 className="text-xl font-bold">Our Recruiting Partners</h3>
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

      <div className="bg-blue-50 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Career Opportunities</h3>
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
    </div>
  );

  const renderMOUs = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Memorandums of Understanding</h2>
        <p className="text-lg text-gray-600">Strategic partnerships for mutual growth and development</p>
      </div>

      <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                <Handshake className="text-white" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">MOU's List</h3>
                <p className="text-blue-100 text-sm">Active Partnerships</p>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-white font-semibold">{mous.length} Partners</span>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-blue-200">
                <th className="px-8 py-5 text-left">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs font-bold">#</span>
                    </div>
                    <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">S.NO</span>
                  </div>
                </th>
                <th className="px-8 py-5 text-left">
                  <div className="flex items-center space-x-2">
                    <Building className="text-blue-600" size={20} />
                    <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">Name of Company</span>
                  </div>
                </th>
                <th className="px-8 py-5 text-left">
                  <div className="flex items-center space-x-2">
                    <Award className="text-blue-600" size={20} />
                    <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">Issue Date</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {mous.map((mou, index) => (
                <tr
                  key={index}
                  className="group hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 cursor-pointer"
                >
                  <td className="px-8 py-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold">{mou.sno}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center group-hover:from-blue-100 group-hover:to-cyan-100 transition-all duration-300">
                        <Building className="text-blue-600" size={24} />
                      </div>
                      <span className="font-semibold text-gray-800 text-lg group-hover:text-blue-700 transition-colors">
                        {mou.company}
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-50 to-emerald-50 px-4 py-2 rounded-full border border-green-200 group-hover:border-green-400 transition-all duration-300">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-gray-700 font-medium">{mou.issueDate}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 rounded-2xl p-8 shadow-lg border border-blue-100">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">MOU Benefits</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Student Internships', desc: 'Structured internship programs', color: 'from-blue-500 to-blue-600' },
            { title: 'Faculty Development', desc: 'Training and skill enhancement', color: 'from-cyan-500 to-cyan-600' },
            { title: 'Research Collaboration', desc: 'Joint research projects', color: 'from-teal-500 to-teal-600' },
            { title: 'Knowledge Exchange', desc: 'Technology and expertise sharing', color: 'from-green-500 to-green-600' }
          ].map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className={`bg-gradient-to-br ${benefit.color} text-white w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                <Handshake size={28} />
              </div>
              <h4 className="font-bold text-gray-800 mb-2 text-center">{benefit.title}</h4>
              <p className="text-sm text-gray-600 text-center leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'about', label: 'About TNP', icon: Briefcase },
    { id: 'placements', label: 'Campus Placements', icon: Users },
    { id: 'recruiters', label: 'List of Recruiters', icon: Award },
    { id: 'mous', label: 'MOUs', icon: Handshake },
    { id: 'guidelines', label: 'Guidelines & Document', icon: Building }
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
          {activeTab === 'recruiters' && renderRecruiters()}
          {activeTab === 'mous' && renderMOUs()}
          {activeTab === 'guidelines' && renderGuidelines()}
        </div>
      </div>
    </div>
  );
};

export default Placements;