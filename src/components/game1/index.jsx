import React, { useState, useContext,useEffect } from 'react';
import Content from './style';
import Button from "@mui/material/Button";
import { TitleLesson } from '../titleLesson';
import { SubtitleLesson } from '../subtitleLesson';
import { LessonContext } from '../../context/lesson';
import { L1_T1_Facil } from '../../utils/lesson1_Task1';
import { TrocaAtividade } from '../../utils/regras';
import { URL_HMLG } from '../../config/infos';

export const Game1 = (props) => {
    const [idClick, setIdClick] = useState([0,1,2]);
    const {setNewContainer, setNewPontos, setNewLesson, rodadaGeral, setNewRodada} = useContext(LessonContext);
    const [rodada, setRodada] = useState(0);
    const [pergunta, setPergunta] = useState('');
    const [sortNum, setSortNum] = useState([]);
    const [images, setImages] = useState([]);
    const [acertos, setAcertos] = useState(0);
    const [erros, setErros] = useState(0);
    const [bloqueia, setBloqueia] = useState(true);

    const loadLesson = () => {
        const tam = L1_T1_Facil.length;
        let temp = [];
        for(let a = 0; a < tam; a++){
            temp.push(a);
        }
        temp = temp.sort(() => Math.random() - 0.5);
        setSortNum(temp);
        setPergunta(L1_T1_Facil[temp[rodada]].pergunta);
        let tempImg = [];
        let tempSortNum = idClick;
        tempSortNum = tempSortNum.sort(() => Math.random() - 0.5);
        setIdClick(tempSortNum);
        console.log('URL_HMLG :: ', URL_HMLG);
        for(let a = 0; a < 3; a ++){            
            tempImg.push(`Images/pro/game1/F_${temp[rodada]}_${tempSortNum[a]}.png`);
        }
        setImages(tempImg);
        setBloqueia(false);
    }

    const newRodada = (num) => {
        setPergunta(L1_T1_Facil[sortNum[num]].pergunta);
        let tempImg = [];
        let tempSortNum = idClick;
        tempSortNum = tempSortNum.sort(() => Math.random() - 0.5);
        setIdClick(tempSortNum);
        for(let a = 0; a < 3; a ++){
            tempImg.push(`Images/pro/game1/F_${sortNum[num]}_${tempSortNum[a]}.png`);
        }
        setImages(tempImg);
        setBloqueia(false);
    }

    const click = (id) =>{
        if(bloqueia){
            return;
        }

        setBloqueia(true);
        let tempA = acertos;
        if(idClick[id] === 0){
            tempA++;
            setNewPontos(0,(tempA));
            setAcertos(tempA);
        }else{
            let tempE = erros;
            tempE++;
            setErros(tempE);
        }
        let tempR = rodada;
        tempR++;
        setRodada(tempR);
        let tempGeral = rodadaGeral;
        tempGeral++;
        setNewRodada(tempGeral);
        // const playAudio = new Audio(idClick[id] === 0 ? somAcerto : somErro);
        // playAudio.play();
        //troca de nivel
        if(tempA == 2){
            setTimeout(() =>{
                setNewLesson(1);
            },1000);
        }
        const regra = TrocaAtividade(0,tempGeral,tempA,tempR);
        if(regra === "Continua"){
            setTimeout(() =>{
                newRodada(tempR);
            },1000);
        }else if(regra === "Game over"){
            setNewPontos(0,0);
            setTimeout(() =>{
                alert('GAME OVER!!');
                setNewContainer(1);
            },1000);
        }else{
            //troca de nivel
            setTimeout(() =>{
                setNewLesson(1);
            },1000);
        }
    }
    
    const btn = (el,index) => {
        console.log('==>', index);
        return(
            <Button className='btn' onClick={() => {click(index)}}>
                <img src={`${URL_HMLG}${el}`} className='img'/>
            </Button>
        )
    }

    useEffect(() => { 
        loadLesson();
    }, [])

    return(
        <>
         {images.length > 0 ?
            <>
            <TitleLesson title='Choose the correct alternative'/>
                <SubtitleLesson title={pergunta}/>
                <Content>
                    {images.map((x,index)=>{
                        return btn(x,index);
                    })}
                </Content>
            </>
            : <></>
            }
           
        </>
    )
}