import React, { useState } from 'react';
import { Camera, Play, Calendar, Users, Award, Building } from 'lucide-react';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All', icon: Camera },
    { id: 'campus', label: 'Campus', icon: Building },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'students', label: 'Student Life', icon: Users },
    { id: 'achievements', label: 'Achievements', icon: Award }
  ];

  // Sample gallery items - in a real application, these would come from a CMS or database
  const galleryItems = [
    {
      id: 1,
      type: 'image',
      category: 'campus',
      title: 'Main Building',
      description: 'The iconic main building of CRR Polytechnic',
      date: '2024-01-15',
      thumbnail: '/api/placeholder/400/300'
    },
    {
      id: 2,
      type: 'image',
      category: 'events',
      title: 'TechFest 2024',
      description: 'Annual technical symposium with project exhibitions',
      date: '2024-02-20',
      thumbnail: '/api/placeholder/400/300'
    },
    {
      id: 3,
      type: 'image',
      category: 'students',
      title: 'Laboratory Session',
      description: 'Students working on practical experiments',
      date: '2024-01-30',
      thumbnail: '/api/placeholder/400/300'
    },
    {
      id: 4,
      type: 'video',
      category: 'achievements',
      title: 'Award Ceremony',
      description: 'Students receiving awards for academic excellence',
      date: '2024-02-10',
      thumbnail: '/api/placeholder/400/300'
    },
    {
      id: 5,
      type: 'image',
      category: 'campus',
      title: 'Library Interior',
      description: 'Modern library with extensive book collection',
      date: '2024-01-20',
      thumbnail: '/api/placeholder/400/300'
    },
    {
      id: 6,
      type: 'image',
      category: 'events',
      title: 'Cultural Festival',
      description: 'Annual cultural celebration with performances',
      date: '2024-02-25',
      thumbnail: '/api/placeholder/400/300'
    },
    {
      id: 7,
      type: 'image',
      category: 'students',
      title: 'Sports Day',
      description: 'Inter-department sports competition',
      date: '2024-02-05',
      thumbnail: '/api/placeholder/400/300'
    },
    {
      id: 8,
      type: 'image',
      category: 'campus',
      title: 'Computer Lab',
      description: 'State-of-the-art computer laboratory',
      date: '2024-01-25',
      thumbnail: '/api/placeholder/400/300'
    },
    {
      id: 9,
      type: 'video',
      category: 'events',
      title: 'Graduation Ceremony',
      description: 'Convocation ceremony for graduating students',
      date: '2024-03-01',
      thumbnail: '/api/placeholder/400/300'
    },
    {
      id: 10,
      type: 'image',
      category: 'achievements',
      title: 'Robotics Competition',
      description: 'Students showcasing their robotics projects',
      date: '2024-02-15',
      thumbnail: '/api/placeholder/400/300'
    },
    {
      id: 11,
      type: 'image',
      category: 'campus',
      title: 'Auditorium',
      description: 'Modern auditorium for events and seminars',
      date: '2024-01-18',
      thumbnail: '/api/placeholder/400/300'
    },
    {
      id: 12,
      type: 'image',
      category: 'students',
      title: 'Group Study',
      description: 'Students collaborating on projects',
      date: '2024-02-08',
      thumbnail: '/api/placeholder/400/300'
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Photo Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the vibrant life at CRR Polytechnic through our collection of photos and videos 
            showcasing campus facilities, student activities, events, and achievements.
          </p>
        </div>

        {/* Category Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <category.icon size={18} className="mr-2" />
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => openModal(item)}
            >
              <div className="relative">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <Camera size={48} className="text-gray-400" />
                </div>
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                    <div className="bg-white bg-opacity-90 rounded-full p-3">
                      <Play size={24} className="text-gray-800" />
                    </div>
                  </div>
                )}
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    item.category === 'campus' ? 'bg-blue-100 text-blue-800' :
                    item.category === 'events' ? 'bg-green-100 text-green-800' :
                    item.category === 'students' ? 'bg-purple-100 text-purple-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {categories.find(cat => cat.id === item.category)?.label}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                <p className="text-xs text-gray-500">{item.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <Camera size={64} className="text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No items found</h3>
            <p className="text-gray-500">No gallery items match the selected category.</p>
          </div>
        )}

        {/* Modal for viewing images/videos */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-4xl max-h-full overflow-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">{selectedItem.title}</h2>
                    <p className="text-gray-600">{selectedItem.description}</p>
                    <p className="text-sm text-gray-500 mt-1">{selectedItem.date}</p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                  >
                    ×
                  </button>
                </div>
                <div className="bg-gray-200 h-96 flex items-center justify-center rounded-lg">
                  {selectedItem.type === 'video' ? (
                    <div className="text-center">
                      <Play size={64} className="text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">Video content would be displayed here</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <Camera size={64} className="text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">High-resolution image would be displayed here</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Gallery Statistics */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Gallery Statistics</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="text-blue-600" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">500+</div>
              <div className="text-gray-600">Photos</div>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="text-green-600" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">50+</div>
              <div className="text-gray-600">Videos</div>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-purple-600" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">100+</div>
              <div className="text-gray-600">Events Covered</div>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-orange-600" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">25+</div>
              <div className="text-gray-600">Awards Documented</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Share Your Moments</h2>
          <p className="text-xl mb-6 text-blue-100">
            Have photos or videos from college events? Share them with us!
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Submit Your Photos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;