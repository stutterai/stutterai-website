import React, { useState, useEffect } from "react";
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
} from "@fortawesome/free-solid-svg-icons"; // Import Font Awesome icons

const TreatmentPopup = ({ onClose }) => {
  const vowels = [
    "/i/ as in 'beet'",
    "/e/ as in 'cake'",
    "/æ/ as in 'cat'",
    "/oʊ/ as in 'boat'",
    "/aɪ/ as in 'ice'",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showGoodWork, setShowGoodWork] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSlowMode, setIsSlowMode] = useState(false); // Track slow mode

  const { transcript, resetTranscript, listening } = useSpeechRecognition();

  useEffect(() => {
    async function fetchData() {
      const username = "Isuru";
      try {
        const response = await axios.get(`http://localhost:8000/treatment`);
        const responseData = response.data.output;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (transcript.toLowerCase() === vowels[currentIndex].toLowerCase()) {
      if (currentIndex === vowels.length - 1) {
        setShowGoodWork(true);
      } else {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        resetTranscript();
      }
    } else if (transcript) {
      // Incorrect pronunciation
      setCurrentIndex(0); // Move to the first vowel
      resetTranscript();
    }
  }, [transcript, currentIndex, resetTranscript]);

  const speakVowel = (vowel) => {
    const speech = new SpeechSynthesisUtterance(vowel);
    speech.rate = isSlowMode ? 0.5 : 1.0; // Adjust the rate based on slow mode
    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div class="close-button-container">
          <button className="close_button" onClick={onClose}>
            X
          </button>
        </div>
        <div style={{ position: "relative", top: "-7px" }}>
          <div className="treatment_title">Vowel Mastery</div>
          <p>Pronounce the following vowel sounds accurately.</p>

          {showGoodWork ? (
            <div>
              <div className="good-work">Good Work!</div>
              <button className="treatment_buttons" onClick={onClose}>
                Close
              </button>
            </div>
          ) : (
            <div>
              <div className="vowel">{vowels[currentIndex]}</div>

              <div className="buttons_group">
                <button
                  className="pronounce_buttons"
                  onClick={() => speakVowel(vowels[currentIndex])}
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

              {currentIndex === vowels.length - 1 ? (
                <button className="treatment_buttons" onClick={onClose}>
                  Return to Chatbot
                </button>
              ) : (
                <button
                  className="treatment_buttons"
                  onClick={() => {
                    setCurrentIndex((prevIndex) => prevIndex + 1);
                    resetTranscript();
                  }}
                >
                  Next
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TreatmentPopup;
