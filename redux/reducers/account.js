import { AUTH } from "../config/constants";
const { SIGNIN, SIGNUP } = AUTH;

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN.REDUCER:
      return { ...action.payload };

    case SIGNUP.REDUCER:
      return { ...action.payload };

    default:
      return state;
  }
};
