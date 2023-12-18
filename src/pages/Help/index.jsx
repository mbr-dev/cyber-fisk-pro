import { useState, useContext } from "react";

import { HeaderText } from "../../components/HeaderText";

import { CyberContext } from "../../context/cyber";
import { translateHelp } from "../../utils/Translate";
import { AreaFooterFullBtn } from "../../components/AreaFooterFullBtn";

import maisImg from "./images/mais.png";
import menosImg from "./images/menos.png";

import { Container, Main, Items, Top, InsideRight, Left, Right, TopRight, MainRight, InsideLeft } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const Help = () => {
  const { selectLanguage } = useContext(CyberContext);
  const [openModal, setOpenModal] = useState("XPRanking");

  const handleItemClick = (modalName) => {
    setOpenModal((modal) => (modal === modalName ? null : modalName));
  };

  return (
    <Container>
      <HeaderText title={selectLanguage === 0 ? "Ajuda" : selectLanguage === 1 ? "Help" : "Ayuda"} />

      <Main>
        <Left>
          <Items onClick={() => handleItemClick("XPRanking")} style={{
            borderColor: openModal === "XPRanking" ? defaultTheme["red-200"] : "",
          }}>
            <Top>
              <h2>{selectLanguage === 0 ? translateHelp[0].title[0].ranking[0] : selectLanguage === 1 ? translateHelp[0].title[0].ranking[1] : translateHelp[0].title[0].ranking[2]}</h2>

              {openModal !== "XPRanking" ? 
                <img src={maisImg} alt="ícone mais" />
                :
                <img src={menosImg} alt="ícone menos" />}
            </Top>

            {openModal === "XPRanking" &&
              <InsideLeft>
                <p>{selectLanguage === 0 ? translateHelp[1].ranking[0] : selectLanguage === 1 ? translateHelp[1].ranking[1] : translateHelp[1].ranking[2]}</p>
              </InsideLeft>
            }
          </Items>

          <Items onClick={() => handleItemClick("FiskDollars")} style={{
            borderColor: openModal === "FiskDollars" ? defaultTheme["red-200"] : "",
          }}>
            <Top>
              <h2>{selectLanguage === 0 ? translateHelp[0].title[0].dollar[0] : selectLanguage === 1 ? translateHelp[0].title[0].dollar[1] : translateHelp[0].title[0].dollar[2]}</h2>

              {openModal !== "FiskDollars" ? 
                <img src={maisImg} alt="ícone mais" />
                :
                <img src={menosImg} alt="ícone menos" />}
            </Top>

            {openModal === "FiskDollars" &&
              <InsideLeft>
                <p>{selectLanguage === 0 ? translateHelp[2].dollars[0].text : selectLanguage === 1 ? translateHelp[2].dollars[1].text : translateHelp[2].dollars[2].text}</p>
                <p>{selectLanguage === 0 ? translateHelp[2].dollars[0].one[0] : selectLanguage === 1 ? translateHelp[2].dollars[1].one[0] : translateHelp[2].dollars[2].one[0]}</p>
                <p style={{ paddingLeft: "0.375rem"}}>{selectLanguage === 0 ? translateHelp[2].dollars[0].one[1] : selectLanguage === 1 ? translateHelp[2].dollars[1].one[1] : translateHelp[2].dollars[2].one[1]}</p>
                <p style={{ paddingLeft: "0.375rem"}}>{selectLanguage === 0 ? translateHelp[2].dollars[0].one[2] : selectLanguage === 1 ? translateHelp[2].dollars[1].one[2] : translateHelp[2].dollars[2].one[2]}</p>
                <p style={{ paddingLeft: "0.375rem"}}>{selectLanguage === 0 ? translateHelp[2].dollars[0].one[3] : selectLanguage === 1 ? translateHelp[2].dollars[1].one[3] : translateHelp[2].dollars[2].one[3]}</p>
                <p style={{ paddingLeft: "0.375rem"}}>{selectLanguage === 0 ? translateHelp[2].dollars[0].one[4] : selectLanguage === 1 ? translateHelp[2].dollars[1].one[4] : translateHelp[2].dollars[2].one[4]}</p>

                <p>{selectLanguage === 0 ? translateHelp[2].dollars[0].two[0] : selectLanguage === 1 ? translateHelp[2].dollars[1].two[0] : translateHelp[2].dollars[2].two[0]}</p>
                <p style={{ paddingLeft: "0.375rem"}}>{selectLanguage === 0 ? translateHelp[2].dollars[0].two[1] : selectLanguage === 1 ? translateHelp[2].dollars[1].two[1] : translateHelp[2].dollars[2].two[1]}</p>
                <p style={{ paddingLeft: "0.375rem"}}>{selectLanguage === 0 ? translateHelp[2].dollars[0].two[2] : selectLanguage === 1 ? translateHelp[2].dollars[1].two[2] : translateHelp[2].dollars[2].two[2]}</p>
                <p style={{ paddingLeft: "0.375rem"}}>{selectLanguage === 0 ? translateHelp[2].dollars[0].two[3] : selectLanguage === 1 ? translateHelp[2].dollars[1].two[3] : translateHelp[2].dollars[2].two[3]}</p>
                <p style={{ paddingLeft: "0.375rem"}}>{selectLanguage === 0 ? translateHelp[2].dollars[0].two[4] : selectLanguage === 1 ? translateHelp[2].dollars[1].two[4] : translateHelp[2].dollars[2].two[4]}</p>
                <p style={{ paddingLeft: "0.375rem"}}>{selectLanguage === 0 ? translateHelp[2].dollars[0].two[5] : selectLanguage === 1 ? translateHelp[2].dollars[1].two[5] : translateHelp[2].dollars[2].two[5]}</p>
                <p>{selectLanguage === 0 ? translateHelp[2].dollars[0].two[6] : selectLanguage === 1 ? translateHelp[2].dollars[1].two[6] : translateHelp[2].dollars[2].two[6]}</p>

                <p>{selectLanguage === 0 ? translateHelp[2].dollars[0].three : selectLanguage === 1 ? translateHelp[2].dollars[1].three : translateHelp[2].dollars[2].three}</p>
                <p>{selectLanguage === 0 ? translateHelp[2].dollars[0].four : selectLanguage === 1 ? translateHelp[2].dollars[1].four : translateHelp[2].dollars[2].four}</p>
              </InsideLeft>
            }
          </Items>

          <Items onClick={() => handleItemClick("DailyGame")} style={{
            borderColor: openModal === "DailyGame" ? defaultTheme["red-200"] : "",
          }}>
            <Top>
              <h2>{selectLanguage === 0 ? translateHelp[0].title[0].game[0] : selectLanguage === 1 ? translateHelp[0].title[0].game[1] : translateHelp[0].title[0].game[2]}</h2>

              {openModal !== "DailyGame" ? 
                <img src={maisImg} alt="ícone mais" />
                :
                <img src={menosImg} alt="ícone menos" />}
            </Top>

            {openModal === "DailyGame" &&
              <InsideLeft>
                <p>{selectLanguage === 0 ? translateHelp[3].game[0] : selectLanguage === 1 ? translateHelp[3].game[1] : translateHelp[3].game[2]}</p>
              </InsideLeft>
            }
          </Items>

          <Items onClick={() => handleItemClick("SpinWheel")} style={{
            borderColor: openModal === "SpinWheel" ? defaultTheme["red-200"] : "",
          }}>
            <Top>
              <h2>{selectLanguage === 0 ? translateHelp[0].title[0].wheel[0] : selectLanguage === 1 ? translateHelp[0].title[0].wheel[1] : translateHelp[0].title[0].wheel[2]}</h2>

              {openModal !== "SpinWheel" ? 
                <img src={maisImg} alt="ícone mais" />
                :
                <img src={menosImg} alt="ícone menos" />}
            </Top>

            {openModal === "SpinWheel" &&
              <InsideLeft>
                <p>{selectLanguage === 0 ? translateHelp[4].wheel[0] : selectLanguage === 1 ? translateHelp[4].wheel[1] : translateHelp[4].wheel[2]}</p>
              </InsideLeft>
            }
          </Items>
        </Left>
       
        <Right style={{
          borderColor: (openModal === "XPRanking" || openModal === "FiskDollars" || openModal === "DailyGame" || openModal === "SpinWheel") && defaultTheme["red-200"],
          overflowY: openModal ? "scroll" : ""
        }}>
          <TopRight>
            {openModal === "XPRanking" ?
              <h2>XP For Ranking</h2> : openModal === "FiskDollars" ?
              <h2>Fisk Dollars</h2> : openModal === "DailyGame" ?
              <h2>Daily Game</h2> : openModal === "SpinWheel" ?
              <h2>Spin The Wheel</h2> : ""
            }
            {(openModal === "XPRanking" || openModal === "FiskDollars" || openModal === "DailyGame" || openModal === "SpinWheel") && <img src={menosImg} alt="ícone menos" />}
          </TopRight>

          <MainRight>
            {openModal === "XPRanking" && 
              <InsideRight>
                <p>{selectLanguage === 0 ? translateHelp[1].ranking[0] : selectLanguage === 1 ? translateHelp[1].ranking[1] : translateHelp[1].ranking[2]}</p>
              </InsideRight>
            }
            {openModal === "FiskDollars" && 
              <InsideRight>
                <p>{selectLanguage === 0 ? translateHelp[2].dollars[0].text : selectLanguage === 1 ? translateHelp[2].dollars[1].text : translateHelp[2].dollars[2].text}</p>
                <p>{selectLanguage === 0 ? translateHelp[2].dollars[0].one[0] : selectLanguage === 1 ? translateHelp[2].dollars[1].one[0] : translateHelp[2].dollars[2].one[0]}</p>
                <p style={{ paddingLeft: "0.375rem"}}>{selectLanguage === 0 ? translateHelp[2].dollars[0].one[1] : selectLanguage === 1 ? translateHelp[2].dollars[1].one[1] : translateHelp[2].dollars[2].one[1]}</p>
                <p style={{ paddingLeft: "0.375rem"}}>{selectLanguage === 0 ? translateHelp[2].dollars[0].one[2] : selectLanguage === 1 ? translateHelp[2].dollars[1].one[2] : translateHelp[2].dollars[2].one[2]}</p>
                <p style={{ paddingLeft: "0.375rem"}}>{selectLanguage === 0 ? translateHelp[2].dollars[0].one[3] : selectLanguage === 1 ? translateHelp[2].dollars[1].one[3] : translateHelp[2].dollars[2].one[3]}</p>
                <p style={{ paddingLeft: "0.375rem"}}>{selectLanguage === 0 ? translateHelp[2].dollars[0].one[4] : selectLanguage === 1 ? translateHelp[2].dollars[1].one[4] : translateHelp[2].dollars[2].one[4]}</p>

                <p>{selectLanguage === 0 ? translateHelp[2].dollars[0].two[0] : selectLanguage === 1 ? translateHelp[2].dollars[1].two[0] : translateHelp[2].dollars[2].two[0]}</p>
                <p style={{ paddingLeft: "0.375rem"}}>{selectLanguage === 0 ? translateHelp[2].dollars[0].two[1] : selectLanguage === 1 ? translateHelp[2].dollars[1].two[1] : translateHelp[2].dollars[2].two[1]}</p>
                <p style={{ paddingLeft: "0.375rem"}}>{selectLanguage === 0 ? translateHelp[2].dollars[0].two[2] : selectLanguage === 1 ? translateHelp[2].dollars[1].two[2] : translateHelp[2].dollars[2].two[2]}</p>
                <p style={{ paddingLeft: "0.375rem"}}>{selectLanguage === 0 ? translateHelp[2].dollars[0].two[3] : selectLanguage === 1 ? translateHelp[2].dollars[1].two[3] : translateHelp[2].dollars[2].two[3]}</p>
                <p style={{ paddingLeft: "0.375rem"}}>{selectLanguage === 0 ? translateHelp[2].dollars[0].two[4] : selectLanguage === 1 ? translateHelp[2].dollars[1].two[4] : translateHelp[2].dollars[2].two[4]}</p>
                <p style={{ paddingLeft: "0.375rem"}}>{selectLanguage === 0 ? translateHelp[2].dollars[0].two[5] : selectLanguage === 1 ? translateHelp[2].dollars[1].two[5] : translateHelp[2].dollars[2].two[5]}</p>
                <p>{selectLanguage === 0 ? translateHelp[2].dollars[0].two[6] : selectLanguage === 1 ? translateHelp[2].dollars[1].two[6] : translateHelp[2].dollars[2].two[6]}</p>

                <p>{selectLanguage === 0 ? translateHelp[2].dollars[0].three : selectLanguage === 1 ? translateHelp[2].dollars[1].three : translateHelp[2].dollars[2].three}</p>
                <p>{selectLanguage === 0 ? translateHelp[2].dollars[0].four : selectLanguage === 1 ? translateHelp[2].dollars[1].four : translateHelp[2].dollars[2].four}</p>
              </InsideRight>
            }
            {openModal === "DailyGame" && 
              <InsideRight>
                <p>{selectLanguage === 0 ? translateHelp[3].game[0] : selectLanguage === 1 ? translateHelp[3].game[1] : translateHelp[3].game[2]}</p>
              </InsideRight>
            }
            {openModal === "SpinWheel" && 
              <InsideRight>
                <p>{selectLanguage === 0 ? translateHelp[4].wheel[0] : selectLanguage === 1 ? translateHelp[4].wheel[1] : translateHelp[4].wheel[2]}</p>
              </InsideRight>
            }
          </MainRight>
        </Right>
      </Main>

      <AreaFooterFullBtn />
    </Container>
  )
}