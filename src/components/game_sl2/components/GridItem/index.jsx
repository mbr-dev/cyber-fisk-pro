import { L2_SUPER_LESSON_FACIL } from "../../../../utils/lesson2_Task2";

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
        <p>{L2_SUPER_LESSON_FACIL[gItem.item].name}</p>
      }
    </GridItemContainer>
  )
}