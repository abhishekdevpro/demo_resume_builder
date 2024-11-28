// // import React, { useState, useEffect } from 'react';
// // import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
// // const Template1 = ({
// //   data = {},
// //   boxBgColor,
// //   font,
// //   textSize,
// //   sectionSpacing,
// //   paragraphSpacing,
// //   lineSpacing,
// //   isPreviewScreen,
// //   isTemplate1Previewing,
// //   predefinedText = {},
// //   skillsfromapi
// // }) => {

// //   // Define classes based on props
// //   const textSizeClass = textSize === 'small' ? 'text-sm' : textSize === 'medium' ? 'text-base' : 'text-lg';
// //   const sectionSpacingClass = sectionSpacing === 'small' ? 'space-y-2' : sectionSpacing === 'medium' ? 'space-y-4' : 'space-y-6';
// //   const paragraphSpacingClass = paragraphSpacing === 'small' ? 'mb-2' : paragraphSpacing === 'medium' ? 'mb-4' : 'mb-6';
// //   const lineHeightClass = lineSpacing === '1' ? 'leading-tight' : lineSpacing === '1.5' ? 'leading-snug' : 'leading-relaxed';

// //   // Provide default values for data properties
// //   const { details = [], experiences = [], educations = [], skills = [], sectionadd = [], summary = [] } = data;

// //   // Debug logs to trace the data flow
// //   useEffect(() => {
// //     console.log("data: ", data);
// //     console.log("details: ", details);
// //     console.log("experiences: ", experiences);
// //     console.log("educations: ", educations);
// //     console.log("skills: ", skills);
// //     console.log("sectionadd: ", sectionadd);
// //     console.log("summary: ", summary);
// //   }, [data]);

// //   // State variables to track user input
// //   const [userDetails, setUserDetails] = useState('');
// //   const [userExperiences, setUserExperiences] = useState('');
// //   const [userEducations, setUserEducations] = useState('');
// //   const [userSkills, setUserSkills] = useState('');
// //   const [userAdditionalSections, setUserAdditionalSections] = useState('');
// //   const [userSummary, setUserSummary] = useState('');

// //   // Generic function to check if all required fields are filled
// //   const areAllFieldsFilled = (item, fields) => {
// //     return fields.every(field => item[field] && item[field].trim() !== '');
// //   };

// //   // Check if all details are filled
// //   const allDetailsFilled = details.every(detail =>
// //     areAllFieldsFilled(detail, ['Profession', 'phoneNumber', 'email', 'link', 'address', 'name'])
// //   );

// //   const allDetailsFilled2 = experiences.every(experience =>
// //     areAllFieldsFilled(experience, ['Company', 'month1', 'role', 'companydescription'])
// //   );

// //   const allDetailsFilled3 = educations.every(education =>
// //     areAllFieldsFilled(education, ['schoolname', 'edmonth1', 'edmonth2', 'coursename'])
// //   );

// //   const allDetailsFilled4 = skills.every(skill =>
// //     areAllFieldsFilled(skill, ['skillname', 'skilldetails'])
// //   );

// //   const allDetailsFilled5 = sectionadd.some(section => areAllFieldsFilled(section, ['sectiontitle', 'sectiondescription']));

// //   const allDetailsFilled6 = summary.some(summar => summar.summarydescription.trim() !== '');

// //   const truncate = (str, maxLength) => {
// //     if (!str) return '';
// //     return str.length > maxLength ? str.substring(0, maxLength) + '...' : str;
// //   };
// //   return (
// //     <div
// //       className={` p-7 ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass}`}
// //       style={{ fontFamily: font,  backgroundColor: boxBgColor  }}
// //     >
// //       {/* Red circle indicating all fields are filled */}
// //       {/* {!isPreviewScreen && !isTemplate1Previewing && (
// //         <div className="">
// //           {allDetailsFilled && (
// //             <div className="w-7 h-7 ps-2.5 mt-1.5 bg-white rounded-2xl absolute top-48 left-1 font-bold">1</div>
// //           )}
// //           {allDetailsFilled2 && (
// //             <div className="w-7 h-8 ps-2.5 pt-0.5  mt-3.5 bg-white rounded-2xl absolute top-56 left-1 font-bold">2</div>
// //           )}
// //           {allDetailsFilled3 && (
// //             <div className="w-7 h-8 ps-2.5 pt-0.5 mt-11  bg-white rounded-2xl absolute top-60 left-1 font-bold">3</div>
// //           )}
// //           {allDetailsFilled4 && (
// //             <div className="w-7 h-7 ps-2.5 mt-2 bg-white rounded-2xl absolute top-80 left-1 font-bold">4</div>
// //           )}
// //           {allDetailsFilled5 && (
// //             <div className="w-7 h-7 ps-2.5 mt-8 bg-white rounded-2xl absolute top-96 left-1 font-bold">6</div>
// //           )}
// //           {allDetailsFilled6 && (
// //             <div className="w-7 h-8 ps-2.5 pt-1 mt-28 bg-white rounded-2xl absolute top-64 left-1 font-bold">5</div>
// //           )}
// //         </div>
// //       )} */}

// //       <div>
// //         {/* User details */}
// // {details.map((del, index) => (
// //         <div key={index} className='border-2 border-black flex flex-col gap-4 px-3 py-2'>
// //           <h3 className="text-xs sm:text-sm md:text-2xl lg:text-3xl text-cyan-600 font-bold ms-">
// //             {truncate(del.name || predefinedText.details.name, 20 )}
// //           </h3>
// //           <p className="text-xs sm:text-sm md:text-xl lg:text-lg ms-">
// //             {truncate(del.Profession || predefinedText.details.profession, 200)}
// //           </p>
// //           {/* <ul className="flex text-xs sm:text-xs md:text-xs lg:text-xs m-2 gap-4 font-semibold">
// //             <li>
// //               <FaMapMarkerAlt className="inline-block  mr-1" />
// //               {truncate(del.address || predefinedText.details.address, 30)}
// //             </li>
// //             <li>
// //               <FaPhoneAlt className="inline-block  mr-1" />
// //               {truncate(del.phoneNumber || predefinedText.details.phoneNumber, 15)}
// //             </li>
// //             <li>
// //               <FaEnvelope className="inline-block  mr-1" />
// //               {truncate(del.email || predefinedText.details.email, 80)}
// //             </li>
// //             <li>
// //               <FaLinkedin className="inline-block mr-1" />
// //               <a href={del.link || '#'} target="_blank" rel="noopener noreferrer">
// //                 {truncate(del.link || predefinedText.details.link, 80)}
// //               </a>
// //             </li>
// //             <li>

// //               <a href={del.github || '#'} target="_blank" rel="noopener noreferrer">
// //                 {truncate(del.github || predefinedText.details.github, 15)}
// //               </a>
// //             </li>
// //           </ul> */}
// //   <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-2 gap-x-4 text-xs border-2 border-red-500 py-2 px-4">
// //     {[
// //       { icon: <FaMapMarkerAlt />, text: del.address || predefinedText.details.address },
// //       { icon: <FaPhoneAlt />, text: del.phoneNumber || predefinedText.details.phoneNumber },
// //       { icon: <FaEnvelope />, text: del.email || predefinedText.details.email },
// //       { icon: <FaLinkedin />, text: del.link || predefinedText.details.link, isLink: true, href: del.linkedin },
// //       { icon: <FaGithub />, text: del.github || predefinedText.details.github, isLink: true, href: del.github }
// //     ].map((item, index) => (
// //       <div key={index} className="flex items-center gap-2 border-2 border-blue-600 py-2 px-2">
// //         <span className="text-cyan-600 flex-shrink-0">{item.icon}</span>
// //         {item.isLink ? (
// //           <a href={item.href || '#'} target="_blank" rel="noopener noreferrer" className="truncate ">
// //             {truncate(item.text, 25)}
// //           </a>
// //         ) : (
// //           <span className="truncate">{truncate(item.text, 30)}</span>
// //         )}
// //       </div>
// //     ))}
// // </div>
// //     {summary.length > 0 ? (
// //   summary.map((sum, index) => (
// //     <div key={index}><div className='font-bold'>Summary</div>
// //       <p
// //         className={`${paragraphSpacingClass} text-xs sm:text-sm md:text-sm lg:text-sm m-2 w-2/2 break-all`}
// //         dangerouslySetInnerHTML={{ __html: sum.summarydescription.trim() || predefinedText.summary.summarydescription }}
// //       />
// //       <br />
// //     </div>
// //   ))
// // ) : (
// //   <div>
// //     <p
// //       className={`${paragraphSpacingClass} text-xs sm:text-sm md:text-sm lg:text-sm m-2 w-2/2 break-all`}
// //       dangerouslySetInnerHTML={{ __html: predefinedText.summary.summarydescription }}
// //     />
// //     <br />
// //   </div>
// // )}

// //           </div>
// //         ))}

// //         {/* Rendering work experience */}
// //         <div>
// //   <h5 className="text-cyan-600 font-bold">WORK EXPERIENCE</h5>
// //   {experiences.map((exp, index) => (
// //     <div key={index}>
// //       <div className="flex justify-between">
// //         <h6 className="font-bold break-all">{exp.Company || predefinedText.experiences.company}</h6>
// //         <p className="text-xs sm:text-sm md:text-sm lg:text-sm">{exp.month1} - {exp.month2}</p>
// //       </div>
// //       <div className="flex justify-between">
// //         <h6 className="text-xs sm:text-sm md:text-sm lg:text-sm">{exp.role ||  predefinedText.experiences.role }</h6>
// //         <p className="text-xs sm:text-xs md:text-xs lg:text-xs">{exp.companyplace ||  predefinedText.experiences.companyplace}</p>
// //       </div>
// //       <ul className={`${exp.companydescription ? 'text-xs sm:text-xs md:text-xs lg:text-xs' : ''} w-[50%] break-all`}>
// //   {exp.companydescription ? (
// //     // If company description is provided, split by new lines and render each line as a list item
// //     exp.companydescription.split(/\r?\n/).map((line, i) => (
// //       <li
// //         key={i}
// //         className={`${line.trim() ? 'before:content-[""] before:mr-1' : ''} text-xs sm:text-xs md:text-xs lg:text-xs m-2 w-full break-all`}
// //         style={{ marginBottom: '4px' }} // Adjust margin bottom as needed
// //         dangerouslySetInnerHTML={{ __html: line ? `${line}` : '' }}
// //       />
// //     ))
// //   ) : (
// //     // Render a placeholder or message if company description is not provided
// //     <li className="text-gray-400 italic">No description provided</li>
// //   )}
// // </ul>

// //       <br />
// //     </div>
// //   ))}
// // </div>

// //         {/* Rendering education */}
// //         <div className="page-break"></div>
// //         <div className="flex items-center">
// //           <h5 className="text-cyan-600 font-bold">EDUCATION</h5>
// //           <div className="flex-grow border-t border-gray-300 align-super"></div>
// //         </div>
// //         {educations.map((edu, index) => (
// //           <div key={index}>
// //             <div className="flex justify-between">
// //               <h6 className="font-bold break-all">{edu.schoolname || predefinedText.educations.schoolname}</h6>
// //               <p className=' text-xs'>{edu.edmonth1} - {edu.edmonth2}</p>
// //             </div>
// //             <div className="flex justify-between  text-xs sm:text-sm md:text-sm lg:text-sm">
// //               <h6>{edu.schoolplace || predefinedText.educations.schoolplace}</h6>
// //             </div>
// //             <p className=' text-xs sm:text-xs md:text-xs lg:text-xs'>{edu.coursename  || predefinedText.educations.coursename}</p>
// //           </div>
// //         ))}

// //         {/* Rendering skills */}
// //         <div className="page-break"></div>
// //         <div className="flex items-center mt-5">
// //           <h5 className="text-cyan-600 font-bold">SKILLS</h5>
// //           <div className="flex-grow border-t border-gray-300 align-super"></div>
// //         </div>
// //         <div className="flex flex-wrap gap-2 text-start text-xs sm:text-xs md:text-xs lg:text-xs">
// //   {skills.map((skill, index) => (
// //     <span key={index} className="flex items-center text-xs sm:text-xs md:text-xs lg:text-xs mr-2 mt-2 gap-">
// //       <p className={`${skill.skillname ? 'before:content-["●"] before:m-2 font' : ''} break-all`}>
// //         {skill.skillname || predefinedText.skills.skillname}
// //       </p>
// //       {/* <p className={`${skill.skilldetails ? 'before:content-["●"] before:m-2' : 'ms-2'} w-auto break-all`}>
// //         {skill.skilldetails || predefinedText.skills.skilldetails}
// //       </p> */}
// //     </span>
// //   ))}{skillsfromapi && skillsfromapi.length > 0 && (
// //     <p className="text-start ">
// //       {skillsfromapi.map((skill, index) => (
// //         <span key={index}>
// //           {skill}
// //           {index !== skillsfromapi.length - 1 && ' ● '}
// //         </span>
// //       ))}
// //     </p>
// //   )}
// // </div>

// //         {/* Rendering additional sections */}
// //         <div className="page-break"></div>
// //         {sectionadd.map((section, index) => (
// //           <div key={index} className="mt-5">
// //             <div className="page-break"></div>
// //             <div className="flex items-center">
// //               <h5 className="text-cyan-600 font-bold">{section.sectiontitle || userAdditionalSections || predefinedText.additionalSections}</h5>
// //               <div className="flex-grow border-t border-gray-300 align-super"></div>
// //             </div>
// //             <span className="font-bold text-xs sm:text-sm w-32">{section.sectionname || userAdditionalSections || predefinedText.additionalSections}</span>
// //             <h6 className="text-xs sm:text-sm">{section.sectiondescription || userAdditionalSections || predefinedText.additionalSections}</h6>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Template1;

// import React, { useState, useEffect } from 'react';
// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

// const Template1 = ({
//   data = {},
//   boxBgColor,
//   font,
//   textSize,
//   sectionSpacing,
//   paragraphSpacing,
//   lineSpacing,
//   isPreviewScreen,
//   isTemplate1Previewing,
//   predefinedText = {},
//   skillsfromapi
// }) => {
//   // Define classes based on props
//   const textSizeClass = textSize === 'small' ? 'text-sm' : textSize === 'medium' ? 'text-base' : 'text-lg';
//   const sectionSpacingClass = sectionSpacing === 'small' ? 'space-y-2' : sectionSpacing === 'medium' ? 'space-y-4' : 'space-y-6';
//   const paragraphSpacingClass = paragraphSpacing === 'small' ? 'mb-2' : paragraphSpacing === 'medium' ? 'mb-4' : 'mb-6';
//   const lineHeightClass = lineSpacing === '1' ? 'leading-tight' : lineSpacing === '1.5' ? 'leading-snug' : 'leading-relaxed';

//   // Provide default values for data properties
//   const { details = [], experiences = [], educations = [], skills = [], sectionadd = [], summary = [] } = data;

//   // Debug logs to trace the data flow
//   useEffect(() => {
//     console.log("data: ", data);
//     console.log("details: ", details);
//     console.log("experiences: ", experiences);
//     console.log("educations: ", educations);
//     console.log("skills: ", skills);
//     console.log("sectionadd: ", sectionadd);
//     console.log("summary: ", summary);
//   }, [data]);

//   // State variables to track user input
//   const [userDetails, setUserDetails] = useState('');
//   const [userExperiences, setUserExperiences] = useState('');
//   const [userEducations, setUserEducations] = useState('');
//   const [userSkills, setUserSkills] = useState('');
//   const [userAdditionalSections, setUserAdditionalSections] = useState('');
//   const [userSummary, setUserSummary] = useState('');

//   // Generic function to check if all required fields are filled
//   const areAllFieldsFilled = (item, fields) => {
//     return fields.every(field => item[field] && item[field].trim() !== '');
//   };

//   // Check if all details are filled
//   const allDetailsFilled = details.every(detail =>
//     areAllFieldsFilled(detail, ['Profession', 'phoneNumber', 'email', 'link', 'address', 'name'])
//   );

//   const allDetailsFilled2 = experiences.every(experience =>
//     areAllFieldsFilled(experience, ['Company', 'month1', 'role', 'companydescription'])
//   );

//   const allDetailsFilled3 = educations.every(education =>
//     areAllFieldsFilled(education, ['schoolname', 'edmonth1', 'edmonth2', 'coursename'])
//   );

//   const allDetailsFilled4 = skills.every(skill =>
//     areAllFieldsFilled(skill, ['skillname', 'skilldetails'])
//   );

//   const allDetailsFilled5 = sectionadd.some(section => areAllFieldsFilled(section, ['sectiontitle', 'sectiondescription']));

//   const allDetailsFilled6 = summary.some(summar => summar.summarydescription.trim() !== '');

//   const truncate = (str, maxLength) => {
//     if (!str) return '';
//     return str.length > maxLength ? str.substring(0, maxLength) + '...' : str;
//   };

//   return (
//     <div
//       className={`p-7 ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass}`}
//       style={{ fontFamily: font, backgroundColor: boxBgColor }}
//     >
//       <div>
//         {details.map((del, index) => (
//           <div key={index} className='border-2 border-black flex flex-col gap-4 px-3 py-2'>
//             <h3 className="text-xs sm:text-sm md:text-2xl lg:text-3xl text-cyan-600 font-bold ms-">
//               {truncate(del.name || predefinedText.details.name, 20)}
//             </h3>
//             <p className="text-xs sm:text-sm md:text-xl lg:text-lg ms-">
//               {truncate(del.Profession || predefinedText.details.profession, 200)}
//             </p>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-2 gap-x-4 text-xs border-2 border-red-500 py-2 px-4">
//               {[
//                 { icon: <FaMapMarkerAlt />, text: del.address || predefinedText.details.address },
//                 { icon: <FaPhoneAlt />, text: del.phoneNumber || predefinedText.details.phoneNumber },
//                 { icon: <FaEnvelope />, text: del.email || predefinedText.details.email },
//                 { icon: <FaLinkedin />, text: del.link || predefinedText.details.link, isLink: true, href: del.linkedin },
//                 { icon: <FaGithub />, text: del.github || predefinedText.details.github, isLink: true, href: del.github }
//               ].map((item, index) => (
//                 <div key={index} className="flex items-center gap-2 border-2 border-blue-600 py-2 px-2 overflow-hidden">
//                   <span className="text-cyan-600 flex-shrink-0">{item.icon}</span>
//                   {item.isLink ? (
//                     <a
//                       href={item.href || '#'}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="truncate"
//                     >
//                       {truncate(item.text, 25)}
//                     </a>
//                   ) : (
//                     <span className="truncate">{truncate(item.text, 30)}</span>
//                   )}
//                 </div>
//               ))}
//             </div>
//             {summary.length > 0 ? (
//               summary.map((sum, index) => (
//                 <div key={index}>
//                   <div className='font-bold'>Summary</div>
//                   <p
//                     className={`${paragraphSpacingClass} text-xs sm:text-sm md:text-sm lg:text-sm m-2 w-2/2 break-all`}
//                     dangerouslySetInnerHTML={{ __html: sum.summarydescription.trim() || predefinedText.summary.summarydescription }}
//                   />
//                   <br />
//                 </div>
//               ))
//             ) : (
//               <div>
//                 <p
//                   className={`${paragraphSpacingClass} text-xs sm:text-sm md:text-sm lg:text-sm m-2 w-2/2 break-all`}
//                   dangerouslySetInnerHTML={{ __html: predefinedText.summary.summarydescription }}
//                 />
//                 <br />
//               </div>
//             )}
//           </div>
//         ))}

//         <div>
//           <h5 className="text-cyan-600 font-bold">WORK EXPERIENCE</h5>
//           {experiences.map((exp, index) => (
//             <div key={index}>
//               <div className="flex justify-between">
//                 <h6 className="font-bold break-all">{exp.Company || predefinedText.experiences.company}</h6>
//                 <p className="text-xs sm:text-sm md:text-sm lg:text-sm">{exp.month1} - {exp.month2}</p>
//               </div>
//               <div className="flex justify-between">
//                 <h6 className="text-xs sm:text-sm md:text-sm lg:text-sm">{exp.role || predefinedText.experiences.role}</h6>
//                 <p className="text-xs sm:text-xs md:text-xs lg:text-xs">{exp.companyplace || predefinedText.experiences.companyplace}</p>
//               </div>
//               <ul className="text-xs sm:text-xs md:text-xs lg:text-xs w-[50%] break-all">
//                 {exp.companydescription ? (
//                   exp.companydescription.split(/\r?\n/).map((line, i) => (
//                     <li
//                       key={i}
//                       className={`${line.trim() ? 'before:content-[""] before:mr-1' : ''} text-xs sm:text-xs md:text-xs lg:text-xs m-2 w-full break-all`}
//                       style={{ marginBottom: '4px' }}
//                       dangerouslySetInnerHTML={{ __html: line ? `${line}` : '' }}
//                     />
//                   ))
//                 ) : (
//                   <li className="text-gray-400 italic">No description provided</li>
//                 )}
//               </ul>
//               <br />
//             </div>
//           ))}
//         </div>

//         <div className="page-break"></div>
//         <div className="flex items-center">
//           <h5 className="text-cyan-600 font-bold">EDUCATION</h5>
//           <div className="flex-grow border-t border-gray-300 align-super"></div>
//         </div>
//         {educations.map((edu, index) => (
//           <div key={index}>
//             <div className="flex justify-between">
//               <h6 className="font-bold break-all">{edu.schoolname || predefinedText.educations.schoolname}</h6>
//               <p className="text-xs">{edu.edmonth1} - {edu.edmonth2}</p>
//             </div>
//             <h6 className="text-xs">{edu.coursename || predefinedText.educations.coursename}</h6>
//             <br />
//           </div>
//         ))}

//         <div>
//           <h5 className="text-cyan-600 font-bold">SKILLS</h5>
//           {skillsfromapi && skillsfromapi.length > 0 ? (
//             skillsfromapi.map((skill, index) => (
//               <div key={index}>
//                 <div className="flex justify-between">
//                   <h6 className="font-bold">{skill.skillname}</h6>
//                 </div>
//                 <p className="text-xs">{skill.skilldetails}</p>
//                 <br />
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-400 italic">No skills provided</p>
//           )}
//         </div>

//         <div>
//           <h5 className="text-cyan-600 font-bold">ADDITIONAL SECTIONS</h5>
//           {sectionadd.map((section, index) => (
//             <div key={index}>
//               <div className="flex justify-between">
//                 <h6 className="font-bold">{section.sectiontitle}</h6>
//               </div>
//               <p className="text-xs">{section.sectiondescription}</p>
//               <br />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Template1;

import React, { useState, useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Template1 = ({
  data = {},
  boxBgColor,
  font,
  textSize,
  sectionSpacing,
  paragraphSpacing,
  lineSpacing,
  isPreviewScreen,
  isTemplate1Previewing,
  predefinedText = {},
  skillsfromapi,
}) => {
  // Define classes based on props
  const textSizeClass =
    textSize === "small"
      ? "text-sm"
      : textSize === "medium"
      ? "text-base"
      : "text-lg";
  const sectionSpacingClass =
    sectionSpacing === "small"
      ? "space-y-2"
      : sectionSpacing === "medium"
      ? "space-y-4"
      : "space-y-6";
  const paragraphSpacingClass =
    paragraphSpacing === "small"
      ? "mb-2"
      : paragraphSpacing === "medium"
      ? "mb-4"
      : "mb-6";
  const lineHeightClass =
    lineSpacing === "1"
      ? "leading-tight"
      : lineSpacing === "1.5"
      ? "leading-snug"
      : "leading-relaxed";

  // Provide default values for data properties
  const {
    details = [],
    experiences = [],
    educations = [],
    skills = [],
    sectionadd = [],
    summary = [],
  } = data;

  // Debug logs to trace the data flow
  useEffect(() => {
    console.log("data: ", data);
    console.log("details: ", details);
    console.log("experiences: ", experiences);
    console.log("educations: ", educations);
    console.log("skills: ", skills);
    console.log("sectionadd: ", sectionadd);
    console.log("summary: ", summary);
  }, [data]);

  // State variables to track user input
  const [userDetails, setUserDetails] = useState("");
  const [userExperiences, setUserExperiences] = useState("");
  const [userEducations, setUserEducations] = useState("");
  const [userSkills, setUserSkills] = useState("");
  const [userAdditionalSections, setUserAdditionalSections] = useState("");
  const [userSummary, setUserSummary] = useState("");

  // Generic function to check if all required fields are filled
  const areAllFieldsFilled = (item, fields) => {
    return fields.every((field) => item[field] && item[field].trim() !== "");
  };

  // Check if all details are filled
  const allDetailsFilled = details.every((detail) =>
    areAllFieldsFilled(detail, [
      "Profession",
      "phoneNumber",
      "email",
      "link",
      "address",
      "name",
    ])
  );

  const allDetailsFilled2 = experiences.every((experience) =>
    areAllFieldsFilled(experience, [
      "Company",
      "month1",
      "role",
      "companydescription",
    ])
  );

  const allDetailsFilled3 = educations.every((education) =>
    areAllFieldsFilled(education, [
      "schoolname",
      "edmonth1",
      "edmonth2",
      "coursename",
    ])
  );

  const allDetailsFilled4 = skills.every((skill) =>
    areAllFieldsFilled(skill, ["skillname", "skilldetails"])
  );

  const allDetailsFilled5 = sectionadd.some((section) =>
    areAllFieldsFilled(section, ["sectiontitle", "sectiondescription"])
  );

  const allDetailsFilled6 = summary.some(
    (summar) => summar.summarydescription.trim() !== ""
  );

  const truncate = (str, maxLength) => {
    if (!str) return "";
    return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
  };

//   return (
//     <div
//       className={`p-7 ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass}`}
//       style={{ fontFamily: font, backgroundColor: boxBgColor }}
//     >
//       <div>
//         {details.map((del, index) => (
//           <div key={index} className=" flex flex-col">
//             <div className="flex flex-col">
//               <h3 className="text-2xl  text-black font-bold border-b-2 border-gray-600 ">
//                 {del.name || predefinedText.details.name}
//               </h3>
//               <p className="text-xl">
//                 {del.Profession || predefinedText.details.profession}
//               </p>
//             </div>
//             {/* <div className="grid grid-cols-1 sm:grid-cols-3 items-center place-content-center text-xs  py-2 px-4">
//               {[
//                 { icon: <FaMapMarkerAlt />, text: del.address || predefinedText.details.address },
//                 { icon: <FaPhoneAlt />, text: del.phoneNumber || predefinedText.details.phoneNumber },
//                 { icon: <FaEnvelope />, text: del.email || predefinedText.details.email },
//                 { icon: <FaLinkedin />, text: del.link || predefinedText.details.link, isLink: true, href: del.linkedin },
//                 // { icon: <FaGithub />, text: del.github || predefinedText.details.github, isLink: true, href: del.github }
//               ].map((item, index) => (
//                 <div key={index} className="flex gap-2 items-center m-0">
//                   <span className="text-lg font-bold ">{item.icon}</span>
//                     <p className=" text-lg ">{item.text}</p>
  
//                 </div>
//               ))}
//             </div> */}

//             <div className="rounded-lg p-4">
//               <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 items-center text-xs py-2 px-4 ">
//                 {[
//                   {
//                     text: del.address || predefinedText.details.address,
//                   },
//                   {
//                     text: del.phoneNumber || predefinedText.details.phoneNumber,
//                   },
//                   {
//                     text: del.email || predefinedText.details.email,
//                   },
//                   {
//                     text: del.link || predefinedText.details.link,
//                     isLink: true,
//                     href: del.linkedin,
//                   },
//                   {
//                     text: del.github || predefinedText.details.github,
//                     isLink: true,
//                     href: del.github,
//                   },
//                 ].map((item, index) => (
//                   <div key={index} className="flex items-center space-x-2">
//                     <span className="text-black font-bold text-xl">•</span>
//                     {item.isLink ? (
//                       <a href={item.href} className="hover:underline text-xl text-gray-700">
//                         {item.text}
//                       </a>
//                     ) : (
//                       <span className="text-xl text-gray-700">{item.text}</span>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {summary.length > 0 ? (
//               summary.map((sum, index) => (
//                 <div key={index}>
//                   <div className="font-bold border-b-2 border-gray-600 ">Summary</div>
//                   <p
//                     className={`${paragraphSpacingClass} text-xs sm:text-sm md:text-sm lg:text-sm break-all`}
//                     dangerouslySetInnerHTML={{
//                       __html:
//                         sum.summarydescription.trim() ||
//                         predefinedText.summary.summarydescription,
//                     }}
//                   />
//                 </div>
//               ))
//             ) : (
//               <div>
//                 <p
//                   className={`${paragraphSpacingClass} text-xs sm:text-sm md:text-sm lg:text-sm break-all`}
//                   dangerouslySetInnerHTML={{
//                     __html: predefinedText.summary.summarydescription,
//                   }}
//                 />
//                 <br />
//               </div>
//             )}
//           </div>
//         ))}

//         <div>
//           <h5 className="text-black font-bold border-b-2 border-gray-600">WORK EXPERIENCE</h5>
//           {experiences.map((exp, index) => (
//             <div key={index}>
//               <div className="flex justify-between">
//                 <h6 className="font-bold break-all">
//                   {exp.Company || predefinedText.experiences.company}
//                 </h6>
//                 <p className="text-xs sm:text-sm md:text-sm lg:text-sm">
//                   {exp.month1} - {exp.month2}
//                 </p>
//               </div>
//               <div className="flex justify-between">
//                 <h6 className="text-xs sm:text-sm md:text-sm lg:text-sm">
//                   {exp.role || predefinedText.experiences.role}
//                 </h6>
//                 <p className="text-xs sm:text-xs md:text-xs lg:text-xs">
//                   {exp.companyplace || predefinedText.experiences.companyplace}
//                 </p>
//               </div>
//               <ul className="text-xs sm:text-xs md:text-xs lg:text-xs w-[50%] break-all">
//                 {exp.companydescription ? (
//                   exp.companydescription.split(/\r?\n/).map((line, i) => (
//                     <li
//                       key={i}
//                       className={`${
//                         line.trim() ? 'before:content-[""] before:mr-1' : ""
//                       } text-xs sm:text-xs md:text-xs lg:text-xs m-2 w-full break-all`}
//                       style={{ marginBottom: "4px" }}
//                       dangerouslySetInnerHTML={{
//                         __html: line ? `${line}` : "",
//                       }}
//                     />
//                   ))
//                 ) : (
//                   <li className="text-gray-400 italic">
//                     No description provided
//                   </li>
//                 )}
//               </ul>
//               <br />
//             </div>
//           ))}
//         </div>

//         <div className="page-break"></div>
//         <div className="flex items-center">
//           <h5 className="text-black font-bold border-b-2 border-gray-600 w-full">EDUCATION</h5>
//           <div className="flex-grow border-t border-gray-300 align-super"></div>
//         </div>
//         {educations.map((edu, index) => (
//           <div key={index}>
//             <div className="flex justify-between">
//               <h6 className="font-bold break-all">
//                 {edu.schoolname || predefinedText.educations.schoolname}
//               </h6>
//               <p className="text-xs">
//                 {edu.edmonth1} - {edu.edmonth2}
//               </p>
//             </div>
//             <h6 className="text-xs">
//               {edu.coursename || predefinedText.educations.coursename}
//             </h6>
//             <br />
//           </div>
//         ))}

//         {/* <div>
//           <h5 className="text-black font-bold border-b-2 border-gray-600">SKILLS</h5>
//           {skills && skills.length > 0 ? (
//             skills.map((skill, index) => (
//               <div key={index} className="border-2 border-gray-600">
//                 <div className="flex">
//                   <h6 className="font-medium text-md">{skill.skillname}</h6>
//                 </div>
//                 <p className="text-xs">{skill.skilldetails}</p>
//                 <br />
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-400 italic">No skills provided</p>
//           )}
//         </div> */}

// <div className="">
//   <h5 className="text-black font-bold border-b-2 border-gray-600 mb-4">SKILLS</h5>
//   {skills && skills.length > 0 ? (
//     <div className="flex flex-wrap gap-4">
//       {skills.map((skill, index) => (
//         <div
//           key={index}
//           className=" flex-grow"
//         >
//           <div className="flex items-center mb-2">
//             <h6 className="font-semibold text-lg text-gray-600">{skill.skillname}</h6>
//           </div>
//           <p className="text-sm text-gray-700">{skill.skilldetails}</p>
//         </div>
//       ))}
//     </div>
//   ) : (
//     <p className="text-gray-400 italic">No skills provided</p>
//   )}
// </div>


//         <div>
//           {sectionadd.map((section, index) => (
//             <div key={index}>
//               <div className="flex justify-between">
//                 <h6 className="font-bold border-b-2 border-gray-700 w-full">{section.sectiontitle}</h6>
//               </div>
//               <p className="text-xs">{section.sectiondescription}</p>
//               <br />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );

return (
  <div
    className={`p-7 ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass}`}
    style={{ fontFamily: font, backgroundColor: boxBgColor }}
  >
    <div>
      {details.map((del, index) => (
        <div key={index} className="flex flex-col mb-6">
          <div className="flex flex-col mb-4">
            <h3 className="text-2xl text-black font-bold border-b-2 border-gray-400 pb-1 mb-2">
              {del.name || predefinedText.details.name}
            </h3>
            <p className="text-xl text-gray-700">
              {del.Profession || predefinedText.details.profession}
            </p>
          </div>

          <div className="rounded-lg p-4 bg-white border border-gray-300 mb-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 items-center text-xs py-2 px-4">
              {[
                {
                  text: del.address || predefinedText.details.address,
                },
                {
                  text: del.phoneNumber || predefinedText.details.phoneNumber,
                },
                {
                  text: del.email || predefinedText.details.email,
                },
                {
                  text: del.link || predefinedText.details.link,
                  isLink: true,
                  href: del.linkedin,
                },
                {
                  text: del.github || predefinedText.details.github,
                  isLink: true,
                  href: del.github,
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="text-black font-bold text-xl">•</span>
                  {item.isLink ? (
                    <a href={item.href} className="hover:underline text-xl text-gray-700">
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-xl text-gray-700">{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {summary.length > 0 ? (
            summary.map((sum, index) => (
              <div key={index} className="mb-6">
                <div className="font-bold text-lg text-black border-b-2 border-gray-400 pb-1 mb-2">Summary</div>
                <p
                  className={`${paragraphSpacingClass} text-sm text-gray-700 break-all`}
                  dangerouslySetInnerHTML={{
                    __html: sum.summarydescription.trim() || predefinedText.summary.summarydescription,
                  }}
                />
              </div>
            ))
          ) : (
            <div className="mb-6">
              <p
                className={`${paragraphSpacingClass} text-sm text-gray-700 break-all`}
                dangerouslySetInnerHTML={{
                  __html: predefinedText.summary.summarydescription,
                }}
              />
            </div>
          )}
        </div>
      ))}

      <div className="mb-6">
        <h5 className="text-black font-bold border-b-2 border-gray-400 pb-1 mb-4">WORK EXPERIENCE</h5>
        {experiences.map((exp, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between mb-1">
              <h6 className="font-bold text-lg text-gray-800 break-all">
                {exp.Company || predefinedText.experiences.company}
              </h6>
              <p className="text-sm text-gray-600">
                {exp.month1} - {exp.month2}
              </p>
            </div>
            <div className="flex justify-between mb-1">
              <h6 className="text-sm text-gray-700">
                {exp.role || predefinedText.experiences.role}
              </h6>
              <p className="text-sm text-gray-600">
                {exp.companyplace || predefinedText.experiences.companyplace}
              </p>
            </div>
            <ul className="text-sm text-gray-700 w-[50%] break-all">
              {exp.companydescription ? (
                exp.companydescription.split(/\r?\n/).map((line, i) => (
                  <li
                    key={i}
                    className="text-sm text-gray-700 mb-1"
                    dangerouslySetInnerHTML={{ __html: line }}
                  />
                ))
              ) : (
                <li className="text-gray-400 italic">No description provided</li>
              )}
            </ul>
          </div>
        ))}
      </div>

      <div className="mb-6 page-break">
        <h5 className="text-black font-bold border-b-2 border-gray-400 pb-1 mb-4">EDUCATION</h5>
        {educations.map((edu, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between mb-1">
              <h6 className="font-bold text-lg text-gray-800 break-all">
                {edu.schoolname || predefinedText.educations.schoolname}
              </h6>
              <p className="text-sm text-gray-600">
                {edu.edmonth1} - {edu.edmonth2}
              </p>
            </div>
            <h6 className="text-sm text-gray-700">
              {edu.coursename || predefinedText.educations.coursename}
            </h6>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h5 className="text-black font-bold border-b-2 border-gray-400 pb-1 mb-4">SKILLS</h5>
        {skills && skills.length > 0 ? (
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="flex-grow">
                <div className="flex items-center mb-2">
                  <h6 className="font-semibold text-lg text-gray-600">{skill.skillname}</h6>
                </div>
                <p className="text-sm text-gray-700">{skill.skilldetails}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 italic">No skills provided</p>
        )}
      </div>

      {sectionadd && sectionadd.length > 0 && (
        <div className="mb-6">
          {sectionadd.map((section, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between mb-1">
                <h6 className="font-bold text-lg text-gray-800 break-all border-b-2 border-gray-700 pb-1 w-full">
                  {section.sectiontitle}
                </h6>
              </div>
              <p className="text-sm text-gray-700">{section.sectiondescription}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

};

export default Template1;
