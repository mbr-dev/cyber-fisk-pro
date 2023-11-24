import { useNavigate } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";

import { Modal } from "./components/Modal";
import { HeaderText } from "../../components/HeaderText";

import FolderImg from "./images/folder.png";

import { Container, Main, Div, AreaButton, Button, Text, DivImg } from "./styles";

export const Archive = () => {
  const navigate = useNavigate();

  const handleMessages = () => {
    navigate("/Messages");
  }

  return (
    <Container>
      <HeaderText title="Archive" />

      <Main>
        <Div>
          <span className="spanDay">06/06/2023</span>
          <Text>
            <p>João Carlos Albuquerque</p>
            <span>REG/ES1 - Seg/Qua – 08:00/09:00</span>
          </Text>
          <DivImg>
            <img src={FolderImg} alt="" />
          </DivImg>
        </Div>
        <Div>
          <span className="spanDay">06/06/2023</span>
          <Text>
            <p>João Carlos Albuquerque</p>
            <span>REG/ES1 - Seg/Qua – 08:00/09:00</span>
          </Text>
          <DivImg>
            <img src={FolderImg} alt="" />
          </DivImg>
        </Div>
        <Div>
          <span className="spanDay">06/06/2023</span>
          <Text>
            <p>João Carlos Albuquerque</p>
            <span>REG/ES1 - Seg/Qua – 08:00/09:00</span>
          </Text>
          <DivImg>
            <img src={FolderImg} alt="" />
          </DivImg>
        </Div>
        <Div>
          <span className="spanDay">06/06/2023</span>
          <Text>
            <p>João Carlos Albuquerque</p>
            <span>REG/ES1 - Seg/Qua – 08:00/09:00</span>
          </Text>
          <DivImg>
            <img src={FolderImg} alt="" />
          </DivImg>
        </Div>
        <Div>
          <span className="spanDay">06/06/2023</span>
          <Text>
            <p>João Carlos Albuquerque</p>
            <span>REG/ES1 - Seg/Qua – 08:00/09:00</span>
          </Text>
          <DivImg>
            <img src={FolderImg} alt="" />
          </DivImg>
        </Div>
        <Div>
          <span className="spanDay">06/06/2023</span>
          <Text>
            <p>João Carlos Albuquerque</p>
            <span>REG/ES1 - Seg/Qua – 08:00/09:00</span>
          </Text>
          <DivImg>
            <img src={FolderImg} alt="" />
          </DivImg>
        </Div>
        <Div>
          <span className="spanDay">06/06/2023</span>
          <Text>
            <p>João Carlos Albuquerque</p>
            <span>REG/ES1 - Seg/Qua – 08:00/09:00</span>
          </Text>
          <DivImg>
            <img src={FolderImg} alt="" />
          </DivImg>
        </Div>
      </Main>

      <AreaButton>
        <Button onClick={handleMessages} $variant="red">
          <p>Messages</p>
        </Button>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button>
              <p>Filter</p>
            </Button>
          </Dialog.Trigger>

          <Modal />
        </Dialog.Root>
      </AreaButton>
    </Container>
  )
}