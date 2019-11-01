import { _get, _post, _patch, _delete } from "../../utils/fetch";

export const getAllAPI = async ({ token }) =>
  await _get({ path: "/examples", token });

export const getOneAPI = async ({ token, id }) =>
  await _get({ path: `/examples/${id}`, token });

export const postAPI = async ({ token, ...data }) =>
  await _post({ path: "/examples", token, ...data });

export const patchAPI = async ({ token, id, ...data }) =>
  await _patch({ path: `/examples/${id}`, token, ...data });

export const deleteAPI = async ({ token, id }) =>
  await _delete({ path: `/examples/${id}`, token });
