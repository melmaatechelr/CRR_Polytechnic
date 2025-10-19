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
  Sun,
  Camera,
  Car
} from 'lucide-react';

const Facilities = () => {
  const facilities = [
    {
      id: 'lecture-halls',
      name: 'Lecture Halls',
      icon: Building,
      color: 'from-blue-500 to-blue-600',
      headerDescription: 'Modern, well-ventilated classrooms equipped with smart boards and audio-visual systems',
      description: 'The lecture halls in our diploma college are designed to provide a comfortable and effective learning environment for students. Each hall is spacious, well-ventilated, and equipped with modern teaching aids such as projectors, whiteboards, audio systems to support interactive learning. The seating arrangements are well-planned to ensure clear visibility and audibility for every student.\n\nSpecial care is taken to maintain proper lighting and ventilation, creating a pleasant atmosphere for academic sessions. Some lecture halls are also fitted with smart classroom facilities, enabling digital learning and multimedia presentations. With their structured layout and academic ambience, these lecture halls encourage active participation and help students focus better during classes.',
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
      description: `The library in a polytechnic college is a vital resource center that supports the academic and research needs of students and faculty. It provides access to a wide range of learning materials and information resources. Previous semester papers are available in library.</br>

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
      name: 'In Facilities - Hostel',
      icon: Home,
      color: 'from-orange-500 to-orange-600',
      headerDescription: 'Comfortable accommodation facilities for outstation students with homely atmosphere',
      description: `We are having in premises hostel for boys accommodating for strength of nearly 400 students in two buildings, the hostel is maintained in a homely atmosphere, hygienic food and conditions, totally maintained by the students themselves.\n\nThe hostel being located in the premises, having the advantage of easy access to all sports and games ground located in the college for student recreation.\n\nStudy hours with supervisory staff from teaching faculty of polytechnic are maintained in the hostel which is very much useful for the students in clearing any doubts in their subjects particularly before the end examinations teaching faculty from all departments will attend these study hours to take care of their respective department students in subject manner.\n\nGrocery and all commodities are purchased from corporate and reputed outlets, selected by the student committee.\n\nAll the activities in the hostel are continuously monitored by CC TV surveillance. Continuous mineral water supply from the inbuilt mineral water treatment plant is provided.\n\nThe mess bill will be charged on prorate basis by taking into consideration the actual expenditure occurred in that month.\n\nThe same will be implemented in girl's hostel also; it is located in our sister institutions Sir C RR WOMEN campus located half kilo meter away from Our Polytechnic campus.\n\nThose girl students will be monitor continuously by our department female faculty.`,
      image: '/FACILITIES/INFACILITIESHOSTEL.png'
    },
    {
      id: 'seminar-hall',
      name: 'AC Seminar Hall',
      icon: Presentation,
      color: 'from-red-500 to-red-600',
      headerDescription: 'Air-conditioned seminar hall for conferences, workshops, and special events',
      description: `A seminar hall is an essential academic infrastructure in any diploma college, providing a formal space for hosting educational and extracurricular activities. A well-equipped air-conditioned (AC) seminar hall enhances the overall learning experience and reflects the institutions commitment better quality education.\n\nFully air-conditioned hall to provide a comfortable environment during long sessions, even in hot weather. Spacious seating arrangements to accommodate 100-300+ participants. Chairs and well-planned seating layout for visibility and comfort. Projector and large screen for presentations and video displays. Sound system with wireless microphones for speakers and audience interaction.\n\nPURPOSE AND USAGE\n\nThe seminar hall is used for:\n1. Guest lectures and expert talks\n2. Cultural and academic competitions\n3. Staff meetings, induction programs, and internal events`,
      image: '/FACILITIES/ACSEMINARHALL.png'
    },
    {
      id: 'outdoor-sports',
      name: 'Sports & Games',
      icon: Trophy,
      color: 'from-green-500 to-green-600',
      headerDescription: 'Extensive outdoor sports facilities for various games and athletics',
      description: `The college is encourage in indoor & outdoor sports and games activities amongst the students by providing the infrastructure, large playing fields support a wide variety of games. Full Time Physical Director Is Appointed, To Organize Physical Education Activities in the Polytechnic. IPSGM Sports Meet For Men And Women Students' Conducted Regularly. CRRPOLY Staff & students Tournament also organized.\n\nOUTDOOR GAMES:\nBall badminton, Cricket, Kabaddi, Kho-kho, Volley ball\n\nINDOOR GAMES:\nChess, Table tennis, Caroms, Shuttle\n\nATHLETICS:\nRunning, High jump, Long jump, Pole vault\n\nTHROWS:\nDisc, Shot put, Javelin Throw`,
      image: '/FACILITIES/SPORTS&GAMES.png'
    },
    {
      id: 'parking',
      name: 'Parking Facility',
      icon: Car,
      color: 'from-slate-500 to-slate-600',
      headerDescription: 'A well-organized parking facility is essential in any educational institution, including diploma colleges, to ensure convenience, safety, and orderliness for students, faculty, and visitors',
      description: `A well-organized parking facility is essential in any educational institution, including diploma colleges, to ensure convenience, safety, and orderliness for students, faculty, and visitors. Below is a comprehensive outline of parking-related facilities and considerations:\n\nPARKING AREA INFRASTRUCTURE\n\n1. Designated zones for two-wheelers and four-wheelers\n2. Separate areas for students, faculty, staff and visitors\n3. Covered parking to protect vehicles from weather\n4. Proper surfacing to avoid dust and mud`,
      image: '/FACILITIES/PARKING FACILITY.png'
    },
    {
      id: 'auditorium',
      name: 'Open Auditorium',
      icon: Volume2,
      color: 'from-pink-500 to-pink-600',
      headerDescription: 'Large open-air auditorium for cultural events and large gatherings',
      description: `The open auditorium is one of the key facilities provided in a diploma college campus. It is a spacious, well-structured, and open-air venue designed to accommodate a large number of students and faculty for common activities. The auditorium serves as a hub for academic, cultural, and extracurricular programs, encouraging students to actively participate in events beyond the classroom.\n\nIt is widely used for annual day celebrations, fresher's and farewell parties and sports award functions and student festivals. The open auditorium is designed with a stage, proper seating arrangements, good lighting, and sound systems to ensure smooth conduct of events. Being open-air, it provides a refreshing environment, encourages creativity, and allows for larger gatherings compared to indoor halls.`,
      image: '/FACILITIES/OPENAUDITORIUM.png'
    },
    {
      id: 'canteen',
      name: 'Canteen',
      icon: Coffee,
      color: 'from-yellow-500 to-yellow-600',
      headerDescription: 'Hygienic canteen serving fresh and nutritious food at affordable prices',
      description: `It provides snacks at reasonable prices. This facility is starts at morning 10'o clock and remains open till the college is closed. It is very much comfortable and the services are utilized more during the lunch time. It serves best to the students.\n\nThe diploma college provides a stationary facility on campus to meet the day-to-day academic needs of students and staff. The stationary store supplies essential items such as note books, pens, pencils, ruler files, calculators, drawing sheets, lab records, and other study materials required for coursework and examinations.\n\nThe stationary shop plays an important role in supporting the academic activities of students by providing quick, convenient, and reliable access to study material within the college premises.`,
      image: '/FACILITIES/CANTEEN.png'
    },
    {
      id: 'bank',
      name: 'Bank',
      icon: CreditCard,
      color: 'from-gray-500 to-gray-600',
      headerDescription: 'On-campus banking facility for student and staff convenience',
      description: `Union bank of India has established a branch within the college campus to provide convenient and accessible banking services to students, faculty, and staff. The bank offers a range of financial services such as opening student accounts, ATM facilities and fee payments.\n\nHaving a union bank branch on campus ensures that students can carry out their banking needs without leaving the college premises.\n\nThe bank is equipped with ATM services, online banking support, and student-friendly financial schemes, making it easy for students to manage their finance. It also ensures safe and transparent handling of college fee transactions, reducing waiting times and improving efficiency.\n\nCO CURRICULAR ACTIVITIES\n\nOrganize Lectures By Experts From Industries, R & D Organizations, Defense Services, Government Departments And Other Institutions.\n\nCoaching Program for Writing Competitive Examinations and Attending Job Interviews, Training Programs On Report Writing.\n\nCultural Programs, Counseling Services Lectures On Moral Values And Ethics, Discussions, Brain Storming Sessions, Group Activities, Entrepreneurships Development Programs Training On Public Speaking, Training In Becoming A Master Student, Programs In Leadership And Personality Development Visits To Industries, Work Sites Training In Co-Operative Learning, Training On Environmental Awareness, Training On Basic Management Skills`,
      image: '/FACILITIES/BANK.png'
    },
    {
      id: 'water-plant',
      name: 'Mineral Water Plant',
      icon: Droplets,
      color: 'from-cyan-500 to-cyan-600',
      headerDescription: 'On-campus mineral water plant ensuring pure drinking water supply',
      description: `The college has realized the significance of student's health and has rightly taken steps to avoid many disease that are water born by way of providing purified and protected water by installing a plant which provides 20,000 lit per day available in the contemporary world like R.O system as a central faculty with an investment of 3.5lakhs.\n\nThe purified water is stored in clean storage tanks and supplied to water coolers and dispensers located across important areas of the college like lecture hall, laboratories, workshops, hostels, library, canteen and administrative blocks. The presence of cooling units makes it convenient for student to have access chilled water during hot seasons.\n\nOverall, the mineral water plant plays a vital role in campus infrastructure by safeguarding students health.`,
      image: '/FACILITIES/MINERALWATERPLANT.png'
    },
    {
      id: 'cctv',
      name: '24/7 CCTV Monitoring',
      icon: Camera,
      color: 'from-indigo-500 to-indigo-600',
      headerDescription: 'Round-the-clock surveillance system ensuring campus safety and security',
      description: `24/7 CCTV (CLOSED-CIRCUIT TELEVISION) monitoring in college is a security measure implemented to ensure the safety and discipline within the campus. With the increasing need for student and staff protection, educational institutions are adopting surveillance systems to monitor activities round-the-clock.\n\nThe CCTV system helps the administration to monitor activities, prevent unauthorized entry, control theft, ragging, and other misconducts, thereby creating a safe learning environment. The footage is continuously recorded and stored, which can be reviewed whenever necessary for security purpose.`,
      image: '/FACILITIES/CCTVMONITORING.png'
    },
    {
      id: 'solar-power',
      name: 'Solar Power Plant',
      icon: Sun,
      color: 'from-amber-500 to-amber-600',
      headerDescription: 'Renewable energy initiative with solar power generation for campus needs',
      description: `A solar power plant in college hostel is an eco-friendly initiative aimed at utilizing renewable energy to meet the daily electricity needs of hostel buildings. With increasing energy costs and a growing need for sustainability, installing solar panels on hostels can significantly reduce electricity bills and carbon emissions.\n\nThis solar power system is mainly used to meet the hostel's basic energy needs, such as lighting, through solar heaters, and powering, common facilities. By using solar energy, the hostel reduces its dependence on conventional electricity and lowers overall power costs.`,
      image: '/FACILITIES/SOLARPOWERPLANTINCOLLEGEHOSTEL.png'
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