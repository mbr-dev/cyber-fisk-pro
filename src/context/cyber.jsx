import React, {createContext, useState} from 'react';

const CyberContext = createContext();

function CyberProvider({children}){
  const [book, setbook] = useState({
    id:'',
    name:'Essentials 1'
  });
  const [selectLanguage, setSelectLanguage] = useState(0);
  const [selectLanguageHome, setSelectLanguageHome] = useState(0);
  const [selectLanguageBooks, setSelectLanguageBooks] = useState(0);

  function chooseLanguage(e) {
    const selectedOption = e.target.value

    if (selectedOption === "0") {
      setSelectLanguage(0)
      setSelectLanguageHome(0)
      setSelectLanguageBooks(0)
    } else if (selectedOption === "1") {
      setSelectLanguage(1)
      setSelectLanguageHome(1)
      setSelectLanguageBooks(1)
    } else if (selectedOption === "2") {
      setSelectLanguage(2)
      setSelectLanguageHome(2)
      setSelectLanguageBooks(2)
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
        selectLanguageHome,
        selectLanguageBooks,
        chooseLanguage,
      }}
    >
      {children}
    </CyberContext.Provider>
  )
}

export { CyberProvider, CyberContext }