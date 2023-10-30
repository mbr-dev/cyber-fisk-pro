import Cookies from 'universal-cookie';
export const TrocaAtividade = (nivel, rodada, pontos, rodadaNivel) => {
  //rodada inicia em 0
  if (nivel === 0) {
    if (pontos === 2) {
      return "Muda nivel";
    } else if (rodada === 4) {
      return "Game over";
    } else {
      return "Continua";
    }
  }
  //médio
  if (nivel === 1) {
    if (rodada === 8) {
      if (pontos < 6) {
        return "Game over";
      } else {
        return "Muda nivel";
      }
    } else if (rodada === 7) {
      if (pontos === 10) {
        return "Muda nivel";
      } else if (rodadaNivel === 5 && pontos >= 6) {
        return "Muda nivel";
      } else {
        return "Continua";
      }
    } else {
      return "Continua";
    }
  } else if (nivel === 2) {
    //difícil
    if (rodada === 10) {
      return "Score";
    } else {
      return "Continua";
    }
  }
}

export const Score = (pontosF, pontosM, pontosD) => {
  const resF = pontosF * 10;
  const resM = pontosM * 5;
  const resD = ((pontosD / 3) * 10);
  const res = resF + resM + resD;
  console.log('resF: ', resF);
  console.log('resM: ', resM);
  console.log('resD: ', resD);
  console.log('res: ', res);
  return res;
}

export const ScoreFinal = (pontos, lesson, task) => {
  let msg = '';
  const cookies = new Cookies();
  if(pontos >= 70){
    //gravar e retornar a frequencia com q jogou o exercicio
    let valorRank = 0;
    if(localStorage.getItem(`cyber_pro_frequencia_${lesson}_${task}`)) {
      let frequencia = parseInt(localStorage.getItem(`cyber_pro_frequencia_${lesson}_${task}`));
      let oldRank = parseInt(localStorage.getItem("cyber_pro_rank"));
      frequencia++;

      if (frequencia === 4) {
        //localStorage.setItem(`cyber_pro_dolar`,10);
        cookies.set('dollar', 10);
      }else{
        //localStorage.setItem(`cyber_pro_dolar`,0);
        cookies.set('dollar', 0);
      }

      localStorage.setItem(`cyber_pro_frequencia_${lesson}_${task}`,frequencia);
      const rank = PontosRank(frequencia,oldRank);
      valorRank = rank;
      localStorage.setItem("cyber_pro_rank",rank);
    } else {
      localStorage.setItem(`cyber_pro_frequencia_${lesson}_${task}`,1);
      const rank = PontosRank(1,0);
      valorRank = rank;
      localStorage.setItem("cyber_pro_rank",rank);
    }
    msg = 'WellDone';
  }else{
    msg = 'GameOver';
  }
  return msg;
}

export const PontosRank = (jogadas, pontos) => {
  let res = pontos;
  if (jogadas > 3) {
    return pontos;
  } else if (jogadas === 1) {
    res = res + 14;
  } else {
    res = res + 17;
  }

  return res;
}

export const PointRule = (nivel, points) => {
  let tempPoints = points;
  if (nivel === 0) {
    tempPoints++;
  } else if (nivel === 1) {
    tempPoints += 2;
  } else {
    tempPoints += 3;
  }

  return tempPoints;
}
