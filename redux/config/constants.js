export const EXAMPLE = {
  GET: {
    ALL: { REDUCER: "EXAMPLE_GET_ALL_REDUCER", SAGA: "EXAMPLE_GET_ALL_SAGA" },
    ONE: { REDUCER: "EXAMPLE_GET_ONE_REDUCER", SAGA: "EXAMPLE_GET_ONE_SAGA" }
  },
  NEW: {
    ARRAY: {
      REDUCER: "EXAMPLE_NEW_ARRAY_REDUCER",
      SAGA: "EXAMPLE_NEW_ARRAY_SAGA"
    },
    ONE: { REDUCER: "EXAMPLE_NEW_ONE_REDUCER", SAGA: "EXAMPLE_NEW_ONE_SAGA" }
  }
};

export const Backend_Server_Urls = {
  local: process.env.back_local_url,
  dev: process.env.back_dev_url,
  prod: process.env.back_prod_url
};

export const Backend_Server_Url = Backend_Server_Urls[process.env.stage];
