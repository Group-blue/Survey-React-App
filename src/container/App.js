import { useSelector } from 'react-redux';
import LoginPage from '../pages/LoginPage';
import ManagerPage from '../pages/ManagerPage';

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
