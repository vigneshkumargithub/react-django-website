import React, {useState, useEffect} from 'react';
import { fetchpackagedesigncontent, fetchpackagedesignimage, base_api } from '../Axios/Axios';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Packagedesign() {
  
  const [packagedesigncontent, setPackagedesigncontent] = useState([]);
  const [packagedesignimage, setPackagedesignimage] = useState([]);
  const [isBackendError, setIsBackendError] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const packagedesigncontentData = await fetchpackagedesigncontent();
        const packagedesignimageData = await fetchpackagedesignimage();
        setPackagedesigncontent(packagedesigncontentData);
        setPackagedesignimage(packagedesignimageData);

      } catch (error) {
        console.error("Error fetching package design data:", error);
        setIsBackendError(true);
      }
    };

    fetchData();
  }, []);

  useEffect(()=>{Aos.init({duration:2000});},[])

  if (isBackendError || !packagedesigncontent || !packagedesignimage || !packagedesigncontent.length || !packagedesignimage.length) {
    return (
      <div className="container-social">
        {/* Implement your Package Design content here */}
        <div data-aos="fade-left" className="down-content">
              <h3>Printing Design with mockup Image f'data</h3>
              <p>
                f'data Make your business look more professional with our graphic design
                services. We'll help you design all types of print materials of
                marketing. Graphic design can be applied to a wide range of media,
                including print with flyers, catalogs, and posters. 
              </p>
            </div>
  
            <div className="image-container mt-5">
          {/* Images */}
          <div data-aos="fade-down" className="row">
                <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mb-4 middleimg">
                  <img src="/Social_Media_Poster/photo6.jpg" className="img-fluid" />
                </div>
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
      {/* Implement your Package Design content here */}
      {packagedesigncontent.map((service)=>(
      <div data-aos="fade-left" className="down-content">
            <h3 dangerouslySetInnerHTML={{ __html: service.title }}/>
            <p dangerouslySetInnerHTML={{ __html: service.subtitle }}/>
      </div>
      ))}

          <div className="image-container mt-5">
        {/* Images */}
         <div className="row">
          {packagedesignimage.map((service) => (
              <div data-aos="fade-down" className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mb-4 middleimg">
                <img src={`${base_api}${service.image}`} className="img-fluid" />
              </div>
          ))}
          </div>
      </div>
    </div>
  );

  
}

export default Packagedesign;

