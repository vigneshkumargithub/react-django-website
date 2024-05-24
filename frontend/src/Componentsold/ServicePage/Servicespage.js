// /////// new file of ...... servicepage.js

// import React, { useEffect, useState  } from "react";
// import Footer from "../Home/Footer";
// import ScrollToTop from "../Home/ScrollToTop";
// import './Servicespage.css';
// import { FaCalendarAlt, FaChalkboard, FaFacebook, FaPaintBrush, FaPaintRoller, FaRegHandPointDown, FaTruck, FaTruckLoading } from 'react-icons/fa';
// import Webdevelopment from "./Webdevelopment"; // Import Webdevelopment component
// import Webdesign from "./Webdesign";
// import Ecommerce from "./Ecommerce";
// import Delivery from "./Delivery";
// import Aos from 'aos';
// import "aos/dist/aos.css";

// function Servicespage() {
//   const [showContent, setServicePageContent] = useState(true);
//   const [showWebContent, setWebdevelopementContent] = useState(false);
//   const [showDesignContent, setWebDesignContent] = useState(false);
//   const [showCommerceContent, setECommerceContent] = useState(false);

      


//   const handledesignclick = () => {
//     setServicePageContent(true);
//     setWebdevelopementContent(false);
//     setWebDesignContent(false);
//     setECommerceContent(false);
//   }

//   const handledesignclick2 = () => {
//     setServicePageContent(false);
//     setWebdevelopementContent(true);
//     setWebDesignContent(false);
//     setECommerceContent(false);
//   }

//   const handledesignclick3 = () => {
//     setServicePageContent(false);
//     setWebdevelopementContent(false);
//     setWebDesignContent(true);
//     setECommerceContent(false);
//   }

//   const handledesignclick4 = () => {
//     setServicePageContent(false);
//     setWebdevelopementContent(false);
//     setWebDesignContent(false);
//     setECommerceContent(true);
//   }

// useEffect(()=>{
//   Aos.init({duration:2000});
// },[])

//   return (
//     <div id="service1">
//       <div className="main-content">
//         <div className='social-header-bg-service'>
//           <div className='row text-contents-service'>
//             <div className='col-lg-6 col-md-12 col-sm-12 offset-lg-0 offset-md-0 offset-sm-0 text-content-service'>
//               <div className="left-content">
//                 <h1>Web development Service</h1>
//                 <div className='line-service'></div>
//                 <h4>We deliver not just a website</h4>
//                 <h4>but a sale-driven portal !!!</h4>
//               </div>
//             </div>
//             <div className="col-lg-6 col-md-12 col-sm-12 text-image-service">
//               <img src="/Imagefile/Man.png" height="400" width="400" />
//             </div>
//           </div>
//         </div>

//         <div data-aos='fade-up' className="pagein-content-service m-5">
//           <h3>Our Service</h3>
//         </div>

//         <div className="image-container">
//           <div className="row">
//             <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
//               <div data-aos='fade-right' className="card-service" onClick={handledesignclick}>
//                 <div  className='icon'>
//                   <FaFacebook className="icons youtube black-icon m-2" />
//                 </div>
//                 <p>Web Developement</p>
//               </div>
//             </div>
//             <div data-aos='fade-right'  className="col-lg-3 col-md-4 col-sm-6 mb-3">
//               <div className="card-service" onClick={handledesignclick2}>
//                 <div className='icon'>
//                   <FaPaintBrush className="icons youtube black-icon m-2" />
//                 </div>
//                 <p>Web Design & Redesign</p>
//               </div>
//             </div>
//             <div data-aos='fade-right' className="col-lg-3 col-md-4 col-sm-6 mb-3">
//               <div className="card-service" onClick={handledesignclick3}>
//                 <div className='icon'>
//                   <FaCalendarAlt className="icons youtube black-icon m-2" />
//                 </div>
//                 <p>E-commerce Website</p>
//               </div>
//             </div>
//             <div data-aos='fade-right' className="col-lg-3 col-md-4 col-sm-6 mb-3">
//               <div className="card-service" onClick={handledesignclick4}>
//                 <div className='icon'>
//                   <FaTruck className="icons youtube black-icon m-2" />
//                 </div>
//                 <p>Delivery App Developement</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {showContent && <Webdevelopment />}
//         {showWebContent && <Webdesign />}
//         {showDesignContent && <Ecommerce />}
//         {showCommerceContent && <Delivery />}

//         <ScrollToTop />
//         <Footer />
//       </div>
//     </div>
//   );

// }

// export default Servicespage;
////////////////////////////////////////////////




/////// new file of ...... servicepage.js

import React, { useState, useEffect } from "react";
import Footer from "../Home/Footer";
import ScrollToTop from "../Home/ScrollToTop";
import './Servicespage.css';
import { FaCalendarAlt, FaChalkboard, FaFacebook, FaPaintBrush, FaPaintRoller, FaRegHandPointDown, FaTruck, FaTruckLoading } from 'react-icons/fa';
import Webdevelopment from "./Webdevelopment"; // Import Webdevelopment component
import Webdesign from "./Webdesign";
import Ecommerce from "./Ecommerce";
import Delivery from "./Delivery";
import { fetchservicepageicon, fetchservicepage, base_api } from "../Axios/Axios";
import Aos from 'aos';
import "aos/dist/aos.css";


function Servicespage() {
  const [showContent, setServicePageContent] = useState(true);
  const [showWebContent, setWebdevelopementContent] = useState(false);
  const [showDesignContent, setWebDesignContent] = useState(false);
  const [showCommerceContent, setECommerceContent] = useState(false);

      
  const [servicepageicon, setservicepageicon] = useState([]);
  const [servicepage, setservicepage] = useState([]);
  const [isBackendError, setIsBackendError] = useState(false);


  const handledesignclick = () => {
    setServicePageContent(true);
    setWebdevelopementContent(false);
    setWebDesignContent(false);
    setECommerceContent(false);
  }

  const handledesignclick2 = () => {
    setServicePageContent(false);
    setWebdevelopementContent(true);
    setWebDesignContent(false);
    setECommerceContent(false);
  }

  const handledesignclick3 = () => {
    setServicePageContent(false);
    setWebdevelopementContent(false);
    setWebDesignContent(true);
    setECommerceContent(false);
  }

  const handledesignclick4 = () => {
    setServicePageContent(false);
    setWebdevelopementContent(false);
    setWebDesignContent(false);
    setECommerceContent(true);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const servicepageiconData = await fetchservicepageicon();
        const servicepageData = await fetchservicepage();
        setservicepageicon(servicepageiconData);
        setservicepage(servicepageData);

      } catch (error) {
        console.error("Error fetching servicepageicon and servicepage data:", error);
        setIsBackendError(true);
      }
    };

    fetchData();
  }, []);

  useEffect(()=>{
    Aos.init({duration:2000});
  },[])


  if (isBackendError || !servicepage  ||!servicepageicon  || !servicepage.length  ||  !servicepageicon.length ) {


  return (
    <div id="service1">
      <div className="main-content">
        <div className='social-header-bg-service'>
          <div className='row text-contents-service'>
            <div className='col-lg-6 col-md-12 col-sm-12 offset-lg-0 offset-md-0 offset-sm-0 text-content-service'>
              <div className="left-content">
                <h1>Web development Service</h1>
                <div className='line-service'></div>
                <h4>We deliver not just a website</h4>
                <h4>but a sale-driven portal!!!.....!</h4>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 text-image-service">
              <img src="/Imagefile/Man.png" height="400" width="400" />
            </div>
          </div>
        </div>

        <div data-aos='fade-up' className="pagein-content-service m-5">
          <h3>Our Service</h3>
        </div>

        <div className="image-container">
          <div className="row">
            <div  className="col-lg-3 col-md-4 col-sm-6 mb-3">
              <div data-aos='fade-right'  className="card-service" onClick={handledesignclick}>
                <div className='icon'>
                  <FaFacebook className="icons youtube black-icon m-2" />
                </div>
                <p>Web Developementtt</p>
              </div>
            </div>
            <div   className="col-lg-3 col-md-4 col-sm-6 mb-3">
              <div  data-aos='fade-right' className="card-service" onClick={handledesignclick2}>
                <div className='icon'>
                  <FaPaintBrush className="icons youtube black-icon m-2" />
                </div>
                <p>Web Design & Redesign</p>
              </div>
            </div>
            <div  className="col-lg-3 col-md-4 col-sm-6 mb-3">
              <div data-aos='fade-right' className="card-service" onClick={handledesignclick3}>
                <div className='icon'>
                  <FaCalendarAlt className="icons youtube black-icon m-2" />
                </div>
                <p>E-commerce Website</p>
              </div>
            </div>
            <div  className="col-lg-3 col-md-4 col-sm-6 mb-3">
              <div data-aos='fade-right' className="card-service" onClick={handledesignclick4}>
                <div className='icon'>
                  <FaTruck className="icons youtube black-icon m-2" />
                </div>
                <p>Delivery App Developement</p>
              </div>
            </div>
          </div>
        </div>

        {showContent && <Webdevelopment />}
        {showWebContent && <Webdesign />}
        {showDesignContent && <Ecommerce />}
        {showCommerceContent && <Delivery />}

        <ScrollToTop />
        <Footer />
      </div>
    </div>
  );
}




return (
  <div id="service1">
    <div className="main-content">
      <div className='social-header-bg-service'>
      {servicepage.map((data)=>(
        <div className='row text-contents-service'>
          <div className='col-lg-6 col-md-12 col-sm-12 offset-lg-0 offset-md-0 offset-sm-0 text-content-service'>
            <div className="left-content">
              <h1 dangerouslySetInnerHTML={{ __html: data.heading}}/>
              <div className='line-service'></div>
              <h4 dangerouslySetInnerHTML={{ __html: data.content}} />
              {/* <h4>but a sale-driven portal!!!..ee..</h4> */}
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 text-image-service">
            <img src={`${base_api}${data.image}`} height="400" width="400" />
          </div>
        </div>
      ))}
      </div>

      <div data-aos='fade-up' className="pagein-content-service m-5">
        <h3>Our Service</h3>
      </div>
      
      <div className="image-container">
      {servicepageicon.map((service)=>(
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
            <div data-aos='fade-right'  className="card-service" onClick={handledesignclick}>
              <div className='icon'>
                <img src={`${base_api}${service.webdevelopment_image}`} className="icons youtube black-icon m-2" />
              </div>
              <p dangerouslySetInnerHTML={{ __html: service.webdevelopment_text}} />
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
            <div data-aos='fade-right' className="card-service" onClick={handledesignclick2}>
              <div className='icon'>
                <img src={`${base_api}${service.webdesign_image}`} className="icons youtube black-icon m-2"/> 
              </div>
              <p dangerouslySetInnerHTML={{ __html: service.webdesign_text}} />
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
            <div data-aos='fade-right' className="card-service" onClick={handledesignclick3}>
              <div className='icon'>
                <img src={`${base_api}${service.ecommerce_image}`} className="icons youtube black-icon m-2"/>
              </div>
              <p dangerouslySetInnerHTML={{ __html: service.ecommerce_text}} />
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
            <div  data-aos='fade-right' className="card-service" onClick={handledesignclick4}>
              <div className='icon'>
                <img src={`${base_api}${service.delivery_image}`} className="icons youtube black-icon m-2"/>
              </div>
              <p dangerouslySetInnerHTML={{ __html: service.delivery_text}} />
            </div>
          </div>
        </div>
          ))}
      </div>

      {showContent && <Webdevelopment />}
      {showWebContent && <Webdesign />}
      {showDesignContent && <Ecommerce />}
      {showCommerceContent && <Delivery />}

      <ScrollToTop />
      <Footer />
    </div>
  </div>
);

}

export default Servicespage;
