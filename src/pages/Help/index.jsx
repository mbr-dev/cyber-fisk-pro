import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { HeaderText } from "../../components/HeaderText";
import { ButtonHome } from "../../components/ButtonHome";

import maisImg from "./images/mais.png";
import menosImg from "./images/menos.png";

import { Container, Main, Items, Top, Inside, Left, Right, TopRight, MainRight, AreaFooter } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const Help = () => {
  const [openModal, setOpenModal] = useState(null);

  const navigate = useNavigate();

  const isDesktop = window.matchMedia("(min-width: 480px)").matches;

  const handleItemClick = (modalName) => {
    setOpenModal((modal) => (modal === modalName ? null : modalName));
  };

  const handleGoHome = () => {
    navigate("/Home");
  }

  return (
    <Container>
      <HeaderText title="Help" />

      <Main>
        <Left>
          <Items onClick={() => handleItemClick("XPRanking")} style={{
            borderColor: openModal === "XPRanking" && !isDesktop ? defaultTheme["red-200"] : "",
            height: openModal === "XPRanking" && !isDesktop ? "220px" : "",
            overflowY: openModal === "XPRanking" && !isDesktop ? "scroll" : "",
          }}>
            <Top>
              <h2>XP For Ranking</h2>

              {openModal !== "XPRanking" ? 
                <img src={maisImg} alt="ícone mais" />
                :
                <img src={menosImg} alt="ícone menos" />}
            </Top>

            {openModal === "XPRanking" && !isDesktop &&
              <Inside>
                <p>You score points for the ranking by completing each of the Tasks and Super Task of the lessons.</p>
                <p>In Tasks 1 and 2 you have three chances to achieve a success rate of 100%.</p>
                <p>The highest score among the three attempts is what will be considered for the Ranking.</p>
                <p>Please note: You need to achieve a success rate of 70% to score in any activity.</p>
                <p>You can do an activity more than 3 times.</p>
                <p>However, from the 4th attempt onwards, the achievement no longer counts as XP, only as rewards.</p>
              </Inside>
            }
          </Items>

          <Items onClick={() => handleItemClick("FiskDollars")} style={{
            borderColor: openModal === "FiskDollars" && !isDesktop ? defaultTheme["red-200"] : "",
            height: openModal === "FiskDollars" && !isDesktop ? "220px" : "",
            overflowY: openModal === "FiskDollars" && !isDesktop ? "scroll" : "",
          }}>
            <Top>
              <h2>Fisk Dollars</h2>

              {openModal !== "FiskDollars" ? 
                <img src={maisImg} alt="ícone mais" />
                :
                <img src={menosImg} alt="ícone menos" />}
            </Top>

            {openModal === "FiskDollars" && !isDesktop &&
              <Inside>
                <p>With Fisk Dollars you have the opportunity to personify your Avatar by purchasing accessories.</p>
                <p>Here's how to earn Fisk Dollars.</p>
                <p>1) From the 4th attempt to redo Task 1 or Task 2, ONCE A DAY, you can earn:</p>
                <ul>
                  <li><p><strong>80 Fisk Dollars</strong> - achieving a success rate between 95 and 100%</p></li>
                  <li><p><strong>50 Fisk Dollars</strong> - achieving a success rate between 85 and 94.99%</p></li>
                  <li><p><strong>30 Fisk Dollars</strong> - achieving a success rate between 70 and 84.99%</p></li>
                  <li><p><strong>10 Fisk Dollars</strong> - achieving a success rate between 60 and 69.99%</p></li>
                </ul>
                <p>2) By logging in for 5 consecutive days, you will be rewarded progressively:</p>
                <ul>
                  <li><p><strong>20 Fisk Dollars</strong> (1st login)</p></li>
                  <li><p><strong>40 Fisk Dollars</strong> (2nd login)</p></li>
                  <li><p><strong>60 Fisk Dollars</strong> (3rd login)</p></li>
                  <li><p><strong>80 Fisk Dollars</strong> (4th login)</p></li>
                  <li><p><strong>100 Fisk Dollars</strong> (5th login)</p></li>
                </ul>
                <p>If you log into Cyber Fisk Pro three times in a row, but don’t log in the consecutive day, the reward "resets" the next time you enter the app.</p>
                <p>3) By doing the Super Task within the same week the lesson has been completed at school, you earn 100 Fisk Dollars.</p>
                <p>4) Every time the Spin the Wheel appears, you have the chance to win more Fisk Dollars.</p>
              </Inside>
            }
          </Items>

          <Items onClick={() => handleItemClick("DailyGame")} style={{
            borderColor: openModal === "DailyGame" && !isDesktop ? defaultTheme["red-200"] : "",
            height: openModal === "DailyGame" && !isDesktop ? "220px" : "",
            overflowY: openModal === "DailyGame" && !isDesktop ? "scroll" : "",
          }}>
            <Top>
              <h2>Daily Game</h2>

              {openModal !== "DailyGame" ? 
                <img src={maisImg} alt="ícone mais" />
                :
                <img src={menosImg} alt="ícone menos" />}
            </Top>

            {openModal === "DailyGame" && !isDesktop &&
              <Inside>
                <p>When completing a daily game, you earn 50 Fisk Dollars.</p>
              </Inside>
            }
          </Items>

          <Items onClick={() => handleItemClick("SpinWheel")} style={{
            borderColor: openModal === "SpinWheel" && !isDesktop ? defaultTheme["red-200"] : "",
            height: openModal === "SpinWheel" && !isDesktop ? "220px" : "",
            overflowY: openModal === "SpinWheel" && !isDesktop ? "scroll" : "",
          }}>
            <Top>
              <h2>Spin The Wheel</h2>

              {openModal !== "SpinWheel" ? 
                <img src={maisImg} alt="ícone mais" />
                :
                <img src={menosImg} alt="ícone menos" />}
            </Top>

            {openModal === "SpinWheel" && !isDesktop &&
              <Inside>
                <p>You will have the chance to spin
                the wheel 2x to get Fisk dollars.</p>

                <p><strong>1 spin:</strong> You spin the wheel every
                time you complete an activity </p>
                
                <p><strong>2 spin:</strong> You spin the wheel when
                you have in any TASK (Task 1, Task 2 or
                Super Task) on the first try.</p>
              </Inside>
            }
          </Items>
        </Left>
       
        <Right style={{
          borderColor: (openModal === "XPRanking" || openModal === "FiskDollars" || openModal === "DailyGame" || openModal === "SpinWheel") && defaultTheme["red-200"],
          overflowY: openModal === "FiskDollars" ? "scroll" : "",
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
              <Inside>
                <p>You score points for the ranking by completing each of the Tasks and Super Task of the lessons.</p>
                <p>In Tasks 1 and 2 you have three chances to achieve a success rate of 100%.</p>
                <p>The highest score among the three attempts is what will be considered for the Ranking.</p>
                <p>Please note: You need to achieve a success rate of 70% to score in any activity.</p>
                <p>You can do an activity more than 3 times.</p>
                <p>However, from the 4th attempt onwards, the achievement no longer counts as XP, only as rewards.</p>
              </Inside>
            }
            {openModal === "FiskDollars" && 
              <Inside>
              <p>With Fisk Dollars you have the opportunity to personify your Avatar by purchasing accessories.</p>
              <p>Here's how to earn Fisk Dollars.</p>
              <p>1) From the 4th attempt to redo Task 1 or Task 2, ONCE A DAY, you can earn:</p>
              <ul>
                <li><p><strong>80 Fisk Dollars</strong> - achieving a success rate between 95 and 100%</p></li>
                <li><p><strong>50 Fisk Dollars</strong> - achieving a success rate between 85 and 94.99%</p></li>
                <li><p><strong>30 Fisk Dollars</strong> - achieving a success rate between 70 and 84.99%</p></li>
                <li><p><strong>10 Fisk Dollars</strong> - achieving a success rate between 60 and 69.99%</p></li>
              </ul>
              <p>2) By logging in for 5 consecutive days, you will be rewarded progressively:</p>
              <ul>
                <li><p><strong>20 Fisk Dollars</strong> (1st login)</p></li>
                <li><p><strong>40 Fisk Dollars</strong> (2nd login)</p></li>
                <li><p><strong>60 Fisk Dollars</strong> (3rd login)</p></li>
                <li><p><strong>80 Fisk Dollars</strong> (4th login)</p></li>
                <li><p><strong>100 Fisk Dollars</strong> (5th login)</p></li>
              </ul>
              <p>If you log into Cyber Fisk Pro three times in a row, but don’t log in the consecutive day, the reward "resets" the next time you enter the app.</p>
              <p>3) By doing the Super Task within the same week the lesson has been completed at school, you earn 100 Fisk Dollars.</p>
              <p>4) Every time the Spin the Wheel appears, you have the chance to win more Fisk Dollars.</p>
            </Inside>
            }
            {openModal === "DailyGame" && 
              <Inside>
                <p>When completing a daily game, you earn 50 Fisk Dollars.</p>
              </Inside>
            }
            {openModal === "SpinWheel" && 
              <Inside>
                <p>You will have the chance to spin
                the wheel 2x to get Fisk dollars.</p>

                <p><strong>1 spin:</strong> You spin the wheel every
                time you complete an activity </p>
                
                <p><strong>2 spin:</strong> You spin the wheel when
                you have in any TASK (Task 1, Task 2 or
                Super Task) on the first try.</p>
              </Inside>
            }
          </MainRight>
        </Right>
      </Main>

      <AreaFooter>
        <ButtonHome onClick={handleGoHome}>
          <p>Home</p>
        </ButtonHome>
      </AreaFooter>
    </Container>
  )
}