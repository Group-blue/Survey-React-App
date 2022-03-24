import React from 'react';

const SingleSelectViewOptions = (props) => {
    const{ options, onChangeAnswer } = props;

    const onChangeOption = (value) => {
        onChangeAnswer(1, value);
    }

    return (
        <div>
            <select className="form-control select2-single" data-width="100%" defaultValue={0} onChange={(event)=> onChangeOption(event.target.value)}>
                <option disabled={true} value={0}  label="&nbsp;">&nbsp;</option>
                {
                    options.map(i=> <option value={i.orderNo}>{i.description}</option>)
                }
            </select>
        </div>
    );
};

export default SingleSelectViewOptions;