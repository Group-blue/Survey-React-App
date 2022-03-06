import React from 'react';

const SingleSelectOption = (props) => {
    const{ onClickRemove, orderNo, description } = props; 

    const clickRemove = () => {
        onClickRemove(orderNo);
    }

    return (
        <div>
            <div className="mb-1 position-relative">
                <input className="form-control" type="text"/>
                <div className="input-icons">
                    <span name={"caglayan"} className="badge badge-pill" onClick={clickRemove}>
                        <i className="simple-icon-ban" ></i>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SingleSelectOption;