import React from "react";
import techtorchlogo from "../images/techtorchlogo.jpg";
import "./ContactUS.css";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contactus-firstchild">
        <div className="contactUStext-outer">
          <h3>CONTACT US</h3>
          <div className="contactUS-icons-wrapper">
            <PhoneIcon className="contactUS-icons" />{" "}
            <div>+91-7038782722</div>
          </div>
          <div className="contactUS-icons-wrapper">
            <EmailIcon className="contactUS-icons" />{" "}
            contact@techtorchsolutions.com
          </div>
          <div className="contactUS-icons-wrapper">
            <LocationOnIcon className="contactUS-icons" /> Pune, Maharashtra
          </div>
        </div>

        <div>
          <h3 className="conatctus_services">SERVICES</h3>
          <div>App Development</div>
          <div>Website Development</div>
          <div>UI/UX Design</div>
          <div>Digital Marketing and Lead Generation</div>
          <div>Training Programs</div>
        </div>
        <div className="logo-social-wrapper">
          <img
            src={techtorchlogo}
            className="contact-us-techtorchlogo"
            alt="Techtorch Solutions"
          />
          <div>
            <a
              href="https://www.linkedin.com/company/techtorch-solutions-pune/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className="contactUS-icons" />
            </a>
            <a
              href="https://www.instagram.com/techtorch_solutions?igshid=YXFwejdrZXl5Yzh1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="contactUS-icons" />
            </a>
          </div>
        </div>
      </div>
      <div className="contactus-secondchild">
        Copyright © 2024 | Powered by Techtorch solutions
      </div>
    </div>
  );
};

export default ContactUs;
