import "../../components/headerdownthree/style.css";
import Shareimage from "../../assets/images/share.png";
import Arrowimage from "../../assets/images/right-arrow.png";
const Headerdownthree = () => {
  return (
    <div>
      <div class="flexbetweenDiv">
        <div>
          <div class="greenButton">
            <p>32 Conversations</p>
          </div>
        </div>
        <div>
          <div class="twoButtonsFlex">
            <div class="buttonOne">
              <div class="sharelogo">
                <img src={Shareimage} />
              </div>
              <div class="buttonPara">
                <p>Share</p>
              </div>
            </div>

            <div class="buttontwo">
              <div class="buttonPara2">
                <p>Register</p>
              </div>
              <div class="sharelogo2">
                <img src={Arrowimage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Headerdownthree;
