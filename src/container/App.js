import Navbar from '../components/shared/Navbar';
import Menu from '../components/shared/Menu';
import Footer from '../components/shared/Footer';
import AppMenu from '../components/shared/AppMenu';
import SurveyTemplateBody from '../components/surveytemplate/SurveyTemplateBody';
import SurveyTemplateList from '../components/surveytemplate/SurveyTemplateList';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import SurveyTemplateDetails from '../components/surveytemplate/SurveyTemplateDetails';
import SurveyList from '../components/surveylist/SurveyList';

function App() {
  return (
    <div>
        <Navbar/>
        <Menu/>
        <main>
          <div>

      <Router>
              <Switch>
                <Route exact path="/" component={SurveyTemplateList} />
                <Route path="/createtemplate" component={SurveyTemplateBody} />
                <Route path="/templatedetails" component={SurveyTemplateDetails} />
                <Route path="/surveys" component={SurveyList} />
                <Redirect to="/" />              
              </Switch>
            
            <AppMenu/>
      </Router>
          </div>
        </main>
        <Footer/>
    </div>
  );
}

export default App;
