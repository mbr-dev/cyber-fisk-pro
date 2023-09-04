import { TopMenuProfile } from "../../components/topMenuProfile";

import { ProfileContainer, ProfileContent, ProfileForm, ProfileInput, ProfileSelect, Feature, ProfileButtonHome, ProfileAreaInput } from "./styles";

export function Profile() {
    return(
        <ProfileContainer>
            <TopMenuProfile />

            <ProfileContent>

                <ProfileForm>
                    <ProfileAreaInput>
                        <label>Escolha o idoma</label>
                        <ProfileSelect>
                            <option value="portugues">Português</option>
                            <option value="english">Inglês</option>
                            <option value="spanish">Espanhol</option>
                        </ProfileSelect>
                    </ProfileAreaInput>

                    <ProfileAreaInput>
                        <label htmlFor="">Nome:</label>
                        <ProfileInput type="text" placeholder="Camila Eduarda Campos" />
                    </ProfileAreaInput>

                    <ProfileAreaInput>
                        <label htmlFor="">Data de nascimento:</label>
                        <ProfileInput type="date" placeholder="Camila Eduarda Campos" />
                    </ProfileAreaInput>

                    <ProfileAreaInput>
                        <label htmlFor="">Unidade:</label>
                        <ProfileSelect>
                            <option value="portugues">São Paulo</option>
                            <option value="english">Rio Janeiro</option>
                        </ProfileSelect>
                    </ProfileAreaInput>

                    <ProfileAreaInput>
                        <label htmlFor="">E-mail:</label>
                        <ProfileInput type="email" placeholder="camilaeduarda@gmail.com" />
                    </ProfileAreaInput>

                    <Feature></Feature>

                    <ProfileButtonHome>Home</ProfileButtonHome>
                </ProfileForm>
            </ProfileContent>
        </ProfileContainer>
    )
}