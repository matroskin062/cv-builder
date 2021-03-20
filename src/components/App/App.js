import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import CommonInfo from '../CommonInfo/CommonInfo';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Home from '../Home/Home';
import { commonSelector } from './../CommonInfo/CommonInfo.selector';
import CV from './../CV/CV';
import { educationSelector } from './../Education/Education.selector';
import { experienceSelector } from './../Experience/Experience.selector';
import styles from './App.module.css';

function App() {
  const education = useSelector(educationSelector);
  const common = useSelector(commonSelector);
  const experience = useSelector(experienceSelector);

  return (
    <div className={styles.container}>
      <Switch>
        <Route path='/common' component={CommonInfo} />
        <PrivateRoute
          path='/education'
          component={Education}
          allowed={
            !Object.values(common).every((el) => el === null || el === '')
          }
        />
        <PrivateRoute
          path='/experience'
          component={Experience}
          allowed={education.length > 0}
        />
        <PrivateRoute
          path='/cv'
          component={CV}
          allowed={experience.length > 0}
        />
        <Route exact path='/' component={Home} />
        <Route path='*' />
      </Switch>
    </div>
  );
}

function PrivateRoute({ component: Component, allowed, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        allowed === true ? <Component {...props} /> : <Redirect to='/' />
      }
    />
  );
}

export default App;
