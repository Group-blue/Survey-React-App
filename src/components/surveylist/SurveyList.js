import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCoursesListRequest, getAllSurveyListRequest, getAllTemplateListRequest, saveSurveyRequest } from "../../api/ApiCalls";
import { clearSurveyList, updateSurveyList, updateTemplatesList, clearTemplatesList, updateCourseList } from "../../redux/actions/TemplateActions";
import SurveyCard from "../surveylist/SurveyCard";
import { useHistory  } from "react-router-dom";
import { getCurrentDate, convertDateToTimestamp } from "../../sharedmethods/DateTimeOperations";

const SurveyList = () => {
    const { surveysFromStore, templatesFromStore, coursesFromStore } = useSelector(store => ({
        surveysFromStore: store.surveyList.surveys,
        templatesFromStore: store.surveyTemplateList.templates,
        coursesFromStore: store.courseList.courses
    }))

    const[surveys, setSurveys] = useState(surveysFromStore);
    const[templates, setTemplates] = useState(templatesFromStore);
    const[courses, setCourses] = useState(coursesFromStore);
    const[selectedTemplate, setSelectedTemplate] = useState(1);
    const[selectedCourse, setSelectedCourse] = useState(1);
    const[selectedStartDate, setSelectedStartDate] = useState(convertDateToTimestamp(getCurrentDate()));
    const[selectedEndDate, setSelectedEndDate ] = useState(convertDateToTimestamp(getCurrentDate()));
    const[apiProgressSurvey, setApiProgressSurvey] = useState(false);
    const[apiProgressTemplate, setApiProgressTemplate] = useState(false);
    const[apiProgressCourse, setApiProgressCourse] = useState(false);

    const dispatch = useDispatch();

    let history = useHistory();

    useEffect(()=>{
        setSurveys(surveysFromStore);
    }, [surveysFromStore]);

    useEffect(()=>{
        setTemplates(templatesFromStore);
    }, [templatesFromStore]);

    useEffect(()=>{
        setCourses(coursesFromStore);
    }, [coursesFromStore]);

    useEffect(()=>{
        onClickUpdateList();
    }, []);

    const onClickUpdateList = async () => {
        setApiProgressSurvey(true);
        try{
            const response = await getAllSurveyListRequest(); 
            dispatch(updateSurveyList(response.data));
        } catch(apiError){
            console.log(apiError);
            dispatch(clearSurveyList());
        }
        setApiProgressSurvey(false);
    }

    const onClickListItem = async (itemId) => {
        console.log("clicked to.....: "+itemId)
        // try{
        //     const result = await getTemplateDetailsByIdRequest(itemId);
        //     let currentTemplate = result.data;
        //     console.log(currentTemplate);

        //     dispatch(setCurrentTemplate(currentTemplate));
        //     history.push("templatedetails");
        // } catch(apiError) {
        //     console.log(apiError);
        // }
    }

    const onClickUpdateTemplates = async () => {
        setApiProgressTemplate(true);
        try{
            const response = await getAllTemplateListRequest();
            dispatch(updateTemplatesList(response.data));
        } catch(apiError){
            console.log(apiError);
            dispatch(clearTemplatesList());
        }
        setApiProgressTemplate(false);
    }

    const onClickUpdateCourses = async () => {
        setApiProgressCourse(true);
        try{
            const response = await getAllCoursesListRequest();
            dispatch(updateCourseList(response.data));
        } catch(apiError){
            console.log(apiError);
            dispatch(clearTemplatesList());
        }
        setApiProgressCourse(false);
    }

    const onClickCreateNewSurvey = async () => {
        setApiProgressSurvey(true);
        const body = {
            startDate: selectedStartDate,
            endDate: selectedEndDate,
            courseId: selectedCourse,
            templateId: selectedTemplate
        }

        try{
            const apiResult = await saveSurveyRequest(body);
            history.go(0)
            console.log(apiResult);
        } catch(apiError) {
            console.log("api error olustu"+apiError);
        }
        setApiProgressSurvey(false);
    }

    return (
        <div className="container-fluid">
            <div className="row app-row">
                <div className="col-12">
                    <div className="mb-2">
                        <h1>Surveys</h1>
                        <div className="top-right-button-container">
                            <button disabled={apiProgressSurvey} type="button" className="btn btn-primary btn-lg top-right-button mr-1" onClick={onClickUpdateList}>
                                {apiProgressSurvey ? <div className="spinner-border spinner-border-sm"></div> : <i className="simple-icon-refresh"></i>} UPDATE LIST
                            </button>
                            <button type="button" className="btn btn-primary btn-lg top-right-button mr-1"
                                data-toggle="modal" data-backdrop="static" data-target="#exampleModalRight">
                                    ADD SURVEY
                            </button>

                            <div className="modal fade modal-right" id="exampleModalRight" tabIndex="-1" role="dialog"
                                aria-labelledby="exampleModalRight" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">Add Survey</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <form>
                                                <div className="form-group">
                                                    <label>From Template ?</label>
                                                    <div className="row">
                                                        <div className="col-md-9">
                                                            <select className="form-control" onChange={(event)=>setSelectedTemplate(event.target.value)}>
                                                                <option label="&nbsp;" disabled>&nbsp;</option>
                                                                {
                                                                    templates.map(i=> <option key={i.id} value={i.id}>{i.templateName}</option>)
                                                                }
                                                            </select>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <button disabled={apiProgressTemplate} type="button" className="btn btn-outline-primary btn-sm mb-2" onClick={onClickUpdateTemplates}>
                                                            {apiProgressTemplate ? <i className="spinner-border spinner-border-sm"></i> : <i className="simple-icon-refresh"></i>}
                                                            </button>
                                                        </div>                                                        
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label>For Course ?</label>
                                                    <div className="row">
                                                        <div className="col-md-9">
                                                            <select className="form-control" onChange={(event)=>setSelectedCourse(event.target.value)} >
                                                                <option label="&nbsp;" disabled>&nbsp;</option>
                                                                {
                                                                    courses.map(i=> <option key={i.id} value={i.id}>{i.courseCode+" - "+i.name}</option>)
                                                                }
                                                            </select>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <button type="button" disabled={apiProgressCourse} className="btn btn-outline-primary btn-sm mb-2" onClick={onClickUpdateCourses}>
                                                            {apiProgressCourse ? <i className="spinner-border spinner-border-sm"></i> : <i className="simple-icon-refresh"></i>}
                                                            </button>
                                                        </div>                                                        
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>Start Date</label>
                                                            <input type="date" className="form-control" defaultValue={getCurrentDate()} min={getCurrentDate()}
                                                             onChange={(event)=>setSelectedStartDate(convertDateToTimestamp(event.target.value))}
                                                              />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label>End Date</label>
                                                            <input type="date" className="form-control" defaultValue={getCurrentDate()} min={getCurrentDate()}
                                                            onChange={(event)=>setSelectedEndDate(convertDateToTimestamp(event.target.value))}
                                                             />
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-outline-primary"
                                                data-dismiss="modal">Cancel</button>
                                            <button disabled={apiProgressSurvey} type="button" className="btn btn-primary" onClick={onClickCreateNewSurvey} >
                                            {apiProgressSurvey ? <i className="spinner-border spinner-border-sm"></i> : <i className="simple-icon-check"></i>} Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade modal-right" id="exampleModal" tabIndex="-1" role="dialog"
                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Add New</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="form-group">
                                                <label>Title</label>
                                                <input type="text" className="form-control" placeholder="Enter title"/>
                                            </div>
                                            <div className="form-group">
                                                <label>Details</label>
                                                <textarea className="form-control" rows="2" placeholder="Enter details"/>
                                            </div>

                                            <div className="form-group">
                                                <label>Category</label>
                                                <select className="form-control select2-single" data-width="100%">
                                                    <option label="&nbsp;">&nbsp;</option>
                                                    <option value="Flexbox">Flexbox</option>
                                                    <option value="Sass">Sass</option>
                                                    <option value="React">React</option>
                                                </select>
                                            </div>

                                            <div className="form-group">
                                                <label>Status</label>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input"
                                                        id="customCheck1"/>
                                                    <label className="custom-control-label"
                                                        htmlFor="customCheck1">Completed</label>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-outline-primary"
                                            data-dismiss="modal">Cancel</button>
                                        <button type="button" className="btn btn-primary">Submit</button>
                                    </div>
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
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
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
                            surveys.map(i=> <SurveyCard key={i.id} id={i.id} templateId={i.templateId} templateName={i.templateName}
                                templateExplanation={i.templateExplanation} startDate={i.startDate} endDate={i.endDate} onClickListItem={onClickListItem} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SurveyList;
