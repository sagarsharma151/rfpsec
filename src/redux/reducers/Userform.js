import {SIGNUP_DATA,
	SIGNUP_DATA_SUCCESS,
	SIGNUP_DATA_FAILED} from "redux/constants/Auth";

const initState = {
    loading: false,
    user: [],
    error: "",
}

const Userform = (state = initState, action) => {
    console.log(action,'fldsjfdactionuserform')
    switch (action.type) {

        case SIGNUP_DATA:{
			return {
				...state,
				loading: true,
				user: [],
			}
		}
		case SIGNUP_DATA_SUCCESS: {
			return {
				...state,
				loading: false,
				user: action.payload
			}
		}
		case SIGNUP_DATA_FAILED: {
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

export default Userform;