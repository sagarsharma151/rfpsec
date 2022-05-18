import { LIVE_OPPORTUNITY_REQUEST, LIVE_OPPORTUNITY_SUCCESS, SEARCH_REQUEST_FAILED, SEARCH_REQUEST_SUCCESS, LIVE_OPPORTUNITY_FAILED, SEARCH_REQUEST } from "redux/constants/LiveOpportunity";

const initState = {
    loading: false,
    message: '',
    liveOppotunityData: '',
    err: '',
}

const LiveOpportunity = (state = initState, action) => {
    switch (action.type) {
        case LIVE_OPPORTUNITY_REQUEST: {
            return {
                ...state,
                loading: true,
                liveOppotunityData: action.liveopportunity
            }
        }
        case LIVE_OPPORTUNITY_SUCCESS: {
            return {
                ...state,
                loading: true,
                liveOppotunityData: action.liveopportunity
            }
        }
        case LIVE_OPPORTUNITY_FAILED: {
            return {
                ...state,
                loading: false,
                err: action.error
            }
        }

        case SEARCH_REQUEST: {
            return {
                ...state,
                loading: true,
                redirect: '/',
                token: action.token
            }
        }
        case SEARCH_REQUEST_SUCCESS: {
            return {
                ...state,
                loading: true,
                redirect: '/',
                liveOppotunityData: action.search,
                // token: action.token
            }
        }
        case SEARCH_REQUEST_FAILED: {
            return {
                ...state,
                loading: false,
                err: action.error
            }
        }


        default:
            return state;
    }
}

export default LiveOpportunity;