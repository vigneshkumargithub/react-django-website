import React,{useState, useEffect} from 'react';
import Footer from '../Home/Footer'; 
import './Instagrampage.css';
import { fetchinstagrampage, base_api} from "../Axios/Axios";

const Instagrampage = () => {
  const [instagrampage, setInstagrampage] = useState([]);
  const [isBackendError, setIsBackendError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const instagrampageData = await fetchinstagrampage();
        setInstagrampage(instagrampageData);
      } catch (error) {
        console.error("Error fetching instagrampage data:", error);
        setIsBackendError(true);
      }
    };
    fetchData();
  }, []);



  if (isBackendError || instagrampage === null || instagrampage === undefined) {

    return (
      <div >
        <div className="main">
          <p>Instagram Business / Fan Page Maintenance</p>
  
          <div className="second-main">
            <div className="row row-cols-1 row-cols-md-3 g-4 second-main2">
              <div className="col-lg-4 col-md-6 col-sm-12" style={{ cursor: "pointer" }} >
                <div className="card">
                  <img src="Insta_images/instaammanres.jpg" className="card-img-top" height="300" width="200" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Amman Restaurant f'data</h5>
                    <p className="card-text"></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12" style={{ cursor: "pointer" }} >
                <div className="card">
                  <img src="Insta_images/instabalagobalan.jpg" className="card-img-top" height="300" width="200" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Balagopalan Jewellery Mart</h5>
                    <p className="card-text"></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12" style={{ cursor: "pointer" }} >
                <div className="card">
                  <img src="Insta_images/instawecraft.jpg" className="card-img-top" height="300" width="200" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">We Craft Floors f'data</h5>
                    <p className="card-text"></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12" style={{ cursor: "pointer" }} >
                <div className="card">
                  <img src="Insta_images/instasenthiljewellery.jpg" className="card-img-top" height="300" width="200" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Senthil Jewellery Mart</h5>
                    <p className="card-text"></p>
                  </div>
                </div>
              </div> 
              <div className="col-lg-4 col-md-6 col-sm-12" style={{ cursor: "pointer" }} >
                <div className="card">
                  <img src="Insta_images/instamkoil.jpg" className="card-img-top" height="300" width="200" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">MK Oil Mill</h5>
                    <p className="card-text"></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12" style={{ cursor: "pointer" }} >
                <div className="card">
                  <img src="Insta_images/instahibro.jpg" className="card-img-top" height="300" width="200" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Hi Bro Mens Madurai</h5>
                    <p className="card-text"></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12" style={{ cursor: "pointer" }} >
                <div className="card">
                  <img src="Insta_images/instavarsan.jpg" className="card-img-top" height="300" width="200" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Varshan Enterprises</h5>
                    <p className="card-text"></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12" style={{ cursor: "pointer" }} >
                <div className="card">
                  <img src="Insta_images/instacoolworld.jpg" className="card-img-top" height="300" width="200" alt="..." />
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
    <div >
      <div className="main">
        <p>Instagram Business / Fan Page Maintenance</p>

        <div className="second-main">
          <div className="row row-cols-1 row-cols-md-3 g-4 second-main2">
          {instagrampage.map((item) => (
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              style={{ cursor: "pointer" }}>
              <div className="card">
                <img src={`${base_api}${item.image}`} className="card-img-top" height="300" width="200"/>
                  <div className="card-body">
                    <h5 dangerouslySetInnerHTML={{ __html: item.title }}/>
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
}

export default Instagrampage