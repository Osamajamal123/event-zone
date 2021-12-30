import "../formSection/style.css";

const Form = () => {
  return (
    <div>
      <form class="backgroundImage">
        <div class="backgroundColor">
          <div class="dataHead">
            <h5>Contact Us</h5>
            <p>Please complete the form and we will get back to you.</p>
          </div>
          <div class="backColor">
            <div class="inputDiv">
              <input placeholder="Your Name" type="text" color=" #666" />
              <input placeholder="Email Address" type="text" />
              <input placeholder="Company" type="text" />
              <textarea placeholder="Message"></textarea>
            </div>
            <div class="buttonDataDiv">
                <div> <div class="buttonBlue">
                <p>CONTACT US</p>
              </div>

                </div>
             
              <div>
                <div class="privacyDiv">
                  <p>Privacy Policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Form;
