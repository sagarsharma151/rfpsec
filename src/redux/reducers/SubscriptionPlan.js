import {SUBSCRIPTION_PLAN,SUBSCRIPTION_PLAN_SUCCESS,SUBSCRIPTION_PLAN_FAILED} from "redux/constants/Auth";

const initState = {
    loading: false,
    user: [],
    error: "",
}

const SubscriptionPlan = (state = initState, action) => {
    console.log(action,'fldsjfdaction')
    switch (action.type) {

			case SUBSCRIPTION_PLAN:{
			return {
				...state,
				loading: true,
				user: action.user,
			}
		}
		
            case SUBSCRIPTION_PLAN_SUCCESS:{
			return {
				...state,
				loading: false,
				user: action.user,
			}
		}
            case SUBSCRIPTION_PLAN_FAILED:{
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

export default SubscriptionPlan;