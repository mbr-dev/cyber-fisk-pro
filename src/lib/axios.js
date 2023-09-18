import axios from "axios";

export const api = axios.create({
  baseURL: "https://cyberhomolog.fisk.com.br:172/cyberfisk30/"
})