import {
  USERS_STATES,
  USERS_STATES_SUCCESS,
  USERS_STATES_FAILED,
} from "redux/constants/Auth";

const initState = {
  loading: false,
  user: [],
  error: "",
};

const UserStatePlan = (state = initState, action) => {
  console.log(action, "UserStatePlan");
  switch (action.type) {
    case USERS_STATES: {
      return {
        ...state,
        loading: true,
        user: action.user,
      };
    }

    case USERS_STATES_SUCCESS: {
      return {
        ...state,
        loading: false,
        user: action.user,
      };
    }
    case USERS_STATES_FAILED: {
      return {
        ...state,
        loading: false,
        err: action.error,
      };
    }
    default:
      return state;
  }
};

export default UserStatePlan;
