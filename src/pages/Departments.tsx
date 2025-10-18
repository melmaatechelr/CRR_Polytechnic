import React from 'react';
import { Building, Users, Wrench, Cpu, Zap, Cog, Brain, Network, GraduationCap } from 'lucide-react';

const Departments = ({ onSelectDepartment }) => {
  const departments = [
    {
      id: 'dcme',
      name: 'Civil Engineering',
      code: 'DCME',
      icon: Building,
      color: 'from-orange-500 to-red-500',
      description: 'Building the infrastructure of tomorrow with sustainable and innovative construction techniques.',
      hod: 'Dr. Civil HOD',
      students: 180,
      faculty: 12,
      labs: 8,
      specializations: ['Structural Engineering', 'Transportation Engineering', 'Environmental Engineering', 'Geotechnical Engineering']
    },
    {
      id: 'dce',
      name: 'Computer Engineering',
      code: 'DCE',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-500',
      description: 'Pioneering the digital revolution with cutting-edge programming and software development skills.',
      hod: 'Prof. Computer HOD',
      students: 180,
      faculty: 15,
      labs: 10,
      specializations: ['Software Development', 'Web Technologies', 'Database Systems', 'Mobile App Development']
    },
    {
      id: 'deee',
      name: 'Electrical & Electronics Engineering',
      code: 'DEEE',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      description: 'Powering the future with advanced electrical systems and electronic innovations.',
      hod: 'Dr. EEE HOD',
      students: 180,
      faculty: 14,
      labs: 12,
      specializations: ['Power Systems', 'Control Systems', 'Electronics', 'Renewable Energy']
    },
    {
      id: 'dme',
      name: 'Mechanical Engineering',
      code: 'DME',
      icon: Cog,
      color: 'from-gray-600 to-gray-800',
      description: 'Engineering mechanical solutions for manufacturing, automotive, and industrial applications.',
      hod: 'Prof. Mechanical HOD',
      students: 180,
      faculty: 13,
      labs: 9,
      specializations: ['Manufacturing', 'Thermal Engineering', 'Design Engineering', 'Automotive Engineering']
    },
    {
      id: 'daiml',
      name: 'Artificial Intelligence & Machine Learning',
      code: 'DAIML',
      icon: Brain,
      color: 'from-rose-500 to-pink-500',
      description: 'Shaping the future with intelligent systems, machine learning, and artificial intelligence.',
      hod: 'Dr. AI/ML HOD',
      students: 90,
      faculty: 8,
      labs: 6,
      specializations: ['Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Computer Vision']
    },
    {
      id: 'dccn',
      name: 'Computer Communication Networks',
      code: 'DCCN',
      icon: Network,
      color: 'from-green-500 to-teal-500',
      description: 'Connecting the world through advanced networking and cybersecurity technologies.',
      hod: 'Prof. CCN HOD',
      students: 90,
      faculty: 7,
      labs: 5,
      specializations: ['Network Security', 'Wireless Networks', 'Cloud Computing', 'IoT Systems']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Academic Departments</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse range of engineering departments, each equipped with modern facilities, 
            experienced faculty, and industry-relevant curriculum designed to shape future engineers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {departments.map((dept) => (
            <div
              key={dept.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => onSelectDepartment(dept)}
            >
              {/* Header with gradient background */}
              <div className={`bg-gradient-to-r ${dept.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <dept.icon size={48} className="text-white/90" />
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                    {dept.code}
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-2">{dept.name}</h2>
                <p className="text-white/90 text-sm">{dept.description}</p>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-800">{dept.students}</div>
                    <div className="text-xs text-gray-600">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-800">{dept.faculty}</div>
                    <div className="text-xs text-gray-600">Faculty</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-800">{dept.labs}</div>
                    <div className="text-xs text-gray-600">Labs</div>
                  </div>
                </div>

                {/* HOD */}
                <div className="mb-4">
                  <p className="text-sm text-gray-600">Head of Department</p>
                  <p className="font-semibold text-gray-800">{dept.hod}</p>
                </div>

                {/* Specializations */}
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-2">Key Areas</p>
                  <div className="flex flex-wrap gap-1">
                    {dept.specializations.slice(0, 3).map((spec, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {spec}
                      </span>
                    ))}
                    {dept.specializations.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        +{dept.specializations.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  Explore Department
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Department Features</h2>
            <p className="text-lg text-gray-600">What makes our departments stand out</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: 'Expert Faculty',
                description: 'Highly qualified and experienced faculty members with industry expertise'
              },
              {
                icon: Wrench,
                title: 'Modern Labs',
                description: 'State-of-the-art laboratories with latest equipment and technology'
              },
              {
                icon: Building,
                title: 'Industry Connect',
                description: 'Strong partnerships with leading companies for internships and placements'
              },
              {
                icon: GraduationCap,
                title: 'Research Focus',
                description: 'Emphasis on research and innovation with student project opportunities'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-blue-600" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departments;