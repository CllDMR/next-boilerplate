import { EXAMPLE } from "../config/constants";
const { GET, POST, PATCH, DELETE } = EXAMPLE;

export const getOneAction = () => ({
  type: GET.ONE.SAGA
});

export const getAllAction = () => ({
  type: GET.ALL.SAGA
});

export const postAction = payload => ({
  type: POST.SAGA,
  payload
});

export const patchAction = () => ({
  type: PATCH.SAGA
});

export const deleteAction = () => ({
  type: DELETE.SAGA
});
