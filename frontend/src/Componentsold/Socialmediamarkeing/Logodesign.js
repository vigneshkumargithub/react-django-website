///// backend data passing function:

import React, {useEffect, useState} from "react";
import { fetchlogoworkcontent, fetchlogoworkimage, base_api } from "../Axios/Axios";
import Aos from "aos";
import 'aos/dist/aos.css';

function Logodesign() {

  const [logoworkcontent, setLogoworkcontent] = useState([]);
  const [logoworkimage, setLogoworkimage] = useState([]);
  const [isBackendError, setIsBackendError] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const logoworkcontentData = await fetchlogoworkcontent();
        const logoworkimageData = await fetchlogoworkimage();
        setLogoworkcontent(logoworkcontentData);
        setLogoworkimage(logoworkimageData);

      } catch (error) {
        console.error("Error fetching Logowork data:", error);
        setIsBackendError(true);
      }
    };

    fetchData();
  }, []);

  useEffect(()=> {Aos.init({duration:2000});},[])

if (isBackendError || !logoworkcontent || !logoworkimage ||  !logoworkcontent.length || !logoworkimage.length) {
  return (
      <div className="container-social">
        {/* Implement your Logo designs content here */}
        <div data-aos="fade-left" className="down-content">
              <h3>Logo_Design with Image f'data</h3>
              <p>
              f'data Creating trust in others for ourselves is a very difficult thing
                to do. The optimism that comes with seeing it all is different..
                Logo_Design will tell the audience "you can trust us". One design
                carries a lot of responsibility. This Logo_Designs are out to
                prove that your brands are about big brains and even bigger
                imagination. Our Logo_Design definitely communicate with your
                targeted audience.
              </p>
          </div>
  
          <div className="image-container mt-5">
          {/* Images */}
          <div data-aos="fade-down" className="row">
                <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mb-4 middleimg">
                  <img src="/Social_Media_Poster/photo2.jpg" className="img-fluid" />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mb-4 middleimg">
                  <img src="/Social_Media_Poster/photo3.jpg" className="img-fluid" />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mb-4 middleimg">
                  <img src="/Social_Media_Poster/photo4.jpg" className="img-fluid" />
                </div>
  
                <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mb-4 middleimg">
                  <img src="/Social_Media_Poster/photo5.jpg" className="img-fluid" />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mb-4 middleimg">
                  <img src="/Social_Media_Poster/photo6.jpg" className="img-fluid" />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mb-4 middleimg">
                  <img src="/Social_Media_Poster/photo7.jpg" className="img-fluid" />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mb-4 middleimg">
                  <img src="/Social_Media_Poster/photo8.jpg" className="img-fluid" />
                </div>
  
                <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mb-4 middleimg">
                  <img src="/Social_Media_Poster/photo9.jpg" className="img-fluid" />
                </div>
              </div>
        </div>
      </div>
    );
}
return (
  <div className="container-social">
    {/* Implement your Logo designs content here */}
    {logoworkcontent.map((service)=>(
      <div data-aos="fade-left" className="down-content">
        <h3 dangerouslySetInnerHTML={{ __html: service.title }}/>
        <p dangerouslySetInnerHTML={{ __html: service.subtitle }}/>
      </div>
    ))}
      <div className="image-container mt-5">
      {/* Images */}
      <div className="row">
        {logoworkimage.map((service)=>(
            <div data-aos="fade-down" className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mb-4 middleimg">
              <img src={`${base_api}${service.image}`} className="img-fluid" />
            </div>
        ))}
          </div>
    </div>
  </div>
);
}

export default Logodesign;

