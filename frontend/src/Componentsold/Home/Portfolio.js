/////////// working good condition
//// ///// jusut checking for frontend testimonial uainf carousel method and backend data passing this file

import { useState,useEffect, useRef } from "react";
import Carousel from "react-bootstrap/Carousel";
import {fetchfourthsection, fetchfourthsectionbanner, base_api } from "../Axios/Axios";
import Aos from "aos";
import 'aos/dist/aos.css';

function Portfolio() {
  const carouselRef = useRef(null);
  const [fourthsection, setFourthsection] = useState([]);
  const [fourthsectionbanner, setFourthsectionbanner] = useState([]);
  const [isBackendError, setIsBackendError] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.next();
      }
    }, 2000); // Adjust this value to change the interval duration in milliseconds (e.g., 2000 for 2 seconds)

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fourthsectionData = await fetchfourthsection();
        const fourthsectionbannerData = await fetchfourthsectionbanner();
        setFourthsection(fourthsectionData);
        setFourthsectionbanner(fourthsectionbannerData);
      } catch (error) {
        console.error("Error fetching fourth section data:", error);
        setIsBackendError(true);
      }
    };

    fetchData();
  }, []);

  useEffect(()=> {Aos.init({duration:2000});},[])

     if (isBackendError || !fourthsection.length) {

     return (
       <div className="portfolio-header">
         <div className="portfolio-bg">
           <div  className="portfolio-content">
             <p data-aos="flip-up">Our works f'data</p>
             <h3 data-aos="flip-up">Here's a sneak peek of what <br/> we are passionate about f'data</h3>
           </div>

           <img src="Imagefile/4thsec_bulb.png" data-aos="fade-up-right" className="portfolio-bulb"/>
           <img src="Imagefile/4thsec_laptop.png" data-aos="flip-up" className="portfolio-lap"/>
           <img src="Imagefile/4thsec_slat.png" data-aos="fade-up-left" className="portfolio-slat"/>

           <a type="submit" data-aos="fade-up" className="startbtn-protfolio" href="/socialmediamarketing" > 
                      
             Explore more f'data<i className="fa-solid fa-plus"></i>
           </a>

         </div>
       </div>
     );
   }

  return (
    <div className="portfolio-header">
      <div className="portfolio-bg">
      {fourthsection.map((fourthsection) => (
        <div data-aos="flip-up" className="portfolio-content" >
          <p dangerouslySetInnerHTML={{ __html: fourthsection.title }} ></p>
          <h3 dangerouslySetInnerHTML={{ __html: fourthsection.subtitle }}></h3>
        </div>
      ))}

  {fourthsection.map((fourthsection) => (
     <div key={fourthsection.id}>

        <img src={`${base_api}${fourthsection.png1}`} data-aos="fade-up-right" className="portfolio-bulb"  />
        
        <div className="carousel-container1">
          <div className="carousel-content">
            <Carousel ref={carouselRef} className="mb-5">
                {fourthsectionbanner.map((fourthsectionbanner) => (
              <Carousel.Item style={{ height: "400px", cursor: "pointer" }}>
                <img src={`${base_api}${fourthsectionbanner.posterimage}`} className="d-block bulb three-img" />
              </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>


        <img src={`${base_api}${fourthsection.png2}`} data-aos="fade-up-left" className="portfolio-slat"/>

      <a type="submit" data-aos="fade-up" className="startbtn-protfolio" href={fourthsection.button_link}>
        {fourthsection.button_text} <i className="fa-solid fa-plus"></i>
      </a>


      </div>

  ))}

      </div>
    </div>
  );
}

export default Portfolio;
