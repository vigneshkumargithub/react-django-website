////////////////////// working good condition backend side add the phnumber frontend navigate to whatsapp integration

// import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
// import { FaBars } from "react-icons/fa";
// import { FaWhatsapp } from 'react-icons/fa';
// import { fetchWhatsapp } from "../Axios/Axios";


// function Header() {
//   const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);
//   const [showNav, setShowNav] = useState(false);
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [formattedPhoneNumber, setFormattedPhoneNumber] = useState("");


//   // Toggle the Mobile Nav open / close
//   const handleMobileNavClick = () => {
//     mobileNavIsOpen ? setMobileNavIsOpen(false) : setMobileNavIsOpen(true);
//   };

//   window.addEventListener("resize", () => {
//     window.innerWidth > 600 && setMobileNavIsOpen(false);
//   });


//   useEffect(() => {
//     const fetchData = async () => {
//       const phonenumber = await fetchWhatsapp();
//       setPhoneNumber(phonenumber);
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (phoneNumber && phoneNumber.phone_number) {
//       const formattedNumber = phoneNumber.phone_number.replace(/[^0-9]/g, "");
//       setFormattedPhoneNumber(formattedNumber);
//     }
//   }, [phoneNumber]);
 
//   return (
//     <div>
//       <nav className="navbar">
//           <Link to="/" aria-current="page">
//               <img src="/Imagefile/logo.png" alt="header_image" className="logo_image" />
//           </Link>
//         <div class="menu-container">
//           <div>
//             <ul className="menu_list">
//               <li className="me-5 mt-3">
//                 <Link to="/" aria-current="page">
//                   Home
//                 </Link>
//               </li>
//               {/* <li className="me-5 mt-3">
//                 <Link to="/about1" aria-current="page">
//                   About
//                 </Link>
//               </li> */}
//               <li className="me-5 mt-3">
//                 <Link to="/servicepage" aria-current="page">
//                   Service
//                 </Link>
//                       <ul className="submenu">
//                         <li>
//                           <Link
//                             to="/digitalpage"
//                             aria-current="page"
//                             className="digital-link"
//                           >
//                             Digital Marketing
//                           </Link>
//                                   <ul className="service-toggle">
//                                       <li>
//                                         {/* <a href="/socialmediamarketing">Social Media Marketing</a> */}
//                                         <Link to="/socialmediamarketing" aria-current="page" className="digital-link">
//                                           Soocial media marketing</Link>
//                                       </li>
//                                       <li>
//                                         <a href="#">Search Engine Optimization</a>
//                                       </li>
//                                       <li>
//                                         <a href="/paidpromotionads">Paid Promotion Ads</a>
//                                       </li>
//                                   </ul>
//                         </li>
//                         <li href="#">Graphic Designing</li>
//                         <li href="#">Web Developement</li>
//                         <li href="#">Coaching Classes</li>
//                       </ul>
//               </li>
//               <li className="me-5 mt-3">
//                 <Link to="/portfolio" aria-current="page">
//                   Portfolio
//                 </Link>
//               </li>
//               <li className="me-5 mt-3">
//                 <Link to="/contact1" aria-current="page">
//                   Contact
//                 </Link>
//               </li>
//               {formattedPhoneNumber && (
//                 <li className="chatwithus">
//                   <div className="whatsapp-text">
//                     <FaWhatsapp className="youtube" />
//                     <a
//                       href={`https://api.whatsapp.com/send?phone=${formattedPhoneNumber}`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       WhatsApp..
//                     </a>
//                   </div>
//                 </li>
//               )}
      
//             </ul>
//           </div>
//         </div>
//       </nav>

//       <nav className="mobileNav_container">
//         <img
//           src="Imagefile/logo.png"
//           width="50"
//           alt="logo"
//           className="mobileNav_logo_left"
//         />
//         {mobileNavIsOpen ? (
//           <button className="close-btn" onClick={handleMobileNavClick}>
//             X
//           </button>
//         ) : (
//           <button className="mobile-menu-icon" onClick={handleMobileNavClick}>
//             <FaBars />
//           </button>
//         )}
//       </nav>

//       <div className="mobileNav_menu_container">
//         <ul
//           className={`${
//             mobileNavIsOpen ? "mobileNav_open" : "mobileNav_closed"
//           } mobileNav_menu_list`}>
//           <li>
//             <Link to="/" aria-current="page">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/about1" aria-current="page">
//               About
//             </Link>
//           </li>
//           <li>
//             <Link to="/servicepage" aria-current="page">
//               Service
//             </Link>
//             <ul className="submenu">
//               <li>
//                 <Link to="/service1/submenu1">Submenu 1</Link>
//                 <ul className="submenu3">
//                   <li className="submenu3">Problems</li>
//                 </ul>
//               </li>
//               <li>
//                 <Link to="/service1/submenu2">Submenu 2</Link>
//               </li>
//               <li>
//                 <Link to="/service1/submenu3">Submenu 3</Link>
//               </li>
//             </ul>
//           </li>
//           <li>
//             <Link to="/portfolio1" aria-current="page">
//               Portfolio
//             </Link>
//           </li>
//         </ul>

//         <ul
//           className={`${
//             mobileNavIsOpen ? "mobileNav_open" : "mobileNav_closed"
//           } mobileNav_menu_list`}
//         >
         
//           <li>
//             <Link to="/" aria-current="page">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/about1" aria-current="page">
//               About
//             </Link>
//           </li>
//           <li>
//             <Link to="/servicepage" aria-current="page">
//               Service
//             </Link>

//             <ul className="submenu">
//               <li>
//                 <Link
//                   to="/digitalpage"
//                   aria-current="page"
//                   className="digital-link"
//                 >
//                   Digital Marketing
//                 </Link>
//                 <ul className="service-toggle">
//                   <li>
//                     <a href="/socialmediamarketing">Social Media Marketing</a>
//                   </li>
//                   <li>
//                     <a href="#">Search Engine Optimization</a>
//                   </li>
//                   <li>
//                     <a href="/paidpromotionads">Paid Promotion Ads</a>
//                   </li>
//                 </ul>
//               </li>
//               <li href="#">Graphic Designing</li>
//               <li href="#">Web Developement</li>
//               <li href="#">Coaching Classes</li>
//             </ul>
//           </li>
//           <li>
//             <Link to="/portfolio" aria-current="page">
//               Portfolio
//             </Link>
//           </li>

//           {formattedPhoneNumber && (
//             <li className="chatwithus">
//               <div className="whatsapp-text">
//                 <FaWhatsapp className="youtube" />
//                 <a
//                   href={`https://api.whatsapp.com/send?phone=${formattedPhoneNumber}`} 
//                   target="_blank" rel="noopener noreferrer" >
//                   WhatsApp..
//                 </a>
//               </div>
//             </li>
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Header;

//////////////////////////////////////////////////////////////

// old navbar in related......



// import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { FaWhatsapp } from 'react-icons/fa';
// import './Navbar.css';
// import { fetchWhatsapp } from "../Axios/Axios";


// function Navbar() {
//   const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [formattedPhoneNumber, setFormattedPhoneNumber] = useState("");

//   // const handleMobileNavClick = () => {
//   //   setMobileNavIsOpen(!mobileNavIsOpen);
//   // };

//   const handleMobileNavClick = () => {
//     mobileNavIsOpen ? setMobileNavIsOpen(false) : setMobileNavIsOpen(true);
//   };

//   window.addEventListener("resize", () => {
//     window.innerWidth > 600 && setMobileNavIsOpen(false);
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       const phonenumber = await fetchWhatsapp();
//       setPhoneNumber(phonenumber);
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (phoneNumber && phoneNumber.phone_number) {
//       const formattedNumber = phoneNumber.phone_number.replace(/[^0-9]/g, "");
//       setFormattedPhoneNumber(formattedNumber);
//     }
//   }, [phoneNumber]);

//   return (
//     <div>
//       <nav className="navbar">
//         <img src="/Imagefile/logo.png" height="60" alt="header_image" className="logo_image" />

//         <div className="menu-container">
//           <ul className="menu_list">
//             <li className='me-5 mt-3'>
//               <Link to="/" aria-current="page">
//                 Home
//               </Link>
//             </li>
//             <li className='me-5 mt-3'>
//               <Link to="/servicepage" aria-current="page">
//                 Service
//               </Link>
//               <ul className='submenu'>
//                 <li>
//                   <Link to="/digitalpage" aria-current="page" className="digital-link">
//                     Digital Marketing
//                   </Link>
//                   <ul className="service-toggle">
//                     <li>
//                       <a href="/socialmediamarketing">Social Media Marketing</a>
//                     </li>
//                     <li>
//                       <a href="/searchengineoptimization">Search Engine Optimization</a>
//                     </li>
//                     <li>
//                       <a href="/Paidpromotionads">Paid Promotion Ads</a>
//                     </li>
//                   </ul>
//                 </li>
//                 <li><Link to="/servicepage" className='digital-link'>Web Developement</Link></li>
//                 <li href='#'><Link className='digital-link'>Graphic Designing</Link></li>
//               </ul>
//             </li>
//             <li className='me-5 mt-3'>
//               <Link to="/socialmediamarketing" aria-current="page">
//                 Portfolio
//               </Link>
//             </li>
//             <li className='me-5 mt-3'>
//               <Link to="/contact1" aria-current="page">
//                 Contact
//               </Link>
//             </li>
//             {/* <li className='chatwithus'>
//               <FaWhatsapp className="youtube"/>
//               <Link to="/socialmediamarketing" aria-current="page">
//                 Chat With us
//               </Link>
//             </li> */}
//              {formattedPhoneNumber && (
//                 <li className="chatwithus">
//                   <div className="whatsapp-text">
//                     <FaWhatsapp className="youtube" />
//                     <Link to={`https://api.whatsapp.com/send?phone=${formattedPhoneNumber}`}
//                       href="/servicepage"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       WhatsApp
//                     </Link>
//                   </div>
//                 </li>
//               )}
//           </ul>
//         </div>
//       </nav>

//       <nav className="mobileNav_container">
//         <img src="Imagefile/logo.png" width="50" alt="logo" className="mobileNav_logo_left" />
//         {mobileNavIsOpen ? (
//           <button className="close-btn" onClick={handleMobileNavClick}>
//             <FaTimes />
//           </button>
//         ) : (
//           <button className="mobile-menu-icon" onClick={handleMobileNavClick}>
//             <FaBars />
//           </button>
//         )}
//       </nav>

//       {/* Sidebar */}
//       {mobileNavIsOpen && (
//         <div className="sidebar-mobile">
//           <img src="/Imagefile/logo.png" height="60" alt="header_image" className="mobile-navbar-image" />
//           <hr/>

//           <ul className='list-row'>
//             <li className='sidebar-options'><Link to="/" onClick={handleMobileNavClick}>Home</Link></li>
//             <li className='sidebar-options'>
//               <Link to="/servicepage" aria-current="page">
//                 Service
//               </Link>
//               <ul className='submenu'>
//                 <li>
//                   <Link to="/digitalpage" aria-current="page" className="digital-link">
//                     Digital Marketing
//                   </Link>
//                   <ul className="service-toggle">
//                     <li>
//                       <a href="/socialmediamarketing">Social Media Marketing</a>
//                     </li>
//                     <li>
//                       <a href="/searchengineoptimization">Search Engine Optimization</a>
//                     </li>
//                     <li>
//                       <a href="/Paidpromotionads">Paid Promotion Ads</a>
//                     </li>
//                   </ul>
//                 </li>
//                 <li><Link to="/servicepage" className='digital-link'>Web Developement</Link></li>
//                 <li href='#'><Link className='digital-link'>Graphic Designing</Link></li>
//               </ul>
//             </li>
//             <li className='sidebar-options'><Link to="/socialmediamarketing" onClick={handleMobileNavClick}>Portfolio</Link></li>
//             <li className='sidebar-options'><Link to="/contact1" onClick={handleMobileNavClick}>Contact</Link></li>
//             {/* <li className='chatwithus-mobile'>
//               <FaWhatsapp className=""/>
//               <Link to="/contact1" className='chat' aria-current="page">
//                Chat With us
//               </Link>
//             </li> */}
//             {formattedPhoneNumber && (
//               <li className="chatwithus">
//                 <div className="whatsapp-text">
//                   <FaWhatsapp className="youtube" />
//                   <a
//                     href={`https://api.whatsapp.com/send?phone=${formattedPhoneNumber}`} 
//                     target="_blank" rel="noopener noreferrer" >
//                     WhatsApp..
//                   </a>
//                 </div>
//               </li>
//             )}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Navbar;




// ///////////////////////// new navbar without submenu click refresh  ;;;



// import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
// import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
// import './Navbar.css';
// import { fetchWhatsapp } from "../Axios/Axios";

// function Navbar() {
//   const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [formattedPhoneNumber, setFormattedPhoneNumber] = useState("");

//   const handleMobileNavClick = () => {
//     setMobileNavIsOpen(!mobileNavIsOpen);
//   };

//   window.addEventListener("resize", () => {
//     window.innerWidth > 600 && setMobileNavIsOpen(false);
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       const phonenumber = await fetchWhatsapp();
//       setPhoneNumber(phonenumber);
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (phoneNumber && phoneNumber.phone_number) {
//       const formattedNumber = phoneNumber.phone_number.replace(/[^0-9]/g, "");
//       setFormattedPhoneNumber(formattedNumber);
//     }
//   }, [phoneNumber]);

//   return (
//     <div>
//       <nav className="navbar">
//         <img src="/Imagefile/logo.png" height="60" alt="header_image" className="logo_image" />

//         <div className="menu-container">
//           <ul className="menu_list">
//             <li className='me-5 mt-3'>
//               <Link to="/" aria-current="page">
//                 Home
//               </Link>
//             </li>
//             <li className='me-5 mt-3'>
//               <Link to="/servicepage" aria-current="page">
//                 Service
//               </Link>
//               <ul className='submenu'>
//                 <li>
//                   <Link to="/digitalpage" aria-current="page" className="digital-link">
//                     Digital Marketing
//                   </Link>
//                   <ul className="service-toggle">
//                     <li>
//                       <Link to="/socialmediamarketing">Social Media Marketing</Link>
//                     </li>
//                     <li>
//                       <Link to="/searchengineoptimization">Search Engine Optimization</Link>
//                     </li>
//                     <li>
//                       <Link to="/Paidpromotionads">Paid Promotion Ads</Link>
//                     </li>
//                   </ul>
//                 </li>
//                 <li><Link to="/servicepage" className='digital-link'>Web Developement</Link></li>
//                 <li><Link to="/graphicdesign" className='digital-link'>Graphic Designing</Link></li>
//               </ul>
//             </li>
//             <li className='me-5 mt-3'>
//               <Link to="/socialmediamarketing" aria-current="page">
//                 Portfolio
//               </Link>
//             </li>
//             <li className='me-5 mt-3'>
//               <Link to="/contact1" aria-current="page">
//                 Contact
//               </Link>
//             </li>
//             {formattedPhoneNumber && (
//               <li className="chatwithus">
//                 <div className="whatsapp-text">
//                   <FaWhatsapp className="youtube" />
//                   <Link to={`https://api.whatsapp.com/send?phone=${formattedPhoneNumber}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     WhatsApp
//                   </Link>
//                 </div>
//               </li>
//             )}
//           </ul>
//         </div>
//       </nav>

//       <nav className="mobileNav_container">
//         <img src="Imagefile/logo.png" width="50" alt="logo" className="mobileNav_logo_left" />
//         {mobileNavIsOpen ? (
//           <button className="close-btn" onClick={handleMobileNavClick}>
//             <FaTimes />
//           </button>
//         ) : (
//           <button className="mobile-menu-icon" onClick={handleMobileNavClick}>
//             <FaBars />
//           </button>
//         )}
//       </nav>

//       {mobileNavIsOpen && (
//         <div className="sidebar-mobile">
//           <img src="/Imagefile/logo.png" height="60" alt="header_image" className="mobile-navbar-image" />
//           <hr/>

//           <ul className='list-row'>
//             <li className='sidebar-options'><Link to="/" onClick={handleMobileNavClick}>Home</Link></li>
//             <li className='sidebar-options'>
//               <Link to="/servicepage" aria-current="page">
//                 Service
//               </Link>
//               <ul className='submenu'>
//                 <li>
//                   <Link to="/digitalpage" aria-current="page" className="digital-link">
//                     Digital Marketing
//                   </Link>
//                   <ul className="service-toggle">
//                     <li>
//                       <Link to="/socialmediamarketing">Social Media Marketing</Link>
//                     </li>
//                     <li>
//                       <Link to="/searchengineoptimization">Search Engine Optimization</Link>
//                     </li>
//                     <li>
//                       <Link to="/Paidpromotionads">Paid Promotion Ads</Link>
//                     </li>
//                   </ul>
//                 </li>
//                 <li><Link to="/servicepage" className='digital-link'>Web Developement</Link></li>
//                 <li><Link to="/graphicdesign" className='digital-link'>Graphic Designing</Link></li>
//               </ul>
//             </li>
//             <li className='sidebar-options'><Link to="/socialmediamarketing" onClick={handleMobileNavClick}>Portfolio</Link></li>
//             <li className='sidebar-options'><Link to="/contact1" onClick={handleMobileNavClick}>Contact</Link></li>
//             {formattedPhoneNumber && (
//               <li className="chatwithus">
//                 <div className="whatsapp-text">
//                   <FaWhatsapp className="youtube" />
//                   <a
//                     href={`https://api.whatsapp.com/send?phone=${formattedPhoneNumber}`} 
//                     target="_blank" rel="noopener noreferrer" >
//                     WhatsApp..
//                   </a>
//                 </div>
//               </li>
//             )}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Navbar;




//////// ########################### let's take another navbar, h



import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import './Navbar.css';
import { fetchWhatsapp } from "../Axios/Axios";

function Navbar() {
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState("");

  const handleMobileNavClick = () => {
    setMobileNavIsOpen(!mobileNavIsOpen);
  };

  window.addEventListener("resize", () => {
    window.innerWidth > 600 && setMobileNavIsOpen(false);
  });

  useEffect(() => {
    const fetchData = async () => {
      const phonenumber = await fetchWhatsapp();
      setPhoneNumber(phonenumber);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (phoneNumber && phoneNumber.phone_number) {
      const formattedNumber = phoneNumber.phone_number.replace(/[^0-9]/g, "");
      setFormattedPhoneNumber(formattedNumber);
    }
  }, [phoneNumber]);

  return (
    <div>
      <nav className="navbar">
        <img src="/Imagefile/logo.png" height="60" alt="header_image" className="logo_image" />

        <div className="menu-container">
          <ul className="menu_list">
            <li className='me-5 mt-3'>
              <Link to="/" aria-current="page">
                Home
              </Link>
            </li>
            <li className='me-5 mt-3'>
              <Link to="/servicepage" aria-current="page">
                Service
              </Link>
              <ul className='submenu'>
                <li>
                  <Link to="/digitalpage" aria-current="page" className="digital-link">
                    Digital Marketing
                  </Link>
                  <ul className="service-toggle submenu">
                    <li>
                      <Link to="/socialmediamarketing">Social Media Marketing</Link>
                    </li>
                    <li>
                      <Link to="/searchengineoptimization">Search Engine Optimization</Link>
                    </li>
                    <li>
                      <Link to="/Paidpromotionads">Paid Promotion Ads</Link>
                    </li>
                  </ul>
                </li>
                <li><Link to="/servicepage" className='digital-link1'>Web Development</Link></li>
                <li><Link to="/graphicdesign" className='digital-link2'>Graphic Designing</Link></li>
              </ul>
            </li>
            <li className='me-5 mt-3'>
              <Link to="/socialmediamarketing" aria-current="page">
                Portfolio
              </Link>
            </li>
            <li className='me-5 mt-3'>
              <Link to="/contact1" aria-current="page">
                Contact
              </Link>
            </li>
            {formattedPhoneNumber && (
              <li className="chatwithus">
                <div className="whatsapp-text">
                  <FaWhatsapp className="youtube" />
                  <Link to={`https://api.whatsapp.com/send?phone=${formattedPhoneNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </Link>
                </div>
              </li>
            )}
          </ul>
        </div>
      </nav>

      <nav className="mobileNav_container">
        <img src="Imagefile/logo.png" width="50" alt="logo" className="mobileNav_logo_left" />
        {mobileNavIsOpen ? (
          <button className="close-btn" onClick={handleMobileNavClick}>
            <FaTimes />
          </button>
        ) : (
          <button className="mobile-menu-icon" onClick={handleMobileNavClick}>
            <FaBars />
          </button>
        )}
      </nav>

      {mobileNavIsOpen && (
        <div className="sidebar-mobile">
          <img src="/Imagefile/logo.png" height="60" alt="header_image" className="mobile-navbar-image" />
          <hr/>

          <ul className='list-row'>
            <li className='sidebar-options'><Link to="/" onClick={handleMobileNavClick}>Home</Link></li>
            <li className='sidebar-options'>
              <Link to="/servicepage" aria-current="page">
                Service
              </Link>
              <ul className='submenu'>
                <li>
                  <Link to="/digitalpage" aria-current="page" className="digital-link">
                    Digital Marketing
                  </Link>
                  <ul className="service-toggle submenu">
                    <li>
                      <Link to="/socialmediamarketing">Social Media Marketing</Link>
                    </li>
                    <li>
                      <Link to="/searchengineoptimization">Search Engine Optimization</Link>
                    </li>
                    <li>
                      <Link to="/Paidpromotionads">Paid Promotion Ads</Link>
                    </li>
                  </ul>
                </li>
                <li><Link to="/servicepage" className='digital-link1'>Web Development</Link></li>
                <li><Link to="/graphicdesign" className='digital-link2'>Graphic Designing</Link></li>
              </ul>
            </li>
            <li className='sidebar-options'><Link to="/socialmediamarketing" onClick={handleMobileNavClick}>Portfolio</Link></li>
            <li className='sidebar-options'><Link to="/contact1" onClick={handleMobileNavClick}>Contact</Link></li>
            {formattedPhoneNumber && (
              <li className="chatwithus">
                <div className="whatsapp-text">
                  <FaWhatsapp className="youtube" />
                  <a
                    href={`https://api.whatsapp.com/send?phone=${formattedPhoneNumber}`} 
                    target="_blank" rel="noopener noreferrer" >
                    WhatsApp..
                  </a>
                </div>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;











































































///// this is old....................

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const [showNav, setShowNav] = useState(false);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (showNav && !event.target.closest(".nav-links") && !event.target.closest(".burger")) {
//         setShowNav(false);
//       }
//     };

//     document.addEventListener("click", handleClickOutside);

//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, [showNav]);

//   const handleClick = () => {
//     setShowNav(!showNav);
//   };

//   const handleLinkClick = () => {
//     setShowNav(false);
//   };

//   return (
//     <div>
//       <div className="header-content ">
//         <div className="logo">
//           <img src="Imagefile/logo.png" alt="header_image" className="logo_image" />
//         </div>

//         <div className="burger" onClick={handleClick}>
//           {!showNav ? (
//             <i className="fas fa-bars"></i>
//           ) : (
//             <i className="fas fa-times"></i>
//           )}
//         </div>
        
//         <ul className={`nav-links flex-design ${showNav ? 'nav-show' : ''}`}>
//           <li>
//             <Link to="/" aria-current="page" onClick={handleLinkClick}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/about1" aria-current="page" onClick={handleLinkClick}>
//               About
//             </Link>
//           </li>
//           <li>
//             <Link to="/service1" aria-current="page" onClick={handleLinkClick}>
//               Services
//             </Link>
//           </li>
//           <li>
//             <Link to="/portfolio1" aria-current="page" onClick={handleLinkClick}>
//               Portfolio
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact1" aria-current="page" onClick={handleLinkClick}>
//               contact
//             </Link>
//           </li>
//           <li className="whatsapp">

//             <Link to="/whatsapp" aria-current="page" onClick={handleLinkClick}>
//                contact
 
//              </Link>



//               <a className="watsapp-a" 
//                 href="https://wa.me/9876543210"
//                 rel="noopener noreferrer"
//                 target="_blank"
//                 onClick={handleClick}
//               >
//                 <i className="fab fa-whatsapp"> </i> Chat with us
//               </a>


//           </li>
//         </ul>

//       </div>
//     </div>
//   );
// }

// export default Navbar;
