import React from 'react';
import { 
  Building, 
  FlaskConical, 
  BookOpen, 
  Home, 
  Presentation, 
  Gamepad2, 
  Trophy, 
  Volume2, 
  Coffee, 
  CreditCard, 
  Droplets, 
  Sun 
} from 'lucide-react';

const Facilities = () => {
  const facilities = [
    {
      id: 'lecture-halls',
      name: 'Lecture Halls',
      icon: Building,
      color: 'from-blue-500 to-blue-600',
      headerDescription: 'Modern, well-ventilated classrooms equipped with smart boards and audio-visual systems',
      description: 'The lecture halls in our diploma college are designed to provide a comfortable and effective learning environment for students. Each hall is spacious, well-ventilated, and equipped with modern teaching aids such as projectors, whiteboards, and audio systems to support interactive learning. The seating arrangements are well-planned to ensure clear visibility and audibility for every student. Special care is taken to maintain proper lighting and ventilation, creating a pleasant atmosphere for academic sessions. Some lecture halls are also fitted with smart classroom facilities, enabling digital learning and multimedia presentations. With their structured layout and academic ambience, these lecture halls encourage active participation and help students focus better during classes.',
      image: '/FACILITIES/LECTUREHALLS.png'
    },
    {
      id: 'laboratories',
      name: 'Laboratories',
      icon: FlaskConical,
      color: 'from-green-500 to-green-600',
      headerDescription: 'State-of-the-art laboratories with modern equipment for practical learning',
      description: 'Laboratories in a diploma college play a vital role in providing practical knowledge along with theoretical learning. They are well-equipped with modern instruments, tools, machinery as per the requirements of different branches like Electronics, Electrical, Mechanical, Civil, and Computer Science. Each laboratory is designed to give students hands-on experience and to develop technical skills needed in real-time industry applications. Practical sessions conducted in laboratories help students to understand concepts clearly, improve problem-solving ability, and strengthen their innovative thinking. Computer laboratory provide access to the latest software and internet facilities, while workshops and Mechanical labs help student practice machining, fitting, welding, and other industrial activities. Electronics and Electrical labs allow experimentation with circuits, machines and measurements. Civil labs support surveying, material testing, and construction practice. By working in laboratories, students not only gain confidence in their subject knowledge but also learn the importance of safety, teamwork, and discipline. These laboratories ensure that diploma graduates are industry-ready with practical exposure and professional competence.',
      image: '/FACILITIES/LECTUREHALLS.png'
    },
    {
      id: 'library',
      name: 'Library',
      icon: BookOpen,
      color: 'from-purple-500 to-purple-600',
      headerDescription: 'Comprehensive library with vast collection of books, journals, and digital resources',
      description: `The library in a polytechnic college is a vital resource center that supports the academic and research needs of students and faculty. It provides access to a wide range of learning materials and information resources. Previous semester papers are available in library.

TEXT BOOKS: TOTAL NUMBER OF VOLUMES: 19,677
TOTAL NO. OF TITLES: 5911

REFERENCE BOOKS: REFERENCE BOOKS: 5025
BACK VOLUMES: 180
PROJECTS REPORTS: 491
SC/ST BOOKBANK: 893

PERIODICALS: JOURNALS & MAGAZINES: 26

BOOKS ISSUES & RETURNS

STAFF & STUDENTS

BRANCH    ISSUES    RETURNS
CIVIL     121       93
CME       118       94
AIML      56        30
CCN       4         1
ECE       130       119
EEE       120       107
MECHANICAL 113      97`,
      image: '/FACILITIES/LIBRARY.png'
    },
    {
      id: 'hostels',
      name: 'Hostels',
      icon: Home,
      color: 'from-orange-500 to-orange-600',
      headerDescription: 'Comfortable accommodation facilities for outstation students',
      description: 'Comfortable accommodation facilities for outstation students',
      image: '/api/placeholder/400/300'
    },
    {
      id: 'seminar-hall',
      name: 'AC Seminar Hall',
      icon: Presentation,
      color: 'from-red-500 to-red-600',
      headerDescription: 'Air-conditioned seminar hall for conferences, workshops, and special events',
      description: 'Air-conditioned seminar hall for conferences, workshops, and special events',
      image: '/api/placeholder/400/300'
    },
    {
      id: 'indoor-games',
      name: 'Indoor Games',
      icon: Gamepad2,
      color: 'from-teal-500 to-teal-600',
      headerDescription: 'Indoor sports facilities for recreation and competitive games',
      description: 'Indoor sports facilities for recreation and competitive games',
      image: '/api/placeholder/400/300'
    },
    {
      id: 'outdoor-sports',
      name: 'Outdoor Sports & Games',
      icon: Trophy,
      color: 'from-green-500 to-green-600',
      headerDescription: 'Extensive outdoor sports facilities for various games and athletics',
      description: 'Extensive outdoor sports facilities for various games and athletics',
      image: '/api/placeholder/400/300'
    },
    {
      id: 'auditorium',
      name: 'Open Auditorium',
      icon: Volume2,
      color: 'from-pink-500 to-pink-600',
      headerDescription: 'Large open-air auditorium for cultural events and large gatherings',
      description: 'Large open-air auditorium for cultural events and large gatherings',
      image: '/api/placeholder/400/300'
    },
    {
      id: 'canteen',
      name: 'Canteen',
      icon: Coffee,
      color: 'from-yellow-500 to-yellow-600',
      headerDescription: 'Hygienic canteen serving fresh and nutritious food at affordable prices',
      description: 'Hygienic canteen serving fresh and nutritious food at affordable prices',
      image: '/api/placeholder/400/300'
    },
    {
      id: 'bank',
      name: 'Bank',
      icon: CreditCard,
      color: 'from-gray-500 to-gray-600',
      headerDescription: 'On-campus banking facility for student and staff convenience',
      description: 'On-campus banking facility for student and staff convenience',
      image: '/api/placeholder/400/300'
    },
    {
      id: 'water-plant',
      name: 'Mineral Water Plant',
      icon: Droplets,
      color: 'from-cyan-500 to-cyan-600',
      headerDescription: 'On-campus mineral water plant ensuring pure drinking water supply',
      description: 'On-campus mineral water plant ensuring pure drinking water supply',
      image: '/api/placeholder/400/300'
    },
    {
      id: 'solar-power',
      name: 'Solar Power',
      icon: Sun,
      color: 'from-amber-500 to-amber-600',
      headerDescription: 'Renewable energy initiative with solar power generation for campus needs',
      description: 'Renewable energy initiative with solar power generation for campus needs',
      image: '/api/placeholder/400/300'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Campus Facilities</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our world-class infrastructure and facilities designed to provide 
            the best learning environment and campus experience for our students.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {facilities.map((facility) => (
            <div key={facility.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Header */}
              <div className={`bg-gradient-to-r ${facility.color} p-6 text-white`}>
                <div className="flex items-center mb-4">
                  <facility.icon size={40} className="mr-4" />
                  <h2 className="text-2xl font-bold">{facility.name}</h2>
                </div>
                <p className="text-white/90">{facility.headerDescription}</p>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Image */}
                {facility.image.startsWith('/FACILITIES/') ? (
                  <div className="mb-6 rounded-xl overflow-hidden shadow-md">
                    <img
                      src={facility.image}
                      alt={facility.name}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="bg-gray-100 h-64 rounded-xl mb-6 flex items-center justify-center">
                    <facility.icon size={64} className="text-gray-400" />
                  </div>
                )}

                {/* Description */}
                <div>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    {facility.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Facility Highlights</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Modern Infrastructure</h3>
              <p className="text-gray-600 text-sm">State-of-the-art buildings with contemporary design and functionality</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FlaskConical className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Advanced Labs</h3>
              <p className="text-gray-600 text-sm">Well-equipped laboratories with latest technology and safety measures</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Sports Excellence</h3>
              <p className="text-gray-600 text-sm">Comprehensive sports facilities for physical fitness and recreation</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Green Campus</h3>
              <p className="text-gray-600 text-sm">Eco-friendly initiatives including solar power and water conservation</p>
            </div>
          </div>
        </div>

        {/* Campus Statistics */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Campus by Numbers</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Acres Campus</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">75+</div>
              <div className="text-blue-200">Classrooms & Labs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Hostel Capacity</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">25K+</div>
              <div className="text-blue-200">Library Books</div>
            </div>
          </div>
        </div>

        {/* Contact for Facility Tours */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Visit Our Campus</h2>
          <p className="text-lg text-gray-600 mb-6">
            Experience our world-class facilities firsthand. Schedule a campus tour today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Schedule Campus Tour
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;