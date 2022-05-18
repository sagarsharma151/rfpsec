import { LIVE_OPPORTUNITY_FAILED, LIVE_OPPORTUNITY_REQUEST, LIVE_OPPORTUNITY_SUCCESS, SEARCH_REQUEST, SEARCH_REQUEST_SUCCESS, SEARCH_REQUEST_FAILED } from "redux/constants/LiveOpportunity"

export const liveOpportunity = (liveopportunity) =>{
    return{
        type: LIVE_OPPORTUNITY_REQUEST,
        payload:liveopportunity
    };
};
export const liveOpportunitySuccess = (liveopportunity) =>{
    return{
        type: LIVE_OPPORTUNITY_SUCCESS,
        liveopportunity
    };
};
export const liveOpportunityFailed = (message) =>{
    return{
        type: LIVE_OPPORTUNITY_FAILED,
        message
    };
};

export const searchOpportunity = (search) =>{
    console.log('action', search);
    return{
    type: SEARCH_REQUEST,
    payload: search
};
};
export const searchOpportunitySuccess = (search) =>{
    return{
    type: SEARCH_REQUEST_SUCCESS,
    search
};
};
export const searchOpportunityFailed = (message) =>{
    return{
    type: SEARCH_REQUEST_FAILED,
    message
};
};