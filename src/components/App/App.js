import { Redirect, Route, Switch } from 'react-router-dom';
import CommonInfo from '../CommonInfo/CommonInfo';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Home from '../Home/Home';
import CV from './../CV/CV';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
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

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { allowed } = rest;
  return (
    <Route
      {...rest}
      render={(props) =>
        allowed ? <Component {...props} /> : <Redirect to='/' />
      }
    />
  );
};
export default App;
