import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import LoginPage from '../pages/LoginPage';
import ManagerPage from '../pages/ManagerPage';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import SurveyDetailsFromToken from '../pages/SurveyDetailsFromToken';

const App = () => {

  const { loggedIn } = useSelector(store => ({
    loggedIn: store.loggedIn
  }))


  return (
    <div>
      <Router forceRefresh={true}>
        <Switch>

        <Route path="/login">
          <LoginPage/>
        </Route>

        <Route path="/survey" component={SurveyDetailsFromToken}/>

        <Route exact path="/">
          {loggedIn ? <ManagerPage/> : <Redirect to="/login" />}
        </Route>

        <Redirect to="/"/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
