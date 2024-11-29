import './Home.css'; // Assuming you have additional styles in Home.css
import { Link } from 'react-router-dom';

function Right() {
  return (
    <div className="hidden md:flex md:flex-col md:w-[20%] md:px-4 md:py-36 float-end text-center bg-gray-500" >
      <div className="">
        <div className="flex flex-col">
          {/* Use relative positioning for the parent link and absolute for the tooltip */}
          <div className="relative mb-2">
            <Link to="/" className="px-2 py-2 rounded-md bg-slate-600 block group">
              <span className="text-white">Language</span>
              {/* Tooltip container */}
              <div className="absolute bg-gray-800 text-white text-xs py-1 px-2 mb-1 rounded-md bottom-full left-0 ml-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Currently Support English
              </div>
            </Link>
          </div>
          
          {/* Other links */}
          <Link to="/" className="mb-2 px-2 py-2 rounded-md bg-slate-600"><span className="text-white">Profile</span></Link>
          <Link to="/" className="mb-2 px-2 py-2 rounded-md bg-slate-600"><span className="text-white">Demoname ID</span></Link>
          <Link to="/" className="mb-2 px-2 py-2 rounded-md bg-slate-600"><span className="text-white">Content 1</span></Link>
          <Link to="/" className="mb-2 px-2 py-2 rounded-md bg-slate-600"><span className="text-white">Content 2</span></Link>
          <Link to="/uploadresume" className="mb-2 px-2 py-2 rounded-md bg-slate-600"><span className="text-white">Test</span></Link>
        </div>
      </div>
    </div>
  );
}

export default Right;
