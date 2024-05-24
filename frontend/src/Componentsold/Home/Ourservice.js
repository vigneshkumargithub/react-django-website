import React, { useState, useEffect } from "react";
import { fetchfifthsection, fetchfifthsectioncontent, base_api } from "../Axios/Axios";
import Aos from "aos";
import 'aos/dist/aos.css';

function Ourservice() {
  const [fifthsection, setFifthsection] = useState([]);
  const [fifthsectioncontent, setFifthsectioncontent] = useState([]);
  const [isBackendError, setIsBackendError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fifthsectionData = await fetchfifthsection();
        const fifthsectioncontentData = await fetchfifthsectioncontent();
        setFifthsection(fifthsectionData);
        setFifthsectioncontent(fifthsectioncontentData);

      } catch (error) {
        console.error("Error fetching fourth section data:", error);
        setIsBackendError(true);
      }
    };

    fetchData();
  }, []);

  useEffect(()=> {Aos.init({duration:2000});},[])

  if (isBackendError || !fifthsection,!fifthsectioncontent.length) {


    return (
      <div className="ourservice-header">
        <div className="ourservice-content">
          <img src="Imagefile/alert.png" data-aos="fade-up-right" className="ourservice-alert"/>
           <h3 data-aos="flip-up">Our services f'data</h3>
          <p  data-aos="flip-up"className="para">
            We can help bussiness achieve their
            <br /> digital marketing brands and goals f'data
          </p>
          <img src="Imagefile/seo.png" data-aos="fade-up-left" className="ourservice-seo" />

          <div className="ourservice-box">
            <div className="ourservices-box1">
              <img src="Imagefile/5thsec_seo.png" className="service-png" />
              <div className="service-content">
                <h4>SEO optimization f'data
                {/* <a href="#">Chat with us</a> */}
                </h4>
                <p>
                  {" "}
                  f'data Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Soluta, quisquam expedita. Eaque impedit ipsa voluptatem, quo
                  vero consequuntur atque quam repudiandae, autem, ullam eius.
                </p>
              </div>
            </div>
            

            <div className="ourservices-box1">
              <img src="Imagefile/5thsec_smm.png" className="service-png" />
              <div className="service-content">
                <h4>Social Medial Maketing f'data</h4>
                <p>
                  {" "}
                  f'data Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Soluta, quisquam expedita. Eaque impedit ipsa voluptatem, quo
                  vero consequuntur atque quam repudiandae, autem, ullam eius.
                </p>
              </div>
            </div>

            <div className="ourservices-box1">
              <img src="Imagefile/5thsec_gd.png" className="service-png" />
              <div className="service-content">
                <h4>Graphic Design</h4>
                <p>
                  {" "}
                  f'data Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Soluta, quisquam expedita. Eaque impedit ipsa voluptatem, quo
                  vero consequuntur atque quam repudiandae, autem, ullam eius.
                </p>
              </div>
            </div>

            <div className="ourservices-box1">
              <img src="Imagefile/5thsec_da.png" className="service-png" />
              <div className="service-content">
                <h4>Digital advertistment</h4>
                <p>
                  {" "}
                  f'data Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Soluta, quisquam expedita. Eaque impedit ipsa voluptatem, quo
                  vero consequuntur atque quam repudiandae, autem, ullam eius.
                </p>
              </div>
            </div>

            <div className="ourservices-box1">
              <img src="Imagefile/5thsec_ve.png" className="service-png" />
              <div className="service-content">
                <h4>Video Editing</h4>
                <p>
                  {" "}
                  f'data Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Soluta, quisquam expedita. Eaque impedit ipsa voluptatem, quo
                  vero consequuntur atque quam repudiandae, autem, ullam eius.
                </p>
              </div>
            </div>

            <div className="ourservices-box1">
              <img src="Imagefile/5thsec_cm.png" className="service-png" />

              <div className="service-content">
                <h4>Content Marketing</h4>
                <p>
                  {" "}
                  f'data Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Soluta, quisquam expedita. Eaque impedit ipsa voluptatem, quo
                  vero consequuntur atque quam repudiandae, autem, ullam eius.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
   
  );
}


  return (
    <div className="ourservice-header">
      <div className="ourservice-content">
        {fifthsection.map((service) => (
          <div key={service.id}>
            <img src={`${base_api}${service.png1}`} alt="png1" data-aos="fade-up-right" className="ourservice-alert"/>
            <h3 data-aos="flip-up" dangerouslySetInnerHTML={{ __html: service.title }}></h3>
            <p data-aos="flip-up" dangerouslySetInnerHTML={{ __html: service.content }} className="para"></p>
            <img src={`${base_api}${service.png2}`} alt="png2" data-aos="fade-up-left" className="ourservice-seo"/>
          </div>
        ))}

    <div className="ourservice-box">
        {fifthsectioncontent.map((box) => (
          <div key={box.id} className="ourservices-box1">
            <img src={`${base_api}${box.image}`} className="service-png" alt="image"/>
            <div className="service-content">
              <h4 dangerouslySetInnerHTML={{ __html: box.heading }}></h4>
              <p dangerouslySetInnerHTML={{ __html: box.subcontent }}></p>
            </div>
          </div>
        ))}
    </div>

      </div>
    </div>
  );
}

export default Ourservice;

