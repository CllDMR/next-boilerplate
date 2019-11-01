export const Backend_Server_Url =
  process.env.NODE_ENV == "development"
    ? process.env.backend_local_url
    : process.env.backend_prod_url;

export const EXAMPLE = {
  GET: {
    ALL: { SAGA: "EXAMPLE_GET_ALL_SAGA", REDUCER: "EXAMPLE_GET_ALL_REDUCER" },
    ONE: { SAGA: "EXAMPLE_GET_ONE_SAGA", REDUCER: "EXAMPLE_GET_ONE_REDUCER" }
  },
  POST: { SAGA: "EXAMPLE_POST_SAGA", REDUCER: "EXAMPLE_POST_REDUCER" },
  PATCH: {
    SAGA: "EXAMPLE_PATCH_SAGA",
    REDUCER: "EXAMPLE_PATCH_REDUCER"
  },
  DELETE: {
    SAGA: "EXAMPLE_DELETE_SAGA",
    REDUCER: "EXAMPLE_DELETE_REDUCER"
  }
};

export const AUTH = {
  SIGNIN: { SAGA: "AUTH_SIGNIN_SAGA", REDUCER: "AUTH_SIGNIN_REDUCER" },
  SIGNUP: { SAGA: "AUTH_SIGNUP_SAGA", REDUCER: "AUTH_SIGNUP_REDUCER" }
};

export const COUNTER = {
  UP: "COUNTER_UP",
  DOWN: "COUNTER_DOWN",
  RESET: "COUNTER_RESET",
  SET: "COUNTER_SET"
};
