import axios from "axios";

export const api = axios.create({
  baseURL: "https://cyberhomolog.fisk.com.br:172/cyberfiskpro/api/"
});

export const apiSignIn = axios.create({
  baseURL: "https://homologsgf.fisk.com.br/SGFAPI/api/Auth/loginAppsProfessor"
});

/* 
  https://cyberhomolog.fisk.com.br:172/cyberfiskpro/api/SuperTaskAtividades/Retorno?id_livro=53&num_lesson=1&num_task=1
*/