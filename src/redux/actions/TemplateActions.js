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

export const updateTemplatesList = templates => {
    return {
        type: ACTIONS.UPDATE_TEMPLATES_LIST,
        templates
    };
};

export const clearTemplatesList = () => {
    return {
        type: ACTIONS.CLEAR_TEMPLATES_LIST
    };
};