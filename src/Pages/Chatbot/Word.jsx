import React, { useState, useEffect, useRef } from "react";
import "./Word.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faToggleOn,
  faToggleOff,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";

const TreatmentPopup = ({ onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showGoodWork, setShowGoodWork] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSlowMode, setIsSlowMode] = useState(false);

  const wordsRef = useRef([]);
  const [lastDetectedWord, setLastDetectedWord] = useState("");
  const [totalWords, setTotalWords] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const { transcript, resetTranscript, listening } = useSpeechRecognition();

  console.log(isListening);

  useEffect(() => {
    async function fetchData() {
      const username = "Isuru";
      try {
        const response = await axios.get(
          `https://stutterai-backend-2.onrender.com/treatment`
        );
        const responseData = response.data.output;
        wordsRef.current = responseData;

        setTotalWords(responseData.length);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [wordsRef]);

  //console.log(words)

  // const fetchData = async () => {
  //   const username = "Isuru";
  //   try {
  //     const response = await axios.get(`http://localhost:8000/treatment`);
  //     const responseData = response.data.output;
  //     setWords(responseData)

  //     console.log(responseData);
  //     // console.log(words)
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // }

  // fetchData();

  // setWords(['and', 'Love', 'brainge', 'Around', 'Voice', 'Cross', 'Sign', 'cradge', 'mart']);
  //console.log(words)

  useEffect(() => {
    if (
      transcript &&
      wordsRef.current[currentIndex] &&
      transcript.toLowerCase() === wordsRef.current[currentIndex].toLowerCase()
    ) {
      if (currentIndex === wordsRef.current.length - 1) {
        setShowGoodWork(true);
        setIsFinished(true);
      } else {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setLastDetectedWord(transcript);
        resetTranscript();
        setIsListening(false);
      }
    } else if (transcript) {
      setLastDetectedWord(transcript);
      setCurrentIndex(0);
      resetTranscript();
      setIsListening(false);
    }
  }, [transcript, currentIndex, resetTranscript]);

  console.log(isListening);

  useEffect(() => {
    if (isListening) {
      if (!isFinished) {
        SpeechRecognition.startListening();
      }
    } else {
      SpeechRecognition.stopListening();
    }
  }, [isListening, isFinished]);

  const speakWord = (word) => {
    const speech = new SpeechSynthesisUtterance(word);
    speech.rate = isSlowMode ? 0.5 : 1.0;
    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="close-button-container">
          <button className="close_button" onClick={onClose}>
            X
          </button>
        </div>
        <div style={{ position: "relative", top: "-7px" }}>
          <div className="treatment_title">RCTO Rehearsing</div>
          <p>Read the following words aloud.</p>
          <p>
            If you make a mistake, the exercise will return to the first word.
          </p>
          <p>
            {listening
              ? "Listening for your word..."
              : "Click the microphone button to start training."}
          </p>
          <div className={`word-count ${currentIndex === 0 ? "red" : ""}`}>
            Word {currentIndex + 1} of {totalWords}
          </div>

          {showGoodWork ? (
            <div>
              <div className="good-work">Good Work!</div>
              <button className="treatment_buttons" onClick={onClose}>
                Return to Chatbot
              </button>
            </div>
          ) : (
            <div>
              <div className="word">{wordsRef.current[currentIndex]}</div>

              <div className="buttons_group">
                <button
                  className="pronounce_buttons"
                  onClick={() => speakWord(wordsRef.current[currentIndex])}
                >
                  <FontAwesomeIcon icon={faVolumeUp} className="fa-volume-up" />
                </button>
                <button
                  className="speed_button"
                  onClick={() => setIsSlowMode(!isSlowMode)}
                >
                  {isSlowMode ? (
                    <span>
                      <FontAwesomeIcon
                        icon={faToggleOn}
                        className="fa-toggle-on"
                      />
                    </span>
                  ) : (
                    <span>
                      <FontAwesomeIcon
                        icon={faToggleOff}
                        className="fa-toggle-off"
                      />
                    </span>
                  )}
                  <span
                    style={{
                      fontSize: "17px",
                      position: "relative",
                      top: "-2px",
                      marginLeft: "5px",
                    }}
                  >
                    Slow
                  </span>
                </button>
              </div>

              <div className="recognized-speech">
                Recognized Speech:
                <span style={{ color: "red", fontWeight: "bold" }}>
                  {lastDetectedWord}
                </span>
              </div>

              <button
                className="treatment_buttons"
                onClick={() => setIsListening(!isListening)}
              >
                {isListening ? "Stop" : "Start"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TreatmentPopup;
