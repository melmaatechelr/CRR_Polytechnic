import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Academics from './pages/Academics';
import Departments from './pages/Departments';
import Placements from './pages/Placements';
import Examinations from './pages/Examinations';
import Alumni from './pages/Alumni';
import Activities from './pages/Activities';
import Facilities from './pages/Facilities';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';
import DepartmentDetail from './pages/DepartmentDetail';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const renderPage = () => {
    if (selectedDepartment) {
      return <DepartmentDetail department={selectedDepartment} onBack={() => setSelectedDepartment(null)} />;
    }

    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <AboutUs />;
      case 'academics':
        return <Academics />;
      case 'departments':
        return <Departments onSelectDepartment={setSelectedDepartment} />;
      case 'placements':
        return <Placements />;
      case 'examinations':
        return <Examinations />;
      case 'alumni':
        return <Alumni />;
      case 'activities':
        return <Activities />;
      case 'facilities':
        return <Facilities />;
      case 'gallery':
        return <Gallery />;
      case 'contact':
        return <ContactUs />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="flex-1 transition-all duration-300">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;