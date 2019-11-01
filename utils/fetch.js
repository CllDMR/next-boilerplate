import fetch from "isomorphic-fetch";

import { Backend_Server_Url } from "../redux/config/constants";

export const _get = ({ path, token }) =>
  new Promise(async (resolve, reject) => {
    try {
      let options = { headers: {} };
      if (token) options.headers["Authorization"] = `Token ${token}`;
      const response = await fetch(`${Backend_Server_Url}${path}`, options);
      const responseData = await response.json();
      resolve([response.ok, responseData]);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });

export const _post = ({ path, token, ...data }) =>
  new Promise(async (resolve, reject) => {
    try {
      let options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      };
      if (token) options.headers["Authorization"] = `Token ${token}`;
      const response = await fetch(`${Backend_Server_Url}${path}`, options);
      const responseData = await response.json();
      resolve([response.ok, responseData]);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });

export const _patch = ({ path, token, ...data }) =>
  new Promise(async (resolve, reject) => {
    try {
      let options = {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      };
      if (token) options.headers["Authorization"] = `Token ${token}`;
      const response = await fetch(`${Backend_Server_Url}${path}`, options);
      const responseData = await response.json();
      resolve([response.ok, responseData]);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });

export const _delete = ({ path, token }) =>
  new Promise(async (resolve, reject) => {
    try {
      let options = {
        method: "DELETE",
        headers: {}
      };
      if (token) options.headers["Authorization"] = `Token ${token}`;
      const response = await fetch(`${Backend_Server_Url}${path}`, options);
      resolve(response.ok);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
