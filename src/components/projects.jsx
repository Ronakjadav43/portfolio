import React from "react";
import { useNavigate } from "react-router-dom";
import projectsData from "../data/projects.json";
import "../App.css";

function Projects() {
  const navigate = useNavigate();
  window.scroll(0, 0);

  const click = (path) => {
    navigate(path);
  };

  if (!projectsData) {
    return <div>Project not found.</div>;
  }

  return (
    <>

      {/* <div className="product-section">
       <h1 className="w3-animate-bottom" style={{ fontSize: "45px" }}>
         What I Built
       </h1>
       {projectsData.map((project, index) => {
        return (
          <section
            className="w3-animate-bottom profile-section h_300"
            style={{ justifyContent: "space-around" }}
            key={index}
          >
            <div className="profile-content" style={{ maxWidth: "unset" }}>
              <div className="profile-details">
                <h3>{project.title}</h3>
                <h4 style={{ gap: "5px" }}>Role : {project.role}</h4>
                <h4 style={{ gap: "5px" }}>
                  Company / Freelance :{" "}
                  <a
                    href={project.companySite}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.companyName}{" "}
                  </a>
                  <img
                    style={{ height: "50px" }}
                    alt="freelance logo"
                    src={project.workLogo}
                  />
                </h4>
                <p>{project.description}</p>
              </div>
              <div className="button-group">
                <button
                  onClick={() => click(`/projectDetail/${project.id}`)}
                  className="learn-more"
                >
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Read More</span>
                </button>
                <button
                  className="url-button"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    window.open(project.link, "_blank");
                  }}
                >
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span>URL</span>
                </button>
              </div>
            </div>
            <div className="w3-animate-bottom product-image">
              <img src={project.logo} alt="Restaurant Reservation" />
            </div>
          </section>
        );
      })}
    </div> */}


      <div class="w-full mx-auto px-4 py-12 lg:py-20 overflow-x-hidden bg-[#e6dacf]">
        {/* <!-- Projects Header --> */}
        <div class="text-center mb-12">
          <div class="flex items-center justify-center gap-3 mb-8">
            <div class="w-4 h-4 bg-project-blue rounded-sm bg-blue-600"></div>
            <h1 class="text-3xl lg:text-4xl font-bold text-gray-900">What I Built</h1>
          </div>

          {/* <!-- Description Text --> */}
          <div class="max-w-2xl mx-auto">
            <p class="text-gray-700 text-base lg:text-lg leading-relaxed">
              I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.
            </p>
          </div>
        </div>

        {/* <!-- Project Card --> */}
        <div class="flex flex-col max-w-6xl mx-auto gap-5">

          {projectsData.map((project, index) => {
            return (
              <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                <div class="flex sm:flex-col md:flex-row ">
                  {/* <!-- Left Content --> */}
                  <div class="sm:w-full md:w-[75%] sm:p-4 md:p-8 lg:p-12">
                    {/* <!-- Blue accent line --> */}

                    <div className="flex gap-5 relative mb-5">
                      <div class="w-2 h-full bg-blue-600 mb-6 absolute top-0 left-0 bottom-0"></div>



                      <div className="flex flex-col pl-5 p-2">


                        {/* <!-- Project Title --> */}
                        <h2 class="sm:text-[20px] md:text-2xl lg:text-3xl font-bold text-project-blue mb-2 text-blue-600">
                          {project.title}
                        </h2>

                        {/* <!-- Role Title --> */}
                        <h3 class="sm:text-[15px] md:text-lg font-semibold text-gray-900 mb-2">
                          Role Title :  {project.role}
                        </h3>

                        <h3 class="flex gap-2 sm:text-[15px] md:text-lg font-semibold text-gray-900">
                          <span> Company :</span>
                          <a
                            href={project.companySite}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {project.companyName}{" "}
                          </a>
                          <img
                            style={{ height: "25px" }}
                            alt="freelance logo"
                            src={project.workLogo}
                          />
                        </h3>
                      </div>


                    </div>

                    {/* <!-- Project Description --> */}
                    <p class="text-gray-700 leading-relaxed">
                      {project.description}
                    </p>


                    <div className="button-group">
                      <button
                        onClick={() => click(`/projectDetail/${project.id}`)}
                        className="learn-more"
                      >
                        <span className="circle" aria-hidden="true">
                          <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Read More</span>
                      </button>
                      <button
                        className="url-button"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => {
                          window.open(project.link, "_blank");
                        }}
                      >
                        <svg
                          height="24"
                          width="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 0h24v24H0z" fill="none"></path>
                          <path
                            d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <span>URL</span>
                      </button>
                    </div>



                  </div>

                  {/* <!-- Right Image/Visual --> */}
                  <div class="sm:w-full md:w-[25%] min-w-[280px] h-auto min-h-[200px] bg-[#f4ece6] p-4  flex items-center justify-center">

                    <div className="w3-animate-bottom product-image">
                      <img src={project.logo} alt="Restaurant Reservation" />
                    </div>
                  </div>
                </div>
              </div>

            );
          })}
        </div>

       
      </div>

    </>
  );
}

export default Projects;
