import React, { useEffect, useState } from 'react';
import Footer from '../components/shared/Footer';
import { getSurveyByToken, saveUserAnswersRequest } from '../api/ApiCalls';
import { useHistory } from 'react-router-dom';
import StudentQuestion from '../components/studentanswerpage/StudentQuestion';

const SurveyDetailsFromToken = (props) => {
    const query = new URLSearchParams(props.location.search);
    const [studentId, setStudentId] = useState();
    const [surveyId, setSurveyId] = useState();
    const [templateId, setTemplateId] = useState();
    const [templateExplanation, setTemplateExplanation] = useState();
    const [templateName, setTemplateName] = useState();
    const [questions, setQuestions] = useState([]);
    const [userAnswers, setUserAnswers] = useState([]);
    const [tokenStatus, setTokenStatus] = useState();
    const [errorStatus, setErrorStatus] = useState(false);
    const [apiProgress, setApiProgress] = useState(false);

    const token = query.get('token');

    let history = useHistory();

    useEffect(()=>{
        if(!token){
            history.push("/login");
        } else if(token.length<128){
            history.push("/login");
        } else {
            getSurveyFromApi();
        }
    },[]);

    useEffect(() => {
        if(errorStatus){
            setTimeout(() => {history.push('/login')}, 5000);
        }
      }, [errorStatus]);

    const getSurveyFromApi = async () => {
        try{
            const response = await getSurveyByToken(token);
            if(response.data.status ===200){
                setStudentId(response.data.studentId);
                setSurveyId(response.data.surveyId);
                setTemplateId(response.data.surveyTemplate.id);
                setTemplateExplanation(response.data.surveyTemplate.explanation);
                setTemplateName(response.data.surveyTemplate.templateName);
                let sortedQuestions = sortQuestions(response.data.surveyTemplate.questions);
                let sortedQuestionsWithOptions = sortQuestionOptions(sortedQuestions);
                setQuestions(sortedQuestionsWithOptions);
                console.log(response.data);
            } else if(response.data.status ===404) {
                setTokenStatus("Hatalı veya tarihi geçmiş bir link denediniz. 5 saniye içinde yönlendirileceksiniz...");
                setErrorStatus(true);
            } else if(response.data.status ===900) {
                setTokenStatus("Bu ankete cevaplarınız daha önce kaydedilmiştir. Tekrar cevap veremezsiniz. 5 saniye içinde yönlendirileceksiniz...");
                setErrorStatus(true);
            }
        } catch (apiError) {
            console.log(apiError);
        }
    }

    const sortQuestions = (questions) => {
        let questionList = [...questions];

        // bubleSort questions by orderNo
        for(let j=0;j<questionList.length;j++){
            for(let i=0;i<questionList.length-1;i++){
                if(questionList[i].orderNo > questionList[i+1].orderNo){
                    let temp = questionList[i];
                    questionList[i] = questionList[i+1];
                    questionList[i+1] = temp;
                }
            }
        }

        return questionList;
    }

    const sortQuestionOptions = (questions) => {
        let questionList = [...questions];

        // bubleSort answers by orderNo
        for(let i=0;i<questionList.length;i++){
            for(let j=0;j<questionList[i].options.length;j++){
                for(let k=0;k<questionList[i].options.length-1;k++){
                    if(questionList[i].options[k].orderNo > questionList[i].options[k+1].orderNo){
                        let temp = questionList[i].options[k];
                        questionList[i].options[k] = questionList[i].options[k+1];
                        questionList[i].options[k+1] = temp;
                    }
                }
            }
        }

        return questionList;
    }

    const handleOnChangeUserSelection = (answer) => {
        if(userAnswers.length<1){
            setUserAnswers([answer]);
        } else {
            let isNew = true;
            let tempList = [...userAnswers];
            for(let i=0;i<tempList.length;i++){
                if(tempList[i].questionId==answer.questionId){
                    tempList[i]=answer;
                    isNew = false;
                }
            }

            if(isNew){
                tempList.push(answer);
            }

            setUserAnswers(tempList);
        }
    }

    const onClickSendAnswers = async () => {
        setApiProgress(true);
        let body = {
            studentId,
            surveyId,
            finished: true,
            answers: [...userAnswers]
        }
        console.log(body);

        try{
            const result = await saveUserAnswersRequest(body);
            history.push("/login");
        } catch(apiError) {
            console.log(apiError);
            setApiProgress(false);
        }
    }
    
    return (
        <div>
            <div>
                <nav className="navbar fixed-top">
                    <div className="d-flex">
                        <a className="navbar-logo" style={{cursor: "pointer"}} >
                            <span className="logo d-none d-xs-block"></span>
                            <span className="logo-mobile d-block d-xs-none"></span>
                        </a>

                        <div className="search" data-search-path="Pages.Search.html?q=">
                            <input placeholder="Search..."/>
                            <span className="search-icon">
                                <i className="simple-icon-magnifier"></i>
                            </span>
                        </div>

                    </div>
                    <div className="navbar-right">
                        <div className="header-icons d-inline-block align-middle">

                            <div className="position-relative d-none d-sm-inline-block">
                                <button className="header-icon btn btn-empty" type="button" id="iconMenuButton" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    <i className="simple-icon-grid"></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-right mt-3  position-absolute" id="iconMenuDropdown">
                                    <a style={{cursor: "pointer"}} className="icon-menu-item">
                                        <i className="iconsminds-equalizer d-block"></i>
                                        <span>Settings</span>
                                    </a>

                                    <a style={{cursor: "pointer"}} className="icon-menu-item">
                                        <i className="iconsminds-male-female d-block"></i>
                                        <span>Users</span>
                                    </a>

                                    <a style={{cursor: "pointer"}} className="icon-menu-item">
                                        <i className="iconsminds-puzzle d-block"></i>
                                        <span>Components</span>
                                    </a>

                                    <a style={{cursor: "pointer"}} className="icon-menu-item">
                                        <i className="iconsminds-bar-chart-4 d-block"></i>
                                        <span>Profits</span>
                                    </a>

                                    <a style={{cursor: "pointer"}} className="icon-menu-item">
                                        <i className="iconsminds-file d-block"></i>
                                        <span>Surveys</span>
                                    </a>

                                    <a style={{cursor: "pointer"}} className="icon-menu-item">
                                        <i className="iconsminds-suitcase d-block"></i>
                                        <span>Tasks</span>
                                    </a>

                                </div>
                            </div>

                            <div className="position-relative d-inline-block">
                                <button className="header-icon btn btn-empty" type="button" id="notificationButton"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="simple-icon-bell"></i>
                                    <span className="count">3</span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-right mt-3 position-absolute" id="notificationDropdown">
                                    <div className="scroll">
                                        <div className="d-flex flex-row mb-3 pb-3 border-bottom">
                                            <a style={{cursor: "pointer"}}>
                                                <img src="img/profiles/l-2.jpg" alt="Notification Image"
                                                    className="img-thumbnail list-thumbnail xsmall border-0 rounded-circle" />
                                            </a>
                                            <div className="pl-3">
                                                <a style={{cursor: "pointer"}}>
                                                    <p className="font-weight-medium mb-1">Joisse Kaycee just sent a new comment!</p>
                                                    <p className="text-muted mb-0 text-small">09.04.2018 - 12:45</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row mb-3 pb-3 border-bottom">
                                            <a style={{cursor: "pointer"}}>
                                                <img src="img/notifications/1.jpg" alt="Notification Image"
                                                    className="img-thumbnail list-thumbnail xsmall border-0 rounded-circle" />
                                            </a>
                                            <div className="pl-3">
                                                <a style={{cursor: "pointer"}}>
                                                    <p className="font-weight-medium mb-1">1 item is out of stock!</p>
                                                    <p className="text-muted mb-0 text-small">09.04.2018 - 12:45</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row mb-3 pb-3 border-bottom">
                                            <a style={{cursor: "pointer"}}>
                                                <img src="img/notifications/2.jpg" alt="Notification Image"
                                                    className="img-thumbnail list-thumbnail xsmall border-0 rounded-circle" />
                                            </a>
                                            <div className="pl-3">
                                                <a style={{cursor: "pointer"}}>
                                                    <p className="font-weight-medium mb-1">New order received! It is total $147,20.</p>
                                                    <p className="text-muted mb-0 text-small">09.04.2018 - 12:45</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row mb-3 pb-3 ">
                                            <a style={{cursor: "pointer"}}>
                                                <img src="img/notifications/3.jpg" alt="Notification Image"
                                                    className="img-thumbnail list-thumbnail xsmall border-0 rounded-circle" />
                                            </a>
                                            <div className="pl-3">
                                                <a style={{cursor: "pointer"}}>
                                                    <p className="font-weight-medium mb-1">3 items just added to wish list by a user!
                                                    </p>
                                                    <p className="text-muted mb-0 text-small">09.04.2018 - 12:45</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button className="header-icon btn btn-empty d-none d-sm-inline-block" type="button" id="fullScreenButton">
                                <i className="simple-icon-size-fullscreen"></i>
                                <i className="simple-icon-size-actual"></i>
                            </button>

                        </div>

                        <div className="user d-inline-block">
                            <button className="btn btn-empty p-0" type="button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                <span className="name">Sarah Kortney</span>
                                <span>
                                    <img alt="Profile Picture" src="img/profiles/l-1.jpg" />
                                </span>
                            </button>

                            <div className="dropdown-menu dropdown-menu-right mt-3">
                                <a className="dropdown-item" style={{cursor: "pointer"}}>Account</a>
                                <a className="dropdown-item" style={{cursor: "pointer"}}>Features</a>
                                <a className="dropdown-item" style={{cursor: "pointer"}}>History</a>
                                <a className="dropdown-item" style={{cursor: "pointer"}}>Support</a>
                                <a className="dropdown-item" style={{cursor: "pointer"}}>Sign out</a>
                            </div>
                        </div>
                    </div>
                </nav>
                <main className='mx-5'>
                    <div hidden={!errorStatus} className="row">
                        <div className="col-lg-12 col-12 text-center">
                            <h2>{tokenStatus}</h2>
                        </div>
                    </div>
                    <div hidden={errorStatus} className="row">
                        <div className="col-lg-4 col-12 mb-4">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <p className="list-item-heading mb-4">{templateName}</p>
                                    <p className="text-small mb-2">{templateExplanation}</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-8">
                            <div className="sortable-survey">
                                <div>
                                    {
                                        questions.map(i => <StudentQuestion key={i.id} id={i.id} orderNo={i.orderNo} title={i.title} text={i.text}
                                            type={i.type} options={i.options} onChangeUserSelection={handleOnChangeUserSelection} />)
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-12 text-center">
                            <button disabled={apiProgress} type="button" className="btn btn-outline-primary btn-sm mb-2" onClick={onClickSendAnswers}>
                                {apiProgress ? <i className="spinner-border spinner-border-sm"></i> : <i className='iconsminds-yes'></i> } Send Your Answers
                            </button>
                        </div>
                    </div>
                </main>
            </div>
            <Footer/>
        </div>
    );
};

export default SurveyDetailsFromToken;