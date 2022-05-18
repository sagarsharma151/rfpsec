import { ALL_ALERTS_REQUEST, ALL_ALERTS_REQUEST_FAILED, ALL_ALERTS_REQUEST_SUCCESS, MYAGENCYALERTS_REQUEST, MYAGENCYALERTS_REQUEST_FAILED, MYAGENCYALERTS_REQUEST_SUCCESS, MYOPPORTUNITY_REQUEST, MYOPPORTUNITY_REQUEST_FAILED, MYOPPORTUNITY_REQUEST_SUCCESS, TEAMING_ALERTS_FAILED, TEAMING_ALERTS_REQUEST, TEAMING_ALERTS_SUCCESS, TOP_AGENCY_SPENDS, TOP_AGENCY_SPENDS_FAILED, TOP_AGENCY_SPENDS_SUCCESS } from "redux/constants/Dashboard"


export const allAlertsRequest = (allalerts) =>{
    return{
    type: ALL_ALERTS_REQUEST,
    payload: allalerts
};
};
export const allAlertsRequestSuccess = (allalerts) =>{
    return{
    type: ALL_ALERTS_REQUEST_SUCCESS,
    allalerts
};
};
export const allAlertsRequestFailed = (message) =>{
    return{
    type: ALL_ALERTS_REQUEST_FAILED,
    message
};
};

export const MyOpportunityRequest = (myopportunity) =>{
    return{
    type: MYOPPORTUNITY_REQUEST,
    payload: myopportunity
};
};
export const MyOpportunityRequestSuccess = (myopportunity) =>{
    return{
    type: MYOPPORTUNITY_REQUEST_SUCCESS,
    myopportunity
};
};
export const MyOpportunityRequestFailed = (message) =>{
    return{
    type: MYOPPORTUNITY_REQUEST_FAILED,
    message
};
};

export const myAgencyAlerts = (myagency) =>{
    return{
    type: MYAGENCYALERTS_REQUEST,
    payload: myagency
};
};
export const myAgencyAlertsSuccess = (myagency) =>{
    return{
    type: MYAGENCYALERTS_REQUEST_SUCCESS,
    myagency
};
};
export const myAgencyAlertsFailed = (message) =>{
    return{
    type: MYAGENCYALERTS_REQUEST_FAILED,
    message
};
};

export const topAgencySpends = (topagency) =>{
    return{
    type: TOP_AGENCY_SPENDS,
    payload: topagency
};
};
export const topAgencySpendsSuccess = (topagency) =>{
    return{
    type: TOP_AGENCY_SPENDS_SUCCESS,
    topagency
};
};
export const topAgencySpendsFailed = (message) =>{
    return{
    type: TOP_AGENCY_SPENDS_FAILED,
    message
};
};

export const teamingAlerts = (teamingalert) =>{
    return{
    type: TEAMING_ALERTS_REQUEST,
    payload: teamingalert
};
};
export const teamingAlertsSuccess = (teamingalert) =>{
    return{
    type: TEAMING_ALERTS_SUCCESS,
    teamingalert
};
};
export const teamingAlertsFailed = (message) =>{
    return{
    type: TEAMING_ALERTS_FAILED,
    message
};
};
