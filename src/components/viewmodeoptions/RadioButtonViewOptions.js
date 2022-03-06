

const RadioButtonViewOptions = (props) => {
    const { options } = props;
    return (
        <div>
            <div className="mb-4">
                {
                    options.map(i=>                 
                        <div className="custom-control custom-radio">
                            <input type="radio" id={"customRadio"+i.orderNo} name="customRadio" className="custom-control-input"/>
                            <label className="custom-control-label" htmlFor={"customRadio"+i.orderNo}>{i.description}</label>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default RadioButtonViewOptions;