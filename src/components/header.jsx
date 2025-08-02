import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Header = () => {
  const navigate = useNavigate();

  // const click = (path) => {
  //   navigate(path);
  // };

  const handleNavigation = (path) => {
    navigate(path);
  };



  return (
    // <header className="header">
    //   <div className="logo"></div>
    //   <div className="menu">
    //     <ul>
    //       <li>
    //         <span
    //           onClick={() => {
    //             click("/");
    //           }}
    //         >
    //           About
    //         </span>
    //       </li>
    //       <li>
    //         <span
    //           onClick={() => {
    //             click("/resume");
    //           }}
    //         >
    //           Resume
    //         </span>
    //       </li>
    //       <li>
    //         <span
    //           onClick={() => {
    //             click("/projects");
    //           }}
    //         >
    //           Projects
    //         </span>
    //       </li>
    //     </ul>
    //   </div>
    // </header>

      <header className="w-full flex justify-between items-center  px-4 py-3 md:px-8 md:py-6 bg-white sticky top-0 z-50 shadow-md">
        <div className="flex items-center space-x-2">
        
          <div className="flex sm:flex-col md:flex-row sm:items-start md:items-center gap-3">
          <span className="flex items-center gap-3 font-semibold text-lg">
              <div className="w-3 h-3 bg-blue-600 rounded-sm"></div>
            Ronak Jadav</span>
          <span className="text-gray-500 text-sm">/ Senior Software Developer</span>
          </div>
        </div>
        <nav className="sm:hidden md:flex  space-x-8">
          <button
            onClick={() => handleNavigation("/")}
            className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
          >
            ABOUT ME
          </button>
          <button
            onClick={() => handleNavigation("/resume")}
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            RESUME
          </button>
          <button
            onClick={() => handleNavigation("/projects")}
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            PROJECTS
          </button>
         
        </nav>
      </header>

  );
};

export default Header;
