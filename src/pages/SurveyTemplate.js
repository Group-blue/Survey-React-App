import Navbar from '../components/shared/Navbar';
import Menu from '../components/shared/Menu';
import Footer from '../components/shared/Footer';
import SurveyBody from '../components/surveytemplate/SurveyBody';
import AppMenu from '../components/shared/AppMenu';
import SurveyList from '../components/surveytemplate/SurveyList';

const SurveyTemplate = () => {
    return (
        <div>
            <Navbar/>
            <Menu/>
            <main>
                <SurveyList/>
                <AppMenu/>
            </main>
            <Footer/>
        </div>
    );
};

export default SurveyTemplate;