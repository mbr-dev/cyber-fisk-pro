import React, {createContext, useState} from 'react';

const CyberContext = createContext();

function CyberProvider({children}){
  const [book, setbook] = useState({
    id:'',
    name:'Essentials 1'
  });

  const newBook = (data) => {
    setbook(data);
  }

  return(
    <CyberContext.Provider
      value={{
        book,
        newBook,
      }}
    >
      {children}
    </CyberContext.Provider>
  )
}

export {CyberProvider, CyberContext}