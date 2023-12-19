import { useState, useEffect, useRef } from "react";

import { HeaderText } from "../../components/HeaderText";

import LivroImg from "./images/livro.png";
import RepeatImg from "./images/Repeat.png";
import LessImg from "./images/Less.png";
import MixImg from "./images/Mix.png";
import MoreImg from "./images/More.png";
import NextImg from "./images/Next.png";
import PlayImg from "./images/Play.png";
import PauseImg from "./images/Pause.png";
import PreviousImg from "./images/Previous.png";

import msc1 from "./audios/audio0.mp3";
import msc2 from "./audios/audio1.mp3";
import msc3 from "./audios/audio2.mp3";
import msc4 from "./audios/audio3.mp3";
import msc5 from "./audios/audio4.mp3";
import msc6 from "./audios/audio5.mp3";
import msc7 from "./audios/audio6.mp3";
import msc8 from "./audios/audio7.mp3";
import msc9 from "./audios/audio8.mp3";
import msc10 from "./audios/audio9.mp3";

import { Container, Left, Main, Right, Title, AreaAudio, ButtonsArea, ButtonsVArea, TimeAudio, Bar, TimeArea, BarVolume, Div, Bolinha, Carrega } from "./styled";
import { defaultTheme } from "../../themes/defaultTheme";

export const Audio = () => {
  const songs = [msc1, msc2, msc3, msc4, msc5, msc6, msc7, msc8, msc9, msc10];
  const audioRef = useRef(null);

  const [currentAudio, setCurrentAudio] = useState(0);
  const [mixAudio, setMixAudio] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [shuffledIndices, setShuffledIndices] = useState(Array.from({ length: songs.length }, (_, index) => index));
  const [volume, setVolume] = useState(10);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handlePlayAudio = () => {
    setIsPlaying(true);
    playAudio();
  }

  const handlePause = () => {
    setIsPlaying(false);

    if (audioRef.current) {
      audioRef.current.pause();
    }
  }

  const handleNextAudio = () => {
    setCurrentAudio(state => (state + 1) % songs.length);
  };

  const handlePreviousAudio = () => {
    setCurrentAudio(state => (state - 1 + songs.length) % songs.length);
  };

  const handleMixAudio = () => {
    setMixAudio(!mixAudio);

    const newShuffledIndices = Array.from({ length: songs.length }, (_, index) => index);
    for (let i = newShuffledIndices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newShuffledIndices[i], newShuffledIndices[j]] = [newShuffledIndices[j], newShuffledIndices[i]];
    }
  
    setShuffledIndices(newShuffledIndices);
  };

  const handleRepeat = () => {
    setIsRepeat(!isRepeat);
  }

  const handleEnded = () => {
    if (isRepeat) {
      audioRef.current.currentTime = 0;
      handlePlayAudio();
    } else {
      setCurrentAudio((prevAudio) => (prevAudio + 1) % songs.length);
    }
  };

  const handleVolumeUp = () => {
    if (audioRef.current) {
      const newVolume = Math.min(volume + 1, 10);
      setVolume(newVolume);
      audioRef.current.volume = newVolume / 10;
    }
  };

  const handleVolumeDown = () => {
    if (audioRef.current) {
      const newVolume = Math.max(volume - 1, 0);
      setVolume(newVolume);
      audioRef.current.volume = newVolume / 10;
    }
  };

  const timeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);

      if (!isNaN(duration) && duration !== Infinity && duration !== 0) {
        let newProgress = progress;
        newProgress = Math.floor((audioRef.current.currentTime / duration) * 100);
        setProgress(newProgress);
      }
    }
  };

  const durationChange = () => {
    if (audioRef.current) {
      let time = duration;
      time = audioRef.current.duration;
      setDuration(time);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("ended", handleEnded);
      return () => {
        audioRef.current.removeEventListener("ended", handleEnded);
      };
    }
  }, [isRepeat, currentAudio]);

  useEffect(() => {
    if (audioRef.current) {
      const shuffledIndex = mixAudio ? shuffledIndices[currentAudio] : currentAudio;
      audioRef.current.src = songs[shuffledIndex];
      playAudio();
      setProgress(0);
      setDuration(0);
      setCurrentTime(0);
    }
  }, [currentAudio, mixAudio, shuffledIndices]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", timeUpdate);
      audioRef.current.addEventListener("durationchange", durationChange);

      return () => {
        audioRef.current.removeEventListener("timeupdate", timeUpdate);
        audioRef.current.removeEventListener("durationchange", durationChange);
      };
    }
  }, [audioRef.current]);

  useEffect(() => {
    if (isRepeat) {
      playAudio();
    }
  }, [isRepeat])

  return (
    <Container>
      <HeaderText title="Audio" />

      <Main>
        <audio ref={audioRef} />

        <Left>
          <img src={LivroImg} alt="" />
        </Left>

        <Right>
          <Title>
            <p><strong>{mixAudio ? (shuffledIndices[currentAudio] + 1) : currentAudio + 1}.</strong> L5 - Listen - P40 - A.mp3</p>
          </Title>

          <AreaAudio>
            <TimeAudio>
              <Bar>
                <Carrega style={{ width: `${progress}%` }}>
                  <Bolinha></Bolinha>
                </Carrega>
              </Bar>
              <TimeArea>
                <p>{formatTime(currentTime)}</p>
                <p>{formatTime(duration)}</p>
              </TimeArea>
            </TimeAudio>

            <ButtonsArea>
              <button onClick={handleMixAudio} style={{
                borderColor: mixAudio && defaultTheme["red-200"]
              }}>
                <img src={MixImg} alt="" className="redBtn" />
              </button>
              <button onClick={handlePreviousAudio}>
                <img src={PreviousImg} alt="" className="changeBtn" />
              </button>
              {!isPlaying ? 
                <button onClick={handlePlayAudio} className="playBtn">
                  <img src={PlayImg} alt="" />
                </button>
                :
                <button onClick={handlePause} className="playBtn">
                  <img src={PauseImg} alt="" />
                </button>
              }
              <button onClick={handleNextAudio}>
                <img src={NextImg} alt="" className="changeBtn" />
              </button>
              <button onClick={handleRepeat} style={{
                borderColor: isRepeat && defaultTheme["red-200"]
              }}>
                <img src={RepeatImg} alt="" className="redBtn" />
              </button>
            </ButtonsArea>

            <ButtonsVArea>
              <button onClick={handleVolumeDown}>
                <img src={LessImg} alt="" />
              </button>
              <BarVolume>
                {[...Array(20)].map((_, index) => {
                  return (
                    <Div key={index} className={index < volume * 2 ? "moreV" : ""}></Div>
                  )
                })}
              </BarVolume>
              <button onClick={handleVolumeUp}>
                <img src={MoreImg} alt="" />
              </button>
            </ButtonsVArea>
          </AreaAudio>
        </Right>
      </Main>
    </Container>
  )
}