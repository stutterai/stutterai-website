import React, { useState } from "react";
import "./DragAndDropQuestion.css";
import audio1 from "./assets/sample-0.mp3";
import audio2 from "./assets/sample-0.mp3";

const DragAndDropQuestion = ({ onClose }) => {
  const [draggedItem, setDraggedItem] = useState(null);
  const [rightBox1, setRightBox1] = useState("GENTLE ONSET");
  const [rightBox2, setRightBox2] = useState("CREAKY ONSET");
  const [message, setMessage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showPassMessage, setShowPassMessage] = useState(false);

  const onDragStart = (event, item) => {
    setDraggedItem(item);
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", JSON.stringify(item));
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDropGentle = (event) => {
    event.preventDefault();
    const droppedItemName = JSON.parse(
      event.dataTransfer.getData("text/plain")
    );

    if (droppedItemName === "Audio 2") {
      setRightBox1("Audio 2");
      if (rightBox2 === "Audio 1") {
        setMessage("Success! Both items placed correctly.");
        setShowNextButton(true);
        setShowPassMessage(true);
      }
    } else {
      setMessage("Oops! Try again.");
      setShowNextButton(false);
      setShowPassMessage(false);
    }
  };

  const handleDropCreaky = (event) => {
    event.preventDefault();
    const droppedItemName = JSON.parse(
      event.dataTransfer.getData("text/plain")
    );

    if (droppedItemName === "Audio 1") {
      setRightBox2("Audio 1");
      if (rightBox1 === "Audio 2") {
        setMessage("Success! Both items placed correctly.");
        setShowNextButton(true);
        setShowPassMessage(true);
      }
    } else {
      setMessage("Oops! Try again.");
      setShowNextButton(false);
      setShowPassMessage(false);
    }
  };

  const handleNextPage = () => {
    if (currentPage < 3) {
      setCurrentPage(currentPage + 1);
      setShowNextButton(false);
      setShowPassMessage(false);
      setRightBox1("GENTLE ONSET");
      setRightBox2("CREAKY ONSET");
      setMessage(null);
    }
  };

  return (
    <div className="popup-overlay2">
      <div className="popup-content2">
        <div className="close-button-container">
          <button className="close_button" onClick={onClose}>
            X
          </button>
        </div>
        <div style={{ position: "relative", top: "-7px" }}>
          <div className="treatment_title">Keep It Smooth</div>
          <p>
            Remeber, the gentle onset is not supposed to be forced. When air is
            forcefully pushed out, our vocal cords produce something called a
            "glottal fry". This results in a creaky sound coming from our vocal
            cords, like you had a score throat. which recording is portraying
            the "creaky" sound?
          </p>
          <label>
            Sound A
            <audio controls>
              <source src={audio1} type="audio/mpeg" />
            </audio>
          </label>
          <label>
            Sound B
            <audio controls>
              <source src={audio2} type="audio/mpeg" />
            </audio>
          </label>
          <div className="drag-and-drop-container">
            <div className="left-boxes">
              <div
                key="Audio 1"
                className="drag-item"
                draggable
                onDragStart={(e) => onDragStart(e, "Audio 1")}
              >
                Sound A
              </div>
              <div
                key="Audio 2"
                className="drag-item"
                draggable
                onDragStart={(e) => onDragStart(e, "Audio 2")}
              >
                Sound B
              </div>
            </div>
            <div className="right-boxes">
              <div
                className="drop-container"
                onDragOver={(e) => handleDragOver(e)}
                onDrop={(e) => handleDropGentle(e)}
              >
                {rightBox1}
              </div>
              <div
                className="drop-container"
                onDragOver={(e) => handleDragOver(e)}
                onDrop={(e) => handleDropCreaky(e)}
              >
                {rightBox2}
              </div>
            </div>
          </div>
          {message && (
            <p className={showPassMessage ? "pass" : "error"}>{message}</p>
          )}
          {currentPage < 3 && showNextButton && (
            <button className="treatment_buttons" onClick={handleNextPage}>
              Next
            </button>
          )}
          {currentPage === 3 && showPassMessage && (
            <p className="pass" style={{ color: "green" }}>
              PASSED
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DragAndDropQuestion;
