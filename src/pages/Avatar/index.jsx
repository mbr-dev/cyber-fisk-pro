import "keen-slider/keen-slider.min.css";
import { useNavigate } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";
import { useKeenSlider } from "keen-slider/react";

import { HeaderText } from "../../components/HeaderText";
import { AvatarCustom } from "../../components/AvatarCustom";

import bgImg from "./images/bgNatal.png";
import cabeca from "../../assets/cabeca.png";
import bracos from "../../assets/bracos.png";
import corpo from "../../assets/corpo.png";
import face from "../../assets/face.png";
import oculos from "../../assets/oculos.png";
import pets from "../../assets/pets.png";
import pernas from "../../assets/pernas.png";
import cadeado from "../../assets/cadeado.png";
import roboPe from "../../assets/roboPe.png";
import dollar from "../../assets/Dollar.svg";

import { Container, Main, Top, Bottom, Separator, Card, AvatarCard, CardReward, Title, DivMoney, DivBlock, DivMobile, AreaFooter, ButtonHome, DivBottom } from "./styles";
import { Modal } from "./components/Modal";

export const Avatar = () => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
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

  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/Home");
  }

  return (
    <Container>
      <HeaderText title="Avatar " />

      <Main>
        <Top>
          <img src={bgImg} alt="" className="bgImg" />
          
          <AvatarCustom />
        </Top>

        <DivBottom>
          <Bottom>
            <DivMobile>
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
            </DivMobile>
            <DivMobile>
              <Title><p>Head</p></Title>
            </DivMobile>

            <AvatarCard>
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <CardReward>
                    <img src={roboPe} alt="" className="RoboCard" />
                  </CardReward>
                </Dialog.Trigger>
                <Modal />
              </Dialog.Root>

              <CardReward>
                <DivBlock>
                  <DivMoney>
                    <img src={dollar} alt="" />
                    <p>$ 200</p>
                  </DivMoney>

                  <img src={cadeado} alt="" className="cadeadoImg" />
                </DivBlock>
                <img src={roboPe} alt="" className="RoboCard" />
              </CardReward>

              <CardReward>
                <img src={roboPe} alt="" className="RoboCard" />
              </CardReward>
            </AvatarCard>
            
            <Separator className="spDesk">
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
          </Bottom>
          <AreaFooter>
              <ButtonHome onClick={handleGoHome}>
                <p>Home</p>
              </ButtonHome>
          </AreaFooter>
        </DivBottom>
      </Main>
    </Container>
  )
}