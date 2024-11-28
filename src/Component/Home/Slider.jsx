// import React, { useState } from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import image1 from '../assest/service1.jpg'
// import image2 from '../assest/service2.jpg'
// import image3 from '../assest/service3.jpg'
// import image4 from '../assest/service4.jpg'

// const images = [
//   image1,
//   image2,
//   image3,
//   image4,
// ];

// const Slider = () => {
//   const [current, setCurrent] = useState(0);
//   const length = images.length;

//   const nextSlide = () => {
//     setCurrent(current === length - 1 ? 0 : current + 1);
//   };

//   const prevSlide = () => {
//     setCurrent(current === 0 ? length - 1 : current - 1);
//   };

//   return (
//     <>
//     <h1 className=' text-center text-4xl py-5 font-bold'>Explore Our AI Enabled Resume Services</h1>
//     <div className="relative flex justify-center items-center w-[100%] h-64 md:h-[800px] mx-auto" id='slider'>
      
      
//       <FaArrowLeft
//         className="absolute top-1/2 left-28 transform -translate-y-1/2 text-blue-700  cursor-pointer z-10"
//         onClick={prevSlide}
//       />
//       <FaArrowRight
//         className="absolute top-1/2 right-28 transform -translate-y-1/2 text-blue-700 cursor-pointer z-10"
//         onClick={nextSlide}
//       />
//       {images.map((img, index) => (
        
//         <div
//           key={index}
//           className={`absolute w-[80%] h-[700px] transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'}`}
//         >
//           {index === current && (
//             <img src={img} alt={`Slide ${index}`} className="w-full h-full object-cover"  />
//           )}
//         </div>
        
//       ))}
//     </div>
//     </>
//   );
// };

// export default Slider;


// src/components/ImageSlider.js
// import React, { useEffect } from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import { useParams, useNavigate } from 'react-router-dom';


// const ImageSlider = ({images=[]}) => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const current = parseInt(id, 10);
//   const length = images.length || 0;

//   const nextSlide = () => {
//     navigate(`/slide/${current === length - 1 ? 0 : current + 1}`);
//   };

//   const prevSlide = () => {
//     navigate(`/slide/${current === 0 ? length - 1 : current - 1}`);
//   };

//   return (
//     <>
//       <h1 className="text-center text-4xl py-5 font-bold">Explore Our AI Enabled Resume Services</h1>
//       <div className="relative flex justify-center items-center w-[100%] h-64 md:h-[800px] mx-auto">
//         <FaArrowLeft
//           className="absolute top-1/2 left-28 transform -translate-y-1/2 text-blue-700 cursor-pointer z-10"
//           onClick={prevSlide}
//         />
//         <FaArrowRight
//           className="absolute top-1/2 right-28 transform -translate-y-1/2 text-blue-700 cursor-pointer z-10"
//           onClick={nextSlide}
//         />
//         {images.map((images, index) => (
//           <div
//             key={index}
//             className={`absolute w-[80%] h-[700px]  transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'}`}
//           >
//             {index === current && (
//               <img src={images.img} alt={`Slide ${index}`} className="w-full h-full object-cover" />
//             )}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default ImageSlider;



import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom';

const Slider = ({ images = [] }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const current = parseInt(id, 10);
  const length = images.length || 0;

  const nextSlide = () => {
    navigate(`/slide/${current === length - 1 ? 0 : current + 1}`);
  };

  const prevSlide = () => {
    navigate(`/slide/${current === 0 ? length - 1 : current - 1}`);
  };

  return (
    <>
      <h1 className="text-center text-4xl py-5 font-bold">Explore Our AI Enabled Resume Services</h1>
      <div className="relative flex justify-center items-center w-[100%] h-64 md:h-[800px] mx-auto">
      <img src={images[index]} alt={`Slide ${index}`} className="w-full h-full object-cover" />
        <FaArrowLeft
          className="absolute top-1/2 left-28 transform -translate-y-1/2 text-blue-700 cursor-pointer z-10"
          onClick={prevSlide}
        />
        <FaArrowRight
          className="absolute top-1/2 right-28 transform -translate-y-1/2 text-blue-700 cursor-pointer z-10"
          onClick={nextSlide}
        />
        {images.map((_, index) => (
          <div
            key={index}
            className={`absolute w-[80%] h-[700px]  transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'}`}
          >
            {/* {index === current && (
              // <img src={image.img} alt={`Slide ${index}`} className="w-full h-full object-cover" />
            )} */}
          </div>
        ))}
      </div>
    </>
  );
};

export default Slider;
