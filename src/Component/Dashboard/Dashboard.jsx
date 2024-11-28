// import React from 'react';
// import SlidingCard from './Card'
// import Slidercomponent from './Slider'
import './Home.css'
import SlidingText from './Slidingtext';
import Home_Image from './Home_Image_dashboard';
import video from './video.mp4';
import image1 from './certificate.png'
// import Skills from './Skill Test/Skills';
import axios from 'axios';
import { useEffect,useState } from 'react';

const Dashboard = () => {   
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [tokenError, setTokenError] = useState(null);
    const result = location.state?.result;
    console.log(loading,error,tokenError,result);
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

  return (
  <>
     <div className=" min-h-screen w-screen md:w-11/12 bg-gray-900  py-12 text-white" id='bghome-dash'>  
     
      <main className=" p-4 md:px-10">
        <section>
        <SlidingText/>  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-xl bg-gray-800">
            <div className=" p-5 rounded">
                <div className=' text-center text-xl font-semibold my-1'>Resumes</div>
                <Home_Image/>
              {/* <img src="https://clearanceresume.ai/static/media/1.75ff0ba8c05a1fb690b3.png" alt="Resume 1" /> */}
            </div>
            <div className=" p-5 rounded">
            <div className=' text-center text-xl font-semibold my-2'>Introduction</div>
              <video src={video} alt="Resume 2" autoPlay loop 
                muted 
                playsInline className=' h-[300px] ' />
            </div>
            <div className=" p-5 rounded">
            <div className=' text-center text-xl font-semibold mb-4 mt-2'>Certification</div>
              <img src={image1} alt="Resume 3" className=' h-[282px]' />
            </div>
          </div>
        </section>
        
      </main>

        {/* <div>
            <Skills/>
        </div> */}
<div className="p-2 align-middle">
  <h1 className="font-bold text-3xl text-white text-center p-5">Verify Your Skills</h1>
  <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 items-center justify-center">
    {skills.map((skill, index) => (
      <div key={index} className="shadow-lg bg-gray-600 px-2 py-3 rounded-lg text-white text-center">
        <h3 className="text-center text font-semibold py-1">{skill.name}</h3>
        {skill.Percentage > 70 && (
          <div className="text-green-500 font-semibold py-1">
            Verified: Scored Above 70%
          </div>
        )}
      </div>
    ))}
  </div>
</div>






      <div className=' py-3 bg-gray-700'>
        
            <h1 className=' text-end px-5 ' id='group'><i className="fa-solid fa-circle-info"></i></h1>
            <div className='  text-gray-200 text-center font-semibold py-2' id='live'> Scheduled to be Live on 09 December 2024, Monday</div>
            <div className=' px-4 md:px-10 flex flex-wrap gap-3'>
            <div className=' border-2 border-gray-500 text-gray-500  w-[300px] flex flex-col gap-2 align-middle px-3 py-4 rounded-xl '>
                <div className=' flex flex-col gap-3 rounded-xl  bg-gray-700 px-3 py-4'>
                    <div className=' flex justify-between '>
                        <div className=' border-2 px-4 text-gray-500 py-1 rounded-full'>20 May</div>
                        <div className=' bg-white px-2 py-1 rounded-full  text-gray-500'><i className="fa-solid fa-arrow-down"></i></div>
                    </div>
                    <div>Amazon</div>
                    <div className=' font-bold text-gray-500 text-2xl'>Senior UI/UX Designer</div>
                    <div className=' flex gap-3'>
                        <div className=' border-2 border-gray-500 text-gray-500 rounded-md px-1 py-1'>Part Time</div>
                        <div className=' border-2 border-gray-500 text-gray-500 rounded-md px-1 py-1'>Senior Level</div>
                    </div>
                    <div className=' flex gap-3' >
                        <div className=' border-2 border-gray-500 text-gray-500  rounded-md px-1 py-1'>Distant</div>
                        <div className=' border-2 border-gray-500 text-gray-500 rounded-md px-1 py-1'>Project Work</div>
                    </div>
                </div>
                <div className=' flex justify-between '>
                    <div> $250/hr </div>
                    <div className=' border-2 px-2 py-2 bg-white border-gray-500 text-gray-500  rounded-2xl'><button>Details</button></div>
                </div>
            </div>
            <div className=' border-2 border-gray-500 text-gray-500  w-[300px] flex flex-col gap-2 align-middle  px-3 py-4 rounded-xl '>
                <div className=' flex flex-col gap-3 rounded-xl  bg-gray-700 px-3 py-4'>
                    <div className=' flex justify-between '>
                        <div className=' border-2 px-4 py-1 rounded-full text-gray-500'>20 May</div>
                        <div className=' bg-white px-2 py-1 rounded-full  text-gray-500'><i className="fa-solid fa-arrow-down"></i></div>
                    </div>
                    <div>Amazon</div>
                    <div className=' font-bold text-2xl text-gray-500'>Senior UI/UX Designer</div>
                    <div className=' flex gap-3'>
                        <div className=' border-2 rounded-md text-gray-500 px-1 py-1'>Part Time</div>
                        <div className=' border-2 rounded-md text-gray-500 px-1 py-1'>Senior Level</div>
                    </div>
                    <div className=' flex gap-3' >
                        <div className=' border-2 rounded-md text-gray-500 px-1 py-1'>Distant</div>
                        <div className=' border-2 rounded-md text-gray-500 px-1 py-1'>Project Work</div>
                    </div>
                </div>
                <div className=' flex justify-between '>
                    <div> $250/hr </div>
                    <div className=' border-2 px-2 py-2 bg-white  text-gray-500 rounded-2xl' ><button>Details</button></div>
                </div>
            </div>
            <div className='  border-2 border-gray-500 text-gray-500 w-[300px] flex flex-col gap-2 align-middle  px-3 py-4 rounded-xl '>
                <div className=' flex flex-col gap-3 rounded-xl  bg-gray-700 px-3 py-4'>
                    <div className=' flex justify-between '>
                        <div className=' border-2 px-4 py-1 text-gray-500 rounded-full'>20 May</div>
                        <div className=' bg-white px-2 py-1 text-gray-500 rounded-full '><i className="fa-solid fa-arrow-down"></i></div>
                    </div>
                    <div>Amazon</div>
                    <div className=' font-bold text-gray-500 text-2xl'>Senior UI/UX Designer</div>
                    <div className=' flex gap-3'>
                        <div className=' border-2 rounded-md text-gray-500 px-1 py-1'>Part Time</div>
                        <div className=' border-2 rounded-md text-gray-500 px-1 py-1'>Senior Level</div>
                    </div>
                    <div className=' flex gap-3' >
                        <div className=' border-2 rounded-md text-gray-500 px-1 py-1'>Distant</div>
                        <div className=' border-2 rounded-md text-gray-500 px-1 py-1'>Project Work</div>
                    </div>
                </div>
                <div className=' flex justify-between '>
                    <div> $250/hr </div>
                    <div className=' border-2 px-2 py-2 bg-white text-gray-500  rounded-2xl'><button>Details</button></div>
                </div>
            </div>
        </div>
      </div>
      
      {/* <div className=' px-3 py-5'>
        <div className=' flex gap-5 flex-wrap justify-center'>
            <div className=' flex flex-col gap-4 '>
                <div className=' border-2 px-2 py-2 text-2xl font-bold'>LINKEDIN - LINK - VERIFIED - LAST VERIFY DATE - COIN</div>
                <div className=' border-2 px-2 py-2 text-2xl font-bold'>Google - LINK - VERIFIED - LAST VERIFY DATE - COIN</div>
            </div>
            <div className=' border-2 flex flex-col px-6 py-6 items-center'>
                <div>LinkedIn</div>
                <div>Google</div>
            </div>
        </div>
      </div> */}
      
    </div>
  </>
  );
}

export default Dashboard;
