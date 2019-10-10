import { EXAMPLE } from "../config/constants";

export const getExampleOneAction = () => ({
  type: EXAMPLE.GET.ONE.SAGA
});

export const newExampleOneAction = payload => ({
  type: EXAMPLE.NEW.ONE.SAGA,
  payload
});
