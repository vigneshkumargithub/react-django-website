import React, { useState, useEffect } from "react";
import { fetchecommerceservice, base_api } from "../Axios/Axios";
import "./Ecommerce.css";
// import Aos from "aos";
// import 'aos/dist/aos.css';

function Ecommerce() {

    
    const [ecommerceservice, setEcommerceservice] = useState([]);
    const [isBackendError, setIsBackendError] = useState(false);
  
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const ecommerceserviceData = await fetchecommerceservice();
          setEcommerceservice(ecommerceserviceData);
  
        } catch (error) {
          console.error("Error fetching ecommerce data:", error);
          setIsBackendError(true);
        }
      };
  
      fetchData();
    }, []);
  
    // useEffect(()=> {Aos.init({duration:2000});},[])
  
    if (isBackendError || !ecommerceservice  || !ecommerceservice.length ) {
     

  return (
    <div>
      <div className="serviceaboutsection">
        <div className="aboutcontent">
          <div  className="aboutsection-image-all-service-commerce">
            <img
              src="/Imagefile/Ecommerce.jpg"
              className="aboutsection-image"
            />
          </div>

          <div className="commerce-text-center">
            <h1>E-commerce Website Developement</h1>
            <div className="commerce-underline"></div>
            <p>
              We focus on Tailoring B2B & B2C E-commerce web applications that
              compel the users to buy your products/services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

return (
    <div>
      <div className="serviceaboutsection">
        {ecommerceservice.map((service)=>(
        <div className="aboutcontent">

          <div  className="aboutsection-image-all-service-commerce">
            <img
              src={`${base_api}${service.image}`}
              className="aboutsection-image"
            />
          </div>

          <div className="commerce-text-center">
            <h1 dangerouslySetInnerHTML={{ __html: service.text }} />
              <div className="commerce-underline"></div>
            <p dangerouslySetInnerHTML={{ __html: service.content}} />

          </div>

        </div>
        ))}
      </div>
    </div>
  );
}

export default Ecommerce;
