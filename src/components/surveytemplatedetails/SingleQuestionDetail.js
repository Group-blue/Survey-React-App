import { useState, useEffect } from "react";
import EditOptionDetail from "./EditOptionDetail";
import RadioButtonViewOptions from "../viewmodeoptions/RadioButtonViewOptions";
import SingleSelectViewOptions from "../viewmodeoptions/SingleSelectViewOptions";
import CheckBoxViewOptions from "../viewmodeoptions/CheckBoxViewOptions";

const SingleQuestionDetail = (props) => {
    const{ id, orderNo, onClickRemove, title:titleFromProps, text:textFromProps, type, options: optionsFromProps, onQuestionChanged } = props;


    const[title, setTitle] = useState(titleFromProps);
    const[text, setText] = useState(textFromProps);
    const[optionType, setOptionType] = useState(type);
    const[options, setOptions] = useState([...optionsFromProps]);

    useEffect(() =>{
        const changedQuestion = {
            id,
            orderNo,
            title: title,
            text,
            type: optionType,
            options
        }
        onQuestionChanged(changedQuestion);
    }, [title, text, optionType, options]);

    const addOption = () =>{
        let newOption = {
            id: undefined,
            orderNo: options.length<1 ? 1 : options[options.length-1].orderNo+1,
            description: ""
        }

        setOptions([ ...options, newOption]);
    }

    const onClickRemoveOption = optionOrderNo =>{
        const filteredOptions = options.filter(i=> {return i.orderNo!=optionOrderNo});
        setOptions(filteredOptions);
    }

    const optionChanged = (optionOrderNo, optionDescription) =>{
        let modifiedOptions = [...options];
        modifiedOptions.forEach(i=> {
            if(i.orderNo == optionOrderNo){
                i.description=optionDescription
            }
        })
        setOptions(modifiedOptions);
    }

    const clickRemoveQuestion = () => {
        onClickRemove(orderNo);
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
                        <button className="btn btn-outline-danger icon-button" onClick={clickRemoveQuestion} >
                            <i className="simple-icon-ban"></i>
                        </button>
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
                                <input className="form-control" type="text" defaultValue={title} onChange={(event) => setTitle(event.target.value)} />
                            </div>
                            <div className="form-group mb-5">
                                <label>Question</label>
                                <input className="form-control" type="text" defaultValue={text} onChange={(event) => setText(event.target.value)} />
                            </div>

                            <div className="separator mb-4"></div>

                            <div className="form-group">
                                <label className="d-block">Option Type</label>
                                <select className="form-control select2-single" defaultValue={optionType} onChange={(event) => setOptionType(parseInt(event.target.value))} data-width="100%">
                                    <option value="1">Single Select</option>
                                    <option value="2">Checkbox</option>
                                    <option value="4">Text Input</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="d-block">Options</label>
                                <div className="answers mb-3 sortable">
                                    {
                                        options.map(i=> <EditOptionDetail key={i.orderNo} id={i.id} description={i.description} 
                                            orderNo={i.orderNo} onClickRemove={onClickRemoveOption} onChangeDescription={optionChanged} />)
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
                            <label>{text}</label>
                            {(() => {
                            switch (optionType) {
                                case 1:
                                    return (
                                        <SingleSelectViewOptions options={options} />
                                    )
                                case 2:
                                    return (
                                        <CheckBoxViewOptions options={options} />
                                    )
                                default:
                                    return (
                                    <div>
                                        <input className="form-control" type="text" placeholder="Enter your answer here." />
                                    </div>
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

export default SingleQuestionDetail;