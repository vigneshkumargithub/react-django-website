import React,{useState, useEffect} from "react";
import { fetchwebdevelopmentservice, base_api } from "../Axios/Axios";
import './Servicespage.css';
// import Aos from 'aos';
// import "aos/dist/aos.css";


function Webdevelopment() {
  
  const [webdevelopmentservice, setWebdevelopmentservice] = useState([]);
  const [isBackendError, setIsBackendError] = useState(false);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const webdevelopmentserviceData = await fetchwebdevelopmentservice();
        setWebdevelopmentservice(webdevelopmentserviceData);

      } catch (error) {
        console.error("Error fetching Webdevelopment data:", error);
        setIsBackendError(true);
      }
    };

    fetchData();
  }, []);

  // useEffect(()=>{Aos.init({duration:2000});},[])


  if (isBackendError || !webdevelopmentservice  || !webdevelopmentservice.length ) {
    
  return (
    <div className="serviceaboutsection">
      <div className="aboutcontent">
        <div  className="aboutsection-image-all-service">
          <img src="/Imagefile/Web_development.jpg" className="aboutsection-image" />
        </div>
        <div  className="service-text-center">
          <h1>Web Developement</h1>
          <div className="service-underline"></div>
          <p>Web application developement is being employed widely in today's businesses across the globe. We create B2B and B2C compatible
            web applications to meet the business challenges. Our developers will create web application that way you need them from single 
            page application to customized complex web applications. Own a web application and transform your business. We offer 360 degree
            support in developing your web application.
          </p>
        </div>
      </div>
    </div>
  );
  }

  
  return (
    <div className="serviceaboutsection">
      {webdevelopmentservice.map((service) =>(
        <div className="aboutcontent">

            <div  className="aboutsection-image-all-service">
              <img src={`${base_api}${service.image}`} className="aboutsection-image" />
            </div>

            <div  className="service-text-center" key={service.id}>
                <h1  dangerouslySetInnerHTML={{ __html: service.text }} />
                <div className="service-underline"></div>
                <p  dangerouslySetInnerHTML={{ __html: service.content}} />
            </div>

        </div>
        ))}
    </div>
  );




}

export default Webdevelopment;
