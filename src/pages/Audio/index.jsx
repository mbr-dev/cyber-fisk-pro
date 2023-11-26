import { useState, useEffect } from "react";
import { useGlobalAudioPlayer } from "react-use-audio-player";

import { HeaderText } from "../../components/HeaderText";

import LivroImg from "./images/livro.png";
import RepeatImg from "./images/Repeat.png";
import LessImg from "./images/Less.png";
import MixImg from "./images/Mix.png";
import MoreImg from "./images/More.png";
import NextImg from "./images/Next.png";
import PlayImg from "./images/Play.png";
import PreviousImg from "./images/Previous.png";

import msc1 from "./audios/L4_Task1_D_0.mp3";
import msc2 from "./audios/L4_Task1_D_1.mp3";
import msc3 from "./audios/L4_Task1_D_2.mp3";
import msc4 from "./audios/L4_Task1_D_3.mp3";
import msc5 from "./audios/L4_Task1_D_4.mp3";
import msc6 from "./audios/L4_Task1_D_5.mp3";

import { Container, Left, Main, Right, Title, AreaAudio, ButtonsArea, ButtonsVArea, TimeAudio, Bar, TimeArea, BarVolume, Div, Bolinha, Carrega } from "./styled";

export const Audio = () => {
  const { load, volume, getPosition, setVolume } = useGlobalAudioPlayer();

  const [currentAudio, setCurrentAudio] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const songs = [msc1, msc2, msc3, msc4, msc5, msc6]

  const loadAudio = (index) => {
    if (index < 0) return;

    load(songs[index], {
      autoplay: true,
      onend: setCurrentAudio(index)
    });
  }

  const nextAudio = () => {
    const nextIndex = (currentAudio + 1) % songs.length;
    loadAudio(nextIndex);
  };

  const previousAudio = () => {
    const prevIndex = (currentAudio - 1 + songs.length) % songs.length;
    loadAudio(prevIndex);
  };

  const mixAudio = () => {
    const nextIndex = (currentAudio + 1) % songs.length;
    loadAudio(nextIndex);
  };

  const increaseVolume = () => {
    const newVolume = Math.min(volume + 0.1, 1);
    setVolume(newVolume);
  };

  const decreaseVolume = () => {
    const newVolume = Math.max(volume - 0.1, 0);
    setVolume(newVolume);
  };

  useEffect(() => {
    const updateProgress = () => {
      const position = getPosition();
      setCurrentTime(position);

      if (duration === 0) {
        const totalDuration = getPosition({ seek: true });
        setDuration(totalDuration);
      }
    };

    const progressInterval = setInterval(updateProgress, 100);

    return () => clearInterval(progressInterval);
  }, [getPosition, duration]);

  return (
    <Container>
      <HeaderText title="Audio" />

      <Main>
        <Left>
          <img src={LivroImg} alt="" />
        </Left>

        <Right>
          <Title>
            <p><strong>01.</strong> L5 - Listen - P40 - A.mp3</p>
          </Title>

          <AreaAudio>
            <TimeAudio>
              <Bar>
                <Carrega style={{ width: `${(currentTime / duration) * 100}%` }}>
                  <Bolinha></Bolinha>
                </Carrega>
              </Bar>
              <TimeArea>
                <p>00:01</p>
                <p>02:00</p>
              </TimeArea>
            </TimeAudio>

            <ButtonsArea>
              <button onClick={mixAudio}>
                <img src={MixImg} alt="" className="redBtn" />
              </button>
              <button onClick={previousAudio}>
                <img src={PreviousImg} alt="" className="changeBtn" />
              </button>
              <button onClick={() => loadAudio(0)}>
                <img src={PlayImg} alt="" className="playBtn" />
              </button>
              <button onClick={nextAudio}>
                <img src={NextImg} alt="" className="changeBtn" />
              </button>
              <button>
                <img src={RepeatImg} alt="" className="redBtn" />
              </button>
            </ButtonsArea>

            <ButtonsVArea>
              <button onClick={decreaseVolume}>
                <img src={LessImg} alt="" />
              </button>
              <BarVolume>
                {[...Array(20)].map((_, index) => {
                  return (
                    <Div key={index} className={index < volume * 20 ? "moreV" : ""}></Div>
                  )
                })}
              </BarVolume>
              <button onClick={increaseVolume}>
                <img src={MoreImg} alt="" />
              </button>
            </ButtonsVArea>
          </AreaAudio>
        </Right>
      </Main>
    </Container>
  )
}