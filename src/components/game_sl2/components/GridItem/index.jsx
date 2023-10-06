import { SL2_FACIL } from "../../../../utils/Lesson2_Task1";

import LogoImg from "../../images/logoIcon.png";

import { GridItemContainer, Icon } from "./styles";

export const GridItem = ({ gItem, onItemClick }) => {

  return (
    <GridItemContainer
      onClick={onItemClick}
    >
      {gItem.permanentShown === false && gItem.shown === false &&
        <Icon src={LogoImg} alt="" opacity={0.3} />
      }

      {(gItem.permanentShown || gItem.shown) && gItem.item !== null &&
        <p>{SL2_FACIL[gItem.item].name}</p>
      }
    </GridItemContainer>
  )
}