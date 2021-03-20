import { Redirect, Route, Switch } from 'react-router-dom';
import CommonInfo from '../CommonInfo/CommonInfo';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Home from '../Home/Home';
import CV from './../CV/CV';

import styles from './App.module.css';
import { useSelector } from 'react-redux';
import { educationSelector } from './../Education/Education.selector';
import { commonSelector } from './../CommonInfo/CommonInfo.selector';
import { experienceSelector } from './../Experience/Experience.selector';
import { useEffect } from 'react';

function App() {
  const education = useSelector(educationSelector);
  const common = useSelector(commonSelector);
  const experience = useSelector(experienceSelector);

  return (
    <div className={styles.container}>
      <Switch>
        <Route path='/common' component={CommonInfo} />
        <Route
          path='/education'
          render={() => <Education prevData={common} />}
        />
        <Route
          path='/experience'
          render={() => <Experience prevData={education} />}
        />
        <Route path='/cv' render={() => <CV prevData={experience} />} />
        <Route exact path='/' component={Home} />
        <Route path='*' />
      </Switch>
    </div>
  );
}

export default App;
