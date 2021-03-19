import { Redirect, Route, Switch } from 'react-router-dom';
import CommonInfo from '../CommonInfo/CommonInfo';
import Education from '../Education/Education';
import Home from '../Home/Home';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/common' component={CommonInfo} />
        <Route path='/education' component={Education} />
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
