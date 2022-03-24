import { useState, useEffect } from "react";
import SingleSelectViewOptions from "./SingleSelectViewOptions";
import CheckBoxViewOptions from "./CheckBoxViewOptions";
import TextViewOption from "./TextViewOption";

const StudentQuestion = (props) => {
    const{ id, orderNo, title:titleFromProps, text:textFromProps, type, options: optionsFromProps, onChangeUserSelection } = props;


    const[title, setTitle] = useState(titleFromProps);
    const[text, setText] = useState(textFromProps);
    const[optionType, setOptionType] = useState(type);
    const[options, setOptions] = useState([...optionsFromProps]);
    const[answer, setAnswer] = useState();

    useEffect(() =>{

    }, []);

    const onChangeAnswer = (optionType, value) => {
        let tempAnswer = {
            type: optionType,
            questionId: id,
            answer: value
        }
        onChangeUserSelection(tempAnswer);
    }

    
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
                        <div className="view-mode">
                            <label>{text}</label>
                            {(() => {
                            switch (optionType) {
                                case 1:
                                    return (
                                        <SingleSelectViewOptions options={options} onChangeAnswer={onChangeAnswer} />
                                    )
                                case 2:
                                    return (
                                        <CheckBoxViewOptions options={options} onChangeAnswer={onChangeAnswer} />
                                    )
                                default:
                                    return (
                                        <TextViewOption />
                                    )
                            }
                            })()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentQuestion;