import React from 'react';
import Button from '@mui/material/Button';
import servicesfirstimg from "../images/servicesfirstimg.jpg";
import servicessecondimg from "../images/servicessecondimg.jpg";
import './Services.css'; // Import CSS file for styling

const Services = () => {
  return (
    <div className="services-container">
      <div className='services-first-child'>
        <span>OUR SERVICES</span>
        <h3>Explore Our Digital Ecosystem</h3>
        <div>“Dive into innovation with TechTorch Solutions – where ideas meet expertise. Unleash the power of cutting-edge services to elevate your digital journey.”</div>
        <Button variant="contained" className="discover-button">Discover More</Button>
      </div>
      <div className='services-second-child'>
        <img src={servicesfirstimg} className='servicesfirstimg' alt="Service First" />
        <img src={servicessecondimg} className='servicessecondimg' alt="Service Second" />
      </div>
    </div>
  );
};

export default Services;
