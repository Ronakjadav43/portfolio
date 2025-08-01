import html2pdf from "html2pdf.js";
import React, { Fragment, useEffect } from "react";
import Company from "./company";
import Page from "./page";
import About from "./about";
import company from "../../data/company.json";
import projects from "../../data/projects.json";
import skill from "../../data/skills.json";
import Project from "./project";
import "./resume.css";

const Resume = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const pdfDownload = () => {
    window.scroll(0, 0);
    const element = document.getElementById("content");

    const options = {
      margin: 0,
      filename: "Ronak_Jadav.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().from(element).set(options).save();
  };

  return (
    <Fragment>
      <div
        id="content"
        style={{ display: "flex", flexDirection: "column", gap: "5px" }}
      >
        <Page>
          <About />
          <div class="section">
            <h2 class="section-header">
              <i class="fa-solid fa-briefcase"></i>   Work Experience
            </h2>
            {company.slice(0, 1).map((c, index) => (
              <Company company={c} key={index} />
            ))}
          </div>
        </Page>

        <Page>
          <div class="section">
            {company.slice(1, 4).map((c, index) => (
              <Company company={c} key={index} />
            ))}
          </div>
        </Page>

        <Page>
          <div class="section">


            <h2 class="section-header">
              <i class="fa-solid fa-diagram-project" />   Projects
            </h2>

            <Project projects={[...projects.slice(0, 4)]} />


            <div className="see-more">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://vickymoditech.github.io/#/projects"
              >
                See More Projects   <i class="fa-solid fa-angles-right"></i>
              </a>
            </div>

          </div>
        </Page>

        <Page>
          <div class="section">

            <h2 class="section-header">
              <i class="fa-solid fa-code" />   Technical Skills
            </h2>

            <div class="skills-lists">
              <div className="main_skill">
                <i class="fa-solid fa-database" />   Databases
                <div className="line-div"></div>
              </div>
              <div class="skills-list">
                {skill.slice(0, 3).map((s) => (
                  <span class="skill">
                    <span>{s.name}</span>
                    <span> {s.year} yrs</span>
                  </span>
                ))}
              </div>
            </div>

            <div class="skills-lists">
              <div className="main_skill">
                <i class="fa-solid fa-laptop-code" />   Front-end Development
                <div className="line-div"></div>
              </div>
              <div class="skills-list">
                {skill.slice(3, 14).map((s) => (
                  <span class="skill">
                    <span>{s.name}</span>
                    <span> {s.year} yrs</span>
                  </span>
                ))}
              </div>
            </div>

            <div class="skills-lists">



              <div className="main_skill">
                <i class="fa-solid fa-laptop-code" />   Back-end Development
                <div className="line-div"></div>
              </div>


              <div class="skills-list">
                {skill.slice(14, 16).map((s) => (
                  <span class="skill">
                    <span>{s.name}</span>
                    <span> {s.year} yrs</span>
                  </span>
                ))}
              </div>
            </div>


            <div class="skills-lists">
              <div className="main_skill">
                <i class="fa-solid fa-laptop-code" />   Extra
                <div className="line-div"></div>
              </div>
              <div class="skills-list">
                {skill.slice(16, 20).map((s) => (
                  <span class="skill">
                    <span>{s.name}</span>
                    <span> {s.year} yrs</span>
                  </span>
                ))}
              </div>
            </div>








            <h2 class="section-header">
              <i class="fa-solid fa-user-graduate" />   EDUCATION
            </h2>

            <div class="education-item">
              <h3 class="degree">
                Master of Computer Applications (MCA)
              </h3>
              <p class="school">Charotar University of Science and Technology (CHARUSAT)</p>
              <p class="education-years">Sep 2017 - Oct 2019</p>
            </div>
          </div>
        </Page>
      </div>
      <button className="download" onClick={pdfDownload}>
        <i id="download-btn" className="fa-sharp fa-solid fa-circle-down"></i>
      </button>
    </Fragment>
  );
};

export default Resume;
