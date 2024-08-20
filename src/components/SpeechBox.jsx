import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { CopyToClipboard } from "react-copy-to-clipboard";

const SpeechBox = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    interimTranscript,
    finalTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const [response, setResponse] = useState("");

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const startListening = () => {
    SpeechRecognition.startListening({
      continuous: true,
    });
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
  };

  const handleTranslate = async () => {
    const aiResponse = await getOpenAIResponse(transcript);
    setResponse(aiResponse.choices[0].text);
  };

  return (
    <div className="speechBox">
      <textarea
        className="textArea"
        value={transcript ? transcript : finalTranscript}
      ></textarea>
      <div className="actions">
        <CopyToClipboard text={finalTranscript}>
          <button className="btn-primary">Copy</button>
        </CopyToClipboard>

        <button className="btn-primary" onClick={startListening}>
          Start Listening
        </button>

        <button className="btn-primary" onClick={stopListening}>
          Stop Listening
        </button>
      </div>
      <p>{listening ? "Listening....🎶" : "Not Listening...🤷‍♀️"}</p>
      <p>{response}</p>
    </div>
  );
};

export default SpeechBox;
