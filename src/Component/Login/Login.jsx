// // import React from "react";
// // import { Link } from "react-router-dom";
// // import "./Login.css";
// // import logo from './Logo1.png';
// // import { useState, useContext } from "react";
// // import Modal from "./Modal";
// // import Third_step from './Third_step'
// // import Signup from "./Signup";
// // import { useNavigate } from "react-router-dom";
// // import toast from 'react-hot-toast';
// // import axios from "axios";


// // function Login() {
// //     const [isthirdstepOpen, setThirdstepOpen] = useState(false);
// //     const [formData, setFormData] = useState({
// //       email: "",
// //       password: ""
// //     });
// //     const navigate = useNavigate();
// //     const handleInputChange = (e) => {
// //       const { name, value } = e.target;
// //       setFormData({ ...formData, [name]: value });
// //     };
// //     const handleLogin = async (e) => {
// //       e.preventDefault();
// //       const url = 'https://api.sentryspot.co.uk/api/jobseeker/auth/login';
// //       console.log(url);
// //       if (!formData.email || !formData.password) {
// //         toast.error("Email and Password are required");
// //       } else {
// //         try {
// //           const response = await axios.post(
// //             url,
            
// //             formData,
// //             {
// //               // withCredentials: true,
// //               headers: {
// //                 'Content-Type': 'application/json',
// //               },
// //             }
// //           );
// //           if (response.status === 200) {
// //             toast.success("Logged-in successfully!");
// //             navigate('/');
// //           } else {
// //             toast.error("Failed to log in.");
// //           }
// //           console.log("login Response", response);
// //           const data = await response.json();
// //     localStorage.setItem("token", data.data.token);
// //         } catch (err) {
// //           console.log(err);
// //           toast.error(` ${err.response.data.message}`);
// //         }
// //       }
      
// //     };
// //   return (
// //     <>
// //     <div className="p-8 rounded-xl shadow-lg shadow-slate-700 w-full max-w-lg" >

// //         <div><img src= {logo} className=" w-20 h-10" /></div>
        
// //         <div className="text-2xl text-black text-center font-bold  align-middle">Welcome Back</div>
// //       <p className="text-black text-base mb-6">
// //         People across the globe are joining us to upgrade their career with our Robust AI.
// //       </p>
// //       <form onSubmit={handleLogin}>
// //         <div className="mb-4">
// //           <label className="block text-black">Email ID</label>
// //           <input
// //             type="email"
// //             name="email"
// //             value={formData.email}
// //             onChange={handleInputChange}
// //             className="w-full px-3 py-2 border rounded-md"
// //             placeholder="Enter your email ID"
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block text-black">Password</label>
// //           <input
// //             type="password"
// //             name="password"
// //             value={formData.password}
// //             onChange={handleInputChange}
// //             className="w-full px-3 py-2 border rounded-md"
// //             placeholder="Enter your password"
// //           />
// //         </div>
// //         {/* <Link to="/signup">
// //           <p className="text-blue-300 hover:text-yellow-300 text-center py-2">
// //             New User? Create Account
// //           </p>
// //         </Link> */}
// //         <button
// //         type='button'
// //           className="text-blue-300 hover:text-yellow-300 text-center py-2"
// //           onClick={() => setThirdstepOpen(true)}
// //         >
// //         New User? Create Account
// //         </button>
// //         <div className="text-center py-2">
// //           <label className="text-black">Forgot Password?</label>
// //         </div>
// //         <button type="submit" className="w-full bg-yellow-500 text-black px-4 py-2 rounded-md">
// //           Login
// //         </button>
            
// //             <Link to='https://dashboard-six-neon-28.vercel.app/' target='_blank'>
// //             <div  className="w-full font-bold text-center text-black px-4 py-2 rounded-md">
// //           View Dashboard
// //         </div>
// //             </Link>

// //         {/* <button
// //         type='button'
// //           className="bg-yellow-500 text-white px-4 m-3 py-2 rounded-md"
// //           onClick={() => setThirdstepOpen(true)}
// //         >
// //          Complete Your Profile
// //         </button> */}
// //       </form>
// //     </div>
// //     {/* <Modal isOpen={isthirdstepOpen} onClose={() => setThirdstepOpen(false)}>
// //         <Third_step />
// //       </Modal> */}
// //       <Modal isOpen={isthirdstepOpen} onClose={() => setThirdstepOpen(false)}>
// //         <Signup/>
// //       </Modal>
// //     </>
// //   );
// // }

// // export default Login;


// import  { useState } from "react";
// import {  useNavigate } from "react-router-dom";
// import "./Login.css";
// import logo from './Logo1.png';
// import Modal from "./Modal";
// // import Third_step from './Third_step';
// import Signup from "./Signup";
// import toast from 'react-hot-toast';
// import axios from "axios";

// function Login() {
//   const [isThirdstepOpen, setThirdstepOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: ""
//   });
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const url = 'https://api.sentryspot.co.uk/api/jobseeker/auth/login';

//     if (!formData.email || !formData.password) {
//       toast.error("Email and Password are required");
//     } else {
//       try {
//         const response = await axios.post(url, formData, {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });

//         if (response.status === 200) {
//           toast.success("Logged-in successfully!");
//           localStorage.setItem("token", response.data.data.token);
//           console.log("token: ", response.data.data.token);
//           navigate('/dashboard');
//           // navigate('https://dashboard-six-neon-28.vercel.app/');
//         } else {
//           toast.error("Failed to log in.");
//         }

//         console.log("login Response", response);
//       } catch (err) {
//         console.log(err);
//         toast.error(`${err.response.data.message}`);
//       }
//     }
//   };

//   return (
//     <>
//       <div className="p-8 rounded-xl shadow-lg shadow-slate-700 w-full max-w-lg">
//         <div>
//           <img src={logo} className="w-20 h-10" alt="Logo" />
//         </div>
//         <div className="text-2xl text-black text-center font-bold align-middle">Welcome Back</div>
//         <p className="text-black text-base mb-6">
//           People across the globe are joining us to upgrade their career with our Robust AI.
//         </p>
//         <form onSubmit={handleLogin}>
//           <div className="mb-4">
//             <label className="block text-black">Email ID</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border rounded-md"
//               placeholder="Enter your email ID"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-black">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border rounded-md"
//               placeholder="Enter your password"
//             />
//           </div>
//           <button
//             type="button"
//             className="text-blue-300 hover:text-yellow-300 text-center py-2"
//             onClick={() => setThirdstepOpen(true)}
//           >
//             New User? Create Account
//           </button>
//           <div className="text-center py-2">
//             <label className="text-black">Forgot Password?</label>
//           </div>
//           <button type="submit" className="w-full bg-yellow-500 text-black px-4 py-2 rounded-md">
//             Login
//           </button>
//           {/* <Link to='https://dashboard-six-neon-28.vercel.app/' target='_blank'>
//             <div className="w-full font-bold text-center text-black px-4 py-2 rounded-md">
//               View Dashboard
//             </div>
//           </Link> */}
//         </form>
//       </div>
//       <Modal isOpen={isThirdstepOpen} onClose={() => setThirdstepOpen(false)}>
//         <Signup />
//       </Modal>
//     </>
//   );
// }

// export default Login;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from '../../Component/Footer/logoss.jpg';
import Modal from "./Modal";
import Signup from "./Signup";
import toast from 'react-hot-toast';
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";

function Login() {
  const [isThirdstepOpen, setThirdstepOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const url = 'https://api.sentryspot.co.uk/api/jobseeker/auth/login';

    if (!formData.email || !formData.password) {
      toast.error("Email and Password are required");
    } else {
      try {
        const response = await axios.post(url, formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.status === 200) {
          toast.success("Logged-in successfully!");
          localStorage.setItem("token", response.data.data.token);
          console.log("token: ", response.data.data.token);
          navigate('/dashboard');
        } else {
          toast.error("Failed to log in.");
        }

        console.log("login Response", response);
      } catch (err) {
        console.log(err);
        toast.error(`${err.response.data.message}`);
      }
    }
  };

  return (
    <>
      <div className="p-8 rounded-xl shadow-lg shadow-slate-700 w-full max-w-lg">
        <div>
          <img src={logo} className="w-15 h-10" alt="Logo" />
        </div>
        <div className="text-2xl text-black text-center font-bold align-middle">Welcome Back</div>
        <p className="text-black text-base mb-6">
          People across the globe are joining us to upgrade their career with our Robust AI.
        </p>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-black">Email ID</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your email ID"
            />
          </div>
          <div className="mb-4">
            <label className="block text-black">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md pr-10"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
          <button
            type="button"
            className="text-blue-300 hover:text-yellow-300 text-center py-2"
            onClick={() => setThirdstepOpen(true)}
          >
            New User? Create Account
          </button>
          <div className="text-center py-2">
            <label className="text-black">Forgot Password?</label>
          </div>
          <button type="submit" className="w-full bg-pink-600 text-white px-4 py-2 rounded-md">
            Login
          </button>
        </form>
      </div>
      <Modal isOpen={isThirdstepOpen} onClose={() => setThirdstepOpen(false)}>
        <Signup />
      </Modal>
    </>
  );
}

export default Login;