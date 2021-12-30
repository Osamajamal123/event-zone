import "../../components/backgroundimage/style.css";

const Backgroundimage = (props) => {
  let { data } = props;
  console.log("data", data);
  return (
    <div>
      <div class="backgroundimage">
  {
    data.map((single,index)=><div>
      {/* <p>{single.id }</p> */}
      <p>{single.name }</p>
    </div>
    )
  }
        <div class="firstH1">
          <h1>Your Event Journey</h1>
        </div>
        <div class="secondH1">
          <h1>Start Here!</h1>
        </div>
        <div class="labelDiv">
          <div class="labelDiv2">
            <label for="cars"></label>
            <select name="cars" id="cars">
              <option value="volvo">Please Select An Event...</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
        <div class="backgroundPara">
          <p>
            The best advice, conversations, stories, and insights from your
            fellow event-goers,
            <br /> curated for your success.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Backgroundimage;
