//// other new contact form details in send to data's in  post in django views.py
//////////////////////////////

// import React, { useState } from "react";
// import { submitFormData} from "../Axios/Axios";
// import Footer from "./Footer";
// import ScrollToTop from "./ScrollToTop";

// function Contact1() {
// ///// original function and working good:

//   const [formData, setFormData] = useState({});

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
  
// /// 2nd method of axios.js file inside of backend api
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const response = await submitFormData(formData); // Updated to remove the URL parameter
//     console.log(response); // Log the response data
//     // Show alert based on the response
//     alert(response.detail);
//   } catch (error) {
//     console.error('Error:', error.response.data);
//     // Show error message based on the response status
//     if (error.response && error.response.status === 400) {
//       alert(error.response.data.detail);
//     } else {
//       alert('An error occurred while submitting the form.');
//     }
//   }
// };


//   return (
//     <div id="contact1">
      
//       <div className="contactUsImage1">
//         <div className="contactUsImage">
//         </div>
//       </div> 

//       {/* New Contact form */}

//       <div className="contactUs">
//         <div className="title">
//           <h1>Contact Us page</h1>
//         </div>

//         <div className="box">
//           {/* form */}
//           <div className="contact form">
//             <h3>send a message</h3>

//             <form id="myForm" onSubmit={handleSubmit}>
//               <div className="formBox">
//                 <div className="row50">
//                   <div className="InputBox">
//                     <span>User name</span>
//                     <input
//                       type="text"
//                       name="name"
//                       placeholder="Enter your name"
//                       required="required"
//                       aria-required="true"
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <div className="InputBox">
//                     <span>Our service</span>
//                     <select name="ourservices" onChange={handleChange}>
//                       <option value="optiont">Choose any option</option>
//                       <option value="Web development">Web development</option>
//                       <option value="Digital marketing">Digital marketing</option>
//                       <option value="Paid service">Paid service</option>
//                       <option value="SEO">SEO</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="row50">
//                   <div className="InputBox">
//                     <span>EmailID</span>
//                     <input
//                       type="email"
//                       name="emailid"
//                       placeholder="Enter your Emailid"
//                       required="required"
//                       aria-required="true"
//                       value={formData.emailid}
//                       onChange={handleChange}
//                     />
//                   </div>

//                   <div className="InputBox">
//                     <span>Mobile</span>
//                     <input
//                       type="tel"
//                       name="phonenumber"
//                       placeholder="phone number"
//                       required="required"
//                       aria-required="true"
//                       pattern="[0-9()#&+*-=.]+"
//                       title="Only numbers and phone characters (#, -, *, etc) are accepted."
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>

//                 <div className="row100">
//                   <div className="InputBox">
//                     <span>Message</span>
//                     <textarea
//                       name="message"
//                       id="mes"
//                       cols="20"
//                       rows="10"
//                       placeholder="message"
//                       onChange={handleChange}
//                     ></textarea>
//                   </div>
//                 </div>

//                 <div className="row100">
//                   <div className="InputBox">
//                     <input type="submit" className="" value="send" />
//                   </div>
//                 </div>
//               </div>
//             </form>
//           </div>



//           {/* info */}
//           <div className="contact info">
//             <h3>Contact Infomation</h3>
//             <div className="InfoBox">
//               <div>
//                 <span>
//                   <i className="fa-sharp fa-solid fa-location-dot"></i>
//                 </span>
//                 <p>
//                   No 2, First Floor, Phoenix Marketing, DRO Colony Main Rd, near
//                   Indian Bank,
//                   <br /> Ramaond Reserve Line, K.Pudur, <br /> Madurai, Tamil
//                   Nadu 625002
//                 </p>
//               </div>
//               <div>
//                 <span>
//                   <i className="fa-solid fa-envelope"></i>
//                 </span>
//                 <a href="mailto:loremipsum@gmail.com">Sample@gmail.com</a>
//               </div>
//               <div>
//                 <span>
//                   <i className="fa-solid fa-phone-volume"></i>
//                 </span>
//                 <a href="tel:+91 987654321">+91 987654321</a>
//               </div>
//               <ul className="sci">
//                 <li>
//                   <a href="#">
//                     <i className="fa-brands fa-facebook"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#">
//                     <i className="fa-brands fa-instagram"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#">
//                     <i className="fa-brands fa-linkedin"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#">
//                     <i className="fa-brands fa-youtube"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#">
//                     <i className="fa-brands fa-square-x-twitter"></i>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           {/* map */}
//           <div className="contact map">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50881.46533289707!2d78.11265095682494!3d9.917855571951272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c52e5f9b0fd9%3A0xbde30152cc5503be!2sPhoenix%20Marketing!5e1!3m2!1sen!2sin!4v1707132798665!5m2!1sen!2sin"
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </div>
//         </div>
//       </div>
//       <ScrollToTop/>
//       <Footer />
//     </div>
//   );
// }

// export default Contact1;






// new contact form function

import React, { useState } from "react";
import { submitFormData } from "../Axios/Axios";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

function Contact1() {
  const [formData, setFormData] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

///// original  ///////
// ------------------- //


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await submitFormData(formData);
      console.log(response);
      setFormSubmitted(true); // Set form submission status to true
      alert(response.detail);
      setFormData({}); // Reset form fields to empty
    } catch (error) {
      console.error('Error:', error.response.data);
      if (error.response && error.response.status === 400) {
        alert(error.response.data.detail);
      } else {
        alert('An error occurred while submitting theee form.');
      }
    }
  };


///// original  ///////
// ------------------- //


// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const response = await submitFormData(formData);
//     console.log(response);
//     setFormSubmitted(true); // Set form submission status to true
//     alert(response.detail);
//     setFormData({}); // Reset form fields to empty
//   } catch (error) {
//     console.error('Error:', error);

//     if (error.response) {
//       // The request was made and the server responded with a status code
//       // that falls out of the range of 2xx
//       console.error('Error response:', error.response.data);
//       if (error.response.status === 400) {
//         alert(error.response.data.detail);
//       } else {
//         alert('An error occurred while submitting the form.');
//       }
//     } else if (error.request) {
//       // The request was made but no response was received
//       console.error('Error request:', error.request);
//       alert('No response received from the server.');
//     } else {
//       // Something happened in setting up the request that triggered an Error
//       console.error('Error message:', error.message);
//       alert('An error occurred while setting up the request.');
//     }
//   }
// };



  return (
    <div id="contact1">
      <div className="contactUsImage1">
        {/* <div className="contactUsImage"></div> */}
          <div className="contactallfields">
              <div className="contact form">
                <h3>send a message</h3>
                {formSubmitted ? (
                  <p>Thank you, our team will contact you.🤝</p>
                ) : (
                  <form id="myForm" onSubmit={handleSubmit}>
                    <div className="formBox">
                      <div className="row50">
                        <div className="InputBox">
                          <span>User name</span>
                          <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            required="required"
                            aria-required="true"
                            onChange={handleChange}
                          />
                        </div>
                        <div className="InputBox">
                          <span>Our service</span>
                          <select name="ourservices" onChange={handleChange}>
                            <option value="optiont">Choose any option</option>
                            <option value="Web development">Web development</option>
                            <option value="Digital marketing">Digital marketing</option>
                            <option value="Paid service">Paid service</option>
                            <option value="SEO">SEO</option>
                          </select>
                        </div>
                      </div>

                      <div className="row50">
                        <div className="InputBox">
                          <span>EmailID</span>
                          <input
                            type="email"
                            name="emailid"
                            placeholder="Enter your Emailid"
                            required="required"
                            aria-required="true"
                            value={formData.emailid}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="InputBox">
                          <span>Mobile</span>
                          <input
                            type="tel"
                            name="phonenumber"
                            placeholder="phone number"
                            required="required"
                            aria-required="true"
                            pattern="[0-9()#&+*-=.]+"
                            title="Only numbers and phone characters (#, -, *, etc) are accepted."
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="row100">
                        <div className="InputBox">
                          <span>Message</span>
                          <textarea
                            name="message"
                            id="mes"
                            cols="20"
                            rows="10"
                            placeholder="message"
                            onChange={handleChange}
                          ></textarea>
                        </div>
                      </div>

                      <div className="row100">
                        <div className="InputBox">
                          <input type="submit" className="" value="submit" />
                        </div>
                      </div>
                    </div >
                  </form>
                )}
              </div>
          </div>
      </div>




      <div className="title">
          <h1>Contact information</h1>
        </div>

    <div className="contact-second">

      <div className="contactUs">
        {/* <div className="title">
          <h1>Contact Us page</h1>
        </div> */}

        <div className="box">
         
          {/* info */}
          <div className="con-infomation">
            <div className="InfoBox">

             <div className="con-locationaddress">
                <span>
                  <i className="fa-sharp fa-solid fa-location-dot"></i>
                </span>
                {/* <p>
                  No 2, First Floor, Phoenix Marketing, DRO Colony Main Rd, near
                  Indian Bank,
                  <br /> Ramaond Reserve Line, K.Pudur, <br /> Madurai, Tamil
                  Nadu 625002
                </p> */}
                <p>
                Phoenix Marketing 2, First Floor,<br/>
                DRO Colony Main Rd, near Indian Bank,<br/>
                Ramond Reserve Line, K.Pudur,<br/>
                Madurai, Tamil Nadu 625002.
                </p>
              </div>

              <div className="con-email">
                <span>
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <a href="mailto:loremipsum@gmail.com">Sample@gmail.com</a>
              </div>

              <div className="con-ph">
                <span>
                  <i className="fa-solid fa-phone-volume"></i>
                </span>
                <a href="tel:+91 987654321">+91 987654321</a>
              </div>

              <ul className="sci">
                <li>
                  <a href="#">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-square-x-twitter"></i>
                  </a>
                </li>
              </ul>


            </div>
            
          </div>

          {/* map */}
          <div className="con-address-section">
              <div className="con-address-image">
                  <img src="Imagefile/contact_laptop.png" />
              </div>
          </div>


        </div>
        <div className="con map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50881.46533289707!2d78.11265095682494!3d9.917855571951272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c52e5f9b0fd9%3A0xbde30152cc5503be!2sPhoenix%20Marketing!5e1!3m2!1sen!2sin!4v1707132798665!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

      </div>
    </div>

      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default Contact1;
