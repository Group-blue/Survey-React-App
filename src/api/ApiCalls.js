import * as URLS from './RestApiUrls';
import axios from "axios";

export const saveTemplateRequest = body => {
    return axios.post(URLS.SURVEY_SVC_URL+URLS.SAVE_SURVEY_TEMPLATE, body);
}