import React from 'react';
import { Calendar, Trophy, Users, Music, Palette, Code, Lightbulb, Award } from 'lucide-react';

const Activities = () => {
  const activities = [
    {
      category: 'Technical Events',
      icon: Code,
      color: 'from-blue-500 to-purple-500',
      events: [
        'TechFest - Annual Technical Symposium',
        'Coding Competitions',
        'Project Exhibitions',
        'Robotics Workshop',
        'AI/ML Bootcamp',
        'Hackathons'
      ]
    },
    {
      category: 'Cultural Events',
      icon: Music,
      color: 'from-pink-500 to-red-500',
      events: [
        'Annual Cultural Festival',
        'Dance Competitions',
        'Music Concerts',
        'Drama & Theatre',
        'Fashion Show',
        'Talent Hunt'
      ]
    },
    {
      category: 'Sports Activities',
      icon: Trophy,
      color: 'from-green-500 to-teal-500',
      events: [
        'Annual Sports Meet',
        'Cricket Tournament',
        'Football Championship',
        'Basketball League',
        'Badminton Tournament',
        'Athletics Competition'
      ]
    },
    {
      category: 'Academic Activities',
      icon: Lightbulb,
      color: 'from-yellow-500 to-orange-500',
      events: [
        'Guest Lectures',
        'Industrial Visits',
        'Seminars & Workshops',
        'Research Presentations',
        'Quiz Competitions',
        'Debate Competitions'
      ]
    },
    {
      category: 'Social Activities',
      icon: Users,
      color: 'from-indigo-500 to-blue-500',
      events: [
        'Community Service',
        'Blood Donation Camps',
        'Environmental Awareness',
        'Tree Plantation Drives',
        'Cleanliness Campaigns',
        'Social Awareness Programs'
      ]
    },
    {
      category: 'Art & Creativity',
      icon: Palette,
      color: 'from-purple-500 to-pink-500',
      events: [
        'Art Exhibitions',
        'Photography Contests',
        'Creative Writing',
        'Poster Making',
        'Craft Workshops',
        'Design Competitions'
      ]
    }
  ];

  const upcomingEvents = [
    {
      title: 'TechFest 2024',
      date: '2024-03-15',
      time: '9:00 AM',
      venue: 'Main Auditorium',
      type: 'Technical',
      description: 'Annual technical symposium featuring project exhibitions, coding competitions, and tech talks.'
    },
    {
      title: 'Cultural Evening',
      date: '2024-03-20',
      time: '6:00 PM',
      venue: 'Open Auditorium',
      type: 'Cultural',
      description: 'An evening of music, dance, and cultural performances by students.'
    },
    {
      title: 'Sports Tournament',
      date: '2024-03-25',
      time: '8:00 AM',
      venue: 'Sports Ground',
      type: 'Sports',
      description: 'Inter-department sports competition including cricket, football, and athletics.'
    }
  ];

  const achievements = [
    {
      title: 'State Level Robotics Competition',
      position: '1st Place',
      year: '2024',
      students: 'Team Alpha - DCE Department',
      description: 'Won first place in autonomous robot navigation challenge'
    },
    {
      title: 'Inter-College Cultural Fest',
      position: '2nd Place',
      year: '2024',
      students: 'Cultural Team',
      description: 'Outstanding performance in dance and music competitions'
    },
    {
      title: 'Coding Championship',
      position: '3rd Place',
      year: '2023',
      students: 'Programming Club',
      description: 'Secured third position in regional coding competition'
    },
    {
      title: 'Innovation Challenge',
      position: 'Best Innovation',
      year: '2023',
      students: 'Innovation Team - DAIML',
      description: 'Awarded for innovative AI-based solution for agriculture'
    }
  ];

  const clubs = [
    {
      name: 'Programming Club',
      members: '120+',
      focus: 'Coding, Software Development, Competitive Programming',
      activities: ['Weekly coding sessions', 'Hackathons', 'Tech talks', 'Project mentoring']
    },
    {
      name: 'Robotics Club',
      members: '80+',
      focus: 'Robotics, Automation, IoT Projects',
      activities: ['Robot building workshops', 'Competitions', 'Technical projects', 'Innovation labs']
    },
    {
      name: 'Cultural Club',
      members: '200+',
      focus: 'Music, Dance, Drama, Arts',
      activities: ['Cultural events', 'Talent shows', 'Festivals', 'Art exhibitions']
    },
    {
      name: 'Sports Club',
      members: '150+',
      focus: 'Sports, Fitness, Team Building',
      activities: ['Sports tournaments', 'Fitness programs', 'Team building', 'Athletic training']
    },
    {
      name: 'Literary Club',
      members: '60+',
      focus: 'Writing, Reading, Debates, Public Speaking',
      activities: ['Writing workshops', 'Debate competitions', 'Book clubs', 'Literary events']
    },
    {
      name: 'Social Service Club',
      members: '100+',
      focus: 'Community Service, Social Awareness',
      activities: ['Community outreach', 'Awareness campaigns', 'Volunteer work', 'Social projects']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Student Activities</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the vibrant campus life at CRR Polytechnic through our diverse range of 
            activities, events, and student organizations that foster holistic development.
          </p>
        </div>

        {/* Activity Categories */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className={`bg-gradient-to-r ${activity.color} p-6 text-white`}>
                <div className="flex items-center mb-4">
                  <activity.icon size={32} className="mr-4" />
                  <h3 className="text-xl font-bold">{activity.category}</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {activity.events.map((event, eventIndex) => (
                    <li key={eventIndex} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {event}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="flex items-center mb-8">
            <Calendar className="text-blue-600 mr-4" size={32} />
            <h2 className="text-3xl font-bold text-gray-800">Upcoming Events</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    event.type === 'Technical' ? 'bg-blue-100 text-blue-800' :
                    event.type === 'Cultural' ? 'bg-pink-100 text-pink-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {event.type}
                  </span>
                </div>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <p><strong>Date:</strong> {event.date}</p>
                  <p><strong>Time:</strong> {event.time}</p>
                  <p><strong>Venue:</strong> {event.venue}</p>
                </div>
                <p className="text-gray-700 text-sm">{event.description}</p>
                <button className="mt-4 text-blue-600 hover:text-blue-800 font-semibold text-sm">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Student Clubs */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="flex items-center mb-8">
            <Users className="text-blue-600 mr-4" size={32} />
            <h2 className="text-3xl font-bold text-gray-800">Student Clubs & Organizations</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {clubs.map((club, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{club.name}</h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {club.members} members
                  </span>
                </div>
                <p className="text-gray-600 mb-4"><strong>Focus:</strong> {club.focus}</p>
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Key Activities:</p>
                  <ul className="space-y-1">
                    {club.activities.map((activity, actIndex) => (
                      <li key={actIndex} className="text-sm text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-8">
            <Award className="text-blue-600 mr-4" size={32} />
            <h2 className="text-3xl font-bold text-gray-800">Recent Achievements</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{achievement.title}</h3>
                  <div className="text-right">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {achievement.position}
                    </span>
                    <p className="text-sm text-gray-500 mt-1">{achievement.year}</p>
                  </div>
                </div>
                <p className="text-blue-600 font-semibold mb-2">{achievement.students}</p>
                <p className="text-gray-700 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Involved!</h2>
          <p className="text-xl mb-6 text-blue-100">
            Join our vibrant student community and make the most of your college experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Join a Club
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Event Calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;