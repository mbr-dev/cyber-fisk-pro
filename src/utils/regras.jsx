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
  const cookies = new Cookies();
  const total = pontosF + pontosM + pontosD;
  cookies.set('totalPontos', total);
  console.log('pontosF: ', pontosF);
  console.log('pontosM: ', pontosM);
  console.log('pontosD: ', pontosD);
  console.log('total: ', total);
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
  let page = '';
  const cookies = new Cookies();
  const resInt = Math.floor(pontos);
  cookies.set('score', resInt);
  const total = cookies.get('totalPontos');
  console.log('TOTAL ==> ', total);
  if(pontos >= 70){
    //gravar e retornar a frequencia com q jogou o exercicio
    let valorRank = 0;
    let frequencia = parseInt(localStorage.getItem(`cyber_pro_frequencia_${lesson}_${task}`));
    frequencia++;
    if (frequencia > 3) {
      //localStorage.setItem(`cyber_pro_dolar`,10);
      cookies.set('dolar', 10);
      cookies.set('xp', 0);
    }else{
      //localStorage.setItem(`cyber_pro_dolar`,0);
      cookies.set('dolar', 0);
      cookies.set('xp', total);
    }
    //o usuario so vai ser redirecionado para a roleta se ele cumprir 100% na primeira tentativa
    if(pontos === 100 && frequencia === 1){
      page = 'SpinWheel';
    }else{
      page = 'WellDone';
    }
  }else{
    cookies.set("dolar", 0);
    cookies.set("xp", 0);
    page = 'GameOver';
  }

  return page;
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
