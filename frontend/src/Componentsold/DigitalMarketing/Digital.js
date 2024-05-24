////ram code :

// import React from "react";
// import Navbar from "./Navbar";
// import ScrollToTop from "./ScrollToTop";
// import Footer from "./Footer";
// // import { FaFacebook, FaInstagram, FaYoutube, FaGoogle } from 'react-icons/fa';
// import "./Digital.css";
// import { Link } from "react-router-dom";

// const Digital = () => {
//   return (
//     <div id="digital">
//       {/* <Navbar /> */}

//       <div className="main-content">
//         <div className="digital-header-bg">
//           <div className="row text-contents">
//             <div className="col-lg-6 col-md-6 col-sm-12 first-content">
//               <img
//                 src="/Imagefile/dm_1sec_1.png"
//                 className="responsive-image"
//                 alt="Responsive Image"
//               />
//             </div>
//             <div className="col-lg-6 col-md-6 col-sm-12 text-content">
//               <p>Digital Marketing</p>
//               <h2>
//                 Get in touch with the Best
//                 <br />
//                 Digital Marketing Company <br /> in Madurai{" "}
//               </h2>
//             </div>
//           </div>
//         </div>
//         <ScrollToTop />
//       </div>

//       <div className="second-content">
//         <div className="row justify-content-between">
//           <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 heading p-0">
//             <h3>Social Media Marketing</h3>
//             <h6>
//               An Action hero needs personal ingenuity, a variety of <br />
//               talents and imagination to impress His Audience in order <br />
//               to stand alone in the crowd.. Social Media Marketing has <br />
//               a unique personality in generating Huge Audience and <br />
//               Leads for Marketers on Facebook, Instagram, YouTube, <br />
//               Twitter, Pinterest Google Business, Linkedin..,
//             </h6>
//             <div className="row box-content">
//               <div className="col-lg-3 col-md-6 col-sm-12">
//                 <Link to="/Facebookpage" id="facebook">
//                   {/* <div className='icon'>
//                                 <FaFacebook className="icons youtube white-icon" />
//                             </div> */}
//                   <div className="letter">
//                     <p>Facebook Page</p>
//                   </div>
//                 </Link>
//               </div>
//               <div className="col-lg-3 col-md-6 col-sm-12">
//                 <Link to="/Instagram1" id="Instagram">
//                   {/* <div className='icon'>
//                                 <FaInstagram className="icons youtube white-icon" />
//                             </div> */}
//                   <div className="letter">
//                     <p>Instagram Page</p>
//                   </div>
//                 </Link>
//               </div>
//               <div className="col-lg-3 col-md-6 col-sm-12" id="youtube">
//                 <Link to="/Youtube">
//                   {/* <div className='icon'>
//                                 <FaYoutube className="icons youtube white-icon" />
//                             </div> */}
//                   <div className="letter">
//                     <p>Youtube Page</p>
//                   </div>
//                 </Link>
//               </div>
//               <div className="col-lg-3 col-md-6 col-sm-12">
//                 <Link to="/Google">
//                   {/* <div className='icon'>
//                                 <FaGoogle className="icons youtube white-icon" />
//                             </div> */}
//                   <div className="letter">
//                     <p>Google Page</p>
//                   </div>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 right-image">
//             <img
//               src="/Imagefile/dm_2nd1.png"
//               className="second-con-img"
//               alt="Responsive Image"
//             />
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Digital;





///// just checking for frontend and backend using


import React, { useEffect, useState }  from "react";
import ScrollToTop from "../Home/ScrollToTop";
import Footer from "../Home/Footer";
import "./Digital.css";
import { Link } from "react-router-dom";
import { fetchdmfirstsection, fetchdmsecondsection, base_api} from "../Axios/Axios";
import Aos from "aos";
import 'aos/dist/aos.css';


const Digital = () => {
  const [dmsecondsection, setDmsecondsection] = useState([]);
  const [dmfirstsection, setDmfirstsection] = useState([]);
  const [isBackendError, setIsBackendError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dmfirstsectionData = await fetchdmfirstsection();
        const dmsecondsectionData = await fetchdmsecondsection();
        setDmfirstsection(dmfirstsectionData);
        setDmsecondsection(dmsecondsectionData);
      } catch (error) {
        console.error("Error fetching dmfirstsection data:", error);
        console.error("Error fetching dmsectionsection data:", error);
        setIsBackendError(true);
      }
    };

    fetchData();
  }, []);

  useEffect(()=> { Aos.init({duration:2000});},[])


if (isBackendError || !dmfirstsection || ! dmsecondsection.length) {

    return (
      <div id="digitalpage">
        <div className="main-content">
          <div className="digital-header-bg">
            <div className="row text-contents">
              <div data-aos='fade-right' className="col-lg-6 col-md-6 col-sm-12 first-content">
                <img
                  src="/Imagefile/dm_1sec_1.png"
                  className="responsive-image"
                  alt="Responsive Image"
                />
              </div>
              <div data-aos='fade-left' className="col-lg-6 col-md-6 col-sm-12 text-content">
                <p>Digital Marketing</p>
                <h2>
                  Get in touch with the Best
                  <br />
                  Digital Marketing Company <br /> in Madurai{" "}
                </h2>
              </div>
            </div>
          </div>
          <ScrollToTop />
        </div>

        <div className="second-content">
          <div className="row justify-content-between">
            <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 heading p-0">
              <h3>Social Media Marketing</h3>
              <h6>
                An Action hero needs personal ingenuity, a variety of <br />
                talents and imagination to impress His Audience in order <br />
                to stand alone in the crowd.. Social Media Marketing has <br />
                a unique personality in generating Huge Audience and <br />
                Leads for Marketers on Facebook, Instagram, YouTube, <br />
                Twitter, Pinterest Google Business, Linkedin..,
              </h6>
              <div data-aos='fade-up' className="row box-content">
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <Link to="/facebookpage" id="facebook">
                    <div className="letter">
                      <p>Facebook Page</p>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <Link to="/instagrampage" id="Instagram">
                    <div className="letter">
                      <p>Instagram Page</p>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12" id="youtube">
                  <Link to="/youtubepage">
                    <div className="letter">
                      <p>Youtube Page</p>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <Link to="/googlepage">
                    <div className="letter">
                      <p>Google Page</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div data-aos='fade-left' className="col-lg-4 col-md-12 col-sm-12 col-xs-12 right-image">
              <img
                src="/Imagefile/dm_2nd1.png"
                className="second-con-img"
                alt="Responsive Image"
              />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div id="digitalpage">
      <div className="main-content">
        <div className="digital-header-bg">
          {dmfirstsection.map((item) => (
            <div className="row text-contents" key={item.id}>
              <div data-aos='fade-right' className="col-lg-6 col-md-6 col-sm-12 first-content">
                <img
                  src={`${base_api}${item.image}`}
                  className="responsive-image"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 text-content">
                <p dangerouslySetInnerHTML={{ __html: item.title }} />
                <h2 dangerouslySetInnerHTML={{ __html: item.subtitle }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="second-content">
        <div className="row justify-content-between">
          {dmsecondsection.map((item) => (
            <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 heading p-0">
              <h3 data-aos='fade-right' dangerouslySetInnerHTML={{ __html: item.title }} />
              <h6 data-aos='fade-right' dangerouslySetInnerHTML={{ __html: item.subtitle }} />
              <div data-aos='fade-up' className="row box-content">
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <Link to="/facebookpage" id="facebook">
                    <div className="letter">
                      <p>Facebook Page</p>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <Link to="/instagrampage" id="Instagram"> 
                    <div className="letter">
                      <p>Instagram Page</p>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12" >
                  <Link to="/youtubepage">
                    <div className="letter">
                      <p>Youtube Page</p>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <Link to="/googlepage">
                    <div className="letter">
                      <p>Google Page</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {dmsecondsection.map((item) => (
            <div data-aos='fade-left' className="col-lg-4 col-md-12 col-sm-12 col-xs-12 right-image">
              <img
                src={`${base_api}${item.image}`}
                className="second-con-img"
              />
            </div>
          ))}
        </div>
      </div>


      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Digital; 
 