import { createContext, useState, useEffect } from "react";
import { apiSignIn } from "../lib/api";

const CyberContext = createContext();

function CyberProvider({children}){
  const [book, setbook] = useState({
    id:'53',
    name:'Essentials 1'
  });
  const [selectLanguage, setSelectLanguage] = useState(1);//0 portugues, 1 ingles, 2 espanhol
  const [notifications, setNotifications] = useState(3); // 0 success, 1 information, 2 attention, 3 error

  function chooseLanguage(item) {
    const selectedOption = item

    if (selectedOption === 0) {
      setSelectLanguage(0);
    } else if (selectedOption === 1) {
      setSelectLanguage(1);
    } else if (selectedOption === 2) {
      setSelectLanguage(2);
    }
  }

  function chooseNotification(value){
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

 /*  const signIn = async(user, password) => {
    try {
      const response = await fetch("https://homologsgf.fisk.com.br/SGFAPI/api/Auth/loginAppsProfessor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          key: "9Z#kvy88$LYZKb&",
          usuario: user,
          password: password
        })
      });
      const data = await response.json()
      console.log("data: ", data);
    } catch (error) {
      console.log(error)
    }
  } */

  const newBook = (data) => {
    setbook(data);
  }

  return(
    <CyberContext.Provider
      value={{
        book,
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

export { CyberProvider, CyberContext }