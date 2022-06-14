import {
  SIGNIN,
  AUTHENTICATED,
  SIGNOUT,
  SIGNOUT_SUCCESS,
  SHOW_AUTH_MESSAGE,
  HIDE_AUTH_MESSAGE,
  SIGNUP,
  SIGNUP_SUCCESS,
  SHOW_LOADING,
  SIGNUP_FAILED,
  VERIFY,
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
  SEND_MAIL_LINK_SUCCESS,
  PLANS,
  PLANS_SUCCESS,
  PLANS_FAILED,
  CONTACT,
  CONTACT_SUCCESS,
  CONTACT_FAILED

} from '../constants/Auth';
export const signIn = (user) => {
  return {
    type: SIGNIN,
    payload: user
  }
};
export const sendLink = (user) => {
  console.log(user,'user')
  return {
    type:  SEND_MAIL_LINK_SUCCESS,
    payload: user
  }
};
export const authenticated = (token) => {
  return {
    type: AUTHENTICATED,
    token
  }
};

export const signOut = () => {
  return {
    type: SIGNOUT
  };
};

export const signOutSuccess = () => {
  return {
    type: SIGNOUT_SUCCESS,
  }
};

export const signUp = (user) => {
  return {
    type: SIGNUP,
    payload: user
  };
};

export const signUpSuccess = (user) => {
  return {
    type: SIGNUP_SUCCESS,
    user
  };
};
export const signUpFailed = () => {
  return {
    type: SIGNUP_FAILED,
  };
};

export const contact = (user) => {
  return {
    type: CONTACT,
    payload: user
  };
};

export const contactSuccess = (user) => {
  return {
    type: CONTACT_SUCCESS,
    user
  };
};
export const contactFailed = () => {
  return {
    type: CONTACT_FAILED,
  };
};

export const Plans = (user) => {
  console.log(user,'userplan')
  return {
    type: PLANS,
    payload: user
  };
};

export const PlansSuccess = (user) => {
  return {
    type: PLANS_SUCCESS,
    user
  };
};
export const PlansFailed = () => {
  return {
    type: PLANS_FAILED,
  };
};


export const verified = (user) => {
  return {
    type: VERIFY,
    payload: user
  };
};
export const verifySuccess = (token) => {
  return {
    type: VERIFY_SUCCESS,
    token
  };
};
export const verifyFailed = () => {
  return {
    type: VERIFY_FAILED,
  };
};

export const verifiedLogin = (user) => {
  return {
    type: VERIFY_LOGIN,
    payload: user
  };
};
export const verifyLoginSuccess = (token) => {
  return {
    type: VERIFY_LOGIN_SUCCESS,
    token
  };
};
export const verifyLoginFailed = () => {
  return {
    type: VERIFY_LOGIN_FAILED,
  };
};

export const changePassword = (user) => {
  return {
    type: CHANGE_PASSWORD__REQUESTED,
    payload: user
  };
};
export const forgetPassword = (user) => {
  return {
    type: FORGOT_PASSWORD_REQUEST,
    payload: user
  };
};
export const changePasswordSuccess = (token) => {
  return {
    type: CHANGE_PASSWORD__SUCCESS,
    token
  };
};
export const changePasswordFailed = () => {
  return {
    type: CHANGE_PASSWORD__FAIELD,
  };
};

export const getUserProfile = (token) => {
  return {
    type: GET_USER_PROFILE,
    payload: token
  };
};
export const getUserProfileSuccess = (user) => {
  return {
    type: GET_USER_PROFILE_SUCCESS,
    user
  };
};
export const getUserProfileFailed = (message) => {
  return {
    type: GET_USER_PROFILE_FAILED,
    message
  };
};

export const updateProfile = (user) => {
  return {
    type: UPDATE_PROFILE,
    payload: user
  };
};
export const updateProfileSuccess = (token) => {
  return {
    type: UPDATE_PROFILE_SUCCESS,
    token
  };
};
export const updateProfileFailed = () => {
  return {
    type: UPDATE_PROFILE_FAILED,
  };
};

export const getProfile = (token) => {
  return {
    type: GET_PROFILE,
    payload: token
  };
};
export const getProfileSuccess = (profile) => {
  return {
    type: GET_PROFILE_SUCCESS,
    profile
  };
};
export const getProfileFailed = (message) => {
  return {
    type: GET_PROFILE_FAILED,
    message
  };
};

export const showAuthMessage = (message) => {
  return {
    type: SHOW_AUTH_MESSAGE,
    message
  };
};

export const hideAuthMessage = () => {
  return {
    type: HIDE_AUTH_MESSAGE,
  };
};

export const showLoading = () => {
  return {
    type: SHOW_LOADING,
  };
};
