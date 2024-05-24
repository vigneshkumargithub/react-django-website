
// import ScrollToTop from './Componentsold/ScrollToTop';
// import './Style.css';
// import "./Style1.css";




// function App() {
//   return (
//     <div>

//               hello
//               <ScrollToTop/>
//     </div>
    
//   );
// }

// export default App;




//// this is new App.js 


// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./Components/Navbar";
// import Home from "./Components/Home";
// import About from "./Components/About";
// import Contact from "./Components/Contact";
// import Products from "./Components/Products";
// import About1 from "./Components/About1";
// import Contactus from "./Components/Contactus";
// import Services from "./Components/Services";
// import Testimonials from "./Components/Testimonials";
// import Portfolio from "./Components/Portfolio";


// function App() { 
//   return (
//     <div>
//       {/* <Sample_website /> */}
//       {/* <Contactform/> */}

//       <Router>
//         <Navbar />
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/product" element={<Products />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/service" element={<Services/>} /> 
//           <Route path="/testimon" element={<Testimonials/>} />
//           <Route path="/portfolio" element={<Portfolio/>} />
           
//             <Route path="/about1" element={<About1/>} />
//             <Route path="/contactus" element={<Contactus />} />
            
//         </Routes>
//       </Router>

//  {/* <Contactform/> */}

//     </div>
//   );
// }

// export default App;




import "./Style1.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Componentsold/Home/Navbar";
import Home from "./Componentsold/Home/Home";
import Contact1 from "./Componentsold/Home/Contact1";
import Watsapplink from "./Componentsold/Home/Watsapplink";

import Digital from "./Componentsold/DigitalMarketing/Digital";
import Facebookpage from "./Componentsold/DigitalMarketing/Facebookpage";
import Instagrampage from "./Componentsold/DigitalMarketing/Instagrampage";
import Youtubepage from "./Componentsold/DigitalMarketing/Youtubepage";
import Googlepage from "./Componentsold/DigitalMarketing/Googlepage";

import Socialmediamarketing from "./Componentsold/Socialmediamarkeing/Socialmediamarketing";
import Servicespage from "./Componentsold/ServicePage/Servicespage";

import Portfolio from "./Componentsold/Portfolio";
// import Paidpromotionads from "./Componentsold/Paidpromotionads";

import Paidpromotionads  from "./Componentsold/PaidPromotionAds/Paidpromotionads";

import Maincontainer from "./Componentsold/Maincontainer";
import Searchengineoptimization from "./Componentsold/SearchEngineOptimization/Searchengineoptimization";
import Graphicdesign from "./Componentsold/Graphicdesign";

function App() {
  return (
    <div>
      <Watsapplink />
      <Router>
        <Navbar />
        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}

          <Route path="/" element={<Home />} />

          {/* <Route path="/about1" element={<About1/>} />
                    <Route path='/testimon1' element={<Testimonials1/>}/> 
                    <Route path="/portfolio1" element={<Portfolio1/>}/> */}

            <Route path="/contact1" element={<Contact1 />} />

          <Route path="/servicepage" element={<Servicespage />} />

          <Route path="/digitalpage" element={<Digital />} />
          <Route path="/facebookpage" element={<Facebookpage />} />
          <Route path="/instagrampage" element={<Instagrampage />} />
          <Route path="/youtubepage" element={<Youtubepage />} />
          <Route path="/googlepage" element={<Googlepage />} />
          <Route path="/socialmediamarketing" element={<Socialmediamarketing />}/>
          <Route path="/portfolio" element={<Portfolio />} />

          <Route path="/paidpromotionads" element={<Paidpromotionads/>}/>

          <Route path='/searchengineoptimization' element={<Searchengineoptimization/>}/>

          <Route path="/graphicdesign" element={<Graphicdesign/>}  />

        </Routes>
      </Router>
    </div>

    // <div>
    //     <Maincontainer/>

    //     {/* <Home/> */}
    // </div>
  );
}

export default App;
