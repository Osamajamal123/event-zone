import "../../components/headerinput/style.css";
import Imageflag from "../../assets/images/flag.png";
import Imagehome from "../../assets/images/home.svg";
import { Link } from "react-router-dom";

const Headrerinput = () => {
  return (
    <div>
      <div class="dataFlexBetween">
        <div class="logodataDiv">
          <div class="logoFlagdiv">
            <img src={Imageflag} />
          </div>
          <div class="flagData">
            <p>Naperville Women’s Half & 5K</p>
          </div>
        </div>
        <div>
          <div class="buttonDivColor">
            <img src={Imagehome} />
            <Link to="/">
              <p>Home</p>
            </Link>
           
          </div>
        </div>
      </div>
    </div>
  );
};
export default Headrerinput;
