// import React, { useState, useEffect } from 'react';
// import logo from './Logo1.png'
// import { useNavigate } from 'react-router-dom';
// import  toast  from 'react-hot-toast';
// import axios  from 'axios';
// function Signup() {

//   const [registerValues, setRegisterValues] = useState({
//     first_name: '',
//     last_name: '',
//     email: '',
//     phone: '',
//     password: '',
//   });
//    const navigate =useNavigate();
//    const [errors, setErrors] = useState({});

//    const handleRegisterChange = (e) => {
//     const { name, value } = e.target;
//     const parsedValue = ['country_id'].includes(name)
//       ? Number(value)
//       : value;
//     setRegisterValues({ ...registerValues, [name]: parsedValue });

//     // Perform validation on change
//     validateField(name, parsedValue);
//   };

//    const validateField = (name, value) => {
//     let error = '';

//     switch (name) {
//       case 'first_name':
//       case 'last_name':
//         if (value.length < 2 || value.length > 40) {
//           error = `${name.replace('_', ' ')} must be between 2 and 40 characters`;
//         }
//         break;
//       case 'password':
//         if (value.length < 6 || value.length > 12) {
//           error = 'Password must be between 6 and 12 characters';
//         }
//         break;
//       default:
//         break;
//     }

//     setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
//   };

//   // const handleSignup = async (e) => {
//   //   e.preventDefault();

//   //   // Check if there are any validation errors
//   //   if (Object.values(errors).some((error) => error)) {
//   //     toast.error('Please fix the errors before submitting');
//   //     return;
//   //   }

//   //   if (!registerValues.email || !registerValues.password) {
//   //     toast.error('Email and Password are required');
//   //     return;
//   //   }

//   //   const body = {
//   //     first_name: registerValues.first_name,
//   //     last_name: registerValues.last_name,
//   //     email: registerValues.email,
//   //     phone: registerValues.phone,
//   //     password: registerValues.password,
      
//   //   };

//   //   try {
//   //     console.log('Request Body:', body);
//   //     const response = await axios.post(
//   //       'http://abroadium.com/api/jobseeker/auth/signup',
//   //       body,
//   //       {
//   //         headers: {
//   //           'Content-Type': 'application/json',
//   //         },
//   //       }
//   //     );

//   //     console.log('Response:', response);

//   //     if (response.status === 200) {
//   //       toast.success('Signed up successfully!');
//   //       navigate('/login');
//   //     } else {
//   //       toast.error('Failed to sign up.');
//   //     }

      
//   //       navigate('/');
      
//   //   } catch (err) {
//   //     console.error('Error Response:', err.response); // Log the error response
//   //     if (err.response && err.response.data && err.response.data.message) {
//   //       toast.error(`Error: ${err.response.data.message}`);
//   //     } else {
//   //       toast.error('An error occurred. Please try again.');
//   //     }
//   //   }
//   // }; 


//   const handleSignup = async (e) => {
//     e.preventDefault();
  
//     // Check if there are any validation errors
//     if (Object.values(errors).some((error) => error)) {
//       toast.error('Please fix the errors before submitting');
//       return;
//     }
  
//     if (!registerValues.email || !registerValues.password) {
//       toast.error('Email and Password are required');
//       return;
//     }
  
//     const body = {
//       first_name: registerValues.first_name,
//       last_name: registerValues.last_name,
//       email: registerValues.email,
//       phone: registerValues.phone,
//       password: registerValues.password,
//     };
  
//     try {
//       console.log('Request Body:', body);
//       const response = await axios.post(
//         'https://api.sentryspot.co.uk/api/jobseeker/auth/signup',
//         body,
//         {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
//       );
  
//       console.log('Response:', response.data);
  
//       if (response.status === 200) {
//         toast.success('Signed up successfully! Login Now');
//         navigate('/');
//       } else {
//         toast.error('Failed to sign up.');
//       }
//     } catch (err) {
//       console.error('Error Response:', err.response); // Log the error response
//       if (err.response && err.response.data && err.response.data.message) {
//         if (err.response.data.message.includes('duplicate key value')) {
//           toast.error('An account with this email already exists.');
//         } else {
//           toast.error(`Error: ${err.response.data.message}`);
//         }
//         console.log("error",err.response.data.message); 
//       } 
//       else {
//         toast.error(`${err.response.data.message}`);
//       }
//     }
//   };
  

//   return (
//     <div >
//       <div className=' flex justify-end  py-2'>
        
//         <div className='p-8 rounded-xl shadow-lg shadow-slate-700 w-full max-w-lg' >
//         <div className=' flex '>
//         <div><img src={logo} className=' h-10 w-20'/></div>
        
//         </div>
//         <div className='text-2xl text-black text-center font-bold'>Let's Get Started</div>
//           <h3 className='text-xl text-black font-semibold py-5 text-center'>People across Globe are joining us to upgrade their career with our Robust AI</h3>
          

//           <form onSubmit={handleSignup}>
//             <div className=' flex justify-between gap-4'>
//             <div className='mb-4'>
//               <label className='block text-black'>First Name</label>
//               <input
//                 type='text'
//                 name='first_name'
//                 className='w-full px-3 py-2 border rounded-md'
//                 placeholder='Enter your First Name'
//                 value={registerValues.first_name}
//                 onChange={handleRegisterChange}
//                 required
//                 minLength={2}
//                 maxLength={40}
//               />
//               {errors.first_name && <p className="text-red-500 text-xs">{errors.first_name}</p>}
//             </div>
//             <div className='mb-4'>
//               <label className='block text-black'>Last Name</label>
//               <input
//                 type='text'
//                 name='last_name'
//                 value={registerValues.last_name}
//                 onChange={handleRegisterChange}
//                 className='w-full px-3 py-2 border rounded-md'
//                 placeholder='Enter your Last Name'
//                 required
//                 minLength={2}
//                 maxLength={40}
//               />
//               {errors.last_name && <p className="text-red-500 text-xs">{errors.last_name}</p>}
//             </div>
//             </div>
            
//             <div className=' flex justify-between gap-4'>
//             <div className='mb-4'>
//               <label className='block text-black'>Email ID</label>
//               <input
//                 type='email'
//                 name='email'
//                 value={registerValues.email}
//                 onChange={handleRegisterChange}
//                 className='w-full px-3 py-2 border rounded-md'
//                 placeholder='Enter your email ID'
//                 required
//               />
//               {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
//             </div>
//             <div className='mb-4'>
//               <label className='block text-black'>Password</label>
//               <input
//                 type='password'
//                 name='password'
//                 className='w-full px-3 py-2 border rounded-md'
//                 value={registerValues.password}
//                 onChange={handleRegisterChange}
//                 placeholder='Enter your password'
//                 required
//                 minLength={6}
//                 maxLength={12}
//               />
//               {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
//                 </div>
//             </div>
            
//             <div className=' flex flex-col justify-between gap-2'>
//             <div className='mb-4'>
//               <label className='block text-black'>Phone</label>
//               <input
//                 type='number'
//                 name='phone'
//                 value={registerValues.phone}
//                 onChange={handleRegisterChange}
//                 className='w-full px-3 py-2 border rounded-md'
//                 placeholder='Enter your number'
//               />
//               {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
//             </div>
            
//             {/* <div className='mb-4'>
//               <label className='block text-black'>Country</label>
//               <select
//                 name='country_id'
                
//                 className='w-full px-3 py-2 border rounded-md'
//               >
//                 <option value=''>Select Country</option>
                
//               </select>
              
//             </div> */}
//             </div>
//             {/* <div className='mb-4'>
//               <label className='block text-black'>State</label>
//               <select
//                 name='state_id'
//                 className='w-full px-3 py-2 border rounded-md'
//               >
//                 <option value=''>Select State</option>
                
//               </select>
//             </div>
//             <div className='mb-4'>
//               <label className='block text-black'>City</label>
//               <select
//                 name='city_id'
//                 value={registerValues.city_id}
//                 onChange={handleRegisterChange}
//                 className='w-full px-3 py-2 border rounded-md'
//               >
//                 <option value=''>Select City</option>
//                 {cities.map((city) => (
//                   <option key={city.id} value={city.id}>
//                     {city.name}
//                   </option>
//                 ))}
//               </select>
//               {errors.city_id && <p className="text-red-500 text-xs">{errors.city_id}</p>}
//             </div>
//             <div className='mb-4'>
//                 <label className='block text-black'>Qualification</label>
//                 <select
//                   name='qualification_id'
//                   value={registerValues.qualification_id}
//                   onChange={handleRegisterChange}
//                   className='w-full px-3 py-2 border rounded-md'
//                 >
//                   <option value=''>Select Qualification</option>
//                   {qualifications.map((qualification) => (
//                     <option key={qualification.id} value={qualification.id}>
//                       {qualification.name}
//                     </option>
//                   ))}
//                 </select>
//                 {errors.qualification_id && <p className="text-red-500 text-xs">{errors.qualification_id}</p>}
//               </div> */}
//             <p className=' text-base '>By registering, I am agreeing to theTerms and Conditions and Privacy Policy of this site.</p>
//             <button type='submit' className='w-full py-2 mt-2 px-4 bg-yellow-500 text-black font-semibold rounded-md'>
//               Sign Up
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;
import React, { useState } from 'react';
import logo from './Logo1.png';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import { Eye, EyeOff } from "lucide-react";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [registerValues, setRegisterValues] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: '',
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    const parsedValue = ['country_id'].includes(name)
      ? Number(value)
      : value;
    setRegisterValues({ ...registerValues, [name]: parsedValue });

    validateField(name, parsedValue);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'first_name':
      case 'last_name':
        if (value.length < 2 || value.length > 40) {
          error = `${name.replace('_', ' ')} must be between 2 and 40 characters`;
        }
        break;
      case 'password':
        if (value.length < 6 || value.length > 12) {
          error = 'Password must be between 6 and 12 characters';
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
  
    if (Object.values(errors).some((error) => error)) {
      toast.error('Please fix the errors before submitting');
      return;
    }
  
    if (!registerValues.email || !registerValues.password) {
      toast.error('Email and Password are required');
      return;
    }
  
    const body = {
      first_name: registerValues.first_name,
      last_name: registerValues.last_name,
      email: registerValues.email,
      phone: registerValues.phone,
      password: registerValues.password,
    };
  
    try {
      console.log('Request Body:', body);
      const response = await axios.post(
        'https://api.sentryspot.co.uk/api/jobseeker/auth/signup',
        body,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      console.log('Response:', response.data);
  
      if (response.status === 200) {
        toast.success('Signed up successfully! Login Now');
        navigate('/');
      } else {
        toast.error('Failed to sign up.');
      }
    } catch (err) {
      console.error('Error Response:', err.response);
      if (err.response && err.response.data && err.response.data.message) {
        if (err.response.data.message.includes('duplicate key value')) {
          toast.error('An account with this email already exists.');
        } else {
          toast.error(`Error: ${err.response.data.message}`);
        }
        console.log("error", err.response.data.message); 
      } else {
        toast.error(`${err.response.data.message}`);
      }
    }
  };

  return (
    <div>
      <div className='flex justify-end py-2'>
        <div className='p-8 rounded-xl shadow-lg shadow-slate-700 w-full max-w-lg'>
          <div className='flex'>
            <div><img src={logo} className='h-10 w-20' alt="Logo" /></div>
          </div>
          <div className='text-2xl text-black text-center font-bold'>Let's Get Started</div>
          <h3 className='text-xl text-black font-semibold py-5 text-center'>
            People across Globe are joining us to upgrade their career with our Robust AI
          </h3>

          <form onSubmit={handleSignup}>
            <div className='flex justify-between gap-4'>
              <div className='mb-4'>
                <label className='block text-black'>First Name</label>
                <input
                  type='text'
                  name='first_name'
                  className='w-full px-3 py-2 border rounded-md'
                  placeholder='Enter your First Name'
                  value={registerValues.first_name}
                  onChange={handleRegisterChange}
                  required
                  minLength={2}
                  maxLength={40}
                />
                {errors.first_name && <p className="text-red-500 text-xs">{errors.first_name}</p>}
              </div>
              <div className='mb-4'>
                <label className='block text-black'>Last Name</label>
                <input
                  type='text'
                  name='last_name'
                  value={registerValues.last_name}
                  onChange={handleRegisterChange}
                  className='w-full px-3 py-2 border rounded-md'
                  placeholder='Enter your Last Name'
                  required
                  minLength={2}
                  maxLength={40}
                />
                {errors.last_name && <p className="text-red-500 text-xs">{errors.last_name}</p>}
              </div>
            </div>
            
            <div className='flex justify-between gap-4'>
              <div className='mb-4'>
                <label className='block text-black'>Email ID</label>
                <input
                  type='email'
                  name='email'
                  value={registerValues.email}
                  onChange={handleRegisterChange}
                  className='w-full px-3 py-2 border rounded-md'
                  placeholder='Enter your email ID'
                  required
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
              </div>
              <div className='mb-4'>
                <label className='block text-black'>Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name='password'
                    className='w-full px-3 py-2 border rounded-md pr-10'
                    value={registerValues.password}
                    onChange={handleRegisterChange}
                    placeholder='Enter your password'
                    required
                    minLength={6}
                    maxLength={12}
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
                {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
              </div>
            </div>
            
            <div className='flex flex-col justify-between gap-2'>
              <div className='mb-4'>
                <label className='block text-black'>Phone</label>
                <input
                  type='number'
                  name='phone'
                  value={registerValues.phone}
                  onChange={handleRegisterChange}
                  className='w-full px-3 py-2 border rounded-md'
                  placeholder='Enter your number'
                />
                {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
              </div>
            </div>

            <p className='text-base'>
              By registering, I am agreeing to theTerms and Conditions and Privacy Policy of this site.
            </p>
            <button 
              type='submit' 
              className='w-full py-2 mt-2 px-4 bg-yellow-500 text-black font-semibold rounded-md'
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;