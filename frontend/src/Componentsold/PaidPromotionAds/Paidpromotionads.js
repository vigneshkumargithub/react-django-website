import React, { useState, useEffect } from "react";
import "./Paidpromotionads.css";
import { FaFacebook, FaGoogle, FaInstagram, FaYoutube } from "react-icons/fa";
import Footer from "../Home/Footer";
import Instagrampaidads from "./Instagrampaidads";
import Youtubepaidads from "./Youtubepaidads";
import Googlepaidads from "./Googlepaidads";
import Facebookpaidads from "./Facebookpaidads";
import { fetchpaidpromotionads, base_api } from "../Axios/Axios";
import Aos from "aos";
import 'aos/dist/aos.css';

function Paidpromotionads() {
  const [showfacebook, facebookcontent] = useState(true);
  const [showinstagram, instagramcontent] = useState(false);
  const [showyoutube, youtubecontent] = useState(false);
  const [showgoogle, googlecontent] = useState(false);

  const [paidpromotionads, setPaidpromotionads] = useState([]);
  const [isBackendError, setIsBackendError] = useState(false);

  const handledesignclick = () => {
    facebookcontent(true);
    instagramcontent(false);
    youtubecontent(false);
    googlecontent(false);
  };

  const handledesignclick1 = () => {
    facebookcontent(false);
    instagramcontent(true);
    youtubecontent(false);
    googlecontent(false);
  };

  const handledesignclick2 = () => {
    facebookcontent(false);
    instagramcontent(false);
    youtubecontent(true);
    googlecontent(false);
  };

  const handledesignclick3 = () => {
    facebookcontent(false);
    instagramcontent(false);
    youtubecontent(false);
    googlecontent(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const paidpromotionadsData = await fetchpaidpromotionads();
        setPaidpromotionads(paidpromotionadsData);
      } catch (error) {
        console.error("Error fetching paidpromotionads data:", error);
        setIsBackendError(true);
      }
    };

    fetchData();
  }, []);


  useEffect(()=> {Aos.init({duration:2000});},[])

  if (isBackendError || !paidpromotionads || !paidpromotionads.length) {
    return (
      <div id="paidpromotion">
        <div className="main-content">
          <div className="social-header-bg-paid">
            <div className="row text-contents-service">
              <div className="col-lg-6 col-md-12 col-sm-12 offset-lg-0 offset-md-0 offset-sm-0 text-content-service">
                <div data-aos="fade-right" className="left-content">
                  <h1 >Paid Promotion Ads</h1>
                  <div className="line-service"></div>
                  <h4>
                    The best Social Media paid advertising company in madurai,
                    Tamilnadu. Offers a number of Social Media paid promotion
                    options to help businesses maintain their overall online
                    purchase.
                  </h4>
                </div>
              </div>

              <div data-aos="fade-left" className="col-lg-6 col-md-12 col-sm-12 text-image-service">
                <img
                  src="/Imagefile/Man.png"
                  height="600"
                  width="700"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          <div data-aos="zoom-in" className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <ul className="centered-list">
                  <li className="li">Brand Awareness</li>
                  <li className="li">Promote Your Local Business</li>
                  <li className="li">Promote Your App</li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <ul className="centered-list">
                  <li className="li">Brand Awareness</li>
                  <li className="li">Promote Your Local Business</li>
                  <li className="li">Promote Your App</li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <ul className="centered-list">
                  <li className="li">Brand Awareness</li>
                  <li className="li">Promote Your Local Business</li>
                  <li className="li">Promote Your App</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="image-container-paid">
            <div data-aos="fade-right" className="row">
              <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                <div className="card-service" onClick={handledesignclick}>
                  <div className="icon">
                    <FaFacebook className="icons youtube black-icon m-2" />
                  </div>
                  <p>Facebook Paid Ads</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                <div className="card-service" onClick={handledesignclick1}>
                  <div className="icon">
                    <FaInstagram className="icons youtube black-icon m-2" />
                  </div>
                  <p>Instagram Paid Ads</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                <div className="card-service" onClick={handledesignclick2}>
                  <div className="icon">
                    <FaYoutube className="icons youtube black-icon m-2" />
                  </div>
                  <p>Youtube Paid Ads</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                <div className="card-service" onClick={handledesignclick3}>
                  <div className="icon">
                    <FaGoogle className="icons youtube black-icon m-2" />
                  </div>
                  <p>Google Paid Ads</p>
                </div>
              </div>
            </div>
          </div>

          {showfacebook && <Facebookpaidads />}
          {showinstagram && <Instagrampaidads />}
          {showyoutube && <Youtubepaidads />}
          {showgoogle && <Googlepaidads />}

          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div id="paidpromotion">
      <div className="main-content">
        <div className="social-header-bg-paid">
          <div className="row text-contents-service">
            <div className="col-lg-6 col-md-12 col-sm-12 offset-lg-0 offset-md-0 offset-sm-0 text-content-service">
              <div data-aos="fade-right" className="left-content">
                <h1 >Paid Promotion Ads</h1>
                <div className="line-service"></div>
                <h4>
                  The best Social Media paid advertising company in madurai,
                  Tamilnadu. Offers a number of Social Media paid promotion
                  options to help businesses maintain their overall online
                  purchase.
                </h4>
              </div>
            </div>

            <div data-aos="fade-left" className="col-lg-6 col-md-12 col-sm-12 text-image-service">
              <img
                src="/Imagefile/Man.png"
                height="600"
                width="700"
                className="img-fluid"
              />
            </div>
          </div>
        </div>

        <div data-aos="zoom-in"  className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <ul className="centered-list">
                <li className="li">Brand Awareness</li>
                <li className="li">Promote Your Local Business</li>
                <li className="li">Promote Your App</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <ul className="centered-list">
                <li className="li">Brand Awareness</li>
                <li className="li">Promote Your Local Business</li>
                <li className="li">Promote Your App</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <ul className="centered-list">
                <li className="li">Brand Awareness</li>
                <li className="li">Promote Your Local Business</li>
                <li className="li">Promote Your App</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="image-container-paid">
          {paidpromotionads.map((service) => (
            <div data-aos="fade-right" className="row">
              <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                <div className="card-service" onClick={handledesignclick}>
                  <div className="icon">
                    {/* <FaFacebook className="icons youtube black-icon m-2" /> */}
                    <img
                      src={`${base_api}${service.paid_facebookpage_image}`}
                      className="icons youtube black-icon m-2"
                    />
                  </div>
                  {/* <p>Facebook Paid Ads</p> */}
                  <p
                    dangerouslySetInnerHTML={{
                      __html: service.paid_facebookpage_text,
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                <div className="card-service" onClick={handledesignclick1}>
                  <div className="icon">
                    {/* <FaInstagram className="icons youtube black-icon m-2" /> */}
                    <img
                      src={`${base_api}${service.paid_intagrampage_image}`}
                      className="icons youtube black-icon m-2"
                    />
                  </div>
                  {/* <p>Instagram Paid Ads</p> */}
                  <p
                    dangerouslySetInnerHTML={{
                      __html: service.paid_intagrampage_text,
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                <div className="card-service" onClick={handledesignclick2}>
                  <div className="icon">
                    {/* <FaYoutube className="icons youtube black-icon m-2" /> */}
                    <img
                      src={`${base_api}${service.paid_youtubepage_image}`}
                      className="icons youtube black-icon m-2"
                    />
                  </div>
                  {/* <p>Youtube Paid Ads</p> */}
                  <p
                    dangerouslySetInnerHTML={{
                      __html: service.paid_youtubepage_text,
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                <div className="card-service" onClick={handledesignclick3}>
                  <div className="icon">
                    {/* <FaGoogle className="icons youtube black-icon m-2" /> */}
                    <img
                      src={`${base_api}${service.paid_googlepage_image}`}
                      className="icons youtube black-icon m-2"
                    />
                  </div>
                  {/* <p>Google Paid Ads</p> */}
                  <p
                    dangerouslySetInnerHTML={{
                      __html: service.paid_googlepage_text,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {showfacebook && <Facebookpaidads />}
        {showinstagram && <Instagrampaidads />}
        {showyoutube && <Youtubepaidads />}
        {showgoogle && <Googlepaidads />}

        <Footer />
      </div>
    </div>
  );
}

export default Paidpromotionads;
