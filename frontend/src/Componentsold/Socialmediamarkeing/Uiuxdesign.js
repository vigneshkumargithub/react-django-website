///// backend data passing function:

import React,{useEffect, useState} from "react";
import { fetchuiuxcontent, fetchuiuximage, base_api } from "../Axios/Axios";
import Aos from "aos";
import "aos/dist/aos.css";

function Uiuxdesign() {
  
  const [uiuxcontent, setUiuxcontent] = useState([]);
  const [uiuximage, setUiuximage] = useState([]);
  const [isBackendError, setIsBackendError] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const uiuxcontentData = await fetchuiuxcontent();
        const uiuximageData = await fetchuiuximage();
        setUiuxcontent(uiuxcontentData);
        setUiuximage(uiuximageData);

      } catch (error) {
        console.error("Error fetching UiUxdesign data:", error);
        setIsBackendError(true);
      }
    };

    fetchData();
  }, []);

  useEffect(()=>{Aos.init({duration:2000});},[])

  if (isBackendError || !uiuxcontent || !uiuximage || !uiuxcontent.length || !uiuximage.length) {
    return (
      <div className="container-social">
        <div data-aos="fade-left" className="down-content">
          <h3>UI & UX Design f'data</h3>
          <p>
          f'data A person who knows the need and search of others is forever better.
            He seems to be a good hero to those who are stuck in search. UI's
            role in digital marketing is used to leverage branding to create
            positive perception around your brand. Interface design can help you
            steer website visitors to do what you want-whether thats getting
            them to fill out a form download information. call you for a
            consultation or buy a product.
          </p>
        </div>
        <div className="image-container mt-5">
          {/* Images */}
          <div data-aos="fade-down" className="row">
                <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mb-4 middleimg">
                  <img src="/Social_Media_Poster/photo4.jpg" className="img-fluid" />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mb-4 middleimg">
                  <img src="/Social_Media_Poster/photo2.jpg" className="img-fluid" />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mb-4 middleimg">
                  <img src="/Social_Media_Poster/photo3.jpg" className="img-fluid" />
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
    {uiuxcontent.map((service) =>(
    <div data-aos="fade-left" className="down-content" key={service.id}>
        <h3 dangerouslySetInnerHTML={{ __html: service.title }}/>
        <p dangerouslySetInnerHTML={{ __html: service.subtitle }}/>
    </div>
    ))}

    <div className="image-container mt-5">
      {/* Images */}
        <div className="row">
        {uiuximage.map((service) => (
            <div data-aos="fade-down" className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mb-4 middleimg">
              <img src={`${base_api}${service.image}`} className="img-fluid" />
            </div>
        ))}
        </div>
    </div>
    
  </div>
);


}
export default Uiuxdesign;
