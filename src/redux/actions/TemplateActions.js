import * as ACTIONS from '../Constants';

export const saveTemplate = template => {
    return {
        type: ACTIONS.SAVE_TEMPLATE,
        template
    };
};

export const clearTemplate = template => {
    return {
        type: ACTIONS.CLEAR_TEMPLATE,
        template
    };
};