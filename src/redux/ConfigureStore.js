import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import QuestionReducer from './reducers/QuestionReducer';
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
        templateName: "Deneme",
        explanation: "Deneme...",
        questions: [{
            orderNo: 1,
            title: "Age",
            text: "How old are you?",
            type: 1,
            options: [
            {
                orderNo: 1,
                description: "18-24"
            },
            {
                orderNo: 2,
                description: "24-30"
            },
            {
                orderNo: 3,
                description: "30-40"
            },
            {
                orderNo: 4,
                description: "40-50"
            },
            {
                orderNo: 5,
                description: "50+"
            }]
        },
        {
            orderNo: 2,
            title: "Gender",
            text: "What is your gender?",
            type: 4,
            options: [
            {
                orderNo: 1,
                description: "Male"
            },
            {
                orderNo: 2,
                description: "Female"
            },
            {
                orderNo: 3,
                description: "Other"
            }]
        },
        {
            orderNo: 3,
            title: "Work",
            text: "What is your employment status?",
            type: 1,
            options: [
            {
                orderNo: 1,
                description: "Employed for wages"
            },
            {
                orderNo: 2,
                description: "Self-employed"
            },
            {
                orderNo: 3,
                description: "Out of work and looking for work"
            },
            {
                orderNo: 4,
                description: "Retired"
            }]
        },
        {
            orderNo: 4,
            title: "Coding",
            text: "What programming languages do you use?",
            type: 3,
            options: [
            {
                orderNo: 1,
                description: "Python"
            },
            {
                orderNo: 2,
                description: "JavaScript"
            },
            {
                orderNo: 3,
                description: "PHP"
            },
            {
                orderNo: 4,
                description: "Java"
            },
            {
                orderNo: 5,
                description: "C#"
            }]
        }]
    }

    return defaultState;
};

export const ConfigureStore = () => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(QuestionReducer, getStateFromStorage(), composeEnhancers(applyMiddleware(thunk)));

    store.subscribe(() => {
        updateStateInStorage(store.getState());
    });

    return store;
};

