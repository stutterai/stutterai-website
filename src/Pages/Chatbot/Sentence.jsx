import React, { useState, useEffect, useRef } from "react";
import "./Sentence.css";
import axios from "axios";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faToggleOn,
  faToggleOff,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";

const TreatmentPopupsentence = ({ onClose }) => {
  const [isListening, setIsListening] = useState(false);
  const [isSlowMode, setIsSlowMode] = useState(false);
  const test = "He fixed the broken bicycle with some tools from the garage.";
  const currentWordIndex = useRef(0); // Using useRef for currentWordIndex
  const [completed, setCompleted] = useState(false);

  // Using useRef for sentence and words
  const sentenceRef = useRef("");
  const wordsRef = useRef([]);

  const { transcript, resetTranscript, listening } = useSpeechRecognition();

  useEffect(() => {
    if (isListening && !listening) {
      SpeechRecognition.startListening();
    }
  }, [isListening, listening]);

  const speakWord = (word) => {
    const speech = new SpeechSynthesisUtterance(word);
    speech.rate = isSlowMode ? 0.5 : 1.0;
    window.speechSynthesis.speak(speech);
  };

  useEffect(() => {
    if (transcript.includes(wordsRef.current[currentWordIndex.current])) {
      // Using .current to access the ref values
      currentWordIndex.current++;
      if (currentWordIndex.current === wordsRef.current.length - 1) {
        setCompleted(true);
      }
    }
  }, [transcript]);

  const getHighlightedWords = () => {
    return wordsRef.current.map((word, index) => (
      <span
        key={index}
        className={
          index < currentWordIndex.current ? "green-word" : "normal-word"
        }
      >
        {word}{" "}
      </span>
    ));
  };

  async function fetchData() {
    const username = "Isuru";
    // console.log("hi");

    try {
      const response = await axios.get(
        `https://stutterai-backend-3.onrender.com/treatment2`
      );
      const responseData = response.data.output;

      // console.log(responseData);
      if (sentenceRef.current === "") {
        // Using .current to access the ref value
        sentenceRef.current = responseData;
        // console.log("hi2");
        console.log(sentenceRef.current);
        wordsRef.current = sentenceRef.current.split(" ");
        console.log(wordsRef.current);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // Call the fetchData function directly
  fetchData();

  return (
    <div className="popup-overlay">
      <div className="popup-content-sentence">
        <div className="close-button-container">
          <button className="close_button" onClick={onClose}>
            X
          </button>
        </div>
        <div style={{ position: "relative", top: "-7px" }}>
          <div className="treatment_title">Enhance Your Vocal Skills</div>
          <p>
            {" "}
            Practice pronunciation and fluency with the following sentences.
          </p>
          <p>
            {listening
              ? "Listening for your word..."
              : "Click the microphone button to start training."}
          </p>

          <div>
            <div className="sentence">{getHighlightedWords()}</div>
            <div className="buttons_group">
              {completed ? (
                <div>
                  <div className="good-work-sentence">Good Work!</div>
                  <button className="treatment_buttons" onClick={onClose}>
                    Return to Chatbot
                  </button>
                </div>
              ) : (
                <>
                  <button
                    className="pronounce_buttons"
                    onClick={() => speakWord(wordsRef.curren[currentWordIndex])}
                  >
                    <FontAwesomeIcon
                      icon={faVolumeUp}
                      className="fa-volume-up"
                    />
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
                </>
              )}
            </div>
            {completed ? null : (
              <div className="recognized-speech">
                Recognized Speech:
                <span style={{ color: "red", fontWeight: "bold" }}>
                  {transcript}
                </span>
              </div>
            )}
            {completed ? null : (
              <button
                className="treatment_buttons"
                onClick={() => {
                  resetTranscript();
                  currentWordIndex.current = 0; // Update currentWordIndex using .current
                  setIsListening(!isListening);
                }}
              >
                {isListening ? "Stop" : "Start"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentPopupsentence;
