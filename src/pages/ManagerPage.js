import React from 'react';
import Navbar from '../components/shared/Navbar';
import Menu from '../components/shared/Menu';
import Footer from '../components/shared/Footer';
import AppMenu from '../components/shared/AppMenu';
import SurveyTemplateBody from '../components/surveytemplate/SurveyTemplateBody';
import SurveyTemplateList from '../components/surveytemplate/SurveyTemplateList';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import SurveyTemplateDetails from '../components/surveytemplate/SurveyTemplateDetails';
import SurveyList from '../components/surveylist/SurveyList';

const ManagerPage = () => {
    return (
        <div>
            <Router>
                <Navbar/>
                <Menu/>
                <main>
                    <div>
                        <Switch>
                            <Route exact path="/" component={SurveyTemplateList} />
                            <Route path="/createtemplate" component={SurveyTemplateBody} />
                            <Route path="/templatedetails" component={SurveyTemplateDetails} />
                            <Route path="/surveys" component={SurveyList} />
                            <Redirect to="/" />              
                        </Switch>
                        <AppMenu/>
                    </div>
                </main>
                <Footer/>
            </Router>
        </div>
    );
};

export default ManagerPage;