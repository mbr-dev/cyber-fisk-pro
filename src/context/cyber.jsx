import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { apiSignIn } from "../lib/api";

const CyberContext = createContext();

function CyberProvider({children}){
  const [book, setbook] = useState({
    id:'',
    name:'Essentials 1'
  });
  const [selectLanguage, setSelectLanguage] = useState(0);
  const [notifications, setNotifications] = useState(3); // 0 success, 1 information, 2 attention, 3 error

  const navigate = useNavigate();

  function chooseLanguage(e) {
    const selectedOption = e.target.value

    if (selectedOption === "0") {
      setSelectLanguage(0);
    } else if (selectedOption === "1") {
      setSelectLanguage(1);
    } else if (selectedOption === "2") {
      setSelectLanguage(2);
    }
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

      if (data) {
        navigate("/home");
      }
    } catch (error) {
      console.log(error)
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