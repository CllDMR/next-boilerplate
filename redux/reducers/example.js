import { EXAMPLE } from "../config/constants";

const initialState = "Exp";

export default (state = initialState, action) => {
  switch (action.type) {
    case EXAMPLE.GET.ONE.REDUCER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
