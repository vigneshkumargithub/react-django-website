
import React, { useEffect, useState, useRef } from "react";
import { fetchvideomarketingcontent, fetchvideomarketingvideo, base_api } from "../Axios/Axios";
import Aos from "aos";
import "aos/dist/aos.css";

function Videomakeing() {
  const [videomarketingcontent, setVideomarketingcontent] = useState([]);
  const [videomarketingvideo, setVideomarketingvideo] = useState([]);
  const [isBackendError, setIsBackendError] = useState(false);

  const videoRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videomarketingcontentData = await fetchvideomarketingcontent();
        const videomarketingvideoData = await fetchvideomarketingvideo();
        setVideomarketingcontent(videomarketingcontentData);
        setVideomarketingvideo(videomarketingvideoData);
      } catch (error) {
        console.error("Error fetching videomarketing content and video data:", error);
        setIsBackendError(true);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        setTimeout(() => {
          if (video) {
            video.play();
          }
        }, 5000);
      } else {
        if (video) {
          video.pause();
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(()=> {Aos.init({duration:2000});},[])

  if (isBackendError || !videomarketingcontent || !videomarketingvideo || !videomarketingcontent.length || !videomarketingvideo.length) {
    return (
      <div className="container-social">
        {/* Implement your Video Making content here */}
        <div data-aos="fade-left" className="down-content">
          <h3>Animated Video f'data</h3>
          <p>
            f'data When you hear the word "animation", your initial thought is likely Disney or Cartoons. 
            This is normal. So the thought want to be stable in people's minds. That's what animation videos make. 
            This type of video is most popular and has a superior ability to rotate the design 360 degrees, giving products a real-life look.
            It is a perfect tool for attracting your new customers.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container-social">
      {/* Implement your Video Making content here */}
      {videomarketingcontent.map((service) => (
        <div data-aos="fade-left" className="down-content" key={service.id}>
          <h3 dangerouslySetInnerHTML={{ __html: service.title }} />
          <p dangerouslySetInnerHTML={{ __html: service.subtitle }} />
        </div>
      ))}

      <div className="image-container mt-5">
        <div className="row">
          {videomarketingvideo.map((service) => (
            <div data-aos="fade-down" className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mb-4 middleimg" key={service.id}>
              <video ref={videoRef} controls autoPlay loop muted className="img-fluid" controlsList="nodownload">
                <source src={`${base_api}${service.video}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Videomakeing;
