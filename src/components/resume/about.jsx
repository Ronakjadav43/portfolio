import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <div class="headers">
        <div>
          <h1 class="name">Ronak Jadav</h1>
          <p class="title">Senior Full Stack Developer</p>
        </div>
        <div class="contact-info">
          <div class="contact-item">
            <span>
              <i class="fa-solid fa-envelope"></i>
            </span>
            <span>
              <a href="mailto:ronakjadav.tech@gmail.com">
                ronakjadav.tech@gmail.com
              </a>
            </span>
          </div>
          <div class="contact-item">
            <span>
              <i class="fa-solid fa-link"></i>
            </span>
            <span>
              <a
                href="https://vickymoditech.github.io"
                rel="noreferrer"
                target="_blank"
              >
                vickymoditech.github.io
              </a>
            </span>
          </div>
          <div class="contact-item">
            <span>
              <i class="fa-brands fa-github"></i>
            </span>
            <span>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/vickymoditech/"
              >
                github.com/vickymoditech
              </a>
            </span>
          </div>
          <div class="contact-item">
            <span>
              <i class="fa-brands fa-linkedin"></i>
            </span>
            <span>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/ronak-jadav-9b5413285/"
              >
                ronakjadav@linkedin
              </a>
            </span>
          </div>
          <div class="contact-item">
            <span>
              <i class="fa-solid fa-location-dot"></i>
            </span>
            <span>
166, Samarthya Serene society, Masma-Orma Road, Olpad Surat-394540 Gujarat India.

            </span>
          </div>
        </div>
      </div>
      <div class="section">
        <h2 class="section-header">
          <i class="fa-solid fa-address-card"></i> &nbsp; About Me
        </h2>
        <p>
         I'm a Front-End Developer with 6+ years of experience building pixel-perfect, high-performance web interfaces. I specialize in turning Figma designs into responsive UIs using React.js, Next.js, Tailwind CSS, and modern frameworks. My work spans from landing pages to full-scale SaaS apps, always focused on clean code, performance, and user experience.
<br />
Tech Skills: HTML5, CSS3, SCSS, JavaScript (ES6+), TypeScript, React, Next.js, Angular, Astro, Tailwind CSS, Bootstrap, Material UI, Git, WordPress, Webflow
<br />
I deliver fast, SEO-friendly, mobile-first websites with smooth animations and cross-browser compatibility—ready for production and built to scale
        </p>
      </div>
    </Fragment>
  );
};

export default About;
