import React, { useState } from "react";
import OneService from "../oneService/OneService";
import './OurServices.css'
const OurSevices = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      icon: "🪥",
      title: "Dental Cleaning",
      url: "https://i.pinimg.com/736x/60/d9/ac/60d9ace590fff101cc891c26bd0261ab.jpg",
      description:
        "Professional teeth cleaning to remove plaque and tartar, keeping your mouth fresh and healthy.",
    },
    {
      id: 2,
      icon: "😁",
      title: "Cosmetic Dentistry",
      url: "https://www.dentusfamilydental.com/wp-content/uploads/2023/05/the-5-best-cosmetic-dentistry-treatments.jpg",
      description:
        "Whitening, veneers, and smile makeovers designed to enhance your natural beauty with confidence.",
    },
    {
      id: 3,
      icon: "🦷",
      title: "Orthodontics",
      url: "https://i.pinimg.com/736x/01/a2/16/01a216d2c24a84613aabe1657321393a.jpg",
      description:
        "Modern braces and aligners to straighten your teeth and create a perfectly balanced smile.",
    },
  ]);
  return (
    <div className='serives-section' >
      <h1 style={{color:'#0da3c5'}}>Our Services</h1>
      <div
      className="services-container"
      
      >
        {services.map((service) => (
          <OneService service={service} />
        ))}
      </div>
    </div>
  );
};

export default OurSevices;
