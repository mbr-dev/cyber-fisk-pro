import React, {useContext} from "react";
import Content from "./style";
import { CyberContext } from "../../context/cyber";
import { BtnMenu } from "../btnMenu";
import { BtnClose } from "../btnClose";

export const TopMenu = (props) => {
  const {book} = useContext(CyberContext);

  const menu = () => {
    //tipo 0 = botoes menu, fechar e descricao centralizada
    if(props.menu === '0'){
      return(
        <Content>
          <div className="boxStep">
            <BtnMenu />
            <label className="title">{book.name}</label>
            <BtnClose />
          </div>
        </Content>
      )
    }
  }

  return(
    <>
      {menu()}
    </>
  )
}