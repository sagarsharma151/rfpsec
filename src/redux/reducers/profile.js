import { AUTH_TOKEN, CHANGE_PROFILE_PASSWORD, CHANGE_PROFILE_PASSWORD_FAILED, CHANGE_PROFILE_PASSWORD_SUCCESS, DELETE_FAILED, DELETE_REQUEST, DELETE_SUCCESS, PROFILE_ADD_USER, PROFILE_ADD_USER_FAILED, PROFILE_ADD_USER_SUCCESS, PROFILE_GET_USER, PROFILE_GET_USER_FAILED, PROFILE_GET_USER_SUCCESS, UPDATE_ADDUSER_PROFILE, UPDATE_ADDUSER_PROFILE_FAILED, UPDATE_ADDUSER_PROFILE_SUCCESS, UPLOAD_IMAGE, UPLOAD_IMAGE_FAILED, UPLOAD_IMAGE_SUCCESS } from "redux/constants/Auth";

const initState = {
	loading: false,
	message: '',
	redirect: '',
	token: localStorage.getItem(AUTH_TOKEN),
	err: '',
	user: '',
	updateUser: '',
	id: '',
	oldPassword: '',
	newPassword: '',
	confirmPassword: '',
	imageUrl: '',
}

const Profile = (state = initState, action) => {
    switch (action.type) {
		case PROFILE_ADD_USER:{
			return {
				...state,
				loading: true,
				redirect: '/',
				token: action.token
			}
		}
            case PROFILE_ADD_USER_SUCCESS:{
			return {
				...state,
				loading: true,
				redirect: '/',
                token: action.token
			}
		}
            case PROFILE_ADD_USER_FAILED:{
			return {
				...state,
				loading: false,
				err: action.error
			}
		}

			case PROFILE_GET_USER:{
			return {
				...state,
				loading: true,
				user: action.user,
			}
		}
            case PROFILE_GET_USER_SUCCESS:{
			return {
				...state,
				loading: false,
				user: action.user,
			}
		}
            case PROFILE_GET_USER_FAILED:{
			return {
				...state,
				loading: false,
				err: action.error
			}
		}

		case UPDATE_ADDUSER_PROFILE: {
			return {
				...state,
				loading: true,
				// token: action.token
			}
		}
		case UPDATE_ADDUSER_PROFILE_SUCCESS: {
			return {
				...state,
				loading: false,
				updateUser: action.user,
			}
		}
		case UPDATE_ADDUSER_PROFILE_FAILED: {
			return {
				...state,
				loading: false,
				err: action.error
			}
		}

		case DELETE_REQUEST:{
			return{
				...state,
				loading: true,
				// id: action.user
			}
		}
		case DELETE_SUCCESS:{
			return{
				...state,
				loading: false,
				id: action.user
			}
		}
		case DELETE_FAILED:{
			return{
				...state,
				loading: true,
				err: action.error
			}
		}

		case CHANGE_PROFILE_PASSWORD: {
			return {
				...state,
				loading: true,
				oldPassword: '',
				newPassword: '',
				confirmPassword: '',
				token: action.token
			}
		}
		case CHANGE_PROFILE_PASSWORD_SUCCESS: {
			return {
				...state,
				loading: false,
				email: action.token,
			}
		}
		case CHANGE_PROFILE_PASSWORD_FAILED: {
			return {
				...state,
				loading: false,
				err: action.error
			}
		}

		case UPLOAD_IMAGE:{
			return{
				...state,
				loading: true,
				token: action.token,
				imageUrl: action.image
			}
		}
		case UPLOAD_IMAGE_SUCCESS:{
			return{
				...state,
				loading: false,
				token: action.token,
				imageUrl: action.image
			}
		}
		case UPLOAD_IMAGE_FAILED:{
			return{
				...state,
				loading: true,
				err: action.error
			}
		}


            default:
                return state;
        }
}

export default Profile;