import * as ACTIONS from '../Constants';

export const addAnswer = answer => {
    return {
        type: ACTIONS.ADD_ANSWER,
        answer
    };
};

export const addQuestion = question => {
    return {
        type: ACTIONS.ADD_QUESTION,
        question
    };
};