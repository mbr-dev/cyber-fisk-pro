import { useState } from "react";
import { Plus, Minus } from "lucide-react";

import { HeaderText } from "../../components/HeaderText";
import { FooterBtnHome } from "../../components/FooterBtnHome";

import { Container, Main, Items, Top, Inside, Left, Right, TopRight, MainRight } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const Help = () => {
  const [showR, setShowR] = useState(false);
  const [showD, setShowD] = useState(false);
  const [showG, setShowG] = useState(false);
  const [showW, setShowW] = useState(false);

  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
  const isTablet = window.matchMedia("(min-width: 600px)").matches;

  return (
    <Container>
      <HeaderText title="Help" />

      <Main>
        <Left>
          <Items onClick={() => setShowR(!showR)} style={{
            borderColor: showR && !isDesktop ? defaultTheme["red-200"] : "",
            height: showR && !isDesktop ? "250px" : "",
            overflowY: showR && !isDesktop ? "scroll" : "",
          }}>
            <Top>
              <h2>XP For Ranking</h2>

              {!showR ? 
                <Plus size={isDesktop ? 32 : 24} color={defaultTheme["red-200"]} strokeWidth={3} />
                :
                <Minus size={isDesktop ? 32 : 24} color={defaultTheme["red-200"]} strokeWidth={3} />}
            </Top>
            {showR && !isDesktop &&
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

          <Items onClick={() => setShowD(!showD)} style={{
            borderColor: showD && !isDesktop ? defaultTheme["red-200"] : "",
            height: showD && !isDesktop ? "250px" : "",
            overflowY: showD && !isDesktop ? "scroll" : "",
          }}>
            <Top>
              <h2>Fisk Dollars</h2>

              {!showD ? 
                <Plus size={isDesktop ? 32 : 24} color={defaultTheme["red-200"]} strokeWidth={3} />
                :
                <Minus size={isDesktop ? 32 : 24} color={defaultTheme["red-200"]} strokeWidth={3} />}
            </Top>
            {showD && !isDesktop &&
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

          <Items onClick={() => setShowG(!showG)} style={{
            borderColor: showG && !isDesktop ? defaultTheme["red-200"] : "",
            height: showG && !isDesktop ? "250px" : "",
            overflowY: showG && !isDesktop ? "scroll" : "",
          }}>
            <Top>
              <h2>Daily Game</h2>

              {!showG ? 
                <Plus size={isDesktop ? 32 : 24} color={defaultTheme["red-200"]} strokeWidth={3} />
                :
                <Minus size={isDesktop ? 32 : 24} color={defaultTheme["red-200"]} strokeWidth={3} />}
            </Top>
            {showG && !isDesktop &&
              <Inside>
                <p>When completing a daily game, you earn 50 Fisk Dollars.</p>
              </Inside>
            }
          </Items>

          <Items onClick={() => setShowW(!showW)} style={{
            borderColor: showW && !isDesktop ? defaultTheme["red-200"] : "",
            height: showW && !isDesktop ? "250px" : "",
            overflowY: showW && !isDesktop ? "scroll" : "",
          }}>
            <Top>
              <h2>Spin The Wheel</h2>

              {!showW ? 
                <Plus size={isDesktop ? 32 : 24} color={defaultTheme["red-200"]} strokeWidth={3} />
                :
                <Minus size={isDesktop ? 32 : 24} color={defaultTheme["red-200"]} strokeWidth={3} />}
            </Top>
            {showW && !isDesktop &&
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

        {isDesktop &&
          <Right style={{
            borderColor: (showR || showD || showG || showW) && defaultTheme["red-200"],
            overflowY: showD ? "scroll" : "",
          }}>
            <TopRight>
              {showR ? <h2>XP For Ranking</h2> : showD ? <h2>Fisk Dollars</h2> : showG ? <h2>Daily Game</h2> : showW ? <h2>Spin The Wheel</h2> : ""}
              {(showR || showD || showG || showW) && <Minus size={32} color={defaultTheme["red-200"]} strokeWidth={3} />}
            </TopRight>
            <MainRight>
              {showR && 
                <Inside>
                  <p>You score points for the ranking by completing each of the Tasks and Super Task of the lessons.</p>
                  <p>In Tasks 1 and 2 you have three chances to achieve a success rate of 100%.</p>
                  <p>The highest score among the three attempts is what will be considered for the Ranking.</p>
                  <p>Please note: You need to achieve a success rate of 70% to score in any activity.</p>
                  <p>You can do an activity more than 3 times.</p>
                  <p>However, from the 4th attempt onwards, the achievement no longer counts as XP, only as rewards.</p>
                </Inside>
              }
              {showD && 
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
              {showG && 
                <Inside>
                  <p>When completing a daily game, you earn 50 Fisk Dollars.</p>
                </Inside>
              }
              {showW && 
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
        }
      </Main>

      <FooterBtnHome 
        fs={isDesktop ? "32px" : isTablet ? "28px" : ""}
        wl={isDesktop ? "48%" : "80%"}
        hasLS
        w={isDesktop ? "450px" : isTablet ? "400px" : ""}
        h={isDesktop ? "52px" : isTablet ? "48px" : ""}
      />
    </Container>
  )
}