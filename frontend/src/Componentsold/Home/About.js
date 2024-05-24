
///........once backend api error show the frontend data andthen
/// backend api is working show the backend data

import React,{useEffect, useState} from "react";
import { fetchsecondsection, base_api } from "../Axios/Axios";
import Aos from "aos";
import 'aos/dist/aos.css';

function About() {
  const [secondsection, setSecondsection] = useState([]);
  const [isBackendError, setIsBackendError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const secondsectionData = await fetchsecondsection();
        setSecondsection(secondsectionData);
      } catch (error) {
        console.error("Error fetching second section data:", error);
        setIsBackendError(true);
      }
    };

    fetchData();
  }, []);

  useEffect(()=> {Aos.init({duration:2000});},[])

  if (isBackendError || !secondsection.length) {


    return (
      <div>
  
        <div className="aboutsection">
          <div className="aboutcontent">
  
            <div data-aos='fade-right' className="aboutsection-image-all">
              <img src="Imagefile/2nd_sec2.png" className="aboutsection-image" />
            </div>
  
          <div data-aos='fade-left' className="about-text-center">
            <h1>About us f'data</h1>
            <h3>We are top leading and Premier <br/> crative digital marketing company in madurai f'data </h3>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Soluta, quisquam expedita. Eaque impedit ipsa voluptatem, quo vero
                consequuntur atque quam repudiandae, autem, ullam eius. Cupiditate
                fuga ullam sequi cumque magnam optio dolores voluptates eos quia quasi f'data
              </p>
            <button className="startbtn-about" href="#">
              Get Started f'data
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
  
          </div>
        </div>
  
      </div>
    );
  }

  return (
    <div>
      <div className="aboutsection">
        <div className="aboutcontent">
          {secondsection.map((secondsection) => (
            <div data-aos='fade-right' className="aboutsection-image-all" key={secondsection.id}>
              <img src={`${base_api}${secondsection.image}`} className="aboutsection-image" />
            </div>
          ))}


          {secondsection.map((secondsection) => (
            <div data-aos='fade-left' className="about-text-center" key={secondsection.id}>
              <h1 dangerouslySetInnerHTML={{ __html: secondsection.title }}></h1>
              <h3 dangerouslySetInnerHTML={{ __html: secondsection.subtitle }}></h3>
              <p dangerouslySetInnerHTML={{ __html: secondsection.subtitleone }}></p>
              <button className="startbtn-about" href={secondsection.button_link}> {secondsection.button_text}
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>


// <ScrollPage page={0}>
// <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
//         welcome to react page 
// </Animator>
// </ScrollPage>
  );
}




export default About;