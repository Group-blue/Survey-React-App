import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import SingleQuestionDetail from "../surveytemplatedetails/SingleQuestionDetail";
import { updateTemplateRequest } from '../../api/ApiCalls';

const SurveyTemplateDetails = () => {

    const{id, templateNameFromStore, explanationFromStore, questionsFromStore} = useSelector(store => ({
        templateNameFromStore: store.currentSurveyTemplate.templateName,
        explanationFromStore: store.currentSurveyTemplate.explanation,
        questionsFromStore: store.currentSurveyTemplate.questions,
        id: store.currentSurveyTemplate.id
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
            id: undefined,
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

   const sendUpdateTemplateRequest = async () => {
        const template = {
            id,
            isDraft: true,
            templateName,
            explanation,
            questions
        }

        try{
            const apiResponse = await updateTemplateRequest(template);
            console.log(apiResponse);
        } catch (apiError) {
            console.log(apiError);
        }
   } 

    return (
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
                                <a className="dropdown-item" style={{cursor:"pointer"}} onClick={sendUpdateTemplateRequest}>Save to Database</a>
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
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-lg-8">
                                    <div className="sortable-survey">
                                        <div>
                                            {
                                                questions.map(i=> <SingleQuestionDetail key={i.orderNo} orderNo={i.orderNo} onClickRemove={onClickRemoveQuestion} 
                                                                    title={i.title} text={i.text} type={i.type} options={i.options} id={i.id}
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
    );
};

export default SurveyTemplateDetails;