import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTemplateListRequest, getTemplateDetailsByIdRequest } from "../../api/ApiCalls";
import { clearTemplatesList, setCurrentTemplate, updateTemplatesList } from "../../redux/actions/TemplateActions";
import SurveyTemplateCard from "./SurveyTemplateCard";
import { useHistory  } from "react-router-dom";

const SurveyTemplateList = () => {
    const { templatesFromStore } = useSelector(store => ({
        templatesFromStore: store.surveyTemplateList.templates
    }))

    const[templates, setTemplates] = useState(templatesFromStore);
    const[apiProgress, setApiProgress] = useState(false);

    const dispatch = useDispatch();

    let history = useHistory();

    useEffect(()=>{
        setTemplates(templatesFromStore);
    }, [templatesFromStore]);

    useEffect(()=>{
        onClickUpdateList();
    }, []);

    const onClickUpdateList = async () => {
        setApiProgress(true);
        try{
            const response = await getAllTemplateListRequest();
            dispatch(updateTemplatesList(response.data));
        } catch(apiError){
            console.log(apiError);
            dispatch(clearTemplatesList());
        }
        setApiProgress(false);
    }

    const onClickListItem = async (itemId) => {
        try{
            const result = await getTemplateDetailsByIdRequest(itemId);
            let currentTemplate = result.data;

            // bubleSort questions by orderNo
            for(let j=0;j<currentTemplate.questions.length;j++){
                for(let i=0;i<currentTemplate.questions.length-1;i++){
                    if(currentTemplate.questions[i].orderNo > currentTemplate.questions[i+1].orderNo){
                        let temp = currentTemplate.questions[i];
                        currentTemplate.questions[i] = currentTemplate.questions[i+1];
                        currentTemplate.questions[i+1] = temp;
                    }
                }
            }

            // bubleSort answers by orderNo
            for(let i=0;i<currentTemplate.questions.length;i++){
                for(let j=0;j<currentTemplate.questions[i].options.length;j++){
                    for(let k=0;k<currentTemplate.questions[i].options.length-1;k++){
                        if(currentTemplate.questions[i].options[k].orderNo > currentTemplate.questions[i].options[k+1].orderNo){
                            let temp = currentTemplate.questions[i].options[k];
                            currentTemplate.questions[i].options[k] = currentTemplate.questions[i].options[k+1];
                            currentTemplate.questions[i].options[k+1] = temp;
                        }
                    }
                }
            }

            dispatch(setCurrentTemplate(currentTemplate));
            history.push("templatedetails");
        } catch(apiError) {
            console.log(apiError);
        }
    }

    return (
        <div className="container-fluid">
            <div className="row app-row">
                <div className="col-12">
                    <div className="mb-2">
                        <h1>Survey Templates</h1>
                        <div className="top-right-button-container">
                            <button disabled={apiProgress} type="button" className="btn btn-primary btn-lg top-right-button mr-1" onClick={onClickUpdateList}>
                            {apiProgress ? <i className="spinner-border spinner-border-sm"></i> : <i className="simple-icon-refresh"></i>} UPDATE LIST
                            </button>

                            <div className="btn-group">
                                <div className="btn btn-primary btn-lg pl-4 pr-0 check-button">
                                    <label className="custom-control custom-checkbox mb-0 d-inline-block">
                                        <input type="checkbox" className="custom-control-input" id="checkAll"/>
                                        <span className="custom-control-label">&nbsp;</span>
                                    </label>
                                </div>
                                <button type="button"
                                    className="btn btn-lg btn-primary dropdown-toggle dropdown-toggle-split"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="sr-only">Toggle Dropdown</span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a className="dropdown-item" style={{cursor:"pointer"}}>Action</a>
                                    <a className="dropdown-item" style={{cursor:"pointer"}}>Another action</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-2">
                        <a className="btn pt-0 pl-0 d-inline-block d-md-none" data-toggle="collapse" href="#displayOptions"
                            role="button" aria-expanded="true" aria-controls="displayOptions">
                            Display Options
                            <i className="simple-icon-arrow-down align-middle"></i>
                        </a>
                        <div className="collapse d-md-block" id="displayOptions">
                            <div className="d-block d-md-inline-block">
                                <div className="btn-group float-md-left mr-1 mb-1">
                                    <button className="btn btn-outline-dark btn-xs dropdown-toggle" type="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Order By
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" style={{cursor:"pointer"}}>Action</a>
                                        <a className="dropdown-item" style={{cursor:"pointer"}}>Another action</a>
                                    </div>
                                </div>
                                <div className="search-sm d-inline-block float-md-left mr-1 mb-1 align-top">
                                    <input placeholder="Search..."/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="separator mb-5"></div>

                    <div className="list disable-text-selection" data-check-all="checkAll">
                        {
                            templates.map(i=> <SurveyTemplateCard key={i.id} id={i.id} templateName={i.templateName} 
                                validityStartDate={i.validityStartDate} draft={i.draft} onClickListItem={onClickListItem} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SurveyTemplateList;
