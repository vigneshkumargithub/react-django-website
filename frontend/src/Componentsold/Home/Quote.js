
///........once backend api error show the frontend data andthen
/// backend api is working show the backend data

import React, { useState, useEffect } from "react";
import { fetchseventhsection, base_api } from "../Axios/Axios";
import Aos from "aos";
import 'aos/dist/aos.css';

function Quote() {
  const [seventhsection, setSeventhsection] = useState([]);
  const [isBackendError, setIsBackendError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const seventhsectionData = await fetchseventhsection();
        setSeventhsection(seventhsectionData);
      } catch (error) {
        setIsBackendError(true);
      }
    };

    fetchData();
  }, []);

  useEffect(()=> {Aos.init({duration:2000});},[])

if (isBackendError || !seventhsection.length) {

  return (
    <div className='quote-header'>
        <div  data-aos="zoom-in" className='quote-content'>
            <h2>... lets create a measurable<br/><span>impact on your bussiness</span></h2>
            <a className="startbtn-quote" href="/contact1" >
            Get Quote.......
          </a>
        </div>
        <div data-aos="fade-up-left" className='quote-png' >
            <img src="Imagefile/7thsec.png"  className='quote-png1'/>
        </div>
    </div>
  )
}


  return (
    <div className="quote-header">
      {seventhsection.map((seventhsection) => (
        <div data-aos="zoom-in" className='quote-content'  key={seventhsection.id}>
            <h2 dangerouslySetInnerHTML={{ __html: seventhsection.title }} />
            <a className="startbtn-quote" href={seventhsection.button_link}>
              {seventhsection.button_text}
            </a>
        </div>
      ))}
      {seventhsection.map((seventhsection) => (
        <div className='quote-png' key={seventhsection.id}>
          <img  src={`${base_api}${seventhsection.png}`} data-aos="fade-up-left" className='quote-png1' alt="User" />
        </div>
      ))}
    </div>
  );
}

export default Quote;
