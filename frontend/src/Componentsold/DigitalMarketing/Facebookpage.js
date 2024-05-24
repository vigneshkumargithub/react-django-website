import React,{useState,  useEffect} from "react";
import Footer from "../Home/Footer";
import "./Facebookpage.css";
import { fetchfacebookpage, base_api} from "../Axios/Axios";

const Facebookpage = () => {
  const [facebookpage, setFacebookpage] = useState([]);
  const [isBackendError, setIsBackendError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const facebookpageData = await fetchfacebookpage();
        setFacebookpage(facebookpageData);
      } catch (error) {
        console.error("Error fetching facebookpage data:", error);
        setIsBackendError(true);
      }
    };

    fetchData();
  }, []);
  

     if (isBackendError || facebookpage === null || facebookpage === undefined) {

  return (
    <div id="facebookpage">

      <div className="main">
        <p>Facebook Business / Fan Page Maintenance</p>

        <div className="second-main">
          <div className="row row-cols-1 row-cols-md-3 g-4 second-main2">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card">
                <img src="Facebook_images/fbammanres.jpg" className="card-img-top" height="300" width="200" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Amman Restaurant</h5>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card">
                <img src="Facebook_images/fbbalagopalan.jpg" className="card-img-top" height="300" width="200" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Balagopalan Jewellery Mart</h5>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card">
                <img src="Facebook_images/fbwecraft.jpg" className="card-img-top" height="300" width="200" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">We Craft Floors</h5>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card">
                <img src="Facebook_images/fbsenthiljewellery.jpg" className="card-img-top" height="300" width="200" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Senthil Jewellery Mart</h5>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card">
                <img src="Facebook_images/fbmkoil.jpg" className="card-img-top" height="300" width="200" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">MK Oil Mill</h5>
                  <p className="card-text"></p>
                </div>
              </div> 
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card">
                <img src="Facebook_images/fbhibro.jpg" className="card-img-top" height="300" width="200" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Hi Bro Mens Madurai</h5>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card">
                <img src="Facebook_images/fbvarshan.jpg" className="card-img-top" height="300" width="200" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Varshan Enterprises</h5>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card">
                <img src="Facebook_images/fbsaaralbakes.jpg" className="card-img-top" height="300" width="200" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Saaral bakes cakes sweets</h5>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

  return (
    <div id="facebookpage">
      <div className="main">
        <p>Facebook Business / Fan Page Maintenance</p>

        <div className="second-main">
          <div className="row row-cols-1 row-cols-md-3 g-4 second-main2">
            {facebookpage.map((item) => (
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card">
                  <img src={`${base_api}${item.image}`} className="card-img-top" height="300" width="200"/>
                  <div className="card-body">
                    {/* <h5 className="card-title">Amman Restaurant</h5> */}
                    <h5 dangerouslySetInnerHTML={{ __html: item.title }} />
                   
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Facebookpage;
