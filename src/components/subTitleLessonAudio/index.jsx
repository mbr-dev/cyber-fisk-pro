import React,  { useContext } from 'react';
import Content from './style';
import Button from "@mui/material/Button";
import imgSom from './images/Modo_de_isolamento.png';
import { LessonContext } from '../../context/lesson';

export const SubtitleLessonAudio = (props) => {
    const {newStatusPlay, playAudio} = useContext(LessonContext);

    const click = () =>{
        if(playAudio){
            return;
        }
        const audio = new Audio(props.audio);
        audio.play();
        newStatusPlay(true);
        audio.addEventListener('ended', () => {
            newStatusPlay(false);
        });
    }

    return(
        <>
            <Content>
                <Button className='btn' onClick={() => {click()}}>
                    <img src={imgSom} className='img' alt='icon'/>
                </Button>
            </Content>
        </>
    )
}