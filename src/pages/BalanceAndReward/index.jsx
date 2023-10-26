import { useKeenSlider } from "keen-slider/react";

import { ButtonBg } from "../../components/ButtonBg";
import { LineSeparator } from "../../components/LineSeparator";
import { ButtonAnswer } from "../../components/ButtonAnswer";
import { TopMenuHeader } from "../../components/TopMenuHeader";

import Robo from "./images/Robo.png";
import Cabelo from "./images/Cabelo.png";
import Camisa from "./images/Camisa.png";
import Naris from "./images/Naris.png";
import Oculos from "./images/Oculos.png";
import Colors from "./images/Colors.png";
import Person from "./images/Person.png";
import Dollar from "../../assets/Dollar.svg";

import "../../pages/Books/styles.css";
import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Bottom, Main, Separator, Top, BottomButton, Button, Money, MainTop, Card, CardBody, CardRed } from "./styles";

export const BalanceAndReward = () => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 10,
    },
  })
  
  return (
    <Container>
      <TopMenuHeader title="XP Balance & Rewards" />

      <Main>
        <MainTop>
          <Top>
            <Button>Balance</Button>
            <Money>
              <img src={Dollar} alt="Dollar" />
              <span>10</span>
              <p>Fisk Dollars</p>
            </Money>
            <LineSeparator w="18rem" bg={defaultTheme["gray-200"]} mb="0" mt="0"  />
            <Button>Rewards</Button>
          </Top>
          <Separator>
            <CardBody>
              <CardRed><img src={Person} alt="" /> Body</CardRed>
              <img src={Colors} alt="" />
            </CardBody>
            <Card>
              <img src={Camisa} alt="" />
            </Card>
            <Card>
              <img src={Cabelo} alt="" />
            </Card>
            <Card>
              <img src={Naris} alt="" />
            </Card>
            <Card>
              <img src={Camisa} alt="" />
            </Card>
            <Card>
              <img src={Oculos} alt="" />
            </Card>
          </Separator>
          <Bottom ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide number-slide">
              <ButtonAnswer w="6rem" h="7.5rem">
                <img src={Robo} alt="" />
              </ButtonAnswer>
            </div>
            <div className="keen-slider__slide number-slide">
              <ButtonAnswer w="6rem" h="7.5rem">
                <img src={Robo} alt="" />
              </ButtonAnswer>
            </div>
            <div className="keen-slider__slide number-slide">
              <ButtonAnswer w="6rem" h="7.5rem">
                <img src={Robo} alt="" />
              </ButtonAnswer>
            </div>
            <div className="keen-slider__slide number-slide">
              <ButtonAnswer w="6rem" h="7.5rem">
                <img src={Robo} alt="" />
              </ButtonAnswer>
            </div>
            <div className="keen-slider__slide number-slide">
              <ButtonAnswer w="6rem" h="7.5rem">
                <img src={Robo} alt="" />
              </ButtonAnswer>
          </div>
        </Bottom>
        </MainTop>
        <BottomButton>
          <LineSeparator w="18rem" bg={defaultTheme["gray-200"]}  />
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
        </BottomButton>
      </Main>
    </Container>
  )
}