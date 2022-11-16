import axios from "axios";

import env from "../config/environment";
const API = `${env.API}`;

// loginRequest, authRequest?
const encodedRequest = axios.create({
  baseURL: API,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    accept: "application/json",
  }
});

// Rename to apiJsonRequest?
const apiRequest = axios.create({
  baseURL: API,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  }
});

// This is used for profile only currently.
const apiFormRequest = axios.create({
  baseURL: API,
  headers: {
    "Content-Type": "multipart/form-data",
    accept: "application/json",
  }
});

export {
  encodedRequest,
  
  apiRequest,
  apiFormRequest,
};