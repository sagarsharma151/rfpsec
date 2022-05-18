import { CHANGE_PROFILE_PASSWORD, CHANGE_PROFILE_PASSWORD_FAILED, CHANGE_PROFILE_PASSWORD_SUCCESS, DELETE_FAILED, DELETE_REQUEST, DELETE_SUCCESS, PROFILE_ADD_USER, PROFILE_ADD_USER_FAILED, PROFILE_ADD_USER_SUCCESS, 
    PROFILE_GET_USER, PROFILE_GET_USER_FAILED, PROFILE_GET_USER_SUCCESS, UPDATE_ADDUSER_PROFILE, UPDATE_ADDUSER_PROFILE_FAILED, UPDATE_ADDUSER_PROFILE_SUCCESS, UPLOAD_IMAGE, UPLOAD_IMAGE_FAILED, UPLOAD_IMAGE_SUCCESS } 
    from "redux/constants/Auth"

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


export const profileGetUsers = (user) =>{
  console.log(user,'usersssssssssssssss')
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