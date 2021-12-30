import "../../components/footer/style.css";
import Image2 from "../../assets/images/logo2.png";
const Footer = () => {
  return (
    <div>
      <div class="FooterBack">
        <div class="dataFlexbetween">
            <div class="logoData">
            <div class="footerLogo">
            <img src={Image2} />
          </div>
          <div class="logopara">
<p>© 2016 Athlete IQ.All rights reserved</p>
          </div>
            </div>
          
          <div class="LisFlex">
          <div class="footerLIS1">
            <ul>
              <li>
                <a href="">About</a>
              </li>
              <li>Privacy Policy</li>
              <li>About Event Zone</li>
            </ul>
          </div>
          <div class="footerLIS2">
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>Contact Us</li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
