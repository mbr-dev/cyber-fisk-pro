import { createContext, useState, useEffect } from "react";
import { apiSignIn } from "../lib/api";

export const CyberContext = createContext();

export function CyberProvider({children}) {
  const [book, setBook] = useState({
    id:"53",
    name:"Essentials 1"
  });
  const [selectLanguage, setSelectLanguage] = useState(1);//0 portugues, 1 ingles, 2 espanhol
  const [notifications, setNotifications] = useState(3); // 0 success, 1 information, 2 attention, 3 error
  const [acessorios, setAcessorios] = useState("Headset_laranja");
  const [cabeca, setCabeca] = useState("cabeca_3");
  const [oculos, setOculos] = useState("Oculos_escuro");
  const [face, setFace] = useState("Expressao_1");
  const [bracos, setBracos] = useState("Bracos_4_com_Espada_Verde_Laranja");
  const [tronco, setTronco] = useState("Tronco_Branco_modelo_1_Com_Mochila_Vermelho");
  const [pernas, setPernas] = useState("Pernas_4_Azul");
  const [pets, setPet] = useState("Robotdog");

  const chooseLanguage = (item) => {
    const selectedOption = item

    if (selectedOption === 0) {
      setSelectLanguage(0);
    } else if (selectedOption === 1) {
      setSelectLanguage(1);
    } else if (selectedOption === 2) {
      setSelectLanguage(2);
    }
  }

  const chooseNotification = (value) => {
    setNotifications(value);
  }

  const signIn = async(user, password) => {
    try {
      const { data } = await apiSignIn.post("",
        {
          key: "9Z#kvy88$LYZKb&",
          usuario: user,
          password: password
        },
        {
          headers: { "Content-Type": "application/json" }
        }
      );
      console.log('DATA LOGIN ::: ', data);
      let respData = '';
      if (data) {
        if(!data.succeeded){
          respData = data;
          return respData;
        }else{       
          respData = data;
          return data;
        }
      }else{
        respData = {message:'Erro ao comunicar com o servidor de login!'};
        return respData;
      }
    } catch (error) {
      return error;
    }
  }

  const newBook = (data) => {
    setBook(data);
  }

  return(
    <CyberContext.Provider
      value={{
        book,
        acessorios,
        cabeca,
        oculos,
        face,
        bracos,
        tronco,
        pernas,
        pets,
        notifications,
        chooseNotification,
        selectLanguage,
        signIn,
        newBook,
        chooseLanguage,
      }}
    >
      {children}
    </CyberContext.Provider>
  )
}