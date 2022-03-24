import { useEffect, useState } from "react";

const CheckBoxViewOptions = (props) => {
    const { options, onChangeAnswer } = props;

    const[selectedList, setSelectedList] = useState([]);

    useEffect(()=>{
            onChangeAnswer(2, constructAnswerValue());
    },[selectedList]);

    const constructAnswerValue = () => {
        let answerValue;
        for(let i=0;i<selectedList.length;i++){
            if(!answerValue){
                answerValue = selectedList[i];
            } else {
                answerValue = answerValue + "^" + selectedList[i];
            }
        }

        return answerValue;
    }

    const handleOnchange = (isChecked, optId) => {
        if(isChecked){
            let tempList = [...selectedList];
            tempList.push(optId);
            setSelectedList(tempList);
        } else {
            let tempList = [];
            for(let i=0;i<selectedList.length;i++){
                if(selectedList[i]!=optId){
                    tempList.push(selectedList[i]);
                }
            }
            setSelectedList(tempList);
        }
    }

    return (
        <div>
            <div className="mb-4">
                {
                    options.map(i=> <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id={i.id} onChange={(event)=>handleOnchange(event.target.checked, event.target.id)} />
                                        <label className="custom-control-label" htmlFor={i.id}>{i.description}</label>
                                    </div>
                )
                }
            </div>
        </div>
    );
};

export default CheckBoxViewOptions;