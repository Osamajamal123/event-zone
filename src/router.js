import { Route, Switch } from "react-router-dom";
import Events from "./container/allCards";
import About from "./container/about";
import Home from "./container/home";
import Form from "./components/formSection/formSection";
import Contactus from "./components/contactus/contactus";
import Layout from "./components/layout/layout";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/events" component={Events} />
        <Route path="/contact-us" component={Contactus} />
        <Route path="/" component={Home} />
      </Switch>
    </Layout>
  );
};
export default App;
