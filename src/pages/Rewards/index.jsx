import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { ButtonBg } from "../../components/ButtonBg";
import { HeaderText } from "../../components/HeaderText";
import { LineSeparator } from "../../components/LineSeparator";

import Robo from "./images/Robo.png";
import cabeca from "../../assets/cabeca.png";
import bracos from "../../assets/bracos.png";
import corpo from "../../assets/corpo.png";
import face from "../../assets/face.png";
import oculos from "../../assets/oculos.png";
import pets from "../../assets/pets.png";
import pernas from "../../assets/pernas.png";
import Dollar from "../../assets/Dollar.svg";

import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Bottom, Main, Separator, Top, Footer, Button, Money, Card, CardReward, Right, Left, Title } from "./styles";

export const Rewards = () => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.5,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 600px)": {
        slides: {
          perView: 3.5,
          spacing: 24,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 28,
        },
      },
    },
  });

  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
  const isTablet = window.matchMedia("(min-width: 600px)").matches;
  
  return (
    <Container>
      <HeaderText title="XP Balance & Rewards" />

      <Main>
        <Left>
          <Top>
            <Button>Balance</Button>
            <Money>
              <img src={Dollar} alt="Dollar" />
              <span>10</span>
              <p>Fisk Dollars</p>
            </Money>
            {!isDesktop && 
              <>
                <LineSeparator wl="80%" bg={defaultTheme["gray-200"]} />
                <Button>Rewards</Button>
              </>}
          </Top>
        </Left>

        <Right>
          {isDesktop && 
            <>
              <Button>Rewards</Button>
            </>}

          <Separator>
            <Card>
              <img src={cabeca} alt="" />
            </Card>
            <Card>
              <img src={corpo} alt="" />
            </Card>
            <Card>
              <img src={bracos} alt="" />
            </Card>
            <Card>
              <img src={pernas} alt="" />
            </Card>
            <Card>
              <img src={face} alt="" />
            </Card>
            <Card>
              <img src={oculos} alt="" />
            </Card>
            <Card>
              <img src={pets} alt="" />
            </Card>
          </Separator>

          <Title><p>Head</p></Title>

          <Bottom>
            <div ref={sliderRef} className="keen-slider">
              <CardReward className="keen-slider__slide">
                <img src={Robo} alt="" className="RoboCard" />
              </CardReward>
              <CardReward className="keen-slider__slide">
                <img src={Robo} alt="" className="RoboCard" />
              </CardReward>
              <CardReward className="keen-slider__slide">
                <img src={Robo} alt="" className="RoboCard" />
              </CardReward>
              <CardReward className="keen-slider__slide">
                <img src={Robo} alt="" className="RoboCard" />
              </CardReward>
              <CardReward className="keen-slider__slide">
                <img src={Robo} alt="" className="RoboCard" />
              </CardReward>
            </div>
          </Bottom>
        </Right>
      </Main>

      <LineSeparator wl="80%" bg={defaultTheme["gray-200"]} />
      <Footer>
        <div>
          <ButtonBg
            title="Home"
            w={isDesktop ? "400px" : isTablet ? "250px" : "9rem"}
            h={isDesktop ? "58px" : isTablet ? "44px" : "2rem"}
            mt={isTablet ? "20px" : "10px"}
            fs={isDesktop ? "32px" : isTablet ? "28px" : ""}
            onPress={() => navigate("/home")}
          />
          <ButtonBg
            title="Shop"
            w={isDesktop ? "400px" : isTablet ? "250px" : "9rem"}
            h={isDesktop ? "58px" : isTablet ? "44px" : "2rem"}
            mt={isTablet ? "20px" : "10px"}
            fs={isDesktop ? "32px" : isTablet ? "28px" : ""}
            greenBtn
            onPress={() => navigate("/home")}
          />
        </div>
      </Footer>
    </Container>
  )
}