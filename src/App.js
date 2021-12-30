
import './assets/style/style.css'
import { Switch } from 'react-router-dom'
import RoutesPages from './router';
import './assets/style/style.css';

const App = () => {
  return (
    <Switch>
      <RoutesPages />
    </Switch>
  );
};
export default App;