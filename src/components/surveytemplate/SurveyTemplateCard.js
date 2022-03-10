import { convertTimestampToDate } from "../../sharedmethods/DateTimeOperations";

const SurveyTemplateCard = (props) => {
    const { id, templateName, validityStartDate, draft, onClickListItem } = props;

    const onClickItem = () => {
        onClickListItem(id);
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
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">Personal</p>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">{convertTimestampToDate(validityStartDate)}</p>
                        <div className="w-15 w-xs-100">
                            <span className="badge badge-pill badge-secondary">{draft ? "Draft":"Approved"}</span>
                        </div>
                    </div>
                    <label className="custom-control custom-checkbox mb-1 align-self-center mr-4">
                        <input type="checkbox" className="custom-control-input"/>
                        <span className="custom-control-label">&nbsp;</span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default SurveyTemplateCard;