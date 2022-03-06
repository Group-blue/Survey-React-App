import { useState, useEffect } from "react";
import SingleSelectOption from "../answers/SingleSelectOption";

const SingleSelectQuestion = (props) => {
    const[title, setTitle] = useState();
    const[questionText, setQuestionText] = useState();
    const[optionType, setOptionType] = useState();
    const[options, setOptions] = useState([]);

    const addOption = () =>{
        let newOption = {
            orderNo: options.length+1,
            description: ""
        }

        setOptions([ ...options, newOption]);
    }

    const onClickRemoveOption = optionOrderNo =>{
        let filteredOptions = options.filter(i=> {return i.orderNo!=optionOrderNo});
        setOptions(filteredOptions);
    }

    const{orderNo, text, type } = props;
    return (
        <div>
            <div className="card question d-flex mb-4 edit-quesiton">
                <div className="d-flex flex-grow-1 min-width-zero">
                    <div
                        className="card-body align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                        <div className="list-item-heading mb-0 truncate w-80 mb-1 mt-1">
                            <span className="heading-number d-inline-block">
                                {orderNo}
                            </span>
                            {title}
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
                            className="btn btn-outline-theme-3 icon-button rotate-icon-click rotate"
                            type="button" data-toggle="collapse" data-target={"#q"+orderNo}
                            aria-expanded="true" aria-controls={"q"+orderNo}>
                            <i className="simple-icon-arrow-down with-rotate-icon"></i>
                        </button>
                    </div>
                </div>
                <div className="question-collapse collapse show" id={"q"+orderNo}>
                    <div className="card-body pt-0">
                        <div className="edit-mode">
                            <div className="form-group mb-3">
                                <label>Title</label>
                                <input className="form-control" type="text" onChange={(event) => setTitle(event.target.value)} />
                            </div>
                            <div className="form-group mb-5">
                                <label>Question</label>
                                <input className="form-control" type="text" onChange={(event) => setQuestionText(event.target.value)} />
                            </div>

                            <div className="separator mb-4"></div>

                            <div className="form-group">
                                <label className="d-block">Option Type</label>
                                <select className="form-control select2-single" onChange={(event) => setOptionType(event.target.value)} data-width="100%">
                                    <option label="&nbsp;">&nbsp;</option>
                                    <option value="0">Text Input</option>
                                    <option value="1">Single Select</option>
                                    <option value="2">Multiple Select</option>
                                    <option value="3">Checkbox</option>
                                    <option value="4">Radiobutton</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="d-block">Options</label>
                                <div className="answers mb-3 sortable">
                                    {
                                        options.map(i=> <SingleSelectOption key={i.orderNo} description={i.description} 
                                            orderNo={i.orderNo} onClickRemove={onClickRemoveOption} />)
                                    }
                                </div>
                                <div className="text-center">
                                    <button type="button" onClick={addOption}
                                        className="btn btn-outline-primary btn-sm mb-2">
                                        <i className="simple-icon-plus btn-group-icon"></i>
                                        Add Option
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="view-mode">
                            <label>{questionText}</label>
                            <select className="form-control select2-single" data-width="100%">
                                <option label="&nbsp;">&nbsp;</option>
                                {
                                    options.map(i=> <option value={i.orderNo}>{i.description}</option>)
                                }
                            </select>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleSelectQuestion;