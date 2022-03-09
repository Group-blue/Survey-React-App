import * as ACTIONS from '../Constants';
import { getDefaultState } from '../ConfigureStore';

const TemplateReducer = (state = {...getDefaultState}, action) => {
    if(action.type === ACTIONS.SAVE_TEMPLATE) {
        let tempState = {...state};
        tempState.createSurveyTemplate = action.template;
        return tempState;
    } else if(action.type === ACTIONS.CLEAR_TEMPLATE) {
        let tempState = {...state};
        tempState.createSurveyTemplate = action.template;
        return tempState;
    } else if(action.type === ACTIONS.UPDATE_TEMPLATES_LIST) {
        let tempState = {...state};
        tempState.surveyTemplateList.templates = [...action.templates];
        return tempState;
    } else if(action.type === ACTIONS.CLEAR_TEMPLATES_LIST) {
        let tempState = {...state};
        tempState.surveyTemplateList.templates = [];
        return tempState;
    } else if(action.type === ACTIONS.SET_CURRENT_TEMPLATE) {
        let tempState = {...state};
        tempState.currentSurveyTemplate = action.template;
        return tempState;
    } else if(action.type === ACTIONS.CLEAR_CURRENT_TEMPLATE) {
        let tempState = {...state};
        tempState.currentSurveyTemplate = {};
        return tempState;
    }
    return state;
}

export default TemplateReducer;