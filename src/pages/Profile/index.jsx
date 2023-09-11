import { useContext } from "react";
import { CalendarDays, Mail, School, User } from "lucide-react";

import { TopMenuProfile } from "../../components/TopMenuProfile";
import { ButtonRed } from "../../components/ButtonRed";

import { profileTranslate } from "../../utils/Translate/profileTranslate";
import { CyberContext } from "../../context/cyber"

import Brazil from "./images/Brazil.svg";
import Eua from "./images/Eua.svg";
import Spain from "./images/Spain.svg";

import { ProfileContainer, ProfileContent, ProfileForm, ProfileInput, ProfileSelect, ProfileAreaInput } from "./styles";
import { AreaButtonBottom } from "../../components/AreaButtonBottom";

export const Profile = () => {
  const { selectLanguage, chooseLanguage } = useContext(CyberContext);

  function handleSelectLanguage(e) {
    e.preventDefault()
    chooseLanguage(e)
  }
  
  return(
    <ProfileContainer>
      <TopMenuProfile />

      <ProfileContent>
        <ProfileForm>
          <ProfileAreaInput>
            {selectLanguage === 0 && <label>{profileTranslate[0].selectLanguage}</label>}
            {selectLanguage === 1 && <label>{profileTranslate[1].selectLanguage}</label>}
            {selectLanguage === 2 && <label>{profileTranslate[2].selectLanguage}</label>}
            
            {selectLanguage === 0 && <img src={Brazil} alt="Flag Brazil" />}
            {selectLanguage === 1 && <img src={Eua} alt="Flag Eua" />}
            {selectLanguage === 2 && <img src={Spain} alt="Flag Espanha" />}
              
            <ProfileSelect className="language" value={selectLanguage} onChange={handleSelectLanguage}>
              <option value="0" >
                Português
              </option>
              <option value="1">
                Inglês
              </option>
              <option value="2">
                Espanhol
              </option>
            </ProfileSelect>
          </ProfileAreaInput>

            <ProfileAreaInput>
              {selectLanguage === 0 && <label>{profileTranslate[0].name}</label>}
              {selectLanguage === 1 && <label>{profileTranslate[1].name}</label>}
              {selectLanguage === 2 && <label>{profileTranslate[2].name}</label>}

              <User size={16} strokeWidth={2.5} />
              <ProfileInput type="text" placeholder="Camila Eduarda Campos" readOnly />
            </ProfileAreaInput>

            <ProfileAreaInput>
              {selectLanguage === 0 && <label>{profileTranslate[0].date}</label>}
              {selectLanguage === 1 && <label>{profileTranslate[1].date}</label>}
              {selectLanguage === 2 && <label>{profileTranslate[2].date}</label>}
              
              <CalendarDays size={16} strokeWidth={2.5} />
              <ProfileInput type="date" className="inputDate" readOnly />
            </ProfileAreaInput>

            <ProfileAreaInput>
              {selectLanguage === 0 && <label>{profileTranslate[0].local}</label>}
              {selectLanguage === 1 && <label>{profileTranslate[1].local}</label>}
              {selectLanguage === 2 && <label>{profileTranslate[2].local}</label>}

              <School size={16} strokeWidth={2.5} />
              <ProfileSelect readOnly>
                <option value="portugues">São Paulo</option>
                <option value="portugues">Rio Janeiro</option>
              </ProfileSelect>
            </ProfileAreaInput>

            <ProfileAreaInput>
              {selectLanguage === 0 && <label>{profileTranslate[0].email}</label>}
              {selectLanguage === 1 && <label>{profileTranslate[1].email}</label>}
              {selectLanguage === 2 && <label>{profileTranslate[2].email}</label>}
              <Mail size={16} strokeWidth={2.5} />
              <ProfileInput type="email" placeholder="camilaeduarda@gmail.com" readOnly />
            </ProfileAreaInput>

            <AreaButtonBottom>
              <ButtonRed title="Home" />
            </AreaButtonBottom>
        </ProfileForm>
      </ProfileContent>
    </ProfileContainer>
  )
}