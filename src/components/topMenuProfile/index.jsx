import { AlignJustify, X } from "lucide-react";

import { AvatarImage } from "../AvatarImage";

import Camada1 from "./images/Camada_1.svg";

import { BottomMenuHeader, TopMenuButton, TopMenuHeader, TopMenuProfileContainer, TopCloseButton } from "./styles";

export function TopMenuProfile() {
    return (
        <TopMenuProfileContainer>
            <TopMenuHeader>
                <TopMenuButton>
                    <AlignJustify />
                </TopMenuButton>
                <p>Profile</p>
                <TopCloseButton>
                    <X />
                </TopCloseButton>
            </TopMenuHeader>

            <BottomMenuHeader>
                <AvatarImage userName="Julia Santdawdawdos" />
                <img src={Camada1} />
            </BottomMenuHeader>
        </TopMenuProfileContainer>
    )
}