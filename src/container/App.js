import Navbar from '../components/shared/Navbar';
import Menu from '../components/shared/Menu';
import Footer from '../components/shared/Footer';
import AppMenu from '../components/shared/AppMenu';
import SurveyBody from '../components/surveytemplate/SurveyBody';
import SurveyList from '../components/surveytemplate/SurveyList';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar/>
      <Menu/>
      <main>
        <div>

          <Router>
            <Routes>
              <Route exact path="/" element={<SurveyList/>} />
              <Route exact path="/createtemplate" element={<SurveyBody/>} />              
            </Routes>
          </Router>
          
          <AppMenu/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
