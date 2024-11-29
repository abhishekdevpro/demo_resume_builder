import React from "react";
import './Job.css'
import '../Home/Home.css'

const CourseDetail = ({ course }) => {
  if (course){console.log(course)}
  return (
    <>
    <div id="course">
    <h1 className=" text-3xl md:text-5xl font-bold px-5  py-5 text-center">Newest Strategies From Our Career Search Advisors</h1>
    <p className=" md:mx-auto px-2 text-lg text-slate-700 md:w-[800px]">You are never alone in your job search. Whether you’re writing a cover letter, preparing for the interview or negotiating your salary, our resource center has articles that will help you take the next step in your career.</p>
    
      <div className="px-5 md:px-52 py-9 bg-white text-black md:grid md:grid-cols-4 gap-2 ">
        
        {course.map((card, index) => (
          <div key={index}>
            
            <a href={card.link} target='_blank'>        
<div className="flex flex-col justify-evenly h-[250px] w-[260px] px-2 py-2 rounded-xl border-white shadow-md shadow-gray-400 card-container" >
  
  <img src={card.img} className="w-[300px] border-2 h-auto card-image rounded-md" alt="Course" />
  
  
  
  <h1 className="text-xl font-bold " id='jobcard'>{card.title}</h1>
  {/* <div className="flex gap-1 items-center">
    
    <p id='jobcard'>{card.name}</p>
  </div> */}
  
  
</div>

</a>
          </div>
        ))}
        
        
      </div>
      
      <div className=" flex justify-center py-5">
        <button className=" px-3 py-3  hover:bg-black font-semibold text-white border-2 rounded-xl text-center" id='home_third' >
            Get More Career Advice
        </button>
        </div>

        </div>
    </>
  );
};

export default CourseDetail;
