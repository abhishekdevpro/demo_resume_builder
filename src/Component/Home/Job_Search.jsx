import React from 'react';
import Job_Search_Detail from './Job_Search_Detail';
import image from "./image.png"

function Course(props) {
  const course =[
    
    {
        img:{image},title:"Evolution of AI Resume Builders",
    },
    { img:{image},title:"AI Resume Builders for International Job Seekers",},
    { img:{image},title:"The Algorithms Behind the Buzz of AI Resume",},
    { img:{image},title:"The Future of AI in Talent Acquisition",},
    { img:{image},title:"My AI-Written Resume Got Me an Interview!",},
    { img:{image},title:"Using AI to Find the Right Skills for Your Resume",},
    { img:{image},title:"5 Ways AI Can Make Your Resume Stand Out",},
    { img:{image},title:"AI Resume Builders",},
    { img:{image},title:"Personal Branding in the Age of AI",},
    { img:{image},title:"Navigating AI-Powered Job Platforms",},
    { img:{image},title:"Rise of AI in Resume Writing",},
    { img:{image},title:"A Human-AI Collaboration",},
    { img:{image},title:"AI-Proof Your Resume",},
    { img:{image},title:"Beating the Applicant Tracking System",},
    { img:{image},title:"Mastering AI to Land Your Dream Job",},
    { img:{image},title:"AI Can Supercharge Your Resume",},
    // {
    //     img:"https://blog.abroadium.com/wp-content/uploads/2024/05/Orange-Dark-Simple-Grow-Your-Business-Facebook-Ads-2.jpg",title:"Evolution of AI Resume Builders",link:"https://blog.abroadium.com/evolution-of-ai-resume-builders/"
    // },
    // { img:"https://blog.abroadium.com/wp-content/uploads/2024/05/Orange-Dark-Simple-Grow-Your-Business-Facebook-Ads-1.jpg",title:"AI Resume Builders for International Job Seekers",link:"https://blog.abroadium.com/ai-resume-builders-for-international-job-seekers/"},
    // { img:"https://blog.abroadium.com/wp-content/uploads/2024/05/Orange-Dark-Simple-Grow-Your-Business-Facebook-Ads.jpg",title:"The Algorithms Behind the Buzz of AI Resume",link:"https://blog.abroadium.com/the-algorithms-behind-the-buzz-of-ai-resume/"},
    // { img:"https://blog.abroadium.com/wp-content/uploads/2024/05/Blue-Modern-Digital-Art-Marketplace-Promotion-Facebook-Ad-4.jpg",title:"The Future of AI in Talent Acquisition",link:"https://blog.abroadium.com/the-future-of-ai-in-talent-acquisition/"},
    // { img:"https://blog.abroadium.com/wp-content/uploads/2024/05/Blue-Modern-Digital-Art-Marketplace-Promotion-Facebook-Ad-3.jpg",title:"My AI-Written Resume Got Me an Interview!",link:"https://blog.abroadium.com/my-ai-written-resume-got-me-an-interview/"},
    // { img:"https://blog.abroadium.com/wp-content/uploads/2024/05/Blue-Modern-Digital-Art-Marketplace-Promotion-Facebook-Ad-2.jpg",title:"Using AI to Find the Right Skills for Your Resume",link:"https://blog.abroadium.com/using-ai-to-find-the-right-skills-for-your-resume/"},
    // { img:"https://blog.abroadium.com/wp-content/uploads/2024/05/Blue-Modern-Digital-Art-Marketplace-Promotion-Facebook-Ad-1.jpg",title:"5 Ways AI Can Make Your Resume Stand Out",link:"https://blog.abroadium.com/5-ways-ai-can-make-your-resume-stand-out/"},
    // { img:"https://blog.abroadium.com/wp-content/uploads/2024/05/Blue-Modern-Digital-Art-Marketplace-Promotion-Facebook-Ad.jpg",title:"AI Resume Builders",link:"https://blog.abroadium.com/ai-resume-builders/"},
    // { img:"https://blog.abroadium.com/wp-content/uploads/2024/04/The-Impact-of-AI-on-Personal-Branding-Abroadium.jpg",title:"Personal Branding in the Age of AI",link:"https://blog.abroadium.com/personal-branding-in-the-age-of-ai/"},
    // { img:"https://blog.abroadium.com/wp-content/uploads/2024/04/Understanding-AI-Powered-job-search-Abroadium.jpg",title:"Navigating AI-Powered Job Platforms",link:"https://blog.abroadium.com/navigating-ai-powered-job-platforms/"},
    // { img:"https://blog.abroadium.com/wp-content/uploads/2024/04/Understanding-AI-Powered-Resume-Tools-Abroadium.jpg",title:"Rise of AI in Resume Writing",link:"https://blog.abroadium.com/rise-of-ai-in-resume-writing/"},
    // { img:"https://blog.abroadium.com/wp-content/uploads/2024/04/Brown-Blue-Simple-Photo-Save-Time-with-AI-Youtube-Thumbnail.jpg",title:"A Human-AI Collaboration",link:"https://blog.abroadium.com/a-human-ai-collaboration/"},
    // { img:"https://blog.abroadium.com/wp-content/uploads/2024/04/Future-Proof-Your-Job-Search.jpg",title:"AI-Proof Your Resume",link:"https://blog.abroadium.com/3915/"},
    // { img:"https://blog.abroadium.com/wp-content/uploads/2024/04/Learn-strategies-to-get-your-resume-noticed-and-land-interviews.jpg",title:"Beating the Applicant Tracking System",link:"https://blog.abroadium.com/beating-the-applicant-tracking-system-ats-gatekeepers/"},
    // { img:"https://blog.abroadium.com/wp-content/uploads/2024/04/Leverage-AI-Skills-to-Achieve-Your-Dream-Job.jpg",title:"Mastering AI to Land Your Dream Job",link:"https://blog.abroadium.com/mastering-ai-to-land-your-dream-job/"},
    // { img:"https://blog.abroadium.com/wp-content/uploads/2024/04/Supercharge-Your-Career-with-AI.jpg",title:"AI Can Supercharge Your Resume",link:"https://blog.abroadium.com/ai-can-supercharge-your-resume/"},
    
    
  ];
  return (
    <>
      <Job_Search_Detail course={course} id='course' />
    </>
  )
}

export default Course
