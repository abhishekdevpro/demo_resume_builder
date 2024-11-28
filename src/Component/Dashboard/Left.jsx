import { useState } from 'react';
import './Home.css';
import { Link, useLocation } from 'react-router-dom';

function Left() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);
  // const token = localStorage.getItem('token')
  const handleTabClick = (path) => {
    setActiveTab(path);
  };

  return (
    <div className="hidden md:flex md:flex-col md:py-36 md:w-[23%] md:justify-start md:p-5" id="bgnavbar">
      <nav>
        <div className="flex flex-col">
        <Link 
            to="/dashboard" 
            className={`mb-2 px-2 py-2 rounded-md ${activeTab === '/dashboard' ? 'bg-slate-900 text-white' : 'bg-slate-700 text-white'}`}
            onClick={() => handleTabClick('/dashboard')}
          >
            <i className="fa-solid fa-book-open-reader p-3 text-purple-500"></i>Dashboard
          </Link>
          <Link 
            to="" 
            className={`mb-2 px-2 py-2 rounded-md ${activeTab === '/uploadresume' ? 'bg-slate-900 text-white' : 'bg-slate-700 text-white'}`}
            onClick={() => handleTabClick('/uploadresume')}
          >
            <i className="fa-solid fa-upload p-3 text-purple-500"></i>Upload Resume
          </Link>
          <Link 
            to={`/resume`}
            className={`mb-2 px-2 py-2 rounded-md ${activeTab === '/resume' ? 'bg-slate-900 text-white' : 'bg-slate-700 text-white'}`}
            onClick={() => handleTabClick('/resume')}
          >
            <i className="fa-solid fa-file p-3 text-purple-500"></i>AI Resume Builder
          </Link>
          <Link 
            to="https://blog.abroadium.com/category/candidate-resources/" 
            className={`mb-2 px-2 py-2 rounded-md ${activeTab === 'https://blog.abroadium.com/category/candidate-resources/' ? 'bg-slate-900 text-white' : 'bg-slate-700 text-white'}`}
            onClick={() => handleTabClick('https://blog.abroadium.com/category/candidate-resources/')}
          >
            <i className="fa-solid fa-paper-plane p-3 text-purple-500"></i>Resources
          </Link>
          <Link 
            to="/skilltest" 
            className={`mb-2 px-2 py-2 rounded-md ${activeTab === '/skilltest' ? 'bg-slate-900 text-white' : 'bg-slate-700 text-white'}`}
            onClick={() => handleTabClick('/skilltest')}
          >
            <i className="fa-solid fa-paper-plane p-3 text-purple-500"></i>Skill Test
          </Link>
          <Link 
            to="/" 
            className={`mb-2 px-2 py-2 rounded-md ${activeTab === '/' ? 'bg-slate-900 text-white' : 'bg-slate-800 text-gray-400'}`}
            onClick={() => handleTabClick('/')}
          >
            <i className="fa-solid fa-user p-3 text-purple-500"></i>Feed
          </Link>
          <Link 
            to="/" 
            className={`mb-2 px-2 py-2 rounded-md ${activeTab === '/' ? 'bg-slate-900 text-white' : 'bg-slate-800 text-gray-400'}`}
            onClick={() => handleTabClick('/')}
          >
            <i className="fa-solid fa-book-open-reader p-3 text-purple-500"></i>About
          </Link>
          <Link 
            to="/" 
            className={`mb-2 px-2 py-2 rounded-md ${activeTab === '/' ? 'bg-slate-900 text-white' : 'bg-slate-800 text-gray-400'}`}
            onClick={() => handleTabClick('/')}
          >
            <i className="fa-solid fa-file p-3 text-purple-500"></i>Education
          </Link>
          <Link 
            to="/" 
            className={`mb-2 px-2 py-2 rounded-md ${activeTab === '/' ? 'bg-slate-900 text-white' : 'bg-slate-800 text-gray-400'}`}
            onClick={() => handleTabClick('/')}
          >
            <i className="fa-solid fa-pen p-3 text-purple-500"></i>Projects
          </Link>
          <Link 
            to="/" 
            className={`mb-2 px-2 py-2 rounded-md ${activeTab === '/' ? 'bg-slate-900 text-white' : 'bg-slate-700 text-gray-400'}`}
            onClick={() => handleTabClick('/')}
          >
            <i className="fa-solid fa-gear p-3 text-purple-500"></i>Settings
          </Link>
          <Link 
            to="/" 
            className={`mb-2 px-2 py-2 rounded-md ${activeTab === '/' ? 'bg-slate-900 text-white' : 'bg-slate-700 text-gray-400'}`}
            onClick={() => handleTabClick('/')}
          >
            <i className="fa-solid fa-right-to-bracket p-3 text-purple-500"></i>Log Out
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Left;
