import React from 'react';
import Resume_Guide_Detail from './Resume_guide_Detail';

function Course(props) {
  const course =[
    
    {
        img:"https://www.resume-now.com/sapp/themes/resumenow/img/featured/item-1.png",icon:"https://www.resume-now.com/sapp/uploads/2023/12/team-member-karla-150x150.png",title:"Airline Customer Service Agent Cover Letter",name:"By Karla Vilmenay"
    },
    { img:"https://www.resume-now.com/sapp/themes/resumenow/img/featured/item-2.png",icon:"https://www.resume-now.com/sapp/uploads/2023/02/don-sjoerdsma-150x150.jpeg",title:"Sourcing Manager Resume: Examples",name:"By Don Sjoerdsma, CPRW"},
    { img:"https://www.resume-now.com/sapp/themes/resumenow/img/featured/item-3.png",icon:"https://www.resume-now.com/sapp/uploads/2023/02/don-sjoerdsma-150x150.jpeg",title:"Freelance Writer Resume Examples and Guide", name:"By Don Sjoerdsma, CPRW"},
    { img:"https://www.resume-now.com/sapp/themes/resumenow/img/featured/item-4.png",icon:"https://www.resume-now.com/sapp/uploads/2023/02/don-sjoerdsma-150x150.jpeg",title:"Insuarance Fraud Investigator Resume", name:"By Don Sjoerdsma, CPRW"},
    
    
    
  ];
  return (
    <>
      <Resume_Guide_Detail course={course} id='course' />
    </>
  )
}

export default Course
