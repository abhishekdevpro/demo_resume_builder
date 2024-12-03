// import React, { useState, useContext, useEffect } from 'react';
// import logo from './logoss.jpg';
// import './Navbar.css';
// import '../Home/Home.css'
// import { Link, useNavigate } from 'react-router-dom';
// import Modal from '../Login/Modal';
// import Login from '../Login/Login'
// import Signup from '../Login/Signup';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   // const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [isLoginOpen, setLoginOpen] = useState(false);
//   const [issignupOpen, setsignupOpen] = useState(false);
  

//   return (
//     <>
//     <nav className="bg-white border-b border-gray-200" id='navbg'>
//       <div className=" mx-auto px-4 sm:px-6 lg:px-8 bg-white">
//         <div className="flex justify-between h-16 ">
//           <div className="flex-shrink-0 flex items-center">
//             <a to="/" className="">
//                 <img src={logo} alt='logo' className=' w-full h-14'/>
//             </a>
//           </div>
//           <div className="flex items-center">
//             {/* <div className="hidden sm:ml-6 sm:flex sm:space-x-8"> */}
//             <div className="sm:ml-6 sm:flex sm:space-x-8">
//               {/* <Link to="/slide/0" className="text-white hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold">Resume Score</Link> */}
//               <Link to="/slide/1" className="text-black hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold">AI Resume Builder</Link>
//               {/* <Link to="/slide/2" className="text-white hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold">AI Resume Fetch</Link> */}
//               <Link to="https://blog.abroadium.com/" className="text-black hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold">Resources</Link>
//               <Link to="https://blog.abroadium.com/about-us/" target='_blank' className="text-black hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold">About Us</Link>
//               {/* <Link to="/dashboard" target='_blank' className="text-white hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold">Doashboard</Link> */}
//               {/* <Link to="https://blog.abroadium.com/" target='_blank' className="text-white hover:text-yellow-500 px-3 py-2 rounded-md text-lg font-semibold">Blog</Link> */}
//               {/* <Link to="/login" className="text-white px-2 py-2 text-lg font-semibold  rounded-xl " id='home_fourth'>Log in</Link> */}
//               <button
//           className=" text-white font-semibold px-6 py-2 rounded-full"
//           onClick={() => setLoginOpen(true)}
//           // style={{backgroundColor:"#F2931C"}}
//           style={{backgroundColor:"#cc24c6"}}
//         >
//           Login
//         </button>
              
//               <button
//           className=" text-white font-semibold px-6 py-2 rounded-full"
//           onClick={() => setsignupOpen(true)}
//           style={{backgroundColor:"#cc24c6"}}
//         >
//           Signup
//         </button>
        
//             </div>
//              <div className="flex sm:hidden">
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="text-white hover:text-white focus:outline-none px-3 py-2 rounded-md text-sm font-medium"
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//                 </svg>
//               </button>
//             </div> 
            
//           </div>
//         </div>
//         {isMenuOpen && (
//           <div className="sm:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               <Link to="/" className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-semibold">Resume</Link>
//               <Link to="/" className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-semibold">CV</Link>
//               <Link to="/" className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-semibold">Cover Letter</Link>
//               <Link to="/" className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-semibold">Advice</Link>
//               <button
//           className=" text-white px-4 py-2 rounded-md"
//           onClick={() => setLoginOpen(true)}
//         >
//           Login
//         </button>
//               <Link to="/" className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-semibold">Contact Us</Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//     <Modal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)}>
//         <Login />
//       </Modal>
//       <Modal isOpen={issignupOpen} onClose={() => setsignupOpen(false)}>
//         <Signup />
//       </Modal>
//     </>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logoss.jpg';
import './Navbar.css';
import '../Home/Home.css';
import Modal from '../Login/Modal';
import Login from '../Login/Login';
import Signup from '../Login/Signup';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isSignupOpen, setSignupOpen] = useState(false);
  const token=localStorage.getItem('token')

  return (
    <>
      <nav className="bg-white border-b border-gray-200" >
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <img src={logo} alt="logo" className="w-auto h-14" />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              <Link 
              to={token?(`https://demo-resume-builder-dev-fe.vercel.app/builder?token=${token}`):""}
              
              className="text-black hover:text-blue-600  px-3 py-2 rounded-md text-lg font-semibold">AI Resume Builder</Link>
              <Link to="" className="text-black hover:text-blue-600 px-3 py-2 rounded-md text-lg font-semibold">Resources</Link>
              <Link to=""  className="text-black hover:text-blue-600 px-3 py-2 rounded-md text-lg font-semibold">About Us</Link>
              <button
                className="bg-blue-700 text-white hover:shadow-2xl hover:shadow-pink-800 font-semibold px-6 py-2 rounded-full"
                onClick={() => setLoginOpen(true)}
              >
                Login
              </button>
              <button
                className="bg-blue-700 text-white hover:shadow-2xl hover:shadow-pink-800 font-semibold px-6 py-2 rounded-full"
                onClick={() => setSignupOpen(true)}
              >
                Signup
              </button>
            </div>

            {/* Hamburger Icon for Mobile */}
            <div className="sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-2 bg-gray-50">
                <Link to={token?(`https://demo-resume-builder-dev-fe.vercel.app/builder?token=${token}`):""} className="block text-black hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">AI Resume Builder</Link>
                <Link to="" className="block text-black hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">Resources</Link>
                <Link to="" className="block text-black hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">About Us</Link>
                <button
                  className="w-full bg-blue-700 text-white font-medium px-4 py-2 rounded-md"
                  onClick={() => setLoginOpen(true)}
                >
                  Login
                </button>
                <button
                  className="w-full bg-blue-700 text-white font-medium px-4 py-2 rounded-md"
                  onClick={() => setSignupOpen(true)}
                >
                  Signup
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Modals for Login and Signup */}
      <Modal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)}>
        <Login />
      </Modal>
      <Modal isOpen={isSignupOpen} onClose={() => setSignupOpen(false)}>
        <Signup />
      </Modal>
    </>
  );
};

export default Navbar;
