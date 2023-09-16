import { useContext } from "react";

import { AvatarImage } from "../../components/AvatarImage";
import { Footer } from "../../components/Footer";
import { ButtonMenuHeader } from "../../components/ButtonMenuHeader";

import { CyberContext } from "../../context/cyber";
import { homeCardsTranslate } from "../../utils/Translate/homeCardsTranslate";

import LogoFisk from "../../assets/logoFisk.png";

import { HomeContainer, HomeHeader, BottomHeader, HomeMain, MainCard, MainCards, TopHeader } from "./styles";

export function Home() {
  const { selectLanguageHome } = useContext(CyberContext);

  return(
    <HomeContainer>
      <HomeHeader>
        <TopHeader>
          <ButtonMenuHeader />
        </TopHeader>

        <BottomHeader>
          <AvatarImage userName="Camila Eduarda" />          
          <img src={LogoFisk} className="logoFisk" alt="Logo Fisk"/>
        </BottomHeader>
      </HomeHeader>

      <HomeMain>
        <MainCards>
          {homeCardsTranslate.map(homeCard => {
            return (
              <MainCard key={homeCard.id}>
                <img src={homeCard.img} alt="" />
                {selectLanguageHome === 0 && <p>{homeCard.name[0]}</p>}
                {selectLanguageHome === 1 && <p>{homeCard.name[1]}</p>}
                {selectLanguageHome === 2 && <p>{homeCard.name[2]}</p>}
              </MainCard>
            )
          })}
        </MainCards>
      </HomeMain>

      <Footer />
    </HomeContainer>
  )
}