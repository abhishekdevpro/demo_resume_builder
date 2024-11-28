import React, { useState, useRef, useEffect } from 'react';
import template1 from '../../ResumeBuilder/images/template1.png';
import template2 from './templateimages/template2.png';
import template3 from '../cvFunctionality/templateimages/template6.png';
import template4 from '../cvFunctionality/templateimages/template4.png';
import template5 from '../cvFunctionality/templateimages/template5.png';
import template6 from '../cvFunctionality/templateimages/template3.png';
import template7 from '../cvFunctionality/templateimages/template7.png';
import template8 from '../cvFunctionality/templateimages/template8.png';
import template9 from '../cvFunctionality/templateimages/template9.png';
import template10 from '../cvFunctionality/templateimages/template10.png';
import template11 from '../cvFunctionality/templateimages/template11.jpg';
import template12 from '../cvFunctionality/templateimages/template12.jpg';
import template13 from '../cvFunctionality/templateimages/template13.jpg';
import template14 from '../cvFunctionality/templateimages/template14.jpg';
import template15 from '../cvFunctionality/templateimages/template15.jpg';
import template16 from '../cvFunctionality/templateimages/template16.png';
import template17 from '../cvFunctionality/templateimages/template17.jpeg';
import template18 from '../cvFunctionality/templateimages/template18.png';
import template19 from '../cvFunctionality/templateimages/template19.png';
import template20 from '../cvFunctionality/templateimages/template20.svg';
import Modal from './Modal'; // Import the Modal component
import TemplateComponent from '../forms/templateComponent';

const templates = [
  { id: 'Template1', name: 'Template 1', image: template1 },
  { id: 'Template2', name: 'Template 2', image: template2 },
  { id: 'Template3', name: 'Template 3', image: template3 },
  { id: 'Template4', name: 'Template 4', image: template4 },
  { id: 'Template5', name: 'Template 5', image: template5 },
  { id: 'Template6', name: 'Template 6', image: template6 },
  { id: 'Template7', name: 'Template 7', image: template7 },
  { id: 'Template8', name: 'Template 8', image: template8 },
  { id: 'Template9', name: 'Template 9', image: template9 },
  { id: 'Template10', name: 'Template 10', image: template10 },
  // { id: 'Template11', name: 'Template 11', image: template11 },
  // { id: 'Template12', name: 'Template 12', image: template12 },
  { id: 'Template13', name: 'Template 13', image: template13 },
  { id: 'Template14', name: 'Template 14', image: template14 },
  { id: 'Template15', name: 'Template 15', image: template15 },
  // { id: 'Template16', name: 'Template 16', image: template16 },
  // { id: 'Template17', name: 'Template 17', image: template17 },
  // { id: 'Template18', name: 'Template 18', image: template18 },
  // { id: 'Template19', name: 'Template 19', image: template19 },
  // { id: 'Template20', name: 'Template 20', image: template20 },
];



const TemplateSelector = ({ selectedTemplate, setSelectedTemplate, onImageUpload }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setUploadedImage(file);
    onImageUpload(file); // Call the onImageUpload prop with the uploaded image
  };

  return (
    <div className="">
      <div className=' flex justify-center '>
      <button
        onClick={() => setModalOpen(true)}
        className="text-black hover:bg-gray-400  flex justify-center rounded-xl bg-white shadow font-bold p-2 "
      >
        Change Template
      </button>
      </div>
      

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <div className=" h-[600px] flex flex-col md:flex-row z-10 bg-white border rounded-lg shadow-lg mt-2 p-4 overflow-auto">
       
          <div className="grid grid-cols-2 gap-4 overflow-auto">
            {templates.map((template) => (
              <div
                key={template.id}
                className={`border-2 rounded-xl border-gray-800 cursor-pointer hover:shadow-xl ${
                  selectedTemplate === template.id ? 'border-blue-950 bg-blue-200' : 'border-gray-300 bg-white'
                }`}
                onClick={() => {
                  setSelectedTemplate(template.id);
                  setModalOpen(false); 
                }}
              >
                <img src={template.image} alt={template.name} className="w-full h-full object-cover rounded-xl" />
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TemplateSelector;
