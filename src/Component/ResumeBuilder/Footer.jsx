import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#333456] text-[#F2931C] font-ubuntu p sticky bottom-0">
      <div className="flex justify-center items-center gap-4 flex-wrap">
        <a href="/" className="text-[#F2931C] no-underline hover:bg-blue-950 hover:text-[#F2931C] p-2">Home</a>
        <a href="https://blog.abroadium.com/terms-conditions/" className="text-[#F2931C] no-underline hover:bg-blue-950 hover:text-[#F2931C] p-2">Terms</a>
        <a href="https://blog.abroadium.com/privacy-policy-3/" className="text-[#F2931C] no-underline hover:bg-blue-950 hover:text-[#F2931C] p-2">Privacy Policy</a>
        <a href="/contact" className="text-[#F2931C] no-underline hover:bg-blue-950 hover:text-[#F2931C] p-2">Contact</a>
        <span className="text-[#F2931C]">© Copyright By Abroadium.com | All Rights Reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
