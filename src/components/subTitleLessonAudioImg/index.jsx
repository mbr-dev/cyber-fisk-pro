import React from 'react';
import Content from './style';
import Button from "@mui/material/Button";
import imgSom from './images/Modo_de_isolamento.png';
import img from './images/img.png';

export const SubtitleLessonAudioImg = (props) => {

    const click = () =>{
        const audio = new Audio(props.audio);
        audio.play();
    }

    return(
        <>
            <Content>
                <Button className='btn' onClick={() => {click()}}>
                    <img src={imgSom} className='img' alt='icon'/>
                </Button>
                    <img src={img} className='img2' alt='image'/>
            </Content>
        </>
    )
}