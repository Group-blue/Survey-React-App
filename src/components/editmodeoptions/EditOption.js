import React from 'react';

const EditOption = (props) => {
    const{ onClickRemove, orderNo, description, onChangeDescription } = props; 

    const clickRemove = () => {
        onClickRemove(orderNo);
    }

    const onChangeDesc = (value) => {
        onChangeDescription(orderNo, value);
    }

    return (
        <div>
            <div className="mb-1 position-relative">
                <input className="form-control" type="text" defaultValue={description} onChange={(event)=>onChangeDesc(event.target.value)} />
                <div className="input-icons">
                    <span className="badge badge-pill" onClick={clickRemove}>
                        <i className="simple-icon-ban" ></i>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default EditOption;