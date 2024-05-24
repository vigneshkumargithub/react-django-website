////............................................////
///........once backend api error show the frontend data andthen
/// backend api is working show the backend data

import React, { useState, useEffect } from "react";
import About from "./About";
import Services from "./Services";
import Counter from "./Counter";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import Ourservice from "./Ourservice";
import Quote from "./Quote";
import Client from "./Client";
import ScrollToTop from "./ScrollToTop";
import Footer from "./Footer";
import { fetchfirstsection, base_api } from "../Axios/Axios";
import Aos from "aos";
import 'aos/dist/aos.css';

function Home() {
  const [firstsection, setFirstsection] = useState([]);
  const [isBackendError, setIsBackendError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const firstsectionData = await fetchfirstsection();
        setFirstsection(firstsectionData);
      } catch (error) {
        console.error("Error fetching first section data:", error);
        setIsBackendError(true);
      }
    };

    fetchData();
  }, []);

  useEffect(()=> { Aos.init({duration:2000});},[])

  if (isBackendError || !firstsection.length) {
    return (
      <div>
        <div className="header-bg">
          <div className="homecontent">
            <div  data-aos='fade-right' className="text-center">
              <p>Ditital Marketing Firm f'data</p>
              <h2>
                Build, Grow and gorwing
                <br />
                Manage your BRAND <br /> with{" "}
                <span> Pheonix Marketing f'data </span>
              </h2>
              <button className="startbtn" href="/overview">
                Get Started f'data
                <i class="fa-solid fa-arrow-right"></i>

              </button>
            </div>

            <div data-aos='fade-left' className="homesection-image-all">
              <img
                src="./Imagefile/Home_image_removeshadow1.png"
                className="homesection-image"
              />
            </div>
          </div>
        </div>

        <About />
        <Services />
        <Client />
        <Counter />
        <Portfolio />
        <Ourservice />
        <Testimonials />
        <Quote />
        <Footer />
        <ScrollToTop />
      </div>
    );

  }

  return (




    <div>
      <div className="header-bg">
    
  
      <div className="homecontent">
                {firstsection.map((item) => (
                  <div data-aos='fade-right' className="text-center" key={item.id}>
                    <p dangerouslySetInnerHTML={{ __html: item.title }}></p>
                    <h2 dangerouslySetInnerHTML={{ __html: item.subtitle }}></h2>
                    <a className="startbtn" href={item.button_link}>
                      {item.button_text}
                    </a>
                  </div>
                ))}



                {firstsection.map((item) => (
                  <div data-aos='fade-left' className="homesection-image-all" key={item.id}>
                    <img
                      src={`${base_api}${item.image}`}
                      className="homesection-image"
                      alt="homesection-image"
                    />
                  </div>
                ))}
       </div>

      </div>

      <About />
      <Services />
      <Counter />
      <Client />
      <Portfolio />
      <Ourservice />
      <Testimonials />
      <Quote />
      <Footer />
      <ScrollToTop />
    </div>

  );
}

export default Home;



