import React from 'react';
import image from './homeimage1.jpg'

const ResumeBuilderSection = () => {
    return (
        <div className='flex justify-center bg-gray-100 py-9'>
            <div className='flex flex-col gap-5 md:w-[70%] md:flex-row shadow-lg shadow-gray-400 text-black rounded-xl p-5 bg-white'>
                <div className='flex flex-col gap-4 md:w-1/2'>
                    <h2 className='text-2xl font-bold'>How Resume Builder Works</h2>
                    <div className='flex items-start gap-2'>
                        <span className='text-blue-500'>•</span>
                        <div>
                            <h3 className='font-semibold'>Build your Resume</h3>
                            <p>on a mobile, tablet, or desktop device</p>
                        </div>
                    </div>
                    <div className='flex items-start gap-2'>
                        <span className='text-blue-500'>•</span>
                        <div>
                            <h3 className='font-semibold'>Customise your Resume</h3>
                            <p>with pre-written summaries and responsibilities</p>
                        </div>
                    </div>
                    <div className='flex items-start gap-2'>
                        <span className='text-blue-500'>•</span>
                        <div>
                            <h3 className='font-semibold'>Preview your Resume</h3>
                            <p>every step of the way</p>
                        </div>
                    </div>
                    <div className='flex items-start gap-2'>
                        <span className='text-blue-500'>•</span>
                        <div>
                            <h3 className='font-semibold'>Download your Resume</h3>
                            <p>and apply to jobs anywhere</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center overflow-hidden overflow-y-hidden items-center w-full'>
                    <div className='relative w-full h-[300px] overflow-y-hidden pb-[56.25%] rounded-xl shadow-lg shadow-gray-600'>
                        <iframe 
                            className='absolute top-0 left-0 w-full h-[400px] overflow-hidden overflow-y-hidden rounded-xl' 
                            src="https://static.rfstat.com/renderforest/images/v2/landing-pics/resume-landing/rm-mobile-step-2-wb.webp" 
                            title="CV Builder Video"  
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResumeBuilderSection;
