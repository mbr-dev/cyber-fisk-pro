import React, {createContext, useState} from 'react';

const CyberContext = createContext();

function CyberProvider({children}){
  const [book, setbook] = useState({
    id:'',
    name:'Essentials 1'
  });
  const [selectLanguage, setSelectLanguage] = useState(0);


  function chooseLanguage(e) {
    const selectedOption = e.target.value

    if (selectedOption === "0") {
      setSelectLanguage(0)
    } else if (selectedOption === "1") {
      setSelectLanguage(1)
    } else if (selectedOption === "2") {
      setSelectLanguage(2)
    }
  }

  const newBook = (data) => {
    setbook(data);
  }

  return(
    <CyberContext.Provider
      value={{
        book,
        newBook,
        selectLanguage,
        chooseLanguage,
      }}
    >
      {children}
    </CyberContext.Provider>
  )
}

export { CyberProvider, CyberContext }