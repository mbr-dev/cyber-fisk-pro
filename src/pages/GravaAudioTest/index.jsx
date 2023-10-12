import { Play } from "lucide-react";
import { useEffect, useState } from "react";
import ruidoIcon from "../../assets/ruido2.svg";
import { useAudioRecorder, AudioRecorder } from "react-audio-voice-recorder";
import { ButtonRec } from "./styles";

export const GravaAudioTest = () => {
  const recorderControls  = useAudioRecorder();
  const [shouldRenderButton, setShouldRenderButton] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);

  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    setAudioUrl(url);
  };

  useEffect(() => {
    !recorderControls.isRecording ? setShouldRenderButton(false) : setShouldRenderButton(true);
  }, [recorderControls])

  const handlePlay = () => {
    alert("tocando audio");
    const audio = new Audio(audioUrl);

    audio.play();
  }

  return (
    <div>
      <h1>Gravar audio</h1>
      <div style={{
        opacity: 0
      }}>
        <AudioRecorder 
          onRecordingComplete={(blob) => addAudioElement(blob)}
          recorderControls={recorderControls}
          downloadOnSavePress={true}
          downloadFileExtension="webm"
        />
      </div>
      
      {!recorderControls.isRecording ? 
        <button onClick={recorderControls.startRecording}>
          gravar
        </button>
      :
        <button onClick={recorderControls.stopRecording}>
          parar
        </button>
      }
      
      {audioUrl && (
        <ButtonRec onClick={handlePlay}>
          <Play size={16} />
          <img src={ruidoIcon} className="ruido" alt="" />
        </ButtonRec>
      )}
    </div>
  )
}