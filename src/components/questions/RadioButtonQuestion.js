
const RadioButtonQuestion = () => {
    return (
        <div>
            <div className="card question d-flex mb-4 edit-quesiton">
                <div className="d-flex flex-grow-1 min-width-zero">
                    <div
                        className="card-body align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                        <div className="list-item-heading mb-0 truncate w-80 mb-1 mt-1">
                            <span className="heading-number d-inline-block">
                                2
                            </span>
                            Gender
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
                            type="button" data-toggle="collapse" data-target="#q2"
                            aria-expanded="false" aria-controls="q2">
                            <i className="simple-icon-arrow-down with-rotate-icon"></i>
                        </button>
                    </div>
                </div>

                <div className="collapse question-collapse" id="q2">
                    <div className="card-body pt-0">
                        <div className="edit-mode">
                            <div className="form-group mb-3">
                                <label>Title</label>
                                <input className="form-control" type="text" value="Gender"/>
                            </div>
                            <div className="form-group mb-5">
                                <label>Question</label>
                                <input className="form-control" type="text"
                                    value="What is your gender?"/>
                            </div>

                            <div className="separator mb-4"></div>
                            <div className="form-group">
                                <label className="d-block">Answer Type</label>
                                <select className="form-control select2-single" data-width="100%">
                                    <option label="&nbsp;">&nbsp;</option>
                                    <option value="0">Text Input</option>
                                    <option value="1">Single Select</option>
                                    <option value="2">Multiple Select</option>
                                    <option value="3">Checkbox</option>
                                    <option value="4" selected>Radiobutton</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="d-block">Answers</label>
                                <div className="answers mb-3 sortable">
                                    <div className="mb-1 position-relative">
                                        <input className="form-control" type="text"
                                            value="Male"/>
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
                                            value="Female"/>
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
                                            value="Other"/>
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
                            <label>What is your gender?</label>
                            <div className="mb-4">
                                <div className="custom-control custom-radio">
                                    <input type="radio" id="customRadio1"
                                        name="customRadio" className="custom-control-input"/>
                                    <label className="custom-control-label"
                                        htmlFor="customRadio1">Male</label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input type="radio" id="customRadio2"
                                        name="customRadio" className="custom-control-input"/>
                                    <label className="custom-control-label"
                                        htmlFor="customRadio2">Female</label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input type="radio" id="customRadio3"
                                        name="customRadio" className="custom-control-input"/>
                                    <label className="custom-control-label"
                                        htmlFor="customRadio3">Other</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RadioButtonQuestion;