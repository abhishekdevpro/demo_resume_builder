import React, { useState } from 'react';
import axios from 'axios';
import logo from '../../Component/Footer/logoss.jpg';
import './Home.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [accuracyPercentage, setAccuracyPercentage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setLoading1] = useState(false);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');
  const handleClick = async () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setLoading1(true);
      try {
        const token = localStorage.getItem('token');
        const requestBody = {
          keyword: "Rate this resume content in percentage ? and checklist of scope improvements in manner of content and informations",
          file_location: "/etc/ai_job_portal/jobseeker/resume_uploads/black-and-white-standard-professional-resume-1719321080.pdf"
        };
  
        const response = await axios.post(
          'https://api.sentryspot.co.uk/api/jobseeker/file-based-ai',
          requestBody,
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': token
            }
          }
        );
  
        const { improvement_suggestions } = response.data.data;
        console.log(improvement_suggestions); // Check the value of improvement_suggestions
  
        setSuggestions(improvement_suggestions);
      } catch (error) {
        console.error('Error fetching data from API', error);
        setError('Failed to fetch suggestions. Please try again.');
      } finally {
        setLoading1(false);
      }
    }
  };
  

  const resumeScore = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const requestBody = {
        keyword: "Rate this resume content in percentage ? and checklist of scope improvements in manner of content and informations",
        file_location: "/etc/ai_job_portal/jobseeker/resume_uploads/black-and-white-standard-professional-resume-1719321080.pdf"
      };

      const response = await axios.post(
        'https://api.sentryspot.co.uk/api/jobseeker/file-based-ai',
        requestBody,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token
          }
        }
      );

      const { content_acuracy_percentage } = response.data.data;
      setAccuracyPercentage(content_acuracy_percentage);
    } catch (error) {
      console.error('Error fetching data from API', error);
      setError('Failed to fetch resume score. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopySuggestions = () => {
    suggestions.forEach(suggestion => {
      navigator.clipboard.writeText(suggestion);
    });
    alert('Suggestions copied to clipboard!');
  };

  return(
    <>
      <nav className="fixed z-50 min-w-full " id='bgnavbar'>
        <div className="px-4 bg-white">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="">
                <img src={logo} alt='logo' className='w-full h-14' />
              </Link>
            </div>
            <div className="flex items-center">
              <div className="hidden sm:flex">
                <Link to="/" className="text-gray-500 hover:text-blue-600 px-3 py-3 rounded-md text-lg font-semibold items-center"><i className="fa-solid fa-house"></i></Link>
                <Link to="/" className="text-gray-500 hover:text-blue-600 px-3 py-3 rounded-md text-lg font-semibold items-center">Plan - Free</Link>
                <Link to="/" className="text-gray-500 hover:text-blue-600 px-3 py-3 rounded-md text-lg font-semibold items-center">Jobs</Link>
                
                {loading ? (
                  <div className='text-gray-500 font-semibold px-3 py-3'>Loading...</div>
                ) : accuracyPercentage !== null ? (
                  <div className="api-data-container">
                    <p className='text-gray-500 font-semibold px-3 py-3'>AI Score: {accuracyPercentage}</p>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={resumeScore}
                    className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-lg font-semibold flex align-middle justify-center gap-1 items-center"
                  >
                    Resume Score
                  </button>
                )}
{console.log(suggestions)}
                <button className="text-gray-500 hover:text-blue-600 px-3 py-3 items-center rounded-md text-lg font-semibold" onClick={handleClick}>Suggest</button>
                {isOpen && (
                  <div className="absolute right-56 top-10 bg-gray-200 mt-2 py-2 w-64 shadow-lg rounded-md">
                    <p className="block px-4 py-2 text-gray-500 text-sm ">
                      {isLoading ? 'Loading...' : (
                        suggestions.map((suggestion, index) => (
                          <div key={index}>
                           <div className='mb-7'>
                           {suggestion}
                           
                           <button
                             className="text-white float-end text-xs px-2 py-1 mt- bg-violet-700 hover:bg-blue-600 rounded-md flex items-center gap-1"
                             onClick={() => {
                               navigator.clipboard.writeText(suggestion);
                               alert('Suggestion copied to clipboard!');
                             }}
                           >
                             <i className="fas fa-copy"></i> Copy
                           </button>
                           </div>
                            <hr className="my-1 border-gray-400" />
                          </div>
                        ))
                      )}
                    </p>
                  </div>
                )}

                <Link to="/" className="text-gray-500 hover:text-blue-600 px-3 py-3 items-center rounded-md text-lg font-semibold"><i className="fa-solid fa-message items-center text-purple-500"></i></Link>
                <Link to="/" target='_blank' className="text-gray-500 items-center hover:text-blue-600 px-3 py-2 rounded-md text-lg font-semibold"><i className="fa-solid fa-envelope p-2 items-center text-purple-500"></i>200 Coins</Link>
                <Link to="/" className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-lg font-semibold"><i className="fa-solid fa-bell text-purple-500"></i></Link>
                <Link to="/" className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-lg font-semibold"><i className="fa-solid fa-user text-purple-500"></i></Link>
              </div>
              <div className="flex sm:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white hover:text-white focus:outline-none px-3 py-2 rounded-md text-sm font-medium"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {isMenuOpen && (
            <div className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link to="/" className="text-white hover:text-blue-600 block px-3 py-2 rounded-md text-base font-semibold">Home</Link>
                <Link to="/" className="text-white hover:text-blue-600 block px-3 py-2 rounded-md text-base font-semibold">Plan-Free</Link>
                <Link to="/" className="text-white hover:text-blue-600 block px-3 py-2 rounded-md text-base font-semibold">Job</Link>
                <Link to="/" className="text-white hover:text-blue-600 block px-3 py-2 rounded-md text-base font-semibold">Resume Score</Link>
                
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
