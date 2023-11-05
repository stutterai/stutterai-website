import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./AudioExercise.css"; // Import your custom CSS

const AudioExercise = ({ onClose }) => {
  const audioFiles = [
    require("./assets/sample-0.mp3"),
    require("./assets/sample-1.mp3"),
    require("./assets/sample-2.mp3"),
  ];

  const correctAnswers = ["gentle", "breathy", "hard"]; // Set the correct answers for each audio

  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [canProceed, setCanProceed] = useState(false); // New state to track if the user can proceed

  const handleAnswerSelect = (event) => {
    setSelectedAnswer(event.target.value);

    // Check if the selected answer is correct and update the canProceed state
    setCanProceed(event.target.value === correctAnswers[currentAudioIndex]);
  };

  const isAnswerCorrect = selectedAnswer === correctAnswers[currentAudioIndex];
  const isAnswerIncorrect = selectedAnswer !== null && !isAnswerCorrect;

  const hasNextAudio = currentAudioIndex < audioFiles.length - 1;

  const handleNextClick = () => {
    if (canProceed && hasNextAudio) {
      setCurrentAudioIndex(currentAudioIndex + 1);
      setSelectedAnswer(null);
      setCanProceed(false); // Reset canProceed after moving to the next audio
    }
  };

  const isSuccess =
    currentAudioIndex === audioFiles.length - 1 && isAnswerCorrect;
  const isLastAudio = currentAudioIndex === audioFiles.length - 1;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2 className="audio-exercise-title">What Do You Hear?</h2>

        <audio controls className="audio-player1">
          <source src={audioFiles[currentAudioIndex]} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        <div className="question1">
          <p>
            Play the recoding and listen carefully. How does this audio clip
            sounds to you?
          </p>
          <p>Select one answer below</p>
          <div className="answer-options1">
            <label>
              <input
                type="radio"
                value="gentle"
                checked={selectedAnswer === "gentle"}
                onChange={handleAnswerSelect}
              />
              gentle
            </label>
            <label>
              <input
                type="radio"
                value="breathy"
                checked={selectedAnswer === "breathy"}
                onChange={handleAnswerSelect}
              />
              breathy
            </label>
            <label>
              <input
                type="radio"
                value="hard"
                checked={selectedAnswer === "hard"}
                onChange={handleAnswerSelect}
              />
              hard
            </label>
            <label>
              <input
                type="radio"
                value="creaky"
                checked={selectedAnswer === "creaky"}
                onChange={handleAnswerSelect}
              />
              creaky
            </label>
          </div>
        </div>

        {isAnswerCorrect && (
          <p className="answer-feedback1 correct1">Answer is correct!</p>
        )}

        {isAnswerIncorrect && (
          <p className="answer-feedback1 incorrect1">Answer is incorrect.</p>
        )}

        {isSuccess && (
          <div>
            <p className="success-message1">You are successful!</p>
            <button className="btn btn-success close-button" onClick={onClose}>
              Close
            </button>
          </div>
        )}

        {isLastAudio ? null : (
          <button
            className="btn btn-primary next-button"
            onClick={handleNextClick}
            disabled={!canProceed}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default AudioExercise;
