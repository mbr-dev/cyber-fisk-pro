import React, { useState, useContext, useEffect } from 'react';
import Content from './style';
import Button from "@mui/material/Button";
import { TitleLesson } from '../titleLesson';
import { SubtitleLesson } from '../subtitleLesson';
import { LessonContext } from '../../context/lesson';
import { L1_T1_Dificil } from '../../utils/lesson1_Task1';
import { Score, PontosRank, TrocaAtividade } from '../../utils/regras';

export const Game3 = (props) => {
    const [idClick, setIdClick] = useState([0,1,2]);
    const {setNewContainer, setNewPontos, rodadaGeral, setNewRodada, pontosD, pontosF, pontosM} = useContext(LessonContext);
    const [rodada, setRodada] = useState(0);
    const [pergunta, setPergunta] = useState('');
    const [sortNum, setSortNum] = useState([]);
    const [respostas, setRespostas] = useState([]);
    const [acertos, setAcertos] = useState(0);
    const [erros, setErros] = useState(0);
    const [bloqueia, setBloqueia] = useState(true);


    const loadLesson = () => {
        const tam = L1_T1_Dificil.length;
        let temp = [];
        for(let a = 0; a < tam; a++){
            temp.push(a);
        }
        temp = temp.sort(() => Math.random() - 0.5);
        setSortNum(temp);
        setPergunta(L1_T1_Dificil[temp[rodada]].pergunta);
        let tempResp = [];
        let tempSortNum = idClick;
        tempSortNum = tempSortNum.sort(() => Math.random() - 0.5);
        setIdClick(tempSortNum);
        for(let a = 0; a < 3; a ++){
            tempResp.push(L1_T1_Dificil[temp[rodada]].resposta[tempSortNum[a]]);
        }
        setRespostas(tempResp);
        setBloqueia(false);
    }

    const newRodada = (num) => {
        setPergunta(L1_T1_Dificil[sortNum[num]].pergunta);
        let tempResp = [];
        let tempSortNum = idClick;
        tempSortNum = tempSortNum.sort(() => Math.random() - 0.5);
        setIdClick(tempSortNum);
        for(let a = 0; a < 3; a ++){
            tempResp.push(L1_T1_Dificil[sortNum[num]].resposta[tempSortNum[a]]);
        }
        setRespostas(tempResp);
        setBloqueia(false);
    }

    const click = (id) =>{
        if(bloqueia){
            return;
        }

        setBloqueia(true);
        let tempA = acertos;
        if(idClick[id] === 0){
            tempA = tempA + 3;
            setNewPontos(2,(tempA));
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
        //nivel, rodada, pontos, rodadaNivel
        const regra = TrocaAtividade(2,tempGeral,tempA,tempR);
        if(regra === "Continua"){
            setTimeout(() =>{
                newRodada(tempR);
            },500);
        }else if(regra === "Score"){
            setTimeout(() =>{
                const scoreFinal = Score(pontosF, pontosM, pontosD);
                let valorRank = 0;
                if(scoreFinal >= 70){
                    if(localStorage.getItem('cyber_pro_frequencia_task1')){
                        let frequencia = parseInt(localStorage.getItem('cyber_pro_frequencia_task1'));
                        let oldRank = parseInt(localStorage.getItem('cyber_pro_rank'));
                        frequencia++;
                        if(frequencia === 4){
                            alert(`Parabéns voce ganhou: 10 Fisk Dollars`);
                        }
                        localStorage.setItem('cyber_pro_frequencia_task1',frequencia);
                        const rank = PontosRank(frequencia,oldRank);
                        valorRank = rank;
                        localStorage.setItem('cyber_pro_rank',rank);
                    }else{
                        localStorage.setItem('cyber_pro_task2','1');
                        localStorage.setItem('cyber_pro_msg_task2','1');
                        localStorage.setItem('cyber_pro_frequencia_task1',1);
                        const rank = PontosRank(1,0);
                        valorRank = rank;
                        localStorage.setItem('cyber_pro_rank',rank);
                    }
                }
                alert(`SCORE: ${scoreFinal}%`);
                alert(`PONTOS PARA O RANKING: ${valorRank}`);
                setNewContainer(1);
            },500);
        }
    }

    const btn = (el, index) => {
        return(
            <Button className='btn' onClick={() => {click(index)}}>
                <span className='desc'>{el}</span>
            </Button>
        )
    }
    
    useEffect(() => { 
        loadLesson();
    }, [])

    return(
        <>
            <TitleLesson title='Choose the correct alternative'/>
            <SubtitleLesson title={pergunta}/>
            <Content>
                {respostas.map((x, index) => {
                    return(
                        btn(x, index)
                    )
                })}
            </Content>
        </>
    )
}