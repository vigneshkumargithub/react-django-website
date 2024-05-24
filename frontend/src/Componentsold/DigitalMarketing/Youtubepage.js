import React,{useEffect, useState} from 'react';
import Footer from '../Home/Footer';
import "./Youtubepage.css";
import { fetchyoutubepage, base_api} from "../Axios/Axios";


const Youtubepage = () => {
    const [youtubepage, setYoutubepage] = useState([]);
    const [isBackendError, setIsBackendError] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const youtubepageData = await fetchyoutubepage();
          setYoutubepage(youtubepageData);
        } catch (error) {
          console.error("Error fetching youtubepage data:", error);
          setIsBackendError(true);
        }
      };
      fetchData();
    }, []);
  

if (isBackendError || youtubepage === null || youtubepage === undefined) {

  return (
    <div>
      <div className="main">
        <p>Youtube Business / Fan Page Maintenance</p>

        <div className="second-main">
          <div class="row row-cols-1 row-cols-md-3 g-4 second-main2">
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="card">
                <img src="Insta_images/instaammanres.jpg" class="card-img-top" height="300" width="200" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Amman Restaurant</h5>
                  <p class="card-text"></p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="card">
                <img src="Insta_images/instabalagobalan.jpg" class="card-img-top" height="300" width="200" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Balagopalan Jewellery Mart</h5>
                  <p class="card-text"></p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="card">
                <img src="Insta_images/instawecraft.jpg" class="card-img-top" height="300" width="200" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">We Craft Floors</h5>
                  <p class="card-text"></p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="card">
                <img src="Insta_images/instasenthiljewellery.jpg" class="card-img-top" height="300" width="200" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Senthil Jewellery Mart</h5>
                  <p class="card-text"></p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="card">
                <img src="Insta_images/instamkoil.jpg" class="card-img-top" height="300" width="200" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">MK Oil Mill</h5>
                  <p class="card-text"></p>
                </div> 
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="card">
                <img src="Insta_images/instahibro.jpg" class="card-img-top" height="300" width="200" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Hi Bro Mens Madurai</h5>
                  <p class="card-text"></p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="card">
                <img src="Insta_images/instavarsan.jpg" class="card-img-top" height="300" width="200" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Varshan Enterprises</h5>
                  <p class="card-text"></p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="card">
                <img src="Insta_images/instacoolworld.jpg" class="card-img-top" height="300" width="200" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Saaral bakes cakes sweets</h5>
                  <p class="card-text"></p>
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
        <p>Youtube Business / Fan Page Maintenance</p>

        <div className="second-main">
          <div class="row row-cols-1 row-cols-md-3 g-4 second-main2">
          {youtubepage.map((item) => (
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="card">
              <img src={`${base_api}${item.image}`} class="card-img-top" height="300" width="200"/>
                <div class="card-body">
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

export default Youtubepage;
