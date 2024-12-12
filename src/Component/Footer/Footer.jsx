import React from 'react';
import './Footer.css';
import logo from './logoss.jpg'
import{Link} from 'react-router-dom'

const Footer = () => {
    return (
      <>
      <div className='  py-4  flex justify-center border-b-2'>
        <div className=' flex flex-col md:w-[40%] justify-center  px-2 py-10  gap-5 ' >
          <div className=' text-center text-blue-700 font-bold text-2xl'>Get Started with Demoname.com</div>
          <div className=' text-center text-lg'>Want to learn what "Demoname" can do for you? See for yourself with a free premium content on Verified Overseas Opportunity</div>
          <div className=' text-center'>
            <Link to='/'>
            <button className=' px-2 py-2 text-xl bg-blue-700 text-white rounded-lg font-bold border-2 hover:shadow-xl hover:shadow-pink-300' >Check it Out</button>
            </Link>    
          </div>
        </div>
      </div>
        <footer className="bg-gray-300 text-black py-8" >
            <div className="container mx-auto flex flex-col gap-7 justify-between px-6">
              <div className=' flex flex-wrap justify-between px-2 md:px-[65px]'>
                <div className=" md:w-auto mb-6 md:mb-0">
                    <img src={logo} className=' h-14 w-full'/>
                    <p className=' text-lg text-bold px-5'>Building Careers of Tomorrow</p>
                </div>
                <div className="w-full md:w-auto mb-6 md:mb-0">
                    <h2 className="text-lg font-semibold  text-blue-600">Get Our Weekly</h2>
                    <form className="flex flex-col md:flex-row gap-3">
                        <input type="email" placeholder="Type your email..." required className="p-2  rounded" />
                        <button type="submit" className="md:px-4 md:py-1 p-1 rounded-full bg-pink-600 text-white hover:shadow-xl hover:shadow-blue-500">Subscribe</button>
                    </form>
                </div>
                </div>
                <br/>
                <div className=' flex flex-wrap justify-around'>
                <div className="w-full md:w-auto mb-6 md:mb-0">
                    <h2 className="text-lg font-bold text-blue-700">Demoname</h2>
                    <ul>
                        <li><a href="#" className="hover:text-pink-500">About Us</a></li>
                        <li><a href="#" className="hover:text-pink-500">Careers</a></li>
                        <li><a href="#" className="hover:text-pink-500">Placement Support</a></li>
                        <li><a href="#" className="hover:text-pink-500">Demo Blog</a></li>
                        <li><a href="#" className="hover:text-pink-500">Demo Tutorials</a></li>
                        <li><a href="#" className="hover:text-pink-500">Resources</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-auto mb-6 md:mb-0">
                    <h2 className="text-lg font-bold text-blue-700">Support</h2>
                    <ul>
                        <li><a href="#" className="hover:text-pink-500">Contact</a></li>
                        <li><a href="#" className="hover:text-pink-500">Salary Tool</a></li>
                        <li><a href="#" className="hover:text-pink-500">Grievance Redressal</a></li>
                        <li><a href="#" className="hover:text-pink-500">Terms & Conditions</a></li>
                        <li><a href="#" className="hover:text-pink-500">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-auto mb-6 md:mb-0">
                    <h2 className="text-lg font-bold text-blue-700">Scope & Products</h2>
                    <ul>
                        <li><a href="#" className="hover:text-pink-500">Ai Resume Builder</a></li>
                        <li><a href="#" className="hover:text-pink-500">Ai Skill Tests</a></li>
                        <li><a href="#" className="hover:text-pink-500">Ai CV Parsing</a></li>
                        <li><a href="#" className="hover:text-pink-500">White Labelling</a></li>
                        <li><a href="#" className="hover:text-pink-500">Generative AI</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-auto mb-6 md:mb-0">
                    <h2 className="text-lg font-bold text-blue-700">Ai Resources</h2>
                    <ul>
                        <li><a href="#" className="hover:text-pink-500">Ai - Resume Accuracy</a></li>
                        <li><a href="#" className="hover:text-pink-500">Ai - Resume Enhancer</a></li>
                        <li><a href="#" className="hover:text-pink-500">Ai - Job Match & Apply</a></li>
                        <li><a href="#" className="hover:text-pink-500">Verified Jobs</a></li>
                        <li><a href="#" className="hover:text-pink-500">Verified Profiles</a></li>
                        <li><a href="#" className="hover:text-pink-500">& Much More</a></li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="container text-base md:mx-auto text-center border-t border-white pt-6 mt-6">
                <p className="text-black text-center md:text-right">&copy; Copyright By Demoname.com All Rights Reserved</p>
            </div>
        </footer>
        </>
    );
}

export default Footer;
