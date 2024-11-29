import  { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Modal from './Modal';

function AIResume() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [accuracyPercentage, setAccuracyPercentage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isOpeen, setIsOpeen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setLoading1] = useState(false);
  const [error, setError] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [editableResumeName, setEditableResumeName] = useState('Resume1');
  const [note, setNote] = useState('');
  const [hasLink, setHasLink] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const token= localStorage.getItem('token')

  const handleNoteChange = (e) => {
    const value = e.target.value;
    setNote(value);

    const linkPattern = /(https?:\/\/[^\s]+)/g;
    setHasLink(linkPattern.test(value));
  };

  const handleClick2 = async () => {
    setIsOpeen(!isOpeen);
    if (!isOpeen) {
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
        setIsModalOpen(true);
      } catch (error) {
        console.error('Error fetching data from API', error);
        setError('Failed to fetch suggestions. Please try again.');
      } finally {
        setLoading1(false);
      }
    }
  };

  const handleClick = async () => {
    const token = localStorage.getItem('token'); // Adjust according to your token storage method
    console.log("token",token);
    if (!token) {
      setError('User not logged in');
      return;
    }

    setIsOpen(!isOpen);

    if (!isOpen) {
      setLoading1(true);
      try {
        const response = await axios.post('https://api.sentryspot.co.uk/api/jobseeker/resume-improved', {
          headers: {
            Authorization: `${token}`,
          },
        });
        setData(response.data);
        console.log("response", response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading1(false);
      }
    }
  };

  const resumeScore = async () => {
    try {
      setLoading(true); // Set loading to true when the API call starts
      const token = localStorage.getItem('token'); // Retrieve the token from local storage
      const requestBody = {
        keyword: "Rate this resume content in percentage ? and checklist of scope improvements in manner of content and informations",
        file_location: "/etc/ai_job_portal/jobseeker/resume_uploads/black-and-white-standard-professional-resume-1719321080.pdf"
      };

      const response = await axios.post(
        'https://api.sentryspot.co.uk/api/jobseeker/file-based-ai',
        requestBody,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      // Extract only the content_acuracy_percentage from the response
      const { content_acuracy_percentage } = response.data.data;
      setAccuracyPercentage(content_acuracy_percentage);
    } catch (error) {
      console.error('Error fetching data from API', error);
      // Add user-friendly error handling or notifications here
    } finally {
      setLoading(false); // Set loading to false when the API call completes
    }
  };

  return (
    <>
      <div className='bg-gray-400 w-full px-5'>
        <div className='mt-20'>
          <div className='flex items-center md:gap-10'>
            <h1 className='font-bold text-4xl py-8 text-black'>Resume Builder</h1>
            <Link to={`https://abroadium-arbuild-dev-fe.vercel.app/?${token}`}>
              <div className='flex justify-center mt-2'>
                <button className='px-3 py-3 font-bold rounded-xl bg-slate-300 text-black'>Build your Resume Now</button>
              </div>
            </Link>
          </div>

          <table className='border-2 border-white w-full text-white  text-lg'>
            <thead>
              <tr className='border-2 border-white'>
                <th className='border-2 border-white px-2 py-1'>Resume</th>
                <th className='border-2 border-white px-2 py-1'>Score</th>
                <th className='border-2 border-white px-2 py-1'>Suggest</th>
                <th className='border-2 border-white px-2 py-1'>AI Improve</th>
                
                <th className='border-2 border-white px-2 py-1'>Created</th>
                <th className='border-2 border-white px-2 py-1'>Actions</th>
                <th className='border-2 border-white px-2 py-1'>Add JD Link</th>
                <th className='border-2 border-white px-2 py-1'>Match %</th>
              </tr>
            </thead>
            <tbody >
              <tr className='border-2 border-white'>
                <td className='border-2 border-white text-center w-2'>
                  <input
                    type='text'
                    value={editableResumeName}
                    onChange={(e) => setEditableResumeName(e.target.value)}
                    className='bg-gray-800 text-white text-center px-1 py-1 rounded-md w-32'
                  />
                </td>
                <td className='border-2 border-white px-4'>
                  {loading ? (
                    <div className='text-white font-semibold px-3 py-3'>Loading...</div> // Display loading indicator
                  ) : accuracyPercentage !== null ? (
                    <div className='api-data-container'>
                      <p className='text-white font-semibold px-3 py-3'>AI Score: {accuracyPercentage}</p>
                    </div>
                  ) : (
                    <button
                      type='button'
                      // onClick={resumeScore}
                      className='text-white hover:text-violet-950 px-1 py-1 bg-yellow-500 rounded-md text-lg font-semibold flex align-middle justify-center  items-center'
                    >
                      Score
                    </button>
                  )}
                </td>

                <td className='border-2 border-white px-4'>
                  <button className="text-white bg-yellow-500 px-1 py-1 items-center rounded-md text-lg font-semibold" onClick={handleClick2}>Suggest</button>
                </td>

                <td className='border-2 border-white px-4 text-center'>
                  <div className='relative'>
                    <div
                      className='text-white hover:text-black px-2 py-1 items-center rounded-md text-base font-bold bg-yellow-500 cursor-pointer'
                      onClick={handleClick}
                    >
                      AI
                    </div>
                    {isOpen && (
                      <div className='absolute top-full mt-2 w-64 bg-white shadow-lg rounded-md p-4'>
                        {isLoading ? (
                          <div>Please wait for while...</div>
                        ) : error ? (
                          <div className='text-red-500'></div>
                        ) : (
                          <ul>
                            {Array.isArray(data) && data.length > 0 ? (
                              data.map((item, index) => (
                                <li key={index} className='py-1'>
                                  {item.name} {/* Adjust according to your data structure */}
                                </li>
                              ))
                            ) : (
                              <div>Please wait for while.....</div>
                            )}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>
                </td>
                
                <td className='border-2 border-white px-4'>02/07/2024</td>
                <td className='border-2 border-white px-2'>
                  <Link to='/uploadresume'>
                    <i className='fa-solid fa-upload px-1'></i>
                  </Link>
                  <Link to='/uploadresume'>
                    <i className='fa-solid fa-pen-to-square px-1'></i>
                  </Link>
                  
                  <button className='px-2 py-1 rounded-lg font-semibold bg-yellow-500'>View</button>
                </td>
                <td className='border-2 border-white px-2'>
                  <textarea
                    value={note}
                    onChange={handleNoteChange}
                    className='bg-gray-500 text-gray-500 px-2 py-1 rounded-md w-full'
                    rows='2'
                  />
                  {hasLink && (
                    <button className='bg-yellow-500 text-white px-2 py-1 rounded-md mt-2'>
                      Match
                    </button>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-lg font-bold mb-4">Improvement Suggestions</h2>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          suggestions.map((suggestion, index) => (
            <div key={index} className="mb-4">
              <p>{suggestion}</p>
              <button
                className="text-white float-end text-xs px-2 py-1 bg-green-700 hover:bg-blue-600 rounded-md flex items-center gap-1"
                onClick={() => {
                  navigator.clipboard.writeText(suggestion);
                  alert('Suggestion copied to clipboard!');
                }}
              >
                <i className="fas fa-copy"></i> Copy
              </button>
            </div>
          ))
        )}
      </Modal>
    </>
  );
}

export default AIResume;
