import * as ACTIONS from '../Constants';
import { getDefaultState } from '../ConfigureStore';

const TemplateReducer = (state = {...getDefaultState}, action) => {
    if(action.type === ACTIONS.SAVE_TEMPLATE) {
        return action.template;
    } else if(action.type === ACTIONS.CLEAR_TEMPLATE) {
        return action.template;
    }
    return state;
}

export default TemplateReducer;