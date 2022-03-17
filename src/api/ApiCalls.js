import * as URLS from './RestApiUrls';
import axios from "axios";

export const saveTemplateRequest = (body) => {
    return axios.post(URLS.SURVEY_SVC_URL+URLS.SAVE_SURVEY_TEMPLATE, body);
}

export const getAllTemplateListRequest = () => {
    return axios.get(URLS.SURVEY_SVC_URL+URLS.LIST_ALL_SURVEY_TEMPLATE);
}

export const getTemplateDetailsByIdRequest = (id) => {
    return axios.get(URLS.SURVEY_SVC_URL+URLS.GET_TEMPLATE_DETAILS_BY_ID+"?id="+id);
}

export const updateTemplateRequest = (body) => {
    return axios.post(URLS.SURVEY_SVC_URL+URLS.UPDATE_SURVEY_TEMPLATE, body);
}

export const getAllSurveyListRequest = () => {
    return axios.get(URLS.SURVEY_SVC_URL+URLS.LIST_ALL_SURVEY);
}

export const getSurveyByToken = (token) => {
    return axios.get(URLS.SURVEY_SVC_URL+URLS.GET_SURVEY_BY_TOKEN+"?token="+token);
}

export const getAllCoursesListRequest = () => {
    return axios.get(URLS.USER_SVC_URL+URLS.LIST_ALL_COURSES);
}


export const saveSurveyRequest = (body) => {
    return axios.post(URLS.SURVEY_SVC_URL+URLS.SAVE_SURVEY, body);
}

export const loginRequest = (body) => {
    return axios.post(URLS.USER_SVC_URL+URLS.LOGIN, body);
}

export const setToken = (token) => {
    axios.defaults.headers['Authorization'] = 'Bearer ' + token;
}