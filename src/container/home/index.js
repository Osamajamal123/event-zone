import { useState } from "react";
import Header from "../../components/header/header";
import Backgroundimage from "../../components/backgroundimage/backgroundimage";
import Footer from "../../components/footer/footer";

const Home = () => {
  const [data, setData] = useState([
    { id: 1, name: "Mohammad" },
    { id: 2, name: "Shoaib" },
  ]);

  return (
    <div>
      <Header />
      <Backgroundimage data={data} />
      <Footer />
    </div>
  );
};
export default Home;
