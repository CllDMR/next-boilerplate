import fetch from "isomorphic-fetch";

import { Backend_Server_Url } from "../config/constants";

export const getExampleApi = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(Backend_Server_Url + "/examples");
      resolve(response.json());
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });

export const newExampleApi = data =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(Backend_Server_Url + "/examples", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      resolve(response.json());
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
