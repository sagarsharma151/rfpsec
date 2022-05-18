import { AUTH_TOKEN } from "redux/constants/Auth";
import { ALL_ALERTS_REQUEST, ALL_ALERTS_REQUEST_SUCCESS, ALL_ALERTS_REQUEST_FAILED, MYOPPORTUNITY_REQUEST, MYOPPORTUNITY_REQUEST_SUCCESS, MYOPPORTUNITY_REQUEST_FAILED, MYAGENCYALERTS_REQUEST, MYAGENCYALERTS_REQUEST_SUCCESS, MYAGENCYALERTS_REQUEST_FAILED, TOP_AGENCY_SPENDS, TOP_AGENCY_SPENDS_SUCCESS, TOP_AGENCY_SPENDS_FAILED, TEAMING_ALERTS_REQUEST, TEAMING_ALERTS_SUCCESS, TEAMING_ALERTS_FAILED } from "redux/constants/Dashboard";

const initState = {
	loading: false,
	message: '',
    token: localStorage.getItem(AUTH_TOKEN),
	redirect: '',
	err: '',
	allAlerts: '',
	myOpportunity: '',
	myAgency: '',
	topAgency: '',
	teamingAlertss: '',
}

const Dashboard = (state = initState, action) =>{
    switch (action.type) {
        case ALL_ALERTS_REQUEST:{
            return{
                ...state,
                loading: true,
                redirect: '/',
                allAlerts: action.token
            }
        }
        case ALL_ALERTS_REQUEST_SUCCESS:{
			return {
				...state,
				loading: true,
				redirect: '/',
                allAlerts: action.allalerts
			}
		}
            case ALL_ALERTS_REQUEST_FAILED:{
			return {
				...state,
				loading: false,
				err: action.error
			}
		}

        case MYOPPORTUNITY_REQUEST:{
            return{
                ...state,
                loading: true,
                redirect: '/',
                myOpportunity: action.token
            }
        }
        case MYOPPORTUNITY_REQUEST_SUCCESS:{
			return {
				...state,
				loading: true,
				redirect: '/',
                myOpportunity: action.myopportunity
			}
		}
            case MYOPPORTUNITY_REQUEST_FAILED:{
			return {
				...state,
				loading: false,
				err: action.error
			}
		}

        case MYAGENCYALERTS_REQUEST:{
            return{
                ...state,
                loading: true,
                redirect: '/',
                myAgency: action.token
            }
        }
        case MYAGENCYALERTS_REQUEST_SUCCESS:{
			return {
				...state,
				loading: true,
				redirect: '/',
                myAgency: action.myagency
			}
		}
            case MYAGENCYALERTS_REQUEST_FAILED:{
			return {
				...state,
				loading: false,
				err: action.error
			}
		}

        case TOP_AGENCY_SPENDS:{
            return{
                ...state,
                loading: true,
                redirect: '/',
                topAgency: action.token
            }
        }
        case TOP_AGENCY_SPENDS_SUCCESS:{
			return {
				...state,
				loading: true,
				redirect: '/',
                topAgency: action.topagency
			}
		}
            case TOP_AGENCY_SPENDS_FAILED:{
			return {
				...state,
				loading: false,
				err: action.error
			}
		}

		case TEAMING_ALERTS_REQUEST:{
            return{
                ...state,
                loading: true,
                redirect: '/',
                teamingAlertss: action.token
            }
        }
        case TEAMING_ALERTS_SUCCESS:{
			return {
				...state,
				loading: true,
				redirect: '/',
                teamingAlertss: action.teamingalert
			}
		}
            case TEAMING_ALERTS_FAILED:{
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

export default Dashboard;