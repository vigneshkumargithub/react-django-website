///// working good condition
///// jusut checking for frontend testimonial uainf carousel method and backend data passing this file
import React, { useState, useEffect, useRef } from "react";
import Carousel from "react-bootstrap/Carousel";
import { fetchsixthsection, fetchsixthsectiontest, base_api } from '../Axios/Axios';
import Aos from "aos";
import 'aos/dist/aos.css';
// import './Testimonial.css'

function Testimonials() {
  const carouselRef = useRef(null);
  const [sixthsection, setSixthsection] = useState([]);
  const [sixthsectiontest, setSixthsectiontest] = useState([]);
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
        const sixthsectionData = await fetchsixthsection();
        const sixthsectiontestData = await fetchsixthsectiontest();
        setSixthsection(sixthsectionData);
        setSixthsectiontest(sixthsectiontestData);

      } catch (error) {
        console.error("Error fetching fourth section data:", error);
        setIsBackendError(true);
      }
    };

    fetchData();
  }, []);

  useEffect(()=> {Aos.init({duration:2000});},[])


 if (isBackendError || !sixthsection,!sixthsectiontest.length) {

     return (
             <div className="testimon-header">
                 <div className="testimon-content">
                    <h3 data-aos="flip-up">What client says f'data</h3>
                    <p data-aos="flip-up"> Here is sneak peek of what <br/> Our Client Says f'data </p>
                    <img src='Imagefile/6thsection6.png' data-aos="fade-up-left" className='testimon-msgpng'/>
                    <div className='testimon-review'>
                     <img src="Imagefile/6thsection1.png" className='testimon-1stpng'/>
                       <div className='review1'>
                               <div className='quatation'>
                                   <img  src='Imagefile/6thsection5.png' className='quatationpng'/>
                                   <img  src='Imagefile/star3.png' className='starpng'/>
                               </div>
                         <h5>Amman Restaraunt f'data</h5>
                         <p >
                             {" "}f'data
                             Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                             Soluta, quisquam expedita. Eaque impedit ipsa voluptatem, quo
                             vero consequuntur atque quam repudiandae, autem, ullam eius.
                           </p>
          
                       </div>
                    </div>
                  </div>
             </div>
             )
         }



  return (
    <div className="testimon-header">
      <div className="testimon-content">

        {sixthsection.map((item) => (
                    <div key={item.id} >
                        <h3 data-aos="flip-up" dangerouslySetInnerHTML={{ __html: item.heading }}></h3>
                        <p data-aos="flip-up" dangerouslySetInnerHTML={{ __html: item.content }}></p>
                        <img  src={`${base_api}${item.image}`} data-aos="fade-up-left" className='testimon-msgpng' alt="Testimonial" />    
                    </div>
        ))}

        <div className="carousel-container">
          <Carousel ref={carouselRef}>
            {sixthsectiontest.map((item) => (
            <Carousel.Item>
                    <div className='testimon-review' key={item.id}>
                        <img  src={`${base_api}${item.image1}`} className='testimon-1stpng' alt="User" />
                        <div className='review1'>
                            <div className='quatation'>
                                <img  src={`${base_api}${item.image2}`} className='quatationpng' alt="Quotation Mark" />
                                <img  src={`${base_api}${item.image3}`} className='starpng' alt="Star" />
                            </div>
                            <h5 dangerouslySetInnerHTML={{ __html: item.restaurant }}></h5>
                            <p dangerouslySetInnerHTML={{ __html: item.review }}></p>
                        </div>
                    </div>

            </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;