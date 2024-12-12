// import React from 'react'
import './Home.css'
import Home_Second from './Home_Second'
// import ImageSlider from './Image_slider'
import Home_Image from './Home_Image'
// import Slider from './Slider'
import Slider_details from './Slider_details'
import { Link, useNavigate } from 'react-router-dom'
import Modal from '../Login/Modal'
import Signup from '../Login/Signup'
import { useState } from 'react'
import toast from 'react-hot-toast'

function Home_first() {
  const token=localStorage.getItem('token')
  const [isSignupOpen, setSignupOpen] = useState(false);
  
  const handleSignup=()=>{
    if(token){
      toast.success("Already signed up")
    }
    else 
    setSignupOpen(true);
  }
  const handleBuildResume=()=>{
    if(token){
      window.location.href=`https://demo-resume-builder-dev-fe.vercel.app/builder?token=${token}`
    }
    else
    toast.success("Please Login first!")
  }

  return (
    <>
      <div className=' bg-gray-100'>
        <div className=' py-9 px-5 flex gap-3 md:gap-10 md:justify-evenly items-center flex-col md:flex-row'>
            <div className='  px-3 py-3 md:w-[500px]'>
                <div className=' flex flex-col gap-4 '>
                    <div className=' font-extrabold text-5xl font-sans'>"Demoname" AI Powered Resume Tool, Is Live NOW</div>
                    <div className=' text-lg font-medium text-slate-700'>Resume Score, Enhanced Resume & much more. Now Apply Job with confidence with our all in one solution under one roof.</div>
                    <div className=' flex flex-wrap gap-4'>
                        <Link >
                        <button className='  px-6 py-2 text-lg text-white bg-blue-700 rounded-full font-bold hover:shadow-2xl hover:shadow-slate-500'
                        onClick={() => handleSignup()}
                        > Sign Up! Its 100% Free!</button>
                        </Link>
                        <Link 
                        // to={token?(`https://demo-resume-builder-dev-fe.vercel.app/builder?token=${token}`):("")}
                        >
                        <button 
                        onClick={()=>handleBuildResume()}
                        className=' text-white bg-pink-600 text-lg px-6 py-2 rounded-full  font-bold hover:shadow-2xl hover:shadow-slate-500 ' > Build your Resume</button>
                        </Link>
                    </div>
                    {/* <div className=' flex flex-wrap'>EXCELLENT <img src='https://www.resume-now.com/sapp/themes/resumenow/img/stars-4.5.svg' className=' h-6 w-16'/> rating 9212 reviews on <img src='https://www.resume-now.com/sapp/themes/resumenow/img/trustpilot-black.png' className=' h-6 w-16'/></div> */}
                    <div className=' font-bold text-base'>
                    <i className="fa-solid fa-star text-yellow-500"></i> <i className="fa-solid fa-star text-yellow-500"></i> <i className="fa-solid fa-star text-yellow-500"></i> <i className="fa-solid fa-star text-yellow-500"></i> <i className="fa-solid fa-star text-yellow-500"></i> Reviews Certified by Recruiters & Admired by Jobseekers
                    </div>
                    <div className=' flex items-center align-middle '>
                      <div className=' text-lg font-bold'>As Featured on</div>
                      <div><img src='https://png.pngtree.com/png-clipart/20190613/original/pngtree-linked-in-icon-png-image_3584856.jpg' className=' h-24 w-24'/></div>
                      {/* <div><img src='https://logowik.com/content/uploads/images/usa-today.jpg' className=' h-24 w-24'/></div> */}
                      <div><img src='https://parspng.com/wp-content/uploads/2021/09/instagram-7.png' className=' h-16 w-full'/></div>
                    </div>
                    {/* <img src='https://www.resume-now.com/sapp/themes/resumenow/img/exp/rs-brands-d.png' className=' h-7 md:h-10 rounded-xl'/> */}
                </div>
            </div>
            <div className='  px-6 py-3' id='bghome'>
              <Home_Image/>
                {/* <img src='https://www.resume-now.com/sapp/uploads/2023/11/resume-example-senior-financial-analyst.svg' className=' h-96 w-full rounded-lg '/> */}
            </div>
        </div>
      </div>

      <Slider_details/>
     
      <Home_Second/>
      <Modal isOpen={isSignupOpen} onClose={() => setSignupOpen(false)}>
        <Signup />
      </Modal>
    </>
  )
}

export default Home_first
