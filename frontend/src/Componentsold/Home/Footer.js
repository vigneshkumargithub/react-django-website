import React from "react";

function Footer() {
  return (
    <div className="footer-header">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="Imagefile/footer_logo.png" className="footer-logo-png" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing
            elit.Soluta,voluptatem, quovero consequuntur atque quam autem, ullam
            eius.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-quicklink">
            <ul className="footer-ql-ul">
              <p>Quick links</p>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about1">About</a>
              </li>
              <li>
                <a href="/servicepage">Services</a>
              </li>
              <li>
                <a href="/portfolio1">Portfolio</a>
              </li>
              <li>
                <a href="/contact1">Contact us</a>
              </li>
            </ul>
          </div>

          <div className="footer-service">
            <ul className="footer-service-ul">
              <p>Our services</p>
              <li>
                <a href="/digitalpage">Digital Marketing</a>
              </li>
              <li>
                <a href="#">Graphic design</a>
              </li>
              <li>
                <a href="#">Web development</a>
              </li>
              <li>
                <a href="/socialmediamarketing">Social media Marketing</a>
              </li>
            </ul>
          </div>

          <div className="footer-contact1">
            <p className="con-head">Contact Information</p>
            <div className="footer-contact info-footer">
              <div className="InfoBoxfooter">
                <div>
                  <span>
                    <i class="fa-sharp fa-solid fa-location-dot"></i>
                  </span>
                  <p>
                    No 2, 1<sup>st</sup> Floor,DRO Colony Main Rd,
                    <br />
                    near Indian Bank,K.Pudur, <br />
                    Madurai,TamilNadu 625002
                  </p>
                </div>
                <div>
                  <span>
                    <i class="fa-solid fa-envelope"></i>
                  </span>
                  <a href="mailto:loremipsum@gmail.com">Sample@gmail.com</a>
                </div>
                <div>
                  <span>
                    <i class="fa-solid fa-phone-volume"></i>
                  </span>
                  <a href="tel:+91 987654321">+91 987654321</a>
                </div>

                <div>
                  <ul className="social">
                    <li>
                      <a href="#">
                        <i class="fa-brands fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa-brands fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa-brands fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa-brands fa-square-x-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>Copyright &#169; 2024 Phoenix Marketing.com All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
