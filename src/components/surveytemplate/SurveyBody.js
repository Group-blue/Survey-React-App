import { useState } from "react";
import { useSelector } from 'react-redux';
import SingleSelectQuestion from "../questions/SingleSelectQuestion";
import RadioButtonQuestion from "../questions/RadioButtonQuestion";
import CheckBoxQuestions from "../questions/CheckBoxQuestions";

const SurveyBody = () => {
    const { questions } = useSelector(store =>({questions: store.questions}));
    const firstQuestion = questions[0];

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
                                        ACTIONS
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
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
                                                    <input className="mb-3 form-control" type="text" placeholder="Enter Template Name" />
                                                    <p className="text-muted text-small mb-2">Explanation</p>
                                                    <textarea className="mb-3 form-control" rows="3" placeholder="Enter Template Explanation" />


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
                                                    <SingleSelectQuestion orderNo={firstQuestion.orderNo} title={firstQuestion.title} text={firstQuestion.text}
                                                     type={firstQuestion.type} options={firstQuestion.options} />
                                                </div>

                                                <div>
                                                    <RadioButtonQuestion/>
                                                </div>

                                                <div>
                                                    <div className="card question d-flex mb-4 edit-quesiton">
                                                        <div className="d-flex flex-grow-1 min-width-zero">
                                                            <div
                                                                className="card-body align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                                                                <div className="list-item-heading mb-0 truncate w-80 mb-1 mt-1">
                                                                    <span className="heading-number d-inline-block">
                                                                        3
                                                                    </span>
                                                                    Work
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="custom-control custom-checkbox pl-1 align-self-center pr-4">
                                                                <button className="btn btn-outline-theme-3 icon-button edit-button">
                                                                    <i className="simple-icon-pencil"></i>
                                                                </button>
                                                                <button className="btn btn-outline-theme-3 icon-button view-button">
                                                                    <i className="simple-icon-eye"></i>
                                                                </button>
                                                                <button
                                                                    className="btn btn-outline-theme-3 icon-button rotate-icon-click"
                                                                    type="button" data-toggle="collapse" data-target="#q3"
                                                                    aria-expanded="false" aria-controls="q3">
                                                                    <i className="simple-icon-arrow-down with-rotate-icon"></i>
                                                                </button>
                                                            </div>
                                                        </div>

                                                        <div className="collapse question-collapse" id="q3">
                                                            <div className="card-body pt-0">
                                                                <div className="edit-mode">
                                                                    <div className="form-group mb-3">
                                                                        <label>Title</label>
                                                                        <input className="form-control" type="text" value="Work"/>
                                                                    </div>
                                                                    <div className="form-group mb-5">
                                                                        <label>Question</label>
                                                                        <input className="form-control" type="text"
                                                                            value="What is your employment status?"/>
                                                                    </div>

                                                                    <div className="separator mb-4"></div>
                                                                    <div className="form-group">
                                                                        <label className="d-block">Answer Type</label>
                                                                        <select className="form-control select2-single" data-width="100%">
                                                                            <option label="&nbsp;">&nbsp;</option>
                                                                            <option value="0">Text Input</option>
                                                                            <option value="1" selected>Single Select</option>
                                                                            <option value="2">Multiple Select</option>
                                                                            <option value="3">Checkbox</option>
                                                                            <option value="4">Radiobutton</option>
                                                                        </select>
                                                                    </div>

                                                                    <div className="form-group">
                                                                        <label className="d-block">Answers</label>
                                                                        <div className="answers mb-3 sortable">
                                                                            <div className="mb-1 position-relative">
                                                                                <input className="form-control" type="text"
                                                                                    value="Employed for wages"/>
                                                                                <div className="input-icons">
                                                                                    <span
                                                                                        className="badge badge-pill handle pr-0 mr-0">
                                                                                        <i className="simple-icon-cursor-move"></i>
                                                                                    </span>
                                                                                    <span className="badge badge-pill">
                                                                                        <i className="simple-icon-ban"></i>
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="mb-1 position-relative">
                                                                                <input className="form-control" type="text"
                                                                                    value="Self-employed"/>
                                                                                <div className="input-icons">
                                                                                    <span
                                                                                        className="badge badge-pill handle pr-0 mr-0">
                                                                                        <i className="simple-icon-cursor-move"></i>
                                                                                    </span>
                                                                                    <span className="badge badge-pill">
                                                                                        <i className="simple-icon-ban"></i>
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="mb-1 position-relative">
                                                                                <input className="form-control" type="text"
                                                                                    value="Out of work and looking for work"/>
                                                                                <div className="input-icons">
                                                                                    <span
                                                                                        className="badge badge-pill handle pr-0 mr-0">
                                                                                        <i className="simple-icon-cursor-move"></i>
                                                                                    </span>
                                                                                    <span className="badge badge-pill">
                                                                                        <i className="simple-icon-ban"></i>
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="mb-1 position-relative">
                                                                                <input className="form-control" type="text"
                                                                                    value="Retired"/>
                                                                                <div className="input-icons">
                                                                                    <span
                                                                                        className="badge badge-pill handle pr-0 mr-0">
                                                                                        <i className="simple-icon-cursor-move"></i>
                                                                                    </span>
                                                                                    <span className="badge badge-pill">
                                                                                        <i className="simple-icon-ban"></i>
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="text-center">
                                                                            <button type="button"
                                                                                className="btn btn-outline-primary btn-sm mb-2">
                                                                                <i className="simple-icon-plus btn-group-icon"></i>
                                                                                Add Answer</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="view-mode">
                                                                    <label>What is your employment status?</label>
                                                                    <select className="form-control select2-single" data-width="100%">
                                                                        <option label="&nbsp;">&nbsp;</option>
                                                                        <option value="0">Employed for wages</option>
                                                                        <option value="1">Self-employed</option>
                                                                        <option value="2">Out of work and looking for work
                                                                        </option>
                                                                        <option value="3">Retired</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>


                                                    </div>
                                                </div>

                                                <div>
                                                    <CheckBoxQuestions/>
                                                </div>
                                            </div>

                                            <div className="text-center">
                                                <button type="button" className="btn btn-outline-primary btn-sm mb-2">
                                                    <i className="simple-icon-plus btn-group-icon"></i>
                                                    Add Question</button>
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