//////////////////////////// working good condition

//// just checking for multitime show backend data (client logo) visible in one time
//////....................................../////

import React, { useRef, useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { fetcheighthsection, base_api } from '../Axios/Axios';
import 'aos/dist/aos.css';
import Aos from 'aos';

function Client() {
  const owlCarouselRef = useRef(null);
  const [margin, setMargin] = useState(30); // Initial margin
  const [eighthsection, setEighthsection] = useState([]);
  const [isBackendError, setIsBackendError] = useState(false);
  

  // Owl Carousel Settings
  const options = {
    margin: margin,
    responsiveClass: true,
    nav: true,
    autoplay: true,
    navText: ["<", ">"],
    smartSpeed: 1000,
    responsive: {  
      0: { items: 1 },
      375: { items: 1 },
      400: { items: 2 },
      600: { items: 2 },
      700: { items: 3 },
      1000: { items: 4 },
      1200: { items: 5 },
      1400: { items: 6 }
    },
    loop: true
  };

  useEffect(() => {
    // Update margin dynamically based on screen width
    const updateMargin = () => {
      const screenWidth = window.innerWidth;
      setMargin(screenWidth < 400 ? 10 : 30);
    };

    updateMargin(); // Initial update
    window.addEventListener('resize', updateMargin); // Add listener for window resize

    return () => {
      window.removeEventListener('resize', updateMargin); // Cleanup
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eighthsectionData = await fetcheighthsection();
        setEighthsection(eighthsectionData);
      } catch (error) {
        console.error("Error fetching eighth section data:", error);
        setIsBackendError(true);
      }
    };
  
    fetchData();
  }, [  ]);

  const handlePrev = () => {
    owlCarouselRef.current.prev();
  };

  const handleNext = () => {
    owlCarouselRef.current.next();
  };

  useEffect(()=> {Aos.init({duration:2000});},[])



  if (isBackendError || !eighthsection.length) {
    // Display offline mode or fallback content
    return (
      <div className='client-header'>
        <div className='client-logos'>
          <img data-aos='flip-left' src="Imagefile/client1.png" />
          <img data-aos='flip-left' src="Imagefile/client2.png" />
          <img data-aos='flip-left' src="Imagefile/client3.png" />
          <img data-aos='flip-left' src="Imagefile/client4.jpg" />
          <img data-aos='flip-left' src="Imagefile/client5.jpg" />
        </div>
      </div>
    );
  } 
   

  return (
    <div>
        <div className='mt-5'>
          <OwlCarousel ref={owlCarouselRef} className="slider-items owl-carousel" {...options}>
            {eighthsection.map((item) => (
              <div data-aos='flip-left' key={item.id} className="item"><img src={`${base_api}${item.logo}`} alt={item.id} /></div>
            ))} 
          </OwlCarousel>
        </div>


      <div className='foot d-flex justify-content-center mt-3'>
        <button className='btn btn-primary mx-2' onClick={handlePrev}>Prev</button>
        <button className='btn btn-primary mx-2' onClick={handleNext}>Next</button>
      </div>

    </div>
  );
}

export default Client;
