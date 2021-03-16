import { Route, Switch } from 'react-router-dom';
import CommonInfo from '../CommonInfo/CommonInfo';
import CV from '../CV/CV';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Home from '../Home/Home';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/common' component={CommonInfo} />
        <Route path='/education' component={Education} />
        <Route path='/experience' component={Experience} />
        <Route path='/cv' component={CV} />
        <Route exact path='/' component={Home} />
        <Route path='*' />
      </Switch>
    </div>
  );
}

export default App;
