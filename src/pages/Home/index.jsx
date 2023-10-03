import { useContext } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import { Footer } from "../../components/Footer";
import { TopMenuHeader } from "../../components/TopMenuHeader";

import { CyberContext } from "../../context/cyber";
import { homeCardsTranslate } from "../../utils/Translate/homeCardsTranslate";

import { Container, Main, Card, Cards } from "./styles";
import { ButtonPronunciation } from "../../components/ButtonPronunciation";
import { ModalPronunciation } from "../../components/ModalPronunciation";

export const Home = () => {
  const { selectLanguageHome } = useContext(CyberContext);

  return(
    <Container>
      <TopMenuHeader hasAvatar hasLogo />
      <Main>
        <Cards>
          {homeCardsTranslate.map(homeCard => {
            return (
              <Card key={homeCard.id}>
                <img src={homeCard.img} alt="" />
                {selectLanguageHome === 0 && <p>{homeCard.name[0]}</p>}
                {selectLanguageHome === 1 && <p>{homeCard.name[1]}</p>}
                {selectLanguageHome === 2 && <p>{homeCard.name[2]}</p>}
              </Card>
            )
          })}
        </Cards>
      </Main>
      <Dialog.Root>
        <Dialog.Trigger>
          <ButtonPronunciation />
        </Dialog.Trigger>

        <ModalPronunciation />
      </Dialog.Root>
      <Footer />
    </Container>
  )
}