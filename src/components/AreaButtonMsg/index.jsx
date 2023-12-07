import { useNavigate } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";

import { Modal } from "./components/Modal";

import { Container, Button } from "./styles";

export const AreaButtonMsg = () => {
  const navigate = useNavigate();

  const handleMessages = () => {
    navigate("/Messages");
  }

  return (
    <Container>
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
    </Container>
  )
}