import React from 'react';
import './Footer.css';
import logo from './logo.png'
import{Link} from 'react-router-dom'

const Footer = () => {
    return (
      <>
      <div className='  py-4 flex justify-center border-b-2' id='footerbg'>
        <div className=' flex flex-col md:w-[40%] justify-center  px-2 py-10 text-white gap-5 ' >
          <div className=' text-center font-bold text-2xl'>Get Started with Abroadium.com</div>
          <div className=' text-center text-lg'>Want to learn what Abroadium can do for you? See for yourself with a free premium content on Verified Overseas Opportunity</div>
          <div className=' text-center'>
            <Link to='/'>
            <button className=' px-2 py-2 text-xl rounded-lg font-bold border-2 hover:shadow-xl hover:shadow-gray-800'id='footerbg' >Check it Out</button>
            </Link>    
          </div>
        </div>
      </div>
        <footer className="bg-purple-800 text-white py-8" id='footerbg'>
            <div className="container mx-auto flex flex-col gap-7 justify-between px-6">
              <div className=' flex flex-wrap justify-between px-2 md:px-[65px]'>
                <div className=" md:w-auto mb-6 md:mb-0">
                    <img src={logo} className=' h-14 w-full'/>
                    <p className=' text-lg text-bold px-5'>Building Careers of Tomorrow</p>
                </div>
                <div className="w-full md:w-auto mb-6 md:mb-0">
                    <h2 className="text-lg font-semibold text-white">Get Our Weekly</h2>
                    <form className="flex flex-col md:flex-row gap-3">
                        <input type="email" placeholder="Type your email..." required className="p-2  rounded" />
                        <button type="submit" className="md:px-4 md:py-1 p-1 rounded-full bg-white text-black hover:bg-orange-500">Subscribe</button>
                    </form>
                </div>
                </div>
                <br/>
                <div className=' flex flex-wrap justify-around'>
                <div className="w-full md:w-auto mb-6 md:mb-0">
                    <h2 className="text-lg font-bold text-white">Abroadium</h2>
                    <ul>
                        <li><a href="#" className="hover:text-orange-400">About Us</a></li>
                        <li><a href="#" className="hover:text-orange-400">Careers</a></li>
                        <li><a href="#" className="hover:text-orange-400">Placement Support</a></li>
                        <li><a href="#" className="hover:text-orange-400">Abroadium Blog</a></li>
                        <li><a href="#" className="hover:text-orange-400">Abroadium Tutorials</a></li>
                        <li><a href="#" className="hover:text-orange-400">Resources</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-auto mb-6 md:mb-0">
                    <h2 className="text-lg font-bold text-white">Support</h2>
                    <ul>
                        <li><a href="#" className="hover:text-orange-400">Contact</a></li>
                        <li><a href="#" className="hover:text-orange-400">Salary Tool</a></li>
                        <li><a href="#" className="hover:text-orange-400">Grievance Redressal</a></li>
                        <li><a href="#" className="hover:text-orange-400">Terms & Conditions</a></li>
                        <li><a href="#" className="hover:text-orange-400">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-auto mb-6 md:mb-0">
                    <h2 className="text-lg font-bold text-white">Scope & Products</h2>
                    <ul>
                        <li><a href="#" className="hover:text-orange-400">Ai Resume Builder</a></li>
                        <li><a href="#" className="hover:text-orange-400">Ai Skill Tests</a></li>
                        <li><a href="#" className="hover:text-orange-400">Ai CV Parsing</a></li>
                        <li><a href="#" className="hover:text-orange-400">White Labelling</a></li>
                        <li><a href="#" className="hover:text-orange-400">Generative AI</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-auto mb-6 md:mb-0">
                    <h2 className="text-lg font-bold text-white">Ai Resources</h2>
                    <ul>
                        <li><a href="#" className="hover:text-orange-400">Ai - Resume Accuracy</a></li>
                        <li><a href="#" className="hover:text-orange-400">Ai - Resume Enhancer</a></li>
                        <li><a href="#" className="hover:text-orange-400">Ai - Job Match & Apply</a></li>
                        <li><a href="#" className="hover:text-orange-400">Verified Jobs</a></li>
                        <li><a href="#" className="hover:text-orange-400">Verified Profiles</a></li>
                        <li><a href="#" className="hover:text-orange-400">& Much More</a></li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="container text-base md:mx-auto text-center border-t border-white pt-6 mt-6">
                <p className="text-white text-center md:text-right">&copy; Copyright By Abroadium.com All Rights Reserved</p>
            </div>
        </footer>
        </>
    );
}

export default Footer;
