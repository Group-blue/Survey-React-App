
const CheckBoxViewOptions = (props) => {
    const { options } = props;
    return (
        <div>
            <div className="mb-4">
                {
                    options.map(i=> <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id={"lang"+i.orderNo}/>
                                        <label className="custom-control-label" htmlFor={"lang"+i.orderNo}>{i.description}</label>
                                    </div>
                )
                }
            </div>
        </div>
    );
};

export default CheckBoxViewOptions;