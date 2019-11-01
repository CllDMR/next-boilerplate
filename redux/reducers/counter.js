import { COUNTER } from "../config/constants";

const initialState = 0;

export default (state = initialState, action) => {
  switch (action.type) {
    case COUNTER.UP:
      return state + 1;

    case COUNTER.DOWN:
      return state - 1;

    case COUNTER.RESET:
      return 0;

    case COUNTER.SET:
      return action.payload.value;

    default:
      return state;
  }
};
