import React,{useEffect, useState} from "react";
import { fetchpaidinstagrampage, base_api } from "../Axios/Axios";


function Instagrampaidads() {

  
  const [paidinstagrampage, setPaidinstagrampage] = useState([]);
  const [isBackendError, setIsBackendError] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const paidinstagrampageData = await fetchpaidinstagrampage();
        setPaidinstagrampage(paidinstagrampageData);

      } catch (error) {
        console.error("Error fetching instagram paid  data:", error);
        setIsBackendError(true);
      }
    };

    fetchData();
  }, []);

  
  if (isBackendError  || !paidinstagrampage ||  !paidinstagrampage.length ) {
    
    
    return (
      <div>
        <div className="container-paid">
          <div className="pagein-content">
            <h3>Instagram Paid Ads</h3>
    
            <div className="second-main">
              <div className="row row-cols-1 row-cols-md-3 g-4 second-main2">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="card">
                    <img src="/Insta_images/instaammanres.jpg" className="card-img-top" height="300" width="200" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Amman Restaurant</h5>
                      <p className="card-text"></p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="card">
                    <img src="/Insta_images/instabalagobalan.jpg" className="card-img-top" height="300" width="200" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Balagopalan Jewellery Mart</h5>
                      <p className="card-text"></p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="card">
                    <img src="/Insta_images/instawecraft.jpg" className="card-img-top" height="300" width="200" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">We Craft Floors</h5>
                      <p className="card-text"></p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="card">
                    <img src="/Insta_images/instasenthiljewellery.jpg" className="card-img-top" height="300" width="200" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Senthil Jewellery Mart</h5>
                      <p className="card-text"></p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="card">
                    <img src="/Insta_images/instamkoil.jpg" className="card-img-top" height="300" width="200" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">MK Oil Mill</h5>
                      <p className="card-text"></p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="card">
                    <img src="/Insta_images/instahibro.jpg" className="card-img-top" height="300" width="200" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Hi Bro Mens Madurai</h5>
                      <p className="card-text"></p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="card">
                    <img src="/Insta_images/instavarsan.jpg" className="card-img-top" height="300" width="200" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Varshan Enterprises</h5>
                      <p className="card-text"></p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="card">
                    <img src="/Insta_images/instacoolworld.jpg" className="card-img-top" height="300" width="200" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Saaral bakes cakes sweets</h5>
                      <p className="card-text"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

return (
  <div>
    <div className="container-paid">
      <div className="pagein-content">
        <h3>Instagram Paid Ads</h3>

        <div className="second-main">
          <div className="row row-cols-1 row-cols-md-3 g-4 second-main2">
          {paidinstagrampage.map((item) => (
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div  className="card">
              <img src={`${base_api}${item.image}`} className="card-img-top" height="300" width="200" alt="..."/>
                <div className="card-body">
                <h5 dangerouslySetInnerHTML={{ __html: item.title }} className='card-title'/>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default Instagrampaidads;
