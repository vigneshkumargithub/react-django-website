// import React, {useEffect} from 'react'
// import './Maincontainer.css';

// import AOS from 'aos';
// import 'aos/dist/aos.css';

// function Maincontainer() {

//   useEffect (() => {
//     AOS.init({
//       duration: 400,
//       easing: 'ease',
//       once: false,
//       anchorPlacement: 'top-bottom',
//     });
//   });

//   return (
//     <div> 
//         <div className='Maincontainer'>
//             <div className='box' data-aos="fade-up" ></div>
//             <div className='box' data-aos="fade-left "></div>
//             <div className='box' data-aos="fade-right"     data-aos-offset="200"
//     data-aos-delay="50"
//     data-aos-duration="1000"
//     data-aos-easing="ease-in-out"></div>
//             <div className='box' data-aos="flip-up"></div>
//             <div className='box' data-aos="slide-left"     data-aos-duration="1000"
//     data-aos-easing="ease-in-out"
//     data-aos-mirror="true"
//     data-aos-once="false"></div>
//             <div className='box' data-aos="slide-right"     data-aos-offset="200"
//     data-aos-delay="50"
//     data-aos-duration="1000"
//     data-aos-easing="ease-in-out"></div>


//         </div>
//     </div>
//   )
// }

// export default Maincontainer



import React from 'react'
import './Maincontainer.css';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

const Zoominout= batch(StickyIn(), FadeIn(), ZoomIn())
const Fadee= batch(Sticky(), Fade(), Move())

function Maincontainer() {


  return (
    <div> 
            
        <ScrollContainer>
            <ScrollPage page={0}>
                <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
                        welcome to react page 
                </Animator>
            </ScrollPage>
            <ScrollPage page={1}>
                <Animator animation={Zoominout}>
                        welcome to react page2 
                </Animator>
            </ScrollPage>
            <ScrollPage page={2}>
                <Animator animation={Fadee}>
                        welcome to react page in fadeup the content
                </Animator>
            </ScrollPage>
            <ScrollPage page={3}>
                <div className='section-3'>
                    <h2>
                        <Animator animation={MoveIn(-1000, 0)}>Hello ReactJS</Animator>
                        <Animator animation={MoveIn(1000, 0)}>Hello Python </Animator>
                        <Animator animation={MoveOut(-1000, 0)}>Hello Django rest framework</Animator>
                        <Animator animation={MoveOut(-1000, 0)}>Hello Mysql database</Animator>
                    </h2>
                </div>
            </ScrollPage>
            <ScrollPage page={4}>
                <div className='section'>
                    <h2>
                        <Animator animation={batch(Fade(), Sticky(), ZoomIn())}>Done man</Animator>
                    
                    </h2>
                </div>
            </ScrollPage>
        </ScrollContainer>
    </div>
  )
}

export default Maincontainer