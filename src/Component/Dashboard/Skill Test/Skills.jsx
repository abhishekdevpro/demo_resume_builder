//  import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Skills = () => {
//   const [skills, setSkills] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [tokenError, setTokenError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       setTokenError('Please log in first.');
//       setLoading(false);
//       return;
//     }

//     axios.get('https://api.sentryspot.co.uk/api/jobseeker/user-skills', {
//       headers: {
//         'Authorization': `${token}`
//       }
//     })
//       .then(response => {
//         if (Array.isArray(response.data.data)) {
//           setSkills(response.data.data);
//         } else {
//           throw new Error('API response is not an array');
//         }
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error("There was an error fetching the skills data!", error.response ? error.response.data : error.message);
//         if (error.response && error.response.status === 401) {
//           setTokenError('Unauthorized access. Please log in again.');
//         } else {
//           setError(error);
//         }
//         setLoading(false);
//       });
//   }, []);

//   const handleTakeTest = (skillId, skillName) => {
//     navigate(`/testpaper/${skillId}/${encodeURIComponent(skillName)}`);
//   };

//   if (loading) {
//     return <div className='py-32 font-semibold px-7'>Loading...</div>;
//   }

//   if (tokenError) {
//     return <div>{tokenError}</div>;
//   }

//   if (error) {
//     return <div className='py-16 px-5'>Error loading skills data. Please try again later.</div>;
//   }

//   return (
//     <div className="py-16 bg-gray-700">
//       <h1 className="text-3xl text-center md:text-5xl font-bold text-white p-3">Take Skill Assessment</h1>
//       <div className="flex flex-wrap gap-7 px-5 py-5">
//         {skills.map((skill, index) => (
//           <div key={index} className="bg-slate-700 rounded-xl shadow-2xl border-2 border-slate-600 px-5 py-4">
//             <h3 className='text-3xl text-white font-semibold py-3'>{skill.name}</h3>
//             <p className='text-left text-white py-1'>Total Questions: {skill.total_question}</p>
//             <p className='text-left text-white py-1'>Right Answers: {skill.right_answer}</p>
//             <p className='text-left text-white py-1'>Wrong Answers: {skill.wrong_answer}</p>
//             <p className='text-left text-white py-1'>Percentage: {skill.Percentage}</p>
//             <div className='flex justify-center py-6'>
//               <button
//                 onClick={() => handleTakeTest(skill.id, skill.name)}
//                 className="px-2 py-2 rounded-xl shadow-xl bg-gray-400 text-black font-semibold"
//               >
//                 Take Test
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Skills;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tokenError, setTokenError] = useState(null);
  const [showInstructions, setShowInstructions] = useState(false); // State for modal visibility
  const [selectedSkill, setSelectedSkill] = useState(null); // State to store selected skill details
  const navigate = useNavigate();
  const location = useLocation();
  const result = location.state?.result;

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      setTokenError('Please log in first.');
      setLoading(false);
      return;
    }

    axios
      .get('https://api.sentryspot.co.uk/api/jobseeker/user-skills', {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((response) => {
        if (Array.isArray(response.data.data)) {
          setSkills(response.data.data);
        } else {
          throw new Error('API response is not an array');
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error(
          'There was an error fetching the skills data!',
          error.response ? error.response.data : error.message
        );
        if (error.response && error.response.status === 401) {
          setTokenError('Unauthorized access. Please log in again.');
        } else {
          setError(error);
        }
        setLoading(false);
      });
  }, []);

  const handleTakeTest = (skillId, skillName) => {
    setSelectedSkill({ id: skillId, name: skillName }); // Store selected skill details
    setShowInstructions(true); // Show instructions modal
  };

  const proceedToTest = () => {
    if (selectedSkill) {
      setShowInstructions(false); // Hide instructions modal
      navigate(`/testpaper/${selectedSkill.id}/${encodeURIComponent(selectedSkill.name)}`);
    }
  };

  const closeInstructions = () => {
    setShowInstructions(false); // Close instructions modal
  };

  if (loading) {
    return <div className="py-32 font-semibold px-7">Loading...</div>;
  }

  if (tokenError) {
    return <div>{tokenError}</div>;
  }

  if (error) {
    return <div className="py-16 px-5">Error loading skills data. Please try again later.</div>;
  }

  return (
    <div className="py-16 bg-gray-700 w-full">
      <h1 className="text-3xl text-center md:text-5xl font-bold text-white p-3">Take Skill Assessment</h1>
      <div className="grid grid-cols-2 gap-4 px-5 py-5 text-center">
  {skills.map((skill, index) => (
    <div key={index} className="bg-slate-700 rounded-xl shadow-2xl border-2 border-slate-600 px-5 py-4 text-center">
      <h3 className="text-3xl text-white font-semibold py-3">{skill.name}</h3>
      <p className="text-center text-white py-1">Total Questions: {skill.total_question}</p>
      <p className="text-center text-white py-1">Right Answers: {skill.right_answer}</p>
      <p className="text-center text-white py-1">Wrong Answers: {skill.wrong_answer}</p>
      <p className="text-center text-white py-1">Percentage: {skill.Percentage}</p>
      <div className="flex justify-center py-6">
        <button
          onClick={() => handleTakeTest(skill.id, skill.name)}
          className="px-16 py-2 rounded-xl shadow-xl bg-gray-400 text-black font-semibold"
        >
          Take Test
        </button>
      </div>
    </div>
  ))}
  {result && (
    <div className="bg-slate-700 rounded-xl shadow-2xl border-2 border-slate-600 px-5 py-4 text-center">
      <h3 className="text-2xl text-white font-semibold py-3">{result.skillName}</h3>
      <p className="text-left text-white py-1">Total Questions: {result.totalQuestions}</p>
      <p className="text-left text-white py-1">Right Answers: {result.rightAnswers}</p>
      <p className="text-left text-white py-1">Wrong Answers: {result.wrongAnswers}</p>
      <p className="text-left text-white py-1">Percentage: {result.percentage}%</p>
    </div>
  )}
</div>



      {/* Modal for instructions */}
      {showInstructions && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg text-center relative">
            <button
              onClick={closeInstructions}
              className="absolute top-0 right-0 m-4 text-red-600 hover:text-red-800 font-semibold"
            >
              close
            </button>
            <h2 className="text-2xl font-bold mb-3">Instructions</h2>
            <p className="text-lg mb-3 text-start">
              <strong>Following instructions are common for all job seekers.</strong><br/><br/>
              1. The duration of the test is 10 minutes*. Your answer gets automatically submitted after 10 minutes*.<br/>
              2. This test consists of 15* multiple - choice questions.<br/>
              3. You may attempt the questions in any order.<br/>
              4. Please select the correct answer and click the "Save and next" button.<br/>
              5. Please click skip if you wish to skip a question. You may come back and answer the question later.<br/>
              6. Please click on the Submit Assessment button after answering all the questions.<br/>
              7. Do not close the window before submitting the test.<br/>
              8. Tests will be automatically submitted after the given time limit.<br/>
            </p>
            <button
              onClick={proceedToTest}
              className="bg-gray-400 text-black px-4 py-2 rounded-xl shadow-xl font-semibold"
            >
              Proceed to Test
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;
