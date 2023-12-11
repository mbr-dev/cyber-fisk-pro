import axios from "axios";

export const api = axios.create({
  baseURL: "https://cyberhomolog.fisk.com.br:172/cyberfiskpro/api/"
});

export const apiQAS = axios.create({
  baseURL: "https://cyberhomolog.fisk.com.br:172/cyberfiskpro/api/"
});

export const apiSignIn = axios.create({
  baseURL: "https://homologsgf.fisk.com.br/SGFAPI/api/Auth/loginAppsProfessor"
});

export const apiTest = axios.create({
  baseURL: "http://localhost:3333"
});