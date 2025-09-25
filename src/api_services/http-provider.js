import axios from "axios";
import { API_URL, PUB_Q } from "@env"
import { getEncryptedValue, getToken, refreshAuthToken } from "../utils/functions";

export async function getApiRequestHeader(isFormData = false, url, method) {
  let tokenObj = await getToken();
  tokenObj = tokenObj?.length > 0 ? JSON.parse(tokenObj) : null;

  const cleanUrl = url.includes("?") ? url.split("?")[0] : url;
  const path = cleanUrl + method?.toUpperCase() + PUB_Q;
  const apiKey = await getEncryptedValue(path);

  if (tokenObj?.token) {
    const now = Date.now();

    if (now >= tokenObj.expiry_time) {
      // expired → refresh
      tokenObj = await refreshAuthToken();
    }

    if (tokenObj?.token) {
      return {
        Accept: "application/json",
        "Content-Type": isFormData
          ? "multipart/form-data"
          : "application/json",
        Authorization: `Bearer ${tokenObj.token}`,
      };
    }
  }

  // no token found, return only apiKey header
  return {
    Accept: "application/json",
    "Content-Type": isFormData ? "multipart/form-data" : "application/json",
    payload: apiKey,
  };
}


const instance = axios.create({
  baseURL: API_URL,
  timeout: 600000,
  withCredentials: false,
});

export async function updateHeaders(isFormData = false, url, method) {
  const header = await getApiRequestHeader(isFormData, url, method);
  instance.defaults.headers = header;
}

export async function request({
  method,
  url,
  data,
  headers,
  isFormData = false,
}) {
  if (headers === undefined) {
    await updateHeaders(isFormData, url, method);
  }
  const promise = instance[method](url, data);
  let response;
  try {
    response = await promise;
  } catch (error) {
    throw error.response;
  }

  return response;
}

export async function get(url, params) {
  const query = new URLSearchParams(params).toString();
  if (query) {
    url += (url.includes("?") ? "&" : "?") + query;
  }
  return request({ method: "get", url, });
}

export async function del(url, params) {
  return request({ method: "delete", url, data: { params }, });
}

export async function post(url, data, isFormData = false) {
  return request({ method: "post", url, data, isFormData, });
}

export async function put(url, data, isFormData = false) {
  return request({ method: "put", url, data, isFormData });
}
export async function patch(url, data, isFormData = false) {
  return request({ method: "patch", url, data, isFormData, });
}
export const independentRequest = async (url, method, data) => {
  const promise = axios[method](url, data);
  let response;
  try {
    response = await promise;
  } catch (error) {
    throw error.response;
  }
  const payload = response;
  return payload;
};
