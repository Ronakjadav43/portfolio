import React from "react";
import "../App.css";
import { Linkedin,  Twitter } from "react-feather";

function Footer() {
  return (
    // <footer>
    //   <div className="footer-content">
    //     <div className="footer-info">
    //       <p>Phone</p>
    //       <p>
    //         <a href="tel:+919723242591">+91 9723242591</a>
    //       </p>
    //     </div>
    //     <div className="footer-info">
    //       <p>Email</p>
    //       <p>
    //         <a href="mailto:ronakjadav.tech@gmail.com">ronakjadav.tech@gmail.com</a>
    //       </p>
    //     </div>
    //     <div className="footer-social">
    //       <p>Follow Me</p>
    //       <div className="social-logo">
    //         <a
    //           href="https://www.linkedin.com/in/ronak-jadav-9b5413285/"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           <i
    //             style={{ color: "#000", fontSize: "25px" }}
    //             className="fab fa-linkedin"
    //           ></i>
    //         </a>
    //         {/* <a
    //           href="https://github.com/vickymoditech/"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           <i style={{ color: "#000", fontSize: "25px" }} className="fab fa-github"></i>
    //         </a> */}
    //       </div>
    //     </div>
    //   </div>
    // </footer>

    <footer className="bg-white border-t border-gray-100  py-3 sm:px-4 md:px-8 md:sticky">
      <div className="w-full flex sm:flex-col-reverse md:flex-row justify-between sm:items-start md:items-center gap-5">
        <div className="text-sm text-gray-500">
          © 2025 by Ronak Jadav.
          <br />
          Powered and secured by Next.js
        </div>

        <div className="flex justify-center flex-wrap gap-10">
          <div className="text-center">
            <p className="font-semibold text-gray-900 mb-1">Call</p>
            <p className="text-sm text-gray-600"> <a href="tel:+919723242591">+91 9723242591</a></p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-gray-900 mb-1">Write</p>
            <p className="text-sm text-gray-600"> <a href="mailto:ronakjadav.tech@gmail.com">ronakjadav.tech@gmail.com</a></p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-gray-900 mb-1">Follow</p>
            <div className="flex space-x-2">
              {/* <Twitter size={16} className="text-gray-600" /> */}
              <a
                href="https://www.linkedin.com/in/ronak-jadav-9b5413285/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={16} className="text-gray-600" />
              </a>

              <Twitter size={16} className="text-gray-600" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
