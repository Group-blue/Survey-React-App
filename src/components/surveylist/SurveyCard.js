import {convertTimestampToDate} from "../../sharedmethods/DateTimeOperations"

const SurveyCard = (props) => {
    const { id, templateId, templateName, templateExplanation, startDate, endDate, onClickListItem } = props;

    // const convertTimestampToDate = (timestamp) => {
    //     let date = new Intl.DateTimeFormat('tr-TR', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' })
    //     .format(timestamp);
    //     return date;
    // }

    const onClickItem = () => {
        onClickListItem(id);
    }

    const onChangeCheckBox = () => {
        console.log("checkbox tiklendi");
    }

    return (
        <div>
            <div className="card d-flex flex-row mb-3">
                <div className="d-flex flex-grow-1 min-width-zero">
                    <div
                        className="card-body align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                        <a className="list-item-heading mb-0 truncate w-40 w-xs-100 mt-0" style={{cursor: "pointer"}}
                             onClick={onClickItem} >
                            <i className="simple-icon-refresh heading-icon"></i>
                            <span className="align-middle d-inline-block">{templateName}</span>
                        </a>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">{templateExplanation}</p>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">{convertTimestampToDate(startDate)}</p>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">{convertTimestampToDate(endDate)}</p>
                        <div className="w-15 w-xs-100">
                            <span className="badge badge-pill badge-secondary">{"Template Id: "+templateId}</span>
                        </div>
                    </div>
                    <label className="custom-control custom-checkbox mb-1 align-self-center mr-4">
                        <input type="checkbox" className="custom-control-input" onChange={(event)=>console.log(event)} />
                        <span className="custom-control-label">&nbsp;</span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default SurveyCard;