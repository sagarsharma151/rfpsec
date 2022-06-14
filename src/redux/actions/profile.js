import {  SIGNUP_DATA,
  SIGNUP_DATA_SUCCESS,
  SIGNUP_DATA_FAILED,USERS_STATES,USERS_STATES_SUCCESS,USERS_STATES_FAILED,SUBSCRIPTION_PLAN,SUBSCRIPTION_PLAN_SUCCESS,SUBSCRIPTION_PLAN_FAILED,STATE_DEATILS,STATE_DEATILS_SUCCESS,STATE_DEATILS_FAILED, CHANGE_PROFILE_PASSWORD, CHANGE_PROFILE_PASSWORD_FAILED, CHANGE_PROFILE_PASSWORD_SUCCESS, DELETE_FAILED, DELETE_REQUEST, DELETE_SUCCESS, PROFILE_ADD_USER, PROFILE_ADD_USER_FAILED, PROFILE_ADD_USER_SUCCESS, 
    PROFILE_GET_USER, PROFILE_GET_USER_FAILED, PROFILE_GET_USER_SUCCESS, UPDATE_ADDUSER_PROFILE, UPDATE_ADDUSER_PROFILE_FAILED, UPDATE_ADDUSER_PROFILE_SUCCESS, UPLOAD_IMAGE, UPLOAD_IMAGE_FAILED, UPLOAD_IMAGE_SUCCESS } 
    from "redux/constants/Auth"

    export const UserState = (user) =>{
        return{
        type: USERS_STATES,
        payload: user
    };
    };
    export const UserStateSuccess = (user) =>{
        return{
        type: USERS_STATES_SUCCESS,
        user
    };
    };
    
    export const UserStateFaild = (message) =>{
        return{
        type: USERS_STATES_FAILED,
        message
    };
    };
export const profileUserAdd = (user) =>{
    return{
    type: PROFILE_ADD_USER,
    payload: user
};
};
export const profileUserAddSuccess = (token) =>{
    return{
    type: PROFILE_ADD_USER_SUCCESS,
    token
};
};
export const profileUserAddFailed = (message) =>{
    return{
    type: PROFILE_ADD_USER_FAILED,
    message
};
};



export const StateDetails = (user) =>{
    return{
    type: STATE_DEATILS,
    payload: user
};
};
export const StateDetailsSuccess = (user) =>{
    return{
    type: STATE_DEATILS_SUCCESS,
    user
};
};

export const StateDetailsFaild = (message) =>{
    return{
    type: STATE_DEATILS_FAILED,
    message
};
};
export const SignUpData = (user) => {
  console.log(user,'useruseruser')
  return {
    type: SIGNUP_DATA,
    payload: user
  };
};

export const SignUpDataSuccess = (user) => {
  return {
    type: SIGNUP_DATA_SUCCESS,
    user
  };
};
export const SignUpDataFailed = (message) => {
  return {
    type: SIGNUP_DATA_FAILED,
    message
  };
};

export const profileGetUsers = (user) =>{
    return{
    type: PROFILE_GET_USER,
    payload: user
};
};

export const profileGetUsersSuccess = (user) =>{
    return{
    type: PROFILE_GET_USER_SUCCESS,
    user
};
};
export const profileGetUsersFailed = (message) =>{
    return{
    type: PROFILE_GET_USER_FAILED,
    message
};
};


export const ListOfSubscriptionPlan = (user) =>{
    return{
    type: SUBSCRIPTION_PLAN,
    payload: user
};
};

export const ListOfSubscriptionPlanSuccess = (user) =>{
    return{
    type: SUBSCRIPTION_PLAN_SUCCESS,
    user
};
};
export const ListOfSubscriptionPlanFailed = (message) =>{
    return{
    type: SUBSCRIPTION_PLAN_FAILED,
    message
};
};



export const updateAddProfile = (user) => {
    return {
      type: UPDATE_ADDUSER_PROFILE,
      payload: user
    };
  };
  export const updateAddProfileSuccess = (user) => {
    return {
      type: UPDATE_ADDUSER_PROFILE_SUCCESS,
      user
    };
  };
  export const updateAddProfileFailed = (message) => {
    return {
      type: UPDATE_ADDUSER_PROFILE_FAILED,
      message
    };
  };

  export const deleteUsers = (id) => {
    return {
      type: DELETE_REQUEST,
      payload: id
    };
  };
  export const deleteUsersSuccess = (id) => {
    return {
      type: DELETE_SUCCESS,
      id
    };
  };
  export const deleteUsersFailed = (message) => {
    return {
      type: DELETE_FAILED,
      message
    };
  };

  export const changeProfilePassword = (user) => {
    return {
      type: CHANGE_PROFILE_PASSWORD,
      payload: user
    };
  };
  export const changeProfilePasswordSuccess = (token) => {
    return {
      type: CHANGE_PROFILE_PASSWORD_SUCCESS,
      token
    };
  };
  export const changeProfilePasswordFailed = () => {
    return {
      type: CHANGE_PROFILE_PASSWORD_FAILED,
    };
  };

  export const uploadImage = (image) => {
    console.log('action', image);
    return {
      type: UPLOAD_IMAGE,
      payload: image
    };
  };
  export const uploadImageSuccess = (image) => {
    return {
      type: UPLOAD_IMAGE_SUCCESS,
      image
    };
  };
  export const uploadImageFailed = (message) => {
    return {
      type: UPLOAD_IMAGE_FAILED,
      message
    };
  };