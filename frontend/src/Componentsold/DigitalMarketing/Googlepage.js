import React,{useEffect, useState} from 'react';
import Footer from '../Home/Footer';
import './Googlepage.css';
import { fetchgooglepage, base_api} from "../Axios/Axios";

const Googlepage = () => {
    const [googlepage, setGooglepage] = useState([]);
    const [isBackendError, setIsBackendError] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const googlepageData = await fetchgooglepage();
          setGooglepage(googlepageData);
        } catch (error) {
          console.error("Error fetching googlepage data:", error);
          setIsBackendError(true);
        }
      };
      fetchData();
    }, []);

if (isBackendError || googlepage === null || googlepage === undefined) {


  return (
    <div>
      <div className="main">
        <p>Google Business </p>

        <div className="second-main">
          <div className="row row-cols-1 row-cols-md-3 g-4 second-main2">
            <div className="col-lg-4 col-md-6 col-sm-12" style={{ cursor: "pointer" }} >
              <div className="card">
                <img src="Imagefile/instaammanres.jpg" className="card-img-top" height="300" width="200" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Amman Restaurant f'data</h5>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12" style={{ cursor: "pointer" }} >
              <div className="card">
                <img src="Imagefile/instabalagobalan.jpg" className="card-img-top" height="300" width="200" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Balagopalan Jewellery Mart</h5>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12" style={{ cursor: "pointer" }} >
              <div className="card">
                <img src="Imagefile/instawecraft.jpg" className="card-img-top" height="300" width="200" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">We Craft Floors f'data</h5>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12" style={{ cursor: "pointer" }} >
              <div className="card">
                <img src="Imagefile/instasenthiljewellery.jpg" className="card-img-top" height="300" width="200" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Senthil Jewellery Mart</h5>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12" style={{ cursor: "pointer" }} >
              <div className="card">
                <img src="Imagefile/instamkoil.jpg" className="card-img-top" height="300" width="200" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">MK Oil Mill</h5>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12" style={{ cursor: "pointer" }} >
              <div className="card">
                <img src="Imagefile/instahibro.jpg" className="card-img-top" height="300" width="200" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Hi Bro Mens Madurai</h5>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12" style={{ cursor: "pointer" }} >
              <div className="card">
                <img src="Imagefile/instavarsan.jpg" className="card-img-top" height="300" width="200" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Varshan Enterprises</h5>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12" style={{ cursor: "pointer" }} >
              <div className="card">
                <img  src="Imagefile/instacoolworld.jpg"  className="card-img-top"  height="300"  width="200"  alt="..."  />
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
    <div>
      <div className="main">
        <p>Google Business </p>

        <div className="second-main">
          <div className="row row-cols-1 row-cols-md-3 g-4 second-main2">
          {googlepage.map((item) => (
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              style={{ cursor: "pointer" }}
            >
              <div className="card">
              <img src={`${base_api}${item.image}`} className="card-img-top" height="300" width="200"/>
                <div className="card-body">
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

export default Googlepage;
