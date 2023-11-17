import * as Dialog from "@radix-ui/react-dialog";
import { useNavigate } from "react-router-dom";

import { Modal } from "./components/Modal";
import { HeaderText } from "../../components/HeaderText";

import { Container, Main, AreaButton, Button, DivButtons, ButtonCreate, ButtonNews, DivInside } from "./styles";

export const News = () => {
  const navigate = useNavigate();

  const handleBillboard = () => {
    navigate("/Billboard");
  }

  return (
    <Container>
      <HeaderText title="News" />

      <Main>
        <DivButtons>
          <DivInside>
            <ButtonNews>
              <p>School News</p>
            </ButtonNews>
            <ButtonNews>
              <p>Course News</p>
            </ButtonNews>
          </DivInside>
          <ButtonCreate>
            <p>Create</p>
          </ButtonCreate>
        </DivButtons>
      </Main>

      <AreaButton>
        <Button onClick={handleBillboard} $variant="red">
          <p>Billboard</p>
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