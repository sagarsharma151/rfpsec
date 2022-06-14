import {
	AUTH_TOKEN,
	AUTHENTICATED,
	SHOW_AUTH_MESSAGE,
	HIDE_AUTH_MESSAGE,
	SIGNOUT_SUCCESS,
	SIGNUP,
	SIGNUP_SUCCESS,
	SHOW_LOADING,
	SIGNUP_FAILED,
	PLANS,
	PLANS_SUCCESS,
	PLANS_FAILED,
	VERIFY,
	SEND_MAIL_LINK_SUCCESS,
	VERIFY_SUCCESS,
	VERIFY_FAILED,
	VERIFY_LOGIN,
	VERIFY_LOGIN_SUCCESS,
	VERIFY_LOGIN_FAILED,
	CHANGE_PASSWORD__REQUESTED,
	CHANGE_PASSWORD__SUCCESS,
	CHANGE_PASSWORD__FAIELD,
	FORGOT_PASSWORD_REQUEST,
	GET_USER_PROFILE,
	GET_USER_PROFILE_SUCCESS,
	GET_USER_PROFILE_FAILED,
	UPDATE_PROFILE,
	UPDATE_PROFILE_SUCCESS,
	UPDATE_PROFILE_FAILED,
	GET_PROFILE,
	GET_PROFILE_SUCCESS,
	GET_PROFILE_FAILED,
	CONTACT,
	CONTACT_SUCCESS,
	CONTACT_FAILED
} from '../constants/Auth';

const initState = {
	loading: false,
	message: '',
	showMessage: false,
	redirect: '',
	token: localStorage.getItem(AUTH_TOKEN),
	otp: '',
	err: '',
	email: '',
	user: '',
	profile: '',
	
}

const auth = (state = initState, action) => {
	console.log(action,'actionuser')
	switch (action.type) {
		case AUTHENTICATED:
			return {
				...state,
				loading: false,
				redirect: '/',
				token: action.token
			}
		case SHOW_AUTH_MESSAGE:
			return {
				...state,
				message: action.message,
				showMessage: true,
				loading: false
			}
		case HIDE_AUTH_MESSAGE:
			return {
				...state,
				message: '',
				showMessage: false,
			}
		case SIGNOUT_SUCCESS: {
			return {
				...state,
				token: null,
				redirect: '/',
				loading: false
			}
		}
		case SIGNUP:{
			return {
				...state,
				loading: true,
				user: [],
			}
		}
		case SIGNUP_SUCCESS: {
			return {
				...state,
				loading: false,
				user: action.payload
			}
		}
		case SIGNUP_FAILED: {
			return {
				...state,
				loading: false,
				err: action.error
			}
		}
		case CONTACT:{
			return {
				...state,
				loading: true,
				user: [],
			}
		}
		case CONTACT_SUCCESS: {
			return {
				...state,
				loading: false,
				user: action.payload
			}
		}
		case CONTACT_FAILED: {
			return {
				...state,
				loading: false,
				err: action.error
			}
		}
		case PLANS:{
			return {
				...state,
				loading: true,
				user: [],
			}
		}
		case PLANS_SUCCESS: {
			return {
				...state,
				loading: false,
				user: action.payload
			}
		}
		case PLANS_FAILED: {
			return {
				...state,
				loading: false,
				err: action.error
			}
		}
	
		case VERIFY: {
			return {
				...state,
				loading: true,
				otp: '',
			}
		}
		case VERIFY_SUCCESS: {
			return {
				...state,
				loading: false,
				otp: action.token
			}
		}
		case VERIFY_FAILED: {
			return {
				...state,
				loading: false,
				err: action.error
			}
		}

		case VERIFY_LOGIN: {
			return {
				...state,
				loading: true,
				otp: '',
			}
		}
		case VERIFY_LOGIN_SUCCESS: {
			return {
				...state,
				loading: false,
				otp: action.token
			}
		}
		case VERIFY_LOGIN_FAILED: {
			return {
				...state,
				loading: false,
				err: action.error
			}
		}

		case CHANGE_PASSWORD__REQUESTED: {
			return {
				...state,
				loading: true,
				email: '',
			}
		}
		case FORGOT_PASSWORD_REQUEST: {
			return {
				...state,
				loading: true,
				email: '',
				otp: '',
				token: action.token
			}
		}
		case CHANGE_PASSWORD__SUCCESS: {
			return {
				...state,
				loading: false,
				email: action.token,
			}
		}
		case CHANGE_PASSWORD__FAIELD: {
			return {
				...state,
				loading: false,
				err: action.error
			}
		}

		case GET_USER_PROFILE: {
			return {
				...state,
				loading: true,
				user: action.user,
			}
		}
		case GET_USER_PROFILE_SUCCESS: {
			return {
				...state,
				loading: false,
				user: action.user,
			}
		}
		case GET_USER_PROFILE_FAILED: {
			return {
				...state,
				loading: false,
				err: action.error
			}
		}

		case UPDATE_PROFILE: {
			return {
				...state,
				loading: true,
				// token: action.token
			}
		}
		case UPDATE_PROFILE_SUCCESS: {
			return {
				...state,
				loading: false,
				token: action.token
			}
		}
		case UPDATE_PROFILE_FAILED: {
			return {
				...state,
				loading: false,
				err: action.error
			}
		}

		case GET_PROFILE: {
			return {
				...state,
				loading: true,
				token: action.token,
				profile: action.profile,
			}
		}
		case GET_PROFILE_SUCCESS: {
			return {
				...state,
				loading: false,
				token: action.token,
				profile: action.profile,
			}
		}
		case GET_PROFILE_FAILED: {
			return {
				...state,
				loading: false,
				err: action.error
			}
		}
		
		case SHOW_LOADING: {
			return {
				...state,
				loading: true
			}
		}
		case SEND_MAIL_LINK_SUCCESS: {
			return {
				...state,
				loading: false,
				email: action.payload
			}
		}
		default:
			return state;
	}
}

export default auth