import { useState} from "react";
import { useNavigate } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";

import { Modal } from "./components/Modal";
import { HeaderText } from "../../components/HeaderText";
import { LineSeparator } from "../../components/LineSeparator";

import newImg from "./images/image.png";
import clipImg from "./images/clip.png";
import sinoImg from "./images/sino.png";
import sinoWImg from "./images/sinoW.png";
import plusWImg from "./images/plusW.png";
import plusRImg from "./images/plusR.png";

import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Main, AreaButton, Button, DivButtons, ButtonCreate, ButtonNews, DivInside, Items, NewsItems, InfoItems, TitleItems, Div, CreateItems, ButtonSend, ButtonFile, CreateItemsInside, CreateFile, Image } from "./styles";

export const News = () => {
  const [create, setCreate] = useState(false);
  const [schoolNews, setSchoolNews] = useState(false);
  const [courseNews, setCourseNews] = useState(false);

  const navigate = useNavigate();

  const handleBillboard = () => {
    navigate("/Billboard");
  }

  const handleCreate = () => {
    setCreate(!create);
  }

  const handleSchool = () => {
    setSchoolNews(!schoolNews);
  }

  const handleCourse = () => {
    setCourseNews(!courseNews);
  }

  return (
    <Container>
      <HeaderText title="News" />

      <Main>
        <DivButtons>
          <DivInside>
            <ButtonNews onClick={handleSchool} style={{
              backgroundColor: schoolNews ? defaultTheme["red-200"] : "",
              color: schoolNews ? defaultTheme.white : "",
            }}>
              <p>School News</p>
              {schoolNews ?
                <img src={sinoWImg} alt="Sino Icon" />
                :
                <img src={sinoImg} alt="Sino Icon" />
              }
            </ButtonNews>
            <ButtonNews onClick={handleCourse} style={{
              backgroundColor: courseNews ? defaultTheme["red-200"] : "",
              color: courseNews ? defaultTheme.white : "",
            }}>
              <p>Course News</p>
              {courseNews ?
                <img src={sinoWImg} alt="Sino Icon" />
                :
                <img src={sinoImg} alt="Sino Icon" />
              }
            </ButtonNews>
          </DivInside>
          <ButtonCreate onClick={handleCreate} style={{
            backgroundColor: create && defaultTheme["red-200"],
            color: create && defaultTheme.white,
          }}>
            <Image style={{
              backgroundColor: create ? defaultTheme.white : ""
            }}>
              {create ?
                <img src={plusRImg} alt="" />
                :
                <img src={plusWImg} alt="" />
              }
            </Image>
            <p>Create</p>
          </ButtonCreate>
        </DivButtons>

        <NewsItems>
          {create ?
              <CreateItems>
                <CreateItemsInside>
                  <textarea placeholder="Type message here..." />
                  <ButtonFile>
                    <label>
                      <input type="file" />
                      <img src={clipImg} alt="" />
                    </label>
                  </ButtonFile>
                </CreateItemsInside>

                {/* <CreateFile>
                  <img src={newImg} alt="" />
                </CreateFile> */}
              </CreateItems>
            :
              <>
                <Items>
                  <TitleItems>
                    <p>Nome do professor</p>
                    <span>06/06/2023 - 10:00</span>
                  </TitleItems>
                  <InfoItems>
                    <LineSeparator wl="90%" bg={defaultTheme["gray-600"]} />
                    <Div>
                      <img src={newImg} alt="" />
                    </Div>
                  </InfoItems>
                </Items>

                <Items>
                <TitleItems>
                    <p>Nome do professor</p>
                    <span>06/06/2023 - 10:00</span>
                  </TitleItems>
                  <InfoItems>
                    <LineSeparator wl="90%" bg={defaultTheme["gray-600"]} />
                    <Div>
                      <p>You are going to take your exam on:</p>
                      <p>October 31th</p>
                    </Div>
                  </InfoItems>
                </Items>
              </>
          }
        </NewsItems>
      </Main>

      <AreaButton>
        {create ?
          <ButtonSend>
            <p>Send</p>
          </ButtonSend>
          :
          <>
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
        </>
        }
      </AreaButton>
    </Container>
  )
}