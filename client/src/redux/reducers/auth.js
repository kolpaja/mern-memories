import userTypes from "../constants/userTypes";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case userTypes.AUTH:
      // console.log("auth reducer: ", action?.data)
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }))
      return { ...state, authData: action?.data }
    case userTypes.LOGOUT:
      localStorage.clear();
      return { ...state, authData: null }
    default:
      return state;
  }
};

export default authReducer