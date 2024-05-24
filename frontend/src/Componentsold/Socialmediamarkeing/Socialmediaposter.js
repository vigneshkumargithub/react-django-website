///// backend data passing function:

import React,{useState, useEffect} from "react";
import { fetchsocialmediapostercontent, fetchsocialmediaposterimages, base_api } from "../Axios/Axios";
import Aos from "aos";
import 'aos/dist/aos.css';
function Socialmediaposter() {

  const [socialmediapostercontent, setSocialmediapostercontent] = useState([]);
  const [socialmediaposterimages, setSocialmediaposterimages] = useState([]);
  const [isBackendError, setIsBackendError] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const socialmediapostercontentData = await fetchsocialmediapostercontent();
        const socialmediaposterimagesData = await fetchsocialmediaposterimages();
        setSocialmediapostercontent(socialmediapostercontentData);
        setSocialmediaposterimages(socialmediaposterimagesData);

      } catch (error) {
        console.error("Error fetching fourth section data:", error);
        setIsBackendError(true);
      }
    };

    fetchData();
  }, []);

  useEffect(()=> {Aos.init({duration:2000});},[])

  if (isBackendError || !socialmediapostercontent || !socialmediaposterimages || !socialmediapostercontent.length || !socialmediaposterimages.length ) {

  return (
    <div className="container-social">
      <div data-aos="fade-left" className="pagein-content">
        <h3 >Social Media Creative with Image f'data</h3>
        <p >
        f'data Having something special is a very important thing to keep someone
          following on the social network. The beauty that stands apart from
          everyone else will make everyone follow very quickly. Create an
          outstanding experience for your visitors. Our designers make your
          social media page standouts. Design should act as an enhancement to
          your content. Everyone definitely click the following button.. Hoo!
          Hoo!..
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

// backend data show the frontend

return (
  <div className="container-social">
    {socialmediapostercontent.map((service) =>(
      <div data-aos="fade-left" className="pagein-content" key={service.id}>
        <h3  dangerouslySetInnerHTML={{ __html: service.title }}/>
        <p   dangerouslySetInnerHTML={{ __html: service.subtitle }} />
      </div>
      ))}
      <div className="image-container mt-5">
        {/* Images */}
        <div className="row">
            {socialmediaposterimages.map((service) => (
              <div  data-aos="fade-down" className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mb-4 middleimg">
                <img src={`${base_api}${service.image}`} className="img-fluid" />
              </div>
            ))}
            </div>
      </div>
    </div>
)

}

export default Socialmediaposter;
