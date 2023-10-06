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