
// import React, { useState, useEffect } from "react";
// import { fetchWhatsapp } from "./Axios/Axios"; // Import the fetchWhatsapp function
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";


// const Watsapplink = () => {
//   const [showIcon, setShowIcon] = useState(false);
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [formattedPhoneNumber, setFormattedPhoneNumber] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       const phonenumber = await fetchWhatsapp();
//       setPhoneNumber(phonenumber);
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setShowIcon(true);
//       } else {
//         setShowIcon(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     if (phoneNumber && phoneNumber.phone_number) {
//       const formattedNumber = phoneNumber.phone_number.replace(/[^0-9]/g, "");
//       setFormattedPhoneNumber(formattedNumber);
//     }
//   }, [phoneNumber]);

//   const openWhatsApp = () => {
//     if (phoneNumber && phoneNumber.phone_number) {
//       const formattedPhoneNumber = phoneNumber.phone_number.replace(/[^0-9]/g, "");
//       window.open(`https://api.whatsapp.com/send?phone=${formattedPhoneNumber}`, "_blank");
//     } else {
//       console.error("Phone number is missing or invalid.");
//     }
//   };

//   return (
//     <div className="whatsapp-link">
//       {showIcon ? (
//         <div className="whatsapp-icon" onClick={openWhatsApp}>
//           <FontAwesomeIcon icon={faWhatsapp} />
        
//           <i className="fa-brands fa-whatsapp">
//           <a
//               href={`https://api.whatsapp.com/send?phone=${formattedPhoneNumber}`}
//               target="_blank"
//               rel="noopener noreferrer"
//                />
//           </i>
//         </div>
//       ) : (
//         <div className="whatsapp-text" onClick={openWhatsApp}>
//           Click here to chat on WhatsApp
//         </div>
//       )}
//     </div>
//   );
// };

// export default Watsapplink;
/////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////


// working good and backend side add the phnumber, frontend side navigate to whatsapp

import React, { useState, useEffect } from "react";
import { fetchWhatsapp } from "../Axios/Axios"; // Import the fetchWhatsapp function
import { FaWhatsapp } from 'react-icons/fa';


const Watsapplink = () => {
  const [showIcon, setShowIcon] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const phonenumber = await fetchWhatsapp();
      setPhoneNumber(phonenumber);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowIcon(true);
      } else {
        setShowIcon(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (phoneNumber && phoneNumber.phone_number) {
      const formattedNumber = phoneNumber.phone_number.replace(/[^0-9]/g, "");
      setFormattedPhoneNumber(formattedNumber);
    }
  }, [phoneNumber]);

  const openWhatsApp = () => {
    if (phoneNumber && phoneNumber.phone_number) {
      const formattedPhoneNumber = phoneNumber.phone_number.replace(/[^0-9]/g, "");
      window.open(`https://api.whatsapp.com/send?phone=${formattedPhoneNumber}`, "_blank");
    } else {
      console.error("Phone number is missing or invalid.");
    }
  };

  return (
    <div className="whatsapp-link">
      {showIcon && (
        <div className="whatsapp-icon" onClick={openWhatsApp}>
          <li className="whatsapp">
              <a
                  href={`https://api.whatsapp.com/send?phone=${formattedPhoneNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="Watsapp" />
              </a>
            </li>
        </div>
      )}
    </div>
  );
};

export default Watsapplink;

