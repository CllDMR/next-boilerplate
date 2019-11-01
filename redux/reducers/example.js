import _ from "lodash";
import { EXAMPLE } from "../config/constants";
const { GET, POST, PATCH, DELETE } = EXAMPLE;

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET.ALL.REDUCER:
      return [...action.payload];

    case GET.ONE.REDUCER:
      var index = _.findIndex(state, { id: action.payload.id });
      if (index != -1) state.splice(index, 1, action.payload);
      else state.push(action.payload);
      return [...state];

    case POST.REDUCER:
      return [...state, action.payload];

    case PATCH.REDUCER:
      var index = _.findIndex(state, { id: action.payload.id });
      if (index != -1) state.splice(index, 1, action.payload);
      return [...state];

    case DELETE.REDUCER:
      return [...state.filter(e => e.id != action.payload.id)];

    default:
      return state;
  }
};
