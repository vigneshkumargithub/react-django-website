///// original /////
//// ----------------------- ////

import axios from "axios";

export const base_api = "http://localhost:8000";


// contact form backend url
const Axios = axios.create({
  baseURL: base_api, // Define the base URL for the backend API
});

export const submitFormData = async (formData) => { // Removed the `url` parameter
  try {
    const response = await Axios.post(`${base_api}/submit-form/`, formData); // Using base_api directly
    return response.data;
  } catch (error) {
    throw error;
  }
}; 

///// original /////
// ----------------------- //

/// checking purpose of another submitform details backend api:

// import axios from "axios";

// export const base_api = "http://localhost:8000";

// // Function to get the CSRF token from the cookies
// const getCsrfToken = () => {
//   const csrfCookie = document.cookie
//     .split('; ')
//     .find(row => row.startsWith('csrftoken='));
//   return csrfCookie ? csrfCookie.split('=')[1] : null;
// };

// const Axios = axios.create({
//   baseURL: base_api, // Define the base URL for the backend API
//   withCredentials: true, // Include cookies in requests
// });

// Axios.interceptors.request.use(config => {
//   const csrfToken = getCsrfToken();
//   if (csrfToken) {
//     config.headers['X-CSRFToken'] = csrfToken;
//   }
//   return config;
// }, error => {
//   return Promise.reject(error);
// });

// export const submitFormData = async (formData) => {
//   try {
//     const response = await Axios.post('/submit-form/', formData);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };



/////// 1st section backend api link
export const fetchfirstsection = async () => {
  try {
    const response = await axios.get(`${base_api}/firstsection/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching our services:", error);
    return [];
  }
};


/////2n section
export const fetchsecondsection = async () => {
    try {
      const response = await axios.get(`${base_api}/secondsection/`);
      return response.data;
    } catch (error) {
      console.error("Error fetching our services:", error);
      return [];
    }
  };

  ///// 3rd section:

  export const fetchthirdsection = async () => {
    try {
      const response = await axios.get(`${base_api}/thirdsection/`);
      return response.data;
    } catch (error) {
      console.error("Error fetching our services:", error);
      return [];
    }
  };

////4th section:
export const fetchfourthsection = async () => {
    try {
      const response = await axios.get(`${base_api}/fourthsection/`);
      return response.data;
    } catch (error) {
      console.error("Error fetching our services:", error);
      return [];
    }
  };


//// 4th section bannerlink
export const fetchfourthsectionbanner = async () => {
  try {
    const response = await axios.get(`${base_api}/fourthsectionbanner/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching our services:", error);
    return [];
  }
};


//// 5th section
////// fifth section and fifthsectioncontent in Ourservices section
export const fetchfifthsection = async () => {
  try {
    const response = await axios.get(`${base_api}/fifthsection/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching our services:", error);
    return [];
  }
};

export const fetchfifthsectioncontent = async () => {
  try {
    const response = await axios.get(`${base_api}/fifthsectioncontent/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching service boxes:", error);
    return [];
  }
};



  //// 6th section:
  export const fetchsixthsection = async () => {
    try {
      const response = await axios.get(`${base_api}/sixthsection/`);
      return response.data;
    } catch (error) {
      console.error("Error fetching our services:", error);
      return [];
    }
  };

  ///// 6th section test

  export const fetchsixthsectiontest = async () => {
    try {
      const response = await axios.get(`${base_api}/sixthsectiontest/`);
      return response.data;
    } catch (error) {
      console.error("Error fetching our services:", error);
      return [];
    }
  };


  ///7th section:
  export const fetchseventhsection = async () => {
    try {
      const response = await axios.get(`${base_api}/seventhsection/`);
      return response.data;
    } catch (error) {
      console.error("Error fetching our services:", error);
      return [];
    }
  };


////8th section 
export const fetcheighthsection = async () => {
    try {
      const response = await axios.get(`${base_api}/eighthsection/`);
      return response.data;
    } catch (error) {
      console.error("Error fetching our services:", error);
      return [];
    }
  };


  //// whatapp link:
  export const fetchWhatsapp = async () => {
    try {
      const response = await axios.get(`${base_api}/whatsapp/`);
      return response.data;
    } catch (error) {
      console.error("Error fetching WhatsApp phone number:", error);
      return null;
    }
  };


  //// Digital markeing page:
   export const fetchdmfirstsection = async() =>{
    try{
      const response = await axios.get(`${base_api}/dmfirstsection/`)
      return response.data;
    }catch(error){
      console.error("Error fetching dmfirstsection:", error);
      return null;
    }
   };
   
   
   export const fetchdmsecondsection = async() =>{
    try{
      const response = await axios.get(`${base_api}/dmsecondsection/`)
      return response.data;
    }catch(error){
      console.error("Error fetching dmsecondsection:", error);
      return null;
    }
   }; 


   export const fetchfacebookpage = async() =>{
    try{
      const response = await axios.get(`${base_api}/facebookpage/`)
      return response.data;
    }catch(error){
      console.error("Error fetching facebookpage:", error);
      return null;
    }
   }; 


   export const fetchinstagrampage = async() =>{
    try{
      const response = await axios.get(`${base_api}/instagrampage/`)
      return response.data;
    }catch(error){
      console.error("Error fetching instagrampage:", error);
      return null;
    }
   }; 


   export const fetchyoutubepage = async() =>{
    try{
      const response = await axios.get(`${base_api}/youtubepage/`)
      return response.data;
    }catch(error){
      console.error("Error fetching youtubepage:", error);
      return null;
    }
   }; 

   export const fetchgooglepage = async() =>{
    try{
      const response = await axios.get(`${base_api}/googlepage/`)
      return response.data;
    }catch(error){
      console.error("Error fetching googlepage:", error);
      return null;
    }
   }; 


  ///// soical media poster content and images:

   export const fetchsocialmediapostercontent = async() =>{
    try{
      const response = await axios.get(`${base_api}/socialmediapostercontent/`)
      return response.data;
    }catch(error){
      console.error("Error fetching socialmediapostercontent:", error);
      return null;
    }
   }; 

   
   export const fetchsocialmediaposterimages = async() =>{
    try{
      const response = await axios.get(`${base_api}/socialmediaposterimages/`)
      return response.data;
    }catch(error){
      console.error("Error fetching socialmediaposterimages:", error);
      return null;
    }
   }; 


  ////// package design content and images:

  
  export const fetchpackagedesigncontent = async() =>{
    try{
      const response = await axios.get(`${base_api}/packagedesigncontent/`)
      return response.data;
    }catch(error){
      console.error("Error fetching packagedesigncontent:", error);
      return null;
    }
   }; 

   
   export const fetchpackagedesignimage = async() =>{
    try{
      const response = await axios.get(`${base_api}/packagedesignimage/`)
      return response.data;
    }catch(error){
      console.error("Error fetching packagedesignimage:", error);
      return null;
    }
   }; 


   ////// logo-work content and images
   
   
   export const fetchlogoworkcontent = async() =>{
    try{
      const response = await axios.get(`${base_api}/logoworkcontent/`)
      return response.data;
    }catch(error){
      console.error("Error fetching logoworkcontent:", error);
      return null;
    }
   }; 

   
   export const fetchlogoworkimage = async() =>{
    try{
      const response = await axios.get(`${base_api}/logoworkimage/`)
      return response.data;
    }catch(error){
      console.error("Error fetching logoworkimage:", error);
      return null;
    }
   }; 

   //// ui-ux content and images:
   
   
   export const fetchuiuxcontent = async() =>{
    try{
      const response = await axios.get(`${base_api}/uiuxcontent/`)
      return response.data;
    }catch(error){
      console.error("Error fetching uiuxcontent:", error);
      return null;
    }
   }; 

   
   export const fetchuiuximage = async() =>{
    try{
      const response = await axios.get(`${base_api}/uiuximage/`)
      return response.data;
    }catch(error){
      console.error("Error fetching uiuximage:", error);
      return null;
    }
   }; 


  /// video marketing backend axios:

  export const fetchvideomarketingcontent = async() =>{
    try{
      const response = await axios.get(`${base_api}/videomarketingcontent/`)
      return response.data;
    }catch(error){
      console.error("Error fetching videomarketingcontent:", error);
      return null;
    }
   }; 

   
   export const fetchvideomarketingvideo = async() =>{
    try{
      const response = await axios.get(`${base_api}/videomarketingvideo/`)
      return response.data;
    }catch(error){
      console.error("Error fetching videomarketingimage:", error);
      return null;
    }
   }; 


   //// Service page icon, webdevelopment service, webdesign service, ecommerce service, delivery serive

   export const fetchservicepage = async() =>{
    try{
      const response = await axios.get(`${base_api}/servicepage/`)
      return response.data;
    }catch(error){
      console.error("Error fetching servicepage:", error);
      return null;
    }
   }; 


   export const fetchservicepageicon = async() =>{
    try{
      const response = await axios.get(`${base_api}/servicepageicon/`)
      return response.data;
    }catch(error){
      console.error("Error fetching servicepageicon:", error);
      return null;
    }
   }; 
   export const fetchwebdevelopmentservice = async() =>{
    try{
      const response = await axios.get(`${base_api}/webdevelopmentservice/`)
      return response.data;
    }catch(error){
      console.error("Error fetching webdevelopmentservice:", error);
      return null;
    }
   }; 
   export const fetchwebdesignservice = async() =>{
    try{
      const response = await axios.get(`${base_api}/webdesignservice/`)
      return response.data;
    }catch(error){
      console.error("Error fetching webdesignservice:", error);
      return null;
    }
   }; 
   export const fetchecommerceservice = async() =>{
    try{
      const response = await axios.get(`${base_api}/ecommerceservice/`)
      return response.data;
    }catch(error){
      console.error("Error fetching ecommerceservice:", error);
      return null;
    }
   }; 
   export const fetchdeliveryservice = async() =>{
    try{
      const response = await axios.get(`${base_api}/deliveryservice/`)
      return response.data;
    }catch(error){
      console.error("Error fetching deliveryservice:", error);
      return null;
    }
   }; 


   ///////// paidpromotion link and text
   export const fetchpaidpromotionads = async() =>{
    try{
      const response = await axios.get(`${base_api}/paidpromotionads/`)
      return response.data;
    }catch(error){
      console.error("Error fetching paidpromotionads:", error);
      return null;
    }
   };
   

   export const fetchpaidfacebookpage = async() =>{
    try{
      const response = await axios.get(`${base_api}/paidfacebookpage/`)
      return response.data;
    }catch(error){
      console.error("Error fetching paidfacebookpage:", error);
      return null;
    }
   };

   export const fetchpaidinstagrampage = async() =>{
    try{
      const response = await axios.get(`${base_api}/paidinstagrampage/`)
      return response.data;
    }catch(error){
      console.error("Error fetching paidinstagrampage:", error);
      return null;
    }
   };

   export const fetchpaidyoutubepage = async() =>{
    try{
      const response = await axios.get(`${base_api}/paidyoutubepage/`)
      return response.data;
    }catch(error){
      console.error("Error fetching paidyoutubepage:", error);
      return null;
    }
   };

   export const fetchpaidgooglepage = async() =>{
    try{
      const response = await axios.get(`${base_api}/paidgooglepage/`)
      return response.data;
    }catch(error){
      console.error("Error fetching paidgooglepage:", error);
      return null;
    }
   };
   
//////// seo all sections

export const fetchseofirstsection = async() =>{
  try{
    const response = await axios.get(`${base_api}/seofirstsection/`)
    return response.data;
  }catch(error){
    console.error("Error fetching seofirstsection:", error);
    return null;
  }
 };


 export const fetchseosecondsection = async() =>{
  try{
    const response = await axios.get(`${base_api}/seosecondsection/`)
    return response.data;
  }catch(error){
    console.error("Error fetching seosecondsection:", error);
    return null;
  }
 };

 export const fetchseothirdsection = async() =>{
  try{
    const response = await axios.get(`${base_api}/seothirdsection/`)
    return response.data;
  }catch(error){
    console.error("Error fetching seothirdsection:", error);
    return null;
  }
 };