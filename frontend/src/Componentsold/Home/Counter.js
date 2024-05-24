//// 4 column of counter :
// import React, { useEffect, useState } from 'react';
// import './Counter.css';

// const Counter = () => {
//   const [clients, setClients] = useState(0);
//   const [experience, setExperience] = useState(0);
//   const [happyClients, setHappyClients] = useState(0);
//   const [projects, setProjects] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (clients < 5) {
//         setClients((prevClients) => prevClients + 1);
//       }
//       if (experience < 15) {
//         setExperience((prevExperience) => prevExperience + 1);
//       }
//       if (happyClients < 70) {
//         setHappyClients((prevHappyClients) => prevHappyClients + 1);
//       }
//       if (projects < 750) {
//         setProjects((prevProjects) => prevProjects + 1);
//       }
//     }, 5); // Interval set to 50 milliseconds

//     return () => clearInterval(interval);
//   }, [clients, experience, happyClients, projects]);

//   return (
//     <div className="counter-numbers row-blocks overtheimg">
//       <div className="counter-item">
//         <span className="counter-number">{experience}</span>
//         <span className="counter-label">Years of Experience</span>
//       </div>
//       <div className="counter-item">
//         <span className="counter-number">{clients}</span>
//         <span className="counter-label">Clients</span>
//       </div>
//       <div className="counter-item">
//         <span className="counter-number">{happyClients}</span>
//         <span className="counter-label">Happy Clients</span>
//       </div>
//       <div className="counter-item">
//         <span className="counter-number">{projects}</span>
//         <span className="counter-label">+Successfully Projects</span>
//       </div>
//     </div>
//   );
// };

// export default Counter;



import React, { useEffect, useState } from 'react';
import './Counter.css';
import 'aos/dist/aos.css';
import Aos from 'aos';

const Counter = () => {
  const [clients, setClients] = useState(0);
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (clients < 5) {
        setClients((prevClients) => prevClients + 1);
      }
      if (experience < 15) {
        setExperience((prevExperience) => prevExperience + 1);
      }
      if (projects < 750) {
        setProjects((prevProjects) => prevProjects + 1);
      }
    }, 5); // Interval set to 50 milliseconds

    return () => clearInterval(interval);
  }, [clients, experience, projects]);


  useEffect(()=> {Aos.init({duration:2000});},[])

  return (
    <div className="counter-numbers row-blocks overtheimg">
        <div data-aos='slide-up'className="counter-item">
          <span className="counter-number">{experience}+</span>
          <span className="counter-label">Professional Members</span>
        </div>
        <div data-aos='slide-up' className="counter-item">
          <span className="counter-number">{clients}+</span>
          <span className="counter-label">Years of Experience</span>
        </div>
        <div data-aos='slide-up' className="counter-item">
          <span className="counter-number">{projects}+</span>
          <span className="counter-label">Successfully Projects</span>
        </div>

    </div>
  );
};

export default Counter;
