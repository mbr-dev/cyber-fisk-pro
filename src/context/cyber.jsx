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
  const [acessorios, setAcessorios] = useState({
    oculos: null,
    chapeu: null
  });
  const [cabeca, setCabeca] = useState("Cabeca_1");
  const [face, setFace] = useState("face_1");
  const [bracos, setBracos] = useState("braco_1");
  const [tronco, setTronco] = useState("tronco_3_tradicional");
  const [pernas, setPernas] = useState("perna_1_liso");
  const [pets, setPet] = useState(null);

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

  const newCabeca = (item) => {
    setCabeca(item);
  }

  const newAcessorio = (item) => {
    const itemOculos = item.toLowerCase();
    if (itemOculos.includes("oculos")) {
      setAcessorios({...acessorios, oculos: item});
    } else {
      setAcessorios({...acessorios, chapeu: item});
    }
  }

  const newFace = (item) => {
    setFace(item);
  }

  const newBracos = (item) => {
    setBracos(item);
  }

  const newTronco = (item) => {
    setTronco(item);
  }

  const newPernas = (item) => {
    setPernas(item);
  }

  const newPet = (item) => {
    setPet(item);
  }

  return(
    <CyberContext.Provider
      value={{
        book,
        acessorios,
        cabeca,
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
        newCabeca,
        newAcessorio,
        newFace,
        newBracos,
        newTronco,
        newPernas,
        newPet,
      }}
    >
      {children}
    </CyberContext.Provider>
  )
}