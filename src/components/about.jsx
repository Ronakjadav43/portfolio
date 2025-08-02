import React from 'react';
// You'll need to install these icons: npm install lucide-react
import {  Twitter, Linkedin} from 'lucide-react';
import "../App.css";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  //   const handleNavigation = (path) => {
  //   // Navigation logic here
  //   console.log(`Navigating to: ${path}`);
  // };


  return (
    <>
      {/* <div className="container">
     
      <div className="diagonal-line"></div>

      <header className="header_div">
        <h1 className="greeting">
          Hello,
          <br />
          Ronak Jadav
        </h1>
      </header>

      <main className="content">
        <div className="profile-image">
          <img src="/img/profile.jpg" alt="Profile" width={300} height={400} />
        </div>

        <div className="about" style={{ padding: "10px" }}>
          <h2>About me</h2>
          <p>
            Hey! I’m a Senior Software Developer with 6+ years of experience turning Figma designs into clean, responsive, and fast websites. I love working with React, Next.js, and Tailwind CSS to build smooth, user-friendly interfaces that just work. Whether it's a landing page, a full web app, or something in between — I focus on details, performance, and delivering exactly what you need, without the guesswork. Let’s build something awesome together!
          </p>

          <div className="button-group">
            <span onClick={() => handleNavigation("/resume")}>
              <button className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">My Resume</span>
              </button>
            </span>
            <span onClick={() => handleNavigation("/projects")}>
              <button className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">My Projects</span>
              </button>
            </span>
          </div>
        </div>
      </main>
    </div> */}


      <div className="w-full md:h-full bg-white flex justify-center items-center">



        <main className="flex sm:flex-col md:flex-row md:h-full">
          {/* Left Panel - Profile Section */}
          <div className="sm:w-full md:w-2/5 sm:h-[230px] md:h-full md:bg-[#e6dacf] flex flex-col items-center justify-center relative">
            {/* Profile Card */}
            <div className="bg-white rounded-lg shadow-lg text-center sm:w-[280px] md:w-[375px] absolute sm:bottom-[-180px] md:bottom-auto md:right-[-100px]">
              <div className="flex flex-col justify-center sm:px-4 sm:py-4 md:px-8 md:py-8  bg-[#f4ece6]">
                <div className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] mx-auto mb-4 rounded-full overflow-hidden bg-gray-300">

                  <img src="/portfolio/img/profile.jpg" alt="Profile" width={200} height={200} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Ronak</h2>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Jadav</h2>
                <div className="w-12 h-0.5 bg-blue-600 mx-auto mb-4"></div>




                <p className="sm:hidden md:flex justify-center text-gray-600 text-sm font-medium tracking-wider text-center">Senior Software Developer</p>





                <div className="sm:flex md:hidden gap-5">
                  <button
                    onClick={() => handleNavigation("/resume")}
                    className="flex justify-center items-center bg-blue-600 text-white px-4 py-1 w-[110px] h-[35px] rounded-full font-bold hover:bg-blue-700 transition-colors text-[14px]"
                  >
                    RESUME
                  </button>
                  <button
                    onClick={() => handleNavigation("/projects")}
                    className="flex justify-center items-center border-2 border-black text-gray-700 px-4 py-1 w-[110px] h-[35px] rounded-full font-bold hover:border-black hover:text-gray-900 transition-colors text-[14px]"
                  >
                    PROJECTS
                  </button>
                </div>






              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-4 px-4 py-2">
                {/* <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Facebook size={20} />
                </button> */}

                <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <a
                    href="https://www.linkedin.com/in/ronak-jadav-9b5413285/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={20} />
                  </a>
                </button>
                <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Twitter size={20} />
                </button>
                {/* <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Instagram size={20} />
                </button> */}
              </div>
            </div>
          </div>

          {/* Right Panel - Content Section */}
          <div className="sm:w-full md:w-3/5 md:h-full sm:bg-[#e6dacf] md:bg-white flex flex-col justify-center sm:pt-52  md:pl-40 sm:p-5 md:p-10">
            <div className="w-full max-w-[485px]">
              <h1 className="sm:text-5xl md:text-7xl font-black text-gray-900 mb-6">Hello</h1>
              <p className="sm:text-[19px] md:text-xl text-gray-600 mb-8 font-bold">{"Here's who I am & what I do"}</p>

              {/* Action Buttons */}
              <div className="sm:hidden md:flex gap-5 mb-8">
                {/* <button
                  onClick={() => handleNavigation("/resume")}
                  className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
                >
                  RESUME
                </button>
                <button
                  onClick={() => handleNavigation("/projects")}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:border-gray-400 hover:text-gray-900 transition-colors"
                >
                  PROJECTS
                </button> */}
                <button
                  onClick={() => handleNavigation("/resume")}
                  className="flex justify-center items-center bg-blue-600 text-white px-4 py-1 w-[110px] h-[35px] rounded-full font-bold hover:bg-blue-700 transition-colors text-[14px]"
                >
                  RESUME
                </button>
                <button
                  onClick={() => handleNavigation("/projects")}
                  className="flex justify-center items-center border-2 border-black text-gray-700 px-4 py-1 w-[110px] h-[35px] rounded-full font-bold hover:border-black hover:text-gray-900 transition-colors text-[14px]"
                >
                  PROJECTS
                </button>
              </div>

              {/* About Text */}
              <div className="space-y-4 text-gray-600 leading-relaxed ">
                <p className='text-[19px]'>
                  Hey! I'm a Senior Software Developer with 4+ years of experience turning Figma designs into clean, responsive,
                  and fast websites. I love working with React, Next.js, and Tailwind CSS to build smooth, user-friendly
                  interfaces that just work.
                </p>
                <p className='text-[19px]'>
                  Whether it's a landing page, a full web app, or something in between — I focus on details, performance,
                  and delivering exactly what you need, without the guesswork. Let's build something awesome together!
                </p>
              </div>
            </div>
          </div>
        </main>


      </div>
    </>
  );
}

export default About;
