import Navbar from '../components/shared/Navbar';
import Menu from '../components/shared/Menu';
import Footer from '../components/shared/Footer';
import SurveyBody from '../components/surveytemplate/SurveyBody';

const SurveyTemplate = () => {
    return (
        <div>
            <Navbar/>
            <Menu/>
            <SurveyBody/>
            <Footer/>
        </div>
    );
};

export default SurveyTemplate;