import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import LoginPage from '../pages/LoginPage';
import ManagerPage from '../pages/ManagerPage';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

const App = () => {

  const { loggedIn } = useSelector(store => ({
    loggedIn: store.loggedIn
  }))


  return (
    <div>
        {loggedIn ? <ManagerPage/> : <LoginPage/>}
    </div>
  );
}

export default App;
