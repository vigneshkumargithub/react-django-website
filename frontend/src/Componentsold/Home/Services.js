

///........once backend api error show the frontend data andthen
/// backend api is working show the backend data


import React, {useEffect, useState} from "react";
import { fetchthirdsection, base_api } from "../Axios/Axios";
import Aos from "aos";
import 'aos/dist/aos.css';

function Services() {
  const [thirdsection, setThirdsection] = useState([]);
  const [isBackendError, setIsBackendError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const thirdsectionData = await fetchthirdsection();
        setThirdsection(thirdsectionData);
      } catch (error) {
        console.error("Error fetching third section data:", error);
        setIsBackendError(true);
      }
    };

    fetchData();
  }, []);

  useEffect(()=> {Aos.init({duration:2000});},[])


  if (isBackendError || !thirdsection.length) {


    return (
      <div className="servicesection">
    
            <div className="servicecontent">
    
              <div  data-aos='zoom-in' className="servicesection-image1">
                    <img src="./Imagefile/3rd_design.png" className="servicesection-image" />
                    <p className="servicesection-text1">Designn</p>
              </div>
              <div data-aos='zoom-in' className="servicesection-image2"> 
                    <img src="./Imagefile/3rd_technology.png" className="servicesection-image-tech" />
                    <p className="servicesection-text2">Technologyy</p>
              </div>
              <div data-aos='zoom-in' className="servicesection-image3"> 
                    <img src="./Imagefile/3rd_business.png" className="servicesection-image" />  
                    <p className="servicesection-text3">Bussinesss</p>
              </div>
    
            </div>
    
      </div>
      );
    }





  return (
  <div className="servicesection">
    {thirdsection.map((thirdsection) => (
        <div className="servicecontent" key={thirdsection.id} >
        
          <div data-aos='zoom-in' className="servicesection-image1"  >
                {/* <img src={thirdsection.image1} className="servicesection-image" /> */}
                <img src={`${base_api}${thirdsection.image1}`} className="servicesection-image" />  
                <p dangerouslySetInnerHTML={{ __html: thirdsection.text1 }} className="servicesection-text1"></p>
          </div>
        
          <div data-aos='zoom-in' className="servicesection-image2"> 
                {/* <img src={thirdsection.image2} className="servicesection-image-tech" /> */}
                <img src={`${base_api}${thirdsection.image2}`} className="servicesection-image-tech" />  
                <p dangerouslySetInnerHTML={{ __html: thirdsection.text2 }} className="servicesection-text2"></p>
          </div>

          <div data-aos='zoom-in' className="servicesection-image3"> 
                {/* <img src={thirdsection.image3} className="servicesection-image" />   */}
                <img src={`${base_api}${thirdsection.image2}`} className="servicesection-image" />  
                <p dangerouslySetInnerHTML={{ __html: thirdsection.text3 }} className="servicesection-text3"></p>
          </div>

        </div>
     ))}
  </div>
  );
}

export default Services;