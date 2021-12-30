import "../../components/headerdown/style.css";
import Leftlogo from "../../assets/images/logo2.png";
import arrowImage from "../../assets/images/arrow.svg";

const Headerdown = () => {
  return (
    <div>
      <div class="HeaderDownwidth">
        <div>
          <div class="leftFlex">
            <div class="leftcolor">
              <div class="leftLogo">
                <img src={Leftlogo} />
              </div>
              <div class="arrowImage">
                <img src={arrowImage} />
              </div>
            </div>
          </div>
        </div>

        
          <div class="rightColor">
            <h5>Rewards</h5>
          </div>
        
      </div>
    </div>
  );
};
export default Headerdown;
