import { ENDPOINTS } from "../shared/constant/endpoints";
import { instanceAxios } from "../shared/helper/instanceAxios";

export const getUsers = () =>
  instanceAxios({ method: "GET", url: ENDPOINTS.USERS });

export const getUserId = (id) =>
  instanceAxios({ method: "GET", url: ENDPOINTS.USERS_ID(id) });

export const addUser = (form) =>
  instanceAxios({ method: "POST", url: ENDPOINTS.USERS, data: form });

export const updateUser = (id, form) =>
  instanceAxios({ method: "PUT", url: ENDPOINTS.USERS_ID(id), data: form });

export const rmvUser = (id) =>
  instanceAxios({ method: "DELETE", url: ENDPOINTS.USERS_ID(id) });
