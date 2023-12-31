import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import { ButtonBg } from "../../components/ButtonBg";
import { HeaderText } from "../../components/HeaderText";
import { LineSeparator } from "../../components/LineSeparator";

import Robo from "./images/Robo.png";
import Cabelo from "./images/Cabelo.png";
import Camisa from "./images/Camisa.png";
import Naris from "./images/Naris.png";
import Oculos from "./images/Oculos.png";
import Colors from "./images/Colors.png";
import Person from "./images/Person.png";
import Dollar from "../../assets/Dollar.svg";

import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Bottom, Main, Separator, Top, Footer, Button, Money, Card, CardReward } from "./styles";

export const BalanceAndReward = () => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.5,
      spacing: 16,
    },
  });

  const [sliderRef2] = useKeenSlider({
    slides: {
      perView: 5,
      spacing: 12,
    },
  });
  
  return (
    <Container>
      <HeaderText title="XP Balance & Rewards" />

      <Main>
        <Top>
          <Button>Balance</Button>
          <Money>
            <img src={Dollar} alt="Dollar" />
            <span>10</span>
            <p>Fisk Dollars</p>
          </Money>
          <LineSeparator w="80%" bg={defaultTheme["gray-200"]} />
          <Button>Rewards</Button>
        </Top>

        <Separator>
          <div ref={sliderRef2} className="keen-slider">
            <Card className="keen-slider__slide">
              <img src={Camisa} alt="" />
            </Card>
            <Card className="keen-slider__slide">
              <img src={Cabelo} alt="" />
            </Card>
            <Card className="keen-slider__slide">
              <img src={Naris} alt="" />
            </Card>
            <Card className="keen-slider__slide">
              <img src={Camisa} alt="" />
            </Card>
            <Card className="keen-slider__slide">
              <img src={Oculos} alt="" />
            </Card>
            <Card className="keen-slider__slide">
              <img src={Oculos} alt="" />
            </Card>
            <Card className="keen-slider__slide">
              <img src={Oculos} alt="" />
            </Card>
            <Card className="keen-slider__slide">
              <img src={Oculos} alt="" />
            </Card>
          </div>
        </Separator>

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
      </Main>

      <Footer>
        <LineSeparator w="80%" bg={defaultTheme["gray-200"]} />
        <div>
          <ButtonBg
            title="Home"
            w="9rem"
            h="2rem"
            mt="10px"
            onPress={() => navigate("/home")}
          />
          <ButtonBg
            title="Shop"
            w="9rem"
            h="2rem"
            mt="10px"
            greenBtn
            onPress={() => navigate("/home")}
          />
        </div>
      </Footer>
    </Container>
  )
}