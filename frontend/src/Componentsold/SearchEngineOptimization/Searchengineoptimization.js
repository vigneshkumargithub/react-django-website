import React, { useState, useEffect } from 'react'
import './Searchengineoptimization.css'
import { fetchseofirstsection, fetchseosecondsection, fetchseothirdsection, base_api } from '../Axios/Axios';
import Footer from "../Home/Footer";

function Searchengineoptimization() {

    const [seofirstsection, setSeofirstsection] = useState([]);
    const [seosecondsection, setSeosecondsection] = useState([]);
    const [seothirdsection, setSeothirdsection] = useState([]);

    const [isBackendError, setIsBackendError] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const seofirstsectionData = await fetchseofirstsection();
          const seosecondsectionData = await fetchseosecondsection();
          const seothirdsectionData = await fetchseothirdsection();
          setSeofirstsection(seofirstsectionData);
          setSeosecondsection(seosecondsectionData);
          setSeothirdsection(seothirdsectionData);
  
        } catch (error) {
          console.error("Error fetching seofirstsection, seosecondsection, seothirdsection data:", error);
          setIsBackendError(true);
        }
      };
  
      fetchData();
    }, []);
  
  
    if (isBackendError || !seofirstsection,!seofirstsection.length) {

    return (
        <div>
            {/* <Navbar /> */}

            <div className='main-content'>
                <div class='social-header-bg-paid'>
                    <div class='row text-contents-service'>
                        <div class='col-lg-8 col-md-12 col-sm-12 offset-lg-0 offset-md-0 offset-sm-0 text-content-service'>
                            <div className="left-content-search">
                                <h1>Search Engine Optimization</h1>
                                <div class='line-service'></div>
                                <h4>SEO in digital marketing is a strategy that focuses on
                                    your website's presence in the search results on search
                                    engines like Google. SEO may target different kinds of
                                    search, including image search, local search, video search,
                                    and news search engines.
                                </h4>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-12 col-sm-12 text-image-search">
                            <img src="/Searchengineoptimization/seo_header.png" />
                        </div>
                    </div>
                </div>


                <p className='second-paragraph'>PHOENIX a Search Engine Optimization Company and Google Adwards Certified
                    Company based in Madurai, Tamilnadu, India. helps your website achieve a higher ranking with the major
                    search engines. Keywords are the words and phrases your target audience searches for online. Search engines
                    want to do their jobs as best as possible by reffering users to website and content that is most relevant
                    to what user is looking for. when you implement an SEO strategy, your improvements will send positive signals
                    to search engines that your website provides value to users. As a result, search engines will rank your website
                    higher in the SERPs.</p>

                <div className='row firstcontent'>
                    <div className='col-lg-6 col-md-12 col-sm-12'>
                        <div class="image">
                            <img src="/Searchengineoptimization/smartphone.png" alt="Image" height="500" width="600" />
                        </div>
                    </div>

                    <div className='col-lg-6 col-md-12 col-sm-12 paragraph'>
                        <div className='upside-content'>
                            <h3>On Page SEO</h3>
                            <div className='container-upside'>
                                On-page SEO leads to higher search rankings, increased traffic to your
                                site, and more conversions. On-page SEO is multifaced, and extends
                                beyond content into their things like schema and meta tags. the results
                                of on page SEO take time, but once your on-page SEO strategy gets off the
                                grounds, it can make your online rankings and sales order.
                            </div>
                        </div>

                        <div className='downside-content'>
                            <h3>Off Page SEO</h3>
                            <div className='container-downside'>
                                Successfully SEO requires a healthy combination of on-page and off-page
                                SEO in digital marketing. Link building, guest blogging, social media
                                marketing, local citation building, and more are out-off
                            </div>
                        </div>
                    </div>
                </div>

<div className='below-content'>
                    <div className='row'>

                        <div className='col-lg-7 col-md-12 col-sm-12'>
                            <div className='belowsecondcontent'>
                                <h3>Technical SEO</h3>
                                <div class="container-first">
                                    <div className='row'>
                                        <div className='col-lg-2 col-md-12 col-sm-12'>
                                            <div class="image-screw">
                                                <img src="/Searchengineoptimization/tech.png" alt="Image" height="120" width="120" />
                                            </div>
                                        </div>
                                        <div className='col-lg-10 col-md-12 col-sm-12'>
                                            <div class="content">
                                                <p>Technical SEO is about improving your website to make it easier for search
                                                    engines to find, understand, and store your content. Technical SEO refers to
                                                    the behind the scenes elements that power your organic growth engine, such
                                                    as site architecture, mobile optimization, and page speed. In digital marketing
                                                    technical SEO can boost your visibility in search results.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h3 className='link-building'>Link Building</h3>
                                <div class="container-second">
                                    <div className='row'>
                                        <div className='col-lg-2'>
                                            <div class="image-lens">
                                                <img src="/Searchengineoptimization/link.png" alt="Image" height="120" width="120" />
                                            </div>
                                        </div>
                                        <div className='col-lg-10'>
                                            <div class="content">
                                                <p>Technical SEO is about improving your website to make it easier for search
                                                    engines to find, understand, and store your content. Technical SEO refers to
                                                    the behind the scenes elements that power your organic growth engine, such
                                                    as site architecture, mobile optimization, and page speed. In digital marketing
                                                    technical SEO can boost your visibility in search results.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-5 col-md-12 col-sm-12'>
                            <div className='image rocket'>
                                <img src="/Searchengineoptimization/rocket.png" width="420" />
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-5 col-md-12 col-sm-12'>
                            <div className='galaxy'>
                                <img src="/Searchengineoptimization/circle.png" height="500" width="500" />
                            </div>
                        </div>

<div className='col-lg-7 col-md-12 col-sm-12'>
                            <div className='second-below-para'>
                                <h3>SEO Site Audit</h3>
                                <div class="container-second">
                                    <div className='row'>
                                        <div className='col-lg-2'>
                                            <div class="image-tick">
                                                <img src="/Searchengineoptimization/site.png" alt="Image" height="120" width="120" />
                                            </div>
                                        </div>
                                        <div className='col-lg-10'>
                                            <div class="content">
                                                <p>Technical SEO is about improving your website to make it easier for search
                                                    engines to find, understand, and store your content. Technical SEO refers to
                                                    the behind the scenes elements that power your organic growth engine, such
                                                    as site architecture, mobile optimization, and page speed. In digital marketing
                                                    technical SEO can boost your visibility in search results.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                {/* < Footer /> */}

            </div>
        </div>
    )
};




return (
    <div>
        {/* <Navbar /> */}

        <div className='main-content'>
            <div class='social-header-bg-paid'>
             {seofirstsection.map((box) => (
                <div class='row text-contents-service' key={box.id}>
                    <div class='col-lg-8 col-md-12 col-sm-12 offset-lg-0 offset-md-0 offset-sm-0 text-content-service'>
                        <div className="left-content-search">
                            <h1 dangerouslySetInnerHTML={{ __html: box.heading }}/>
                            <div class='line-service'></div>
                            <h4 dangerouslySetInnerHTML={{ __html: box.subcontent }}/>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-12 col-sm-12 text-image-search">
                        <img src={`${base_api}${box.image}`} />
                    </div>
                </div>
             ))}
            </div>

            {seosecondsection.map((box) => (
            <p className='second-paragraph' dangerouslySetInnerHTML={{ __html: box.content }} />
            ))}

            <div className='row firstcontent'>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                {seosecondsection.map((box) => (
                    <div class="image">
                        <img src={`${base_api}${box.image}`} alt="Image" height="500" width="600" />
                    </div>
                ))}
                </div>


            {seosecondsection.map((box) => (
                <div className='col-lg-6 col-md-12 col-sm-12 paragraph'>
                    <div className='upside-content'>
                        <h3 dangerouslySetInnerHTML={{ __html: box.msgtitle }} />
                        <div className='container-upside' dangerouslySetInnerHTML={{ __html: box.msgcontent }}></div>
                    </div>

                    <div className='downside-content'>
                    <h3 dangerouslySetInnerHTML={{ __html: box.msgtitletwo }} />
                        <div className='container-upside' dangerouslySetInnerHTML={{ __html: box.msgcontenttwo }}></div>
                    </div>
                </div>
            ))}
            </div>

<div className='below-content'>
                <div className='row'>

                    <div className='col-lg-7 col-md-12 col-sm-12'>
                        <div className='belowsecondcontent'>

                        {seothirdsection.map((box) => (
                        <div key={box.id}>
                            <h3 dangerouslySetInnerHTML={{ __html: seothirdsection.title1 }}/>
                            <div class="container-first">
                                <div className='row'>
                                    <div className='col-lg-2 col-md-12 col-sm-12'>
                                        <div class="image-screw">
                                            <img src={`${base_api}${box.icon1}`} alt="Image" height="120" width="120" />
                                        </div>
                                    </div>
                                    <div className='col-lg-10 col-md-12 col-sm-12'>
                                        <div class="content">
                                            <p dangerouslySetInnerHTML={{ __html: box.content1 }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}

                        {seothirdsection.map((box) => (
                        <div>      
                            <h3 className='link-building' dangerouslySetInnerHTML={{ __html: box.title2 }}/>
                            <div class="container-second">
                                <div className='row'>
                                    <div className='col-lg-2'>
                                        <div class="image-lens">
                                            <img src={`${base_api}${box.icon2}`} alt="Image" height="120" width="120" />
                                        </div>
                                    </div>
                                    <div className='col-lg-10'>
                                        <div class="content">
                                         <p dangerouslySetInnerHTML={{ __html: box.content2 }}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>     
                        ))}

                        </div>
                    </div>

                    <div className='col-lg-5 col-md-12 col-sm-12'>
                    {seothirdsection.map((box) => (
                        <div className='image rocket' key={box.id}>
                            <img src={`${base_api}${box.image1}`} width="420" />
                        </div>
                    ))}
                    </div>

                </div>

                <div className='row'>
                    <div className='col-lg-5 col-md-12 col-sm-12'>
                    {seothirdsection.map((box) => (     
                        <div className='galaxy' key={box.id}>
                            <img src={`${base_api}${box.image2}`} height="500" width="500" />
                        </div>
                    ))}
                    </div>

<div className='col-lg-7 col-md-12 col-sm-12'>
                   {seothirdsection.map((box) => (
                        <div className='second-below-para'>
                            <h3 dangerouslySetInnerHTML={{ __html: box.title3 }}/>
                            <div class="container-second">
                                <div className='row'>
                                    <div className='col-lg-2'>
                                        <div class="image-tick">
                                            <img src={`${base_api}${box.icon3}`} alt="Image" height="120" width="120" />
                                        </div>
                                    </div>
                                    <div className='col-lg-10'>
                                        <div class="content">
                                            <p dangerouslySetInnerHTML={{ __html: box.content3 }}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>

                </div>
            </div>


            < Footer/>

        </div>
    </div>
)
}

export default Searchengineoptimization