import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { clearTemplate, saveTemplate } from "../../redux/actions/TemplateActions";
import SingleQuestion from "../questions/SingleQuestion";
import { saveTemplateRequest } from '../../api/ApiCalls';

const SurveyBody = () => {

    const{templateNameFromStore, explanationFromStore, questionsFromStore} = useSelector(store => ({
        templateNameFromStore: store.templateName,
        explanationFromStore: store.explanation,
        questionsFromStore: store.questions
    }));

    const [questions, setQuestions] = useState(questionsFromStore);
    const [templateName, setTemplateName] = useState(templateNameFromStore);
    const [explanation, setExplanation] = useState(explanationFromStore);

    const dispatch = useDispatch();

    useEffect(()=>{
        setQuestions(questionsFromStore);
        setTemplateName(templateNameFromStore);
        setExplanation(explanationFromStore);
    }, [templateNameFromStore, explanationFromStore, questionsFromStore]);
    
    const addQuestion = () => {
        const newQuestion = {
            orderNo: questions.length < 1 ? 1 : questions[questions.length-1].orderNo+1,
            title: undefined,
            text: undefined,
            type: 1,
            options: []
        }

        setQuestions([...questions, newQuestion]);
    }

    const onClickRemoveQuestion = questionOrderNo => {
        const filteredQuestions = questions.filter(i=> {return i.orderNo!=questionOrderNo});
        setQuestions(filteredQuestions);
    }

    const onQuestionChanged = (changedQuestion) => {
        let tempQuestions = [...questions];
        for(let i=0;i<tempQuestions.length;i++){
            if(tempQuestions[i].orderNo === changedQuestion.orderNo){
                tempQuestions[i] = changedQuestion;
            }
        }
        setQuestions(tempQuestions);
    }

    const onClickSaveToBrowser = () => {
        const template = {
            isDraft: true,
            templateName,
            explanation,
            questions
        }

        dispatch(saveTemplate(template));
    }

    const onClickClearBrowserCash = () => {
        const template = {
            isDraft: true,
            templateName: undefined,
            explanation: undefined,
            questions: []
        }

        dispatch(clearTemplate(template));
    }

   const sendSaveTemplateRequest = async () => {
        const template = {
            isDraft: true,
            templateName,
            explanation,
            questions
        }

        try{
            const apiResponse = await saveTemplateRequest(template);
        } catch (apiError) {
            console.log(apiError);
        }
   } 

    return (
        <div>
            <main>
                <div className="container-fluid">
                    <div className="row app-row ">
                        <div className="col-12 survey-app">
                            <div className="mb-2">
                                <h1>Create Survey Template</h1>
                                <div className="text-zero top-right-button-container">
                                    <button type="button"
                                        className="btn btn-lg btn-outline-primary dropdown-toggle dropdown-toggle-split top-right-button top-right-button-single"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        SAVE ACTIONS
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="#" onClick={onClickSaveToBrowser}>Save to Browser Cash</a>
                                        <a className="dropdown-item" href="#" onClick={onClickClearBrowserCash}>Clear Browser Cash</a>
                                        <a className="dropdown-item" href="#" onClick={sendSaveTemplateRequest}>Save to Database</a>
                                    </div>
                                </div>
                            </div>
                            <ul className="nav nav-tabs separator-tabs ml-0 mb-5" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="first-tab" data-toggle="tab" href="#first" role="tab"
                                        aria-controls="first" aria-selected="true">DETAILS</a>
                                </li>
                            </ul>
                            <div className="tab-content mb-4">
                                <div className="tab-pane show active" id="first" role="tabpanel" aria-labelledby="first-tab">
                                    <div className="row">
                                        <div className="col-lg-4 col-12 mb-4">
                                            <div className="card mb-4">
                                                <div className="position-absolute card-top-buttons">
                                                    <button className="btn btn-header-light icon-button">
                                                        <i className="simple-icon-pencil"></i>
                                                    </button>
                                                </div>
                                                <div className="card-body">
                                                    <p className="list-item-heading mb-4">Summary</p>
                                                    <p className="text-muted text-small mb-2">Name</p>
                                                    <input className="mb-3 form-control" type="text" placeholder="Enter Template Name" 
                                                    onChange={(event)=>setTemplateName(event.target.value)} defaultValue={templateName} />
                                                    <p className="text-muted text-small mb-2">Explanation</p>
                                                    <textarea className="mb-3 form-control" rows="3" placeholder="Enter Template Explanation"
                                                    onChange={(event)=>setExplanation(event.target.value)} defaultValue={explanation} />


                                                    <div className="text-center">
                                                    <button type="button"
                                                        className="btn btn-outline-primary btn-sm mb-2">
                                                        Save</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12 col-lg-8">
                                            <div className="sortable-survey">
                                                <div>
                                                    {
                                                        questions.map(i=> <SingleQuestion key={i.orderNo} orderNo={i.orderNo} onClickRemove={onClickRemoveQuestion} 
                                                                            title={i.title} text={i.text} 
                                                                            type={i.type} options={i.options}
                                                                            onQuestionChanged={onQuestionChanged} />)
                                                    }
                                                </div>
                                            </div>

                                            <div className="text-center">
                                                <button type="button" className="btn btn-outline-primary btn-sm mb-2" onClick={addQuestion}>
                                                    <i className="simple-icon-plus btn-group-icon"></i>
                                                    Add Question
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="app-menu">
                    <div className="p-4 h-100">
                        <div className="scroll">
                            <p className="text-muted text-small">Status</p>
                            <ul className="list-unstyled mb-5">
                                <li className="active">
                                    <a href="#">
                                        <i className="simple-icon-refresh"></i>
                                        Active Surveys
                                        <span className="float-right">12</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="simple-icon-check"></i>
                                        Completed Surveys
                                        <span className="float-right">24</span>

                                    </a>
                                </li>
                            </ul>

                            <p className="text-muted text-small">Categories</p>
                            <ul className="list-unstyled mb-5">
                                <li>
                                    <div className="custom-control custom-checkbox mb-2">
                                        <input type="checkbox" className="custom-control-input" id="category1"/>
                                        <label className="custom-control-label" htmlFor="category1">Development</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-checkbox mb-2">
                                        <input type="checkbox" className="custom-control-input" id="category2"/>
                                        <label className="custom-control-label" htmlFor="category2">Workplace</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="custom-control custom-checkbox ">
                                        <input type="checkbox" className="custom-control-input" id="category3"/>
                                        <label className="custom-control-label" htmlFor="category3">Hardware</label>
                                    </div>
                                </li>
                            </ul>

                            <p className="text-muted text-small">Labels</p>
                            <div>
                                <p className="d-sm-inline-block mb-1">
                                    <a href="#">
                                        <span className="badge badge-pill badge-outline-primary mb-1">NEW FRAMEWORK</span>
                                    </a>
                                </p>

                                <p className="d-sm-inline-block mb-1">
                                    <a href="#">
                                        <span className="badge badge-pill badge-outline-theme-3 mb-1">EDUCATION</span>
                                    </a>
                                </p>
                                <p className="d-sm-inline-block  mb-1">
                                    <a href="#">
                                        <span className="badge badge-pill badge-outline-secondary mb-1">PERSONAL</span>
                                    </a>
                                </p>
                            </div>

                        </div>
                    </div>
                    <a className="app-menu-button d-inline-block d-xl-none" href="#">
                        <i className="simple-icon-options"></i>
                    </a>
                </div>
            </main>
        </div>
    );
};

export default SurveyBody;