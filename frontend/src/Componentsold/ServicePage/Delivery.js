import React, { useEffect, useState } from "react";
import { fetchdeliveryservice, base_api } from "../Axios/Axios";
import "./Delivery.css";
// import 'aos/dist/aos.css';
// import Aos from "aos";

function Delivery() {
    const [deliveryservice, setDeliveryservice] = useState([]);
    const [isBackendError, setIsBackendError] = useState(false);

    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const deliveryserviceData = await fetchdeliveryservice();
          setDeliveryservice(deliveryserviceData);
  
        } catch (error) {
          console.error("Error fetching delivery service data:", error);
          setIsBackendError(true);
        }
      };
  
      fetchData();
    }, []);

    // useEffect(()=> {Aos.init({duration:2000});},[])
  
  
    if (isBackendError || !deliveryservice  || !deliveryservice.length ) {
     

  return (
    <div>
      <div className="serviceaboutsection">
        <div className="aboutcontent">
          <div  className="delivery-text-center">
            <h1>Delivery App Developement</h1>
            <div className="delivery-underline"></div>
            <p>
              We Support businesses by leaving our expertise to launch the
              delivery application that makes the user's interaction at ease.
            </p>
          </div>

          <div className="aboutsection-image-all-service-delivery">
            <img src="/Imagefile/Delivery.jpg" className="aboutsection-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

return (
    <div>
      <div className="serviceaboutsection">
        {deliveryservice.map((service)=>(
        <div className="aboutcontent">
          <div  className="delivery-text-center">
          <h1 dangerouslySetInnerHTML={{ __html: service.text }} />
            <div className="delivery-underline"></div>
            <p  dangerouslySetInnerHTML={{ __html: service.content}} />
          </div>

          <div className="aboutsection-image-all-service-delivery">
            <img src={`${base_api}${service.image}`} className="aboutsection-image" />
          </div>
        </div>
        ))}
      </div>
    </div>
  );

}

export default Delivery;
