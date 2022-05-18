import { all, takeEvery, put, fork, call, takeLatest
 } from 'redux-saga/effects';
import {
	AUTH_TOKEN,
	CHANGE_PASSWORD__REQUESTED,
	FORGOT_PASSWORD_REQUEST,
	GET_PROFILE,
	GET_USER_PROFILE,
	SIGNIN,
	SEND_MAIL_LINK_SUCCESS,
	SIGNOUT,
	SIGNUP,
	UPDATE_PROFILE,
	VERIFY,
	VERIFY_LOGIN,
} from '../constants/Auth';
import {
	showAuthMessage,
	authenticated,
	signOutSuccess,
	signUpSuccess,
	signUpFailed,
	verifySuccess,
	verifyFailed,
	verifyLoginSuccess,
	verifyLoginFailed,
	changePasswordSuccess,
	changePasswordFailed,
	getUserProfileSuccess,
	getUserProfileFailed,
	updateProfileSuccess,
	updateProfileFailed,
	getProfileSuccess,
	getProfileFailed
} from "../actions/Auth";
import { notification } from 'antd';
import FirebaseService from 'services/FirebaseService'
import JwtAuthService from 'services/JwtAuthService';
// import { useHistory } from 'react-router-dom';


export function* signIn() {
	yield takeEvery(SIGNIN, function* ({ payload }) {

		try {
			console.log(payload,'payload');
			const user = yield call(JwtAuthService.login, payload.request);
			console.log(user)
			if (user.accessToken) {
				
				localStorage.setItem(AUTH_TOKEN, user.accessToken);
				yield put(authenticated(user.accessToken));
				notification['success']({
					message: 'LogIn Successfull',
					description: '',
				});
				console.log('saga', payload);
				payload.route.push("/app/dashboards");
			} else {
				yield put(showAuthMessage(user.message));
			}
		} catch (err) {
			yield put(showAuthMessage(err));
		}
	});
}


export function* sendLink() {
	yield takeEvery(SEND_MAIL_LINK_SUCCESS, function* ({ payload }) {

		try {
			console.log(payload,'payload');
			const user = yield call(JwtAuthService.sendLink, payload);
			console.log(user)
			if (user) {
				console.log(user,'user15455555')
				localStorage.setItem(AUTH_TOKEN, user.accessToken);
				yield put(authenticated(user));
				notification['success']({
					message: 'LogIn Successfull',
					description: '',
				});
				console.log('saga', payload);
				payload.route.push("/app/dashboards");
			} else {
				yield put(showAuthMessage(user.message));
			}
		} catch (err) {
			yield put(showAuthMessage(err));
		}
	});
}

export function* signOut() {
	yield takeEvery(SIGNOUT, function* () {
		try {
			const signOutUser = yield call(FirebaseService.signOutRequest);
			if (signOutUser === undefined) {
				localStorage.removeItem(AUTH_TOKEN);
				yield put(signOutSuccess(signOutUser));
			} else {
				yield put(showAuthMessage(signOutUser.message));
			}
		} catch (err) {
			yield put(showAuthMessage(err));
		}
	});
}

export function* signUp() {
	yield takeEvery(SIGNUP, function* ({ payload }) {
		try {
			const user = yield call(JwtAuthService.signUp, payload.request);
			if (user.success===200) {
				yield put(signUpSuccess(user));
				// payload.route.push('/auth/validation', payload.request.email);
				notification['success']({
					message: 'OTP Sent in your Email-Address',
					description: '',
				});
			} else {
				yield put(signUpFailed(user.message));
				notification['error']({
					message: user.message,
					description: '',
				});
			}
		} catch (error) {
			yield put(signUpFailed(error));

		}
	});
}

export function* verifiedOtp() {
	yield takeEvery(VERIFY, function* ({ payload }) {
		try {
			const user = yield call(JwtAuthService.signupverify, payload.request)
			if (user.success) {
				yield put(verifySuccess(user));
				notification['success']({
					message: 'Registration Successfull',
					description: '',
				});
				payload.route.push('/auth/login-1');
			} else {
				yield put(verifyFailed(user.message));
				notification['error']({
					message: user.message,
					description: '',
				});
			}
		} catch (error) {
			yield put(verifyFailed(error));
		}
	})
}

export function* verifiedLoginOtp() {
	yield takeEvery(VERIFY_LOGIN, function* ({ payload }) {
		try {
			const user = yield call(JwtAuthService.loginverify, payload.request)
			if (user.success) {
				yield put(verifyLoginSuccess(user));
				notification['success']({
					message: 'OTP Sent in your Email-Address',
					description: '',
				});
				payload.route.push('/auth/loginValidation', payload.request.email);
			} else {
				yield put(verifyLoginFailed(user.message));
				notification['error']({
					message: user.message,
					description: '',
				});
			}
		} catch (error) {
			yield put(verifyFailed(error));
		}
	})
}

export function* passwordRequest() {
	yield takeEvery(CHANGE_PASSWORD__REQUESTED, function* ({ payload }) {
		
		try {
			const user = yield call(JwtAuthService.passwordRequest, payload.request);
			if (user.success) {
				yield put(changePasswordSuccess(user));
				notification['success']({
					message: 'Link Send in Email Box',
					description: '',
				});
			} else {
				yield put(changePasswordFailed(user.message));
				notification['error']({
					message: user.message,
					description: '',
				});
			}
		} catch (error) {
			yield put(changePasswordFailed(error));
		}
	});
}

export function* forgotedPassword() {
	yield takeEvery(FORGOT_PASSWORD_REQUEST, function* ({ payload }) {

		try {
			const user = yield call(JwtAuthService.forgotPassword, payload.request);
			if (user.success) {
				yield put(changePasswordSuccess(user));
				notification['success']({
					message: 'Password Successfully Changed',
					description: '',
				});
				payload.route.push('/auth/login-1');
			} else {
				yield put(changePasswordFailed(user.message));
				notification['error']({
					message: user.message,
					description: '',
				});
			}
		} catch (error) {
			yield put(changePasswordFailed(error));
		}
	});
}

export function* fetchUserProfile(action) {
	try {
		const users = yield call(JwtAuthService.getProfile);
		if(users.success === true){
			yield put(getUserProfileSuccess(users.data));
		}else{
			yield put(getUserProfileFailed(users.message));
		}
	} catch (error) {
		yield put(getUserProfileFailed(error.message));
	}
 }

export function* watchRequest() {
	yield takeLatest(GET_USER_PROFILE, fetchUserProfile);
 }

 export function* updateProfile() {
	yield takeEvery(UPDATE_PROFILE, function* ({ payload }) {

		try {
			const user = yield call(JwtAuthService.updateProfile, payload.request);
			if (user.success) {
				yield put(updateProfileSuccess(user));
				notification['success']({
					message: 'Profile Updated',
					description: '',
				});
				// payload.route.push('/app/pages/profile/UserProfile');
			} else {
				yield put(updateProfileFailed(user.message));
				notification['error']({
					message: user.message,
					description: '',
				});
			}
		} catch (error) {
			yield put(changePasswordFailed(error));
		}
	});
}

// export function* watchimage() {
// 	yield takeEvery(GET_PROFILE, function* ({ payload }) {
// 		console.log('saga-payload', payload);
// 		try {
// 			const users = yield call(JwtAuthService.getImage, payload);
// 			if (users.success === true) {
// 				yield put(getProfileSuccess(users));
// 				console.log('saga-users', users);
// 				payload.route.push("/app/dashboards");
// 				notification['success']({
// 					message: 'Profile image',
// 					description: '',
// 				});
// 			} else {
// 				yield put(getProfileFailed(users.message));
// 				notification['error']({
// 					message: users.message,
// 					description: '',
// 				});
// 			}
// 		} catch (error) {
// 			yield put(getProfileFailed(error));
// 		}
// 	});
// }

export function* imageshow(payload) {
	console.log("payload",payload);
	try {
		const users = yield call(JwtAuthService.getImage, payload);
		if(users.success === true){
			yield put(getProfileSuccess(users.data));
			notification['success']({
				message: 'Get Profile',
				description: '',
			});
		}else{
			yield put(getProfileFailed(users.message));
		}
	} catch (error) {
		yield put(getProfileFailed(error.message));
	}
 }

export function* watchimage() {
	yield takeLatest(GET_PROFILE, imageshow);
 }

export default function* rootSaga() {
	yield all([
		fork(signIn),
		fork(sendLink),
		fork(signOut),
		fork(signUp),
		fork(verifiedOtp),
		fork(verifiedLoginOtp),
		fork(passwordRequest),
		fork(forgotedPassword),
		fork(watchRequest),
		fork(updateProfile),
		fork(watchimage),
	]);
}
