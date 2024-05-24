import React,{useState, useEffect} from "react";
import { fetchwebdesignservice, base_api } from "../Axios/Axios";
import "./Webdesign.css";
// import Aos from 'aos';
// import "aos/dist/aos.css";

function Webdesign() {

    const [webdesignservice, setWebdesignservice] = useState([]);
    const [isBackendError, setIsBackendError] = useState(false);
  
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const webdesignserviceData = await fetchwebdesignservice();
          setWebdesignservice(webdesignserviceData);
  
        } catch (error) {
          console.error("Error fetching webdesign data:", error);
          setIsBackendError(true);
        }
      };
  
      fetchData();
    }, []);

  
    // useEffect(()=>{Aos.init({duration:2000});},[])

  
    if (isBackendError || !webdesignservice  || !webdesignservice.length ) {
     
  return (
    <div>
      <div className="serviceaboutsection">
        <div className="aboutcontent">
          <div className="web-text-center">
            <h1>Web Design & Redesign</h1>
            <div className="webdesign-underline"></div>
            <p>
              We know that Impactful & Engaging Web Design is the cornerstone to
              establishing a solid digital presence for your business. We thrive
              at building an alluring visual representation of your business
              through our innovative Ideas & Technologies.
            </p>
            <p>
              In order to beat out the overwhelming competition, we also offer
              website redesigning to improve the features of the website.
            </p>
          </div>

          <div  className="aboutsection-image-all-service">
            <img
              src="/Imagefile/Web_Design.jpg"
              className="aboutsection-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

return (
    <div>
      <div className="serviceaboutsection">
        {webdesignservice.map((service) =>(
        <div className="aboutcontent">

          <div  className="web-text-center">
            <h1 dangerouslySetInnerHTML={{ __html: service.text }} />
            <div className="webdesign-underline"></div>
            <p  dangerouslySetInnerHTML={{ __html: service.content}} />
          </div>

          <div className="aboutsection-image-all-service">
            <img
              src={`${base_api}${service.image}`}
              className="aboutsection-image"
            />
          </div>

        </div>
            ))}
      </div>
    </div>
  );

}

export default Webdesign;
