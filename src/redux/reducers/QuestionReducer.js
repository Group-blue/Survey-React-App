import * as ACTIONS from '../Constants';
import { getDefaultState } from '../ConfigureStore';

const QuestionReducer = (state = {...getDefaultState}, action) => {
    if(action.type === ACTIONS.ADD_ANSWER) {
        return state;
    } else if(action.type === ACTIONS.ADD_QUESTION){
        return state;
    }
    return state;
}

export default QuestionReducer;