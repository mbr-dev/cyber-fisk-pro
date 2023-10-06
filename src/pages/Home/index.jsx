import { useContext } from "react";

import { Footer } from "../../components/Footer";
import { TopMenuHeader } from "../../components/TopMenuHeader";

import { CyberContext } from "../../context/cyber";
import { homeCardsTranslate } from "../../utils/Translate/homeCardsTranslate";

import { Container, Main, Card, Cards } from "./styles";

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
      <Footer />
    </Container>
  )
}