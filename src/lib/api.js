import axios from "axios";

export const api = axios.create({
  baseURL: "https://cyberhomolog.fisk.com.br:172/cyberfiskpro/api/CyberProAtividades/"
});

export const apiSignIn = axios.create({
  baseURL: "https://homologsgf.fisk.com.br/SGFAPI/api/Auth/loginAppsProfessor"
});