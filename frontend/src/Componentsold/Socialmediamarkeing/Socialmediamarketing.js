/// ........................................../////
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Home/Footer";
import Socialmediaposter from "../Socialmediamarkeing/Socialmediaposter";
import Videomakeing from "../Socialmediamarkeing/Videomakeing";
import Packagedesign from "../Socialmediamarkeing/Packagedesign";
import Logodesign from "../Socialmediamarkeing/Logodesign";
import Uiuxdesign from "../Socialmediamarkeing/Uiuxdesign";
import './Socialmediamarketing.css';
import Aos from "aos";
import 'aos/dist/aos.css';

function Socialmediamarketing() {
  const [showcontent, setShowcontent] = useState(false);
  const [showlogodesign, setShowlogodesign] = useState(false);
  const [showContainerSocial, setShowContainerSocial] = useState(true);
  const [showvideo, setShowVideo] = useState(false);
  const [showdesign, setshowdesign] = useState(false);

  const handleLinkClick = () => {
    setShowcontent(true);
    setShowlogodesign(false); 
    setShowContainerSocial(false);
    setShowVideo(false);
    setshowdesign(false);
  };

  const handleLinkClick1 = () => {
    setShowlogodesign(true);
    setShowcontent(false);
    setShowContainerSocial(false);
    setShowVideo(false);
    setshowdesign(false);
  };

  const handleSocialPostersClick = () => {
    setShowContainerSocial(true);
    setShowcontent(false);
    setShowlogodesign(false);
    setShowVideo(false);
    setshowdesign(false);
  };
 
  const handlevideoclick = () => {
    setShowVideo(true);
    setShowcontent(false);
    setShowlogodesign(false);
    setShowContainerSocial(false);
    setshowdesign(false);
  };

  const handledesignclick = () => {
    setshowdesign(true);
    setShowcontent(false);
    setShowlogodesign(false);
    setShowContainerSocial(false);
    setShowVideo(false);
  };

  useEffect(()=>{Aos.init({duration:2000});},[])

  return (
    <div>

      <div className="social-header-bg">
          <div className="row text-contents">
            <div data-aos="fade-left" className="col-lg-6 col-md-12 col-sm-12 offset-lg-6 offset-md-6 text-content">
              <h3>Design Portfolio</h3>
              <div className="line"></div>
              <p>
                Explore Our Portfolio Projects. Get about glimplse into our
                world Design is our passion. Projects Are An Our Art. We Create
                meaningful and diverse projects for all levels of ambition.
              </p>
            </div>
          </div> 
      </div>

      <div className="row box-content">
        <div className="col-lg-1"></div>
        <div className="col-lg-2 col-md-6 col-sm-12">
          <Link id="facebook" onClick={handleSocialPostersClick}>
            <div data-aos="fade-up" className="headings">
              <p>Social Media Posters</p>
            </div>
          </Link>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-12">
          <Link id="Instagram" onClick={handleLinkClick}>
            <div data-aos="fade-up" className="headings">
              <p>Package Design</p>
            </div>
          </Link>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-12" id="youtube">
          <Link onClick={handleLinkClick1}>
            <div data-aos="fade-up" className="headings">
              <p>Logo Works</p>
            </div>
          </Link>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-12">
          <Link onClick={handlevideoclick}>
            <div data-aos="fade-up" className="headings">
              <p>Video Making</p>
            </div>
          </Link>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-12">
          <Link onClick={handledesignclick}>
            <div data-aos="fade-up" className="headings">
              <p>UI/UX Design</p>
            </div>
          </Link>
        </div>
        <div className="col-lg-1"></div>
      </div>
      {showContainerSocial && <Socialmediaposter />}
      {showcontent && <Packagedesign />}
      {showlogodesign && <Logodesign />}
      {showvideo && <Videomakeing />}
      {showdesign && <Uiuxdesign />}
      <Footer/>
    </div>
  );
}

export default Socialmediamarketing;

