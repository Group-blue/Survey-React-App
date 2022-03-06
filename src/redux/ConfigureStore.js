import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import TemplateReducer from './reducers/TemplateReducer';
import SecureLS from 'secure-ls';

const secureLs = new SecureLS();

export const getStateFromStorage = () => {
    const surveyStore = secureLs.get('survey-app-store');

    if(surveyStore){
        return surveyStore;
    }
    return getDefaultState();
}

const updateStateInStorage = newState => {
    secureLs.set('survey-app-store', newState);
}

export const getDefaultState = () => {
    let defaultState = {
        isDraft: true,
        templateName: undefined,
        explanation: undefined,
        questions: []
    }

    return defaultState;
};

export const ConfigureStore = () => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(TemplateReducer, getStateFromStorage(), composeEnhancers(applyMiddleware(thunk)));

    store.subscribe(() => {
        updateStateInStorage(store.getState());
    });

    return store;
};

