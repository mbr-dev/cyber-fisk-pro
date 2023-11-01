import { useEffect, useState } from "react";
import { HeaderText } from "../../components/HeaderText";
import { FooterBtnHome } from "../../components/FooterBtnHome";
import { LineSeparator } from "../../components/LineSeparator";
import { apiQAS } from "../../lib/api";
import Cookies from 'universal-cookie';

import GoldImg from "./images/Gold.svg";
import SilverImg from "./images/Silver.svg";
import RoboWD from "../../assets/RoboWD.png";

import { Container, Main, MainBottom, MainTop, ButtonRakingArea, ButtonNational, ButtonUnit, TextArea, CoinArea, LevelPosition, AvatarArea } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const Ranking = () => {

  const [data, setData] = useState(null);
  const [rafUser, setRafUser] = useState(null);

  const loadRank = async () =>{
    const cookies = new Cookies();
    setRafUser(cookies.get("raf"));
    await apiQAS.get(`/Rank/Ranking?tipo=all`)
    .then((resp) =>{
      if(resp.data.erro === null){
        setData(resp.data.dados);
      }
    })
  }

  useEffect(() =>{
    loadRank();
  },[]);

  return (
    <Container>
      <HeaderText title="Ranking" />

      <Main>
        <MainTop>
          <ButtonRakingArea>
            <ButtonNational $selected >National</ButtonNational>
            <ButtonUnit >Unit</ButtonUnit>
          </ButtonRakingArea>

          <CoinArea>
            <img src={GoldImg} className="gold" alt="" />
            <img src={SilverImg} alt="" />
            <img src={SilverImg} alt="" />
            <img src={SilverImg} alt="" />
            <img src={SilverImg} alt="" />
          </CoinArea>

          <TextArea>
            <h2>Gold Division</h2>
            <p>You are awesome!</p>
          </TextArea>
        </MainTop>

        <LineSeparator w="80%" bg={defaultTheme["gray-200"]} />
        <MainBottom>
          {data !== null ? data.map((x, index) =>{
            return(
              rafUser === x.raf ?
              <LevelPosition $selected>
                <p>{(index+1)}</p>
                <AvatarArea>
                  <img src={RoboWD} alt="Avatar" />
                </AvatarArea>
                <span>{x.raf}</span>
                <p>{x.xp} xp</p>
              </LevelPosition>
              :
              <LevelPosition >
                <p>{(index+1)}</p>
                <AvatarArea>
                  <img src={RoboWD} alt="Avatar" />
                </AvatarArea>
                <span>{x.raf}</span>
                <p>{x.xp} xp</p>
              </LevelPosition>
            )
          }) : null}
          {/* <LevelPosition $selected>
            <p>1</p>
            <AvatarArea>
              <img src={RoboWD} alt="Avatar" />
            </AvatarArea>
            <span>Camila Eduarda</span>
            <p>500 xp</p>
          </LevelPosition>

          <LevelPosition>
            <p>2</p>
            <AvatarArea>
              <img src={RoboWD} alt="Avatar" />
            </AvatarArea>
            <span>Camila Eduarda</span>
            <p>300 xp</p>
          </LevelPosition>

          <LevelPosition>
            <p>3</p>
            <AvatarArea>
              <img src={RoboWD} alt="Avatar" />
            </AvatarArea>
            <span>Camila Eduarda</span>
            <p>250 xp</p>
          </LevelPosition>

          <LevelPosition>
            <p>4</p>
            <AvatarArea>
              <img src={RoboWD} alt="Avatar" />
            </AvatarArea>
            <span>Camila Eduarda</span>
            <p>250 xp</p>
          </LevelPosition>

          <LevelPosition>
            <p>5</p>
            <AvatarArea>
              <img src={RoboWD} alt="Avatar" />
            </AvatarArea>
            <span>Camila Eduarda</span>
            <p>250 xp</p>
          </LevelPosition>

          <LevelPosition>
            <p>6</p>
            <AvatarArea>
              <img src={RoboWD} alt="Avatar" />
            </AvatarArea>
            <span>Camila Eduarda</span>
            <p>250 xp</p>
          </LevelPosition> */}

        </MainBottom>
        <LineSeparator w="80%" bg={defaultTheme["gray-200"]} />
      </Main>

      <FooterBtnHome />
    </Container>
  )
}