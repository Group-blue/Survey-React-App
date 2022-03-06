import React from 'react';

const SingleSelectViewOptions = (props) => {
    const{ options } = props;
    return (
        <div>
            <select className="form-control select2-single" data-width="100%">
                <option label="&nbsp;">&nbsp;</option>
                {
                    options.map(i=> <option value={i.orderNo}>{i.description}</option>)
                }
            </select>
        </div>
    );
};

export default SingleSelectViewOptions;