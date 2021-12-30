import "../../components/header/style.css";
import Image1 from '../../assets/images/logo1.jpg';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div class="HeaderDiv">
        <div class="logoDiv">
<img src={Image1}></img>
        </div>
        <div class="achorDiv">
<ul>
  <li><a href="" class="active">Home</a></li>
  <Link to="Events">
  <li>About</li>
  </Link>
  
  <li><a href="">Contact us</a></li>
</ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
