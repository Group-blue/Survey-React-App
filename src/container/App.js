import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import LoginPage from '../pages/LoginPage';
import ManagerPage from '../pages/ManagerPage';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

const App = () => {

  const { loggedIn } = useSelector(store => ({
    loggedIn: store.loggedIn
  }))

  useEffect(()=>{
    return () => {
        window.location.reload();
    }
  },[])

  return (
    <div>
      <Router forceRefresh={true}>
        <Switch>
        <Route exact path="/login">
          <LoginPage/>
        </Route>
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
