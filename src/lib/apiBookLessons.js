import axios from "axios";

export const apiBookLessons = axios.create({
  baseURL: "https://cyberhomolog.fisk.com.br:172/cyberfiskpro/api/Modulos/Lessons?idLivro=53"
})