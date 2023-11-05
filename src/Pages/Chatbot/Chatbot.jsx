import "./App.css";
import { useEffect, useState, useRef, Button } from "react";
import React from "react";
import arrow from "./assets/arrow.png";
import bg from "./assets/bot-user4.png";
import mic from "./assets/mic.png";
import mic_on from "./assets/mic_on.png";
import axios from "axios";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Dna } from "react-loader-spinner";
import Word from "./Word";
import Vowel from "./Vowel";
import Sentence from "./Sentence";
import Sounds from "./vowel-sounds";
import Soundsdnd from "./vowel-sounds-dnd";
import upload from "./assets/upload.png";

function formatDatetime(value) {
  const date = new Date(value);
  const formattedDate = date.toLocaleDateString(); // Adjust date formatting as needed
  const formattedTime = date.toLocaleTimeString(); // Adjust time formatting as needed
  return `${formattedDate} ${formattedTime}`;
}

function addLeadingZeros(number) {
  // Convert the number to a string
  let numberStr = number.toString();

  // Calculate the number of leading zeros required
  const zerosToAdd = 3 - numberStr.length;

  // Add leading zeros
  for (let i = 0; i < zerosToAdd; i++) {
    numberStr = "0" + numberStr;
  }

  return numberStr;
}

function OutputMapper(type, value) {
  const stateMap = {
    "0": "No Stuttering Detected",
    "1": "Stuttering Detected",
  };
  const typeMap = {
    "000": "Interjection",
    "001": "Block",
    "010": "Repetition",
    "011": "Repetition-Block",
    "100": "Prolongation",
    "101": "Prolongation-Block",
    "110": "Prolongation-Repetition",
    "111": "Prolongation-Repetition-Block",
  };
  const severity = {
    1: "Very Mild",
    2: "Mild",
    3: "Moderate",
    4: "Severe",
    5: "Very Severe",
  };
  switch (type) {
    case "datetime":
      return formatDatetime(value);
    case "state":
      return stateMap[value];
    case "type":
      return `Your stuttering type is ${typeMap[addLeadingZeros(value)]}`;
    case "words":
      return `Your stuttered words are ${value.join(", ")}`;
    case "syllables":
      return `Your stuttered syllables are ${value.join(", ")}`;
    case "severity":
      return `Your stuttering severity is ${severity[value]}`;
    case "severity percentage":
      return `Your severity percentage is ${value.toFixed(2)}%`;
    case "likelihood words":
      return `Your possible words to  stutter are ${value.join(", ")}`;
    default:
      return value;
  }
}

function Chatbot() {
  const [userInput, setUserInput] = useState("");
  const [recording, setRecording] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      msg: "Hello, How can I help you ???",
      fromUser: false,
    },
  ]);
  const bottomRef = useRef(null);

  const url = "https://stutterai-backend-2.onrender.com";

  // const url = "http://localhost:8000"

  const themes = {
    primaryColor: "#0096FF",
    secondryColor: "#475569",
    primaryFontColor: "white",
    secondryFontColor: "#2C3333",
    logoColor: "#E7F6F2",
    backgroudImage: bg,
  };

  const commands = [
    {
      command: "clear",
      callback: ({ resetTranscript }) => resetTranscript(),
    },
    {
      command: "reset",
      callback: ({ resetTranscript }) => resetTranscript(),
    },
  ];

  const {
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition({ commands });

  // const outputMapper = () => {
  //   const [loading, setLoading] = useState(false);
  // }

  const handleSubmit = () => {
    if (userInput !== "") {
      setLoading(true);
      const queryObject = {
        question: userInput,
      };

      axios
        .post(`${url}/llm`, queryObject)
        // .post(`http://localhost:8000/llm`, queryObject)
        .then((response) => {
          setUserInput("");
          // Assuming resetTranscript and setMessages are defined elsewhere in your component
          resetTranscript();
          let overall_response = (
            <span>
              Certainly! {OutputMapper(response.data.ab, response.data.Output)}{" "}
              <br />
              {/* <b>Stuttering Action:</b> {response.data.ab} <br /> */}
            </span>
          );

          if (response.data.ab === "treatment") {
            if (response.data.Output === "RCTO") {
              overall_response = (
                <div>
                  {" "}
                  Certainly! Begin your vocal exercises: please initiate by
                  clicking the button below.
                  <button
                    onClick={openPopup}
                    className="blue-button"
                    style={{
                      fontSize: "15px",
                      padding: "5px 10px",
                      marginTop: "7px",
                    }}
                  >
                    Proposed Therapy
                  </button>
                  {isPopupOpen && <Word onClose={closePopup} />}
                </div>
              );
            } else if (response.data.Output === "sentence") {
              overall_response = (
                <div>
                  {" "}
                  Certainly! Begin your <b>{response.data.Output}</b> vocal
                  exercises: please initiate by clicking the button below.
                  <br />
                  <button
                    onClick={openPopup}
                    className="blue-button"
                    style={{
                      fontSize: "15px",
                      padding: "5px 10px",
                      marginTop: "7px",
                    }}
                  >
                    Proposed Therapy
                  </button>
                  {isPopupOpen && <Word onClose={closePopup} />}
                </div>
              );
            } else {
              overall_response = (
                <div>
                  {" "}
                  Certainly! Begin your <b>{response.data.Output}</b> vocal
                  exercises: please initiate by clicking the button below.
                  <br />
                  <button
                    onClick={openPopup}
                    className="blue-button"
                    style={{
                      fontSize: "15px",
                      padding: "5px 10px",
                      marginTop: "7px",
                    }}
                  >
                    Proposed Therapy
                  </button>
                  {isPopupOpen && <Word onClose={closePopup} />}
                </div>
              );
            }
          } else if (response.data.ab === "exercises") {
            overall_response = (
              <div>
                {" "}
                Certainly! Begin your <b>{response.data.Output}</b> vocal
                exercises: please initiate by clicking the button below.
                <br />
                <button
                  onClick={openPopup}
                  className="blue-button"
                  style={{
                    fontSize: "15px",
                    padding: "5px 10px",
                    marginTop: "7px",
                  }}
                >
                  Proposed Therapy
                </button>
                <button
                  onClick={openPopup}
                  className="blue-button"
                  style={{
                    fontSize: "15px",
                    padding: "5px 10px",
                    marginTop: "7px",
                    marginLeft: "10px",
                  }}
                >
                  Start RCTO
                </button>
                {isPopupOpen && <Word onClose={closePopup} />}
                <button
                  onClick={openPopup2}
                  className="blue-button"
                  style={{
                    fontSize: "15px",
                    padding: "5px 10px",
                    marginTop: "7px",
                    marginLeft: "10px",
                  }}
                >
                  Vowel Mastery
                </button>
                {isPopupOpen2 && <Vowel onClose={closePopup2} />}
                <button
                  onClick={openPopup3}
                  className="blue-button"
                  style={{
                    fontSize: "15px",
                    padding: "5px 10px",
                    marginTop: "7px",
                    marginLeft: "10px",
                  }}
                >
                  Sentence Workouts
                </button>
                {isPopupOpen3 && <Sentence onClose={closePopup3} />}
                <button
                  onClick={openPopup4}
                  className="blue-button"
                  style={{
                    fontSize: "15px",
                    padding: "5px 10px",
                    marginTop: "7px",
                    marginLeft: "10px",
                  }}
                >
                  Sound Choices
                </button>
                {isPopupOpen4 && <Sounds onClose={closePopup4} />}
                <button
                  onClick={openPopup5}
                  className="blue-button"
                  style={{
                    fontSize: "15px",
                    padding: "5px 10px",
                    marginTop: "7px",
                    marginLeft: "10px",
                  }}
                >
                  Sound Sorting
                </button>
                {isPopupOpen5 && <Soundsdnd onClose={closePopup5} />}
              </div>
            );
          }
          setMessages((prevMessages) => [
            ...prevMessages,
            // {
            //   msg: userInput, // Add user's input
            //   fromUser: true,
            // },
            {
              msg: overall_response,
              fromUser: false,
            },
          ]);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    setUserInput(transcript);
  }, [transcript]);

  const sendMessage = () => {
    if (userInput !== "") {
      setMessages([...messages, { msg: userInput, fromUser: true }]);
    }
  };

  if (!browserSupportsSpeechRecognition) {
    alert("Browser doesn't support speech recognition.");
  }

  const handleRecording = () => {
    if (recording) {
      SpeechRecognition.stopListening();
    } else {
      resetTranscript();
      setUserInput("");
      SpeechRecognition.startListening({ continuous: true });
    }
    setRecording(!recording);
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [predictionType, setPredictionType] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setMessages([
      ...messages,
      {
        msg: "File Uploaded ✔️",
        fromUser: true,
      },
    ]);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
        const response = await axios
          .post(`${url}/upload`, formData, {
            // .post("http://localhost:8000/upload", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then(
            (response) => {
              setUserInput("");
              resetTranscript();
              const stateMap = {
                "0": "No Stuttering Detected",
                "1": "Stuttering Detected",
              };
              const typeMap = {
                "000": " ",
                "001": "Block",
                "010": "Repetition",
                "011": "Repetition-Block",
                "100": "Prolongation",
                "101": "Prolongation-Block",
                "110": "Prolongation-Repetition",
                "111": "Prolongation-Repetition-Block",
              };
              const severity = {
                1: "Very Mild",
                2: "Mild",
                3: "Moderate",
                4: "Severe",
                5: "Very Severe",
              };
              setMessages([
                ...messages,
                {
                  msg: (
                    <span>
                      Hello {response.data.prediction.username}, I appreciate
                      you sharing the audio with me. After conducting a
                      comprehensive analysis, I'm ready to provide you with a
                      detailed report on your stuttering information. <br />{" "}
                      <br />
                      <b>Stuttering State:</b>{" "}
                      {stateMap[response.data.prediction.state]} <br />
                      <b>Stuttering Type:</b>{" "}
                      {typeMap[addLeadingZeros(response.data.prediction.type)]}{" "}
                      <br />
                      <b>Stuttering Severity:</b>{" "}
                      {severity[response.data.prediction.severity]} <br />
                      <b>Stuttering Words:</b>{" "}
                      {response.data.prediction.words.join(", ")} <br />
                    </span>
                  ),
                },
              ]);
              setLoading(false);
              setSelectedFile(null);
            },
            (error) => {
              console.log(error);
            }
          );

        const predictionValue = response.data.prediction.type;
        setPrediction(predictionValue);

        // Map prediction to type
        const typeMap = {
          "000": " ",
          "001": "Block",
          "010": "Repetition",
          "011": "Repetition-Block",
          "100": "Prolongation",
          "101": "Prolongation-Block",
          "110": "Prolongation-Repetition",
          "111": "Prolongation-Repetition-Block",
        };
        setPredictionType(typeMap[predictionValue] || "Unknown");
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isPopupOpen2, setPopupOpen2] = useState(false);
  const [isPopupOpen3, setPopupOpen3] = useState(false);
  const [isPopupOpen4, setPopupOpen4] = useState(false);
  const [isPopupOpen5, setPopupOpen5] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const openPopup2 = () => {
    setPopupOpen2(true);
  };

  const openPopup3 = () => {
    setPopupOpen3(true);
  };

  const openPopup4 = () => {
    setPopupOpen4(true);
  };

  const openPopup5 = () => {
    setPopupOpen5(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const closePopup2 = () => {
    setPopupOpen2(false);
  };

  const closePopup3 = () => {
    setPopupOpen3(false);
  };

  const closePopup4 = () => {
    setPopupOpen4(false);
  };

  const closePopup5 = () => {
    setPopupOpen5(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent the default behavior of "Enter" in a text field
      sendMessage(); // Call the function to add the user's message to the chat
      handleSubmit(); // Call your submit function
    }
  };

  //Live Audio Capturing
  const [audioBlob, setAudioBlob] = useState(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorderRef.current = mediaRecorder;
    audioChunksRef.current = [];

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        audioChunksRef.current.push(event.data);
      }
    };

    mediaRecorder.onstop = () => {
      const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" });
      setAudioBlob(audioBlob);
    };

    mediaRecorder.start();
  };

  const stopRecording = () => {
    const mediaRecorder = mediaRecorderRef.current;
    if (mediaRecorder && mediaRecorder.state === "recording") {
      mediaRecorder.stop();
      setMessages([
        ...messages,
        {
          msg: (
            <span>
              Recording Uploaded ✔️ <br />
              {/* <audio controls src={URL.createObjectURL(audioBlob)} /> */}
            </span>
          ),
          fromUser: true,
        },
      ]);
    }
    // setMessages([
    //   ...messages,
    //   {
    //     msg: (
    //       <span>
    //         <audio controls src={URL.createObjectURL(audioBlob)} /><br/>
    //         Recording Uploaded ✔️
    //       </span>
    //     ),
    //   },
    // ]);
  };

  const sendAudioToBackend = async () => {
    if (audioBlob) {
      const formData = new FormData();
      formData.append("file", audioBlob);

      try {
        // fetch('https://stutterai-backend-2.onrender.com/record', {
        //   const response = fetch('http://localhost:8000/record', {
        //   method: 'POST',
        //   body: formData,
        // })
        const response = await axios
          .post(`${url}/record`, formData, {
            // .post("http://localhost:8000/record", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then(
            (response) => {
              setUserInput("");
              console.log(response);
              resetTranscript();
              const stateMap = {
                "0": "No Stuttering Detected",
                "1": "Stuttering Detected",
              };
              const typeMap = {
                "000": " ",
                "001": "Block",
                "010": "Repetition",
                "011": "Repetition-Block",
                "100": "Prolongation",
                "101": "Prolongation-Block",
                "110": "Prolongation-Repetition",
                "111": "Prolongation-Repetition-Block",
              };
              const severity = {
                1: "Very Mild",
                2: "Mild",
                3: "Moderate",
                4: "Severe",
                5: "Very Severe",
              };
              setMessages([
                ...messages,
                {
                  msg: (
                    <span>
                      Hello {response.data.prediction.username}, I appreciate
                      you sharing the audio with me. After conducting a
                      comprehensive analysis, I'm ready to provide you with a
                      detailed report on your stuttering information. <br />{" "}
                      <br />
                      <b>Stuttering State:</b>{" "}
                      {stateMap[response.data.prediction.state]} <br />
                      <b>Stuttering Type:</b>{" "}
                      {typeMap[addLeadingZeros(response.data.prediction.type)]}{" "}
                      <br />
                      <b>Stuttering Severity:</b>{" "}
                      {severity[response.data.prediction.severity]} <br />
                      <b>Stuttering Words:</b>{" "}
                      {response.data.prediction.words.join(", ")} <br />
                    </span>
                  ),
                },
              ]);
              setLoading(false);
              setAudioBlob(null);
            },
            (error) => {
              console.log(error);
            }
          );

        const predictionValue = response.data.prediction.type;
        setPrediction(predictionValue);

        // Map prediction to type
        const typeMap = {
          "000": " ",
          "001": "Block",
          "010": "Repetition",
          "011": "Repetition-Block",
          "100": "Prolongation",
          "101": "Prolongation-Block",
          "110": "Prolongation-Repetition",
          "111": "Prolongation-Repetition-Block",
        };
        setPredictionType(typeMap[predictionValue] || "Unknown");
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  const handleRecordFile = (e) => {
    setSelectedFile(e.target.files[0]);
    setMessages([
      ...messages,
      {
        msg: (
          <span>
            <audio controls src={URL.createObjectURL(audioBlob)} />
            <br />
            Recording Uploaded ✔️
          </span>
        ),
      },
    ]);
  };

  return (
    <div
      className="min-h-screen bg-gray-100"
      style={{
        background: `url(${themes.backgroudImage})`,
        backgroundSize: "cover",
      }}
    >
      <br />
      <br />
      <div>
        {/* <button onClick={openPopup} className="blue-button">
          Vowel
        </button> */}

        {isPopupOpen && <Word onClose={closePopup} />}
        {isPopupOpen2 && <Vowel onClose={closePopup2} />}
        {isPopupOpen3 && <Sentence onClose={closePopup3} />}
        {isPopupOpen4 && <Sounds onClose={closePopup4} />}
        {isPopupOpen5 && <Soundsdnd onClose={closePopup5} />}
      </div>

      <div
        style={{
          width: "50%",
          margin: "0 auto",
          backgroundColor: " rgba(0, 0, 0, 0.6)",
          textAlign: "center",
          height: "650px",
          position: "float",
          borderRadius: "25px", // Adjust the border radius as needed
        }}
      >
        <div className="flex justify-end">
          <button
            className="text-white p-2 ml-2 mt-2 rounded-full hover:bg-gray-300 focus:outline-none"
            onClick={handleRefresh}
            style={{
              marginRight: "50px", // Adjust the margin here
              fontSize: "1.5rem", // Increase the font size
              minWidth: "60px",
            }} // Adjust the margin here
          >
            ↻
          </button>
        </div>

        <div
          style={{ backgroundColor: themes.primaryColor }}
          className={`w-full h-18  fixed flex justify-between`}
        ></div>

        <div className="py-32">
          <div
            className="max-w-2xl mx-auto space-y-12 grid grid-cols-1 overflow-y-auto scroll-smooth scrollbar-hide overflow-x-hidden"
            style={{ maxHeight: "30rem" }}
          >
            {loading && (
              <div className="flex justify-center items-center">
                <Dna
                  visible={true}
                  height="100"
                  width="100"
                  ariaLabel="dna-loading"
                  wrapperStyle={{}}
                  wrapperClass="dna-wrapper"
                />
              </div>
            )}
            <ul>
              {messages &&
                messages.map((message, idx) => {
                  return (
                    <div
                      key={idx}
                      className={`mt-3 ${
                        message.fromUser
                          ? "place-self-end text-right"
                          : "place-self-start text-left"
                      }`}
                    >
                      <div
                        className="mt-3  p-3 rounded-2xl"
                        style={{
                          backgroundColor: message.fromUser
                            ? themes.primaryColor
                            : "white",
                          color: message.fromUser
                            ? themes.primaryFontColor
                            : themes.secondryFontColor,
                          borderTopLeftRadius: !message.fromUser && 0,
                          borderTopRightRadius: message.fromUser && 0,
                        }}
                      >
                        <p className="break-words text-md">
                          {message.fromUser ? message.msg : message.msg}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </ul>
            <div ref={bottomRef} />
          </div>
        </div>

        <div
          className="justify-end items-center bg-white rounded-xl flex mx-96 my-3"
          style={{ width: "80%", marginLeft: "100px" }}
        >
          <button
            className="bg-white px-4"
            disabled={!browserSupportsSpeechRecognition}
            onClick={handleRecording}
          >
            {recording ? (
              <img className="w-10" src={mic_on} alt="mic" height="20px"></img>
            ) : (
              <img className="w-10" src={mic} alt="mic" height="20px"></img>
            )}
          </button>
          <input
            className="p-3 bg-white w-full rounded-l-md border-0 outline-none"
            placeholder="Ask your question..."
            type="text"
            id="message"
            name="message"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />

          {/* <input type="file" accept=".wav" onChange={handleFileChange} /> */}
          <div class="custom-file-input">
            <input
              type="file"
              accept=".wav"
              id="fileInput"
              onChange={handleFileChange}
            />

            <label
              for="fileInput"
              style={{
                display: "inline-block",
                margin: "2px 0 0 0", // 1cm down, 0 left, 0 right, 0 up
                padding: 0,
                border: "none",
                background: "none",
              }}
            >
              <img
                className="w-10"
                src={upload}
                alt="mic"
                height="20px"
                style={{ paddingRight: "5px", paddingTop: "5px" }}
              />
            </label>
          </div>

          {/* <button onClick={handleUpload}>Upload</button> */}
          {prediction !== null && (
            <div>
              <h2>Stuttering Type:</h2>
              <p>{predictionType}</p>
            </div>
          )}

          {/* {audioBlob ? (
        <>
          <audio controls src={URL.createObjectURL(audioBlob)} />
          <button onClick={sendAudioToBackend}><img className="w-10" src={rec_on} alt="rec" height="20px"></img></button>
        </>
      ) : ( */}
          <button onMouseDown={startRecording} onMouseUp={stopRecording}>
            <img className="w-10" src={mic_on} alt="mic" height="20px"></img>
          </button>
          {/* )} */}
          <button
            style={{ backgroundColor: themes.secondryColor }}
            className={`p-4 rounded-r-xl`}
            onClick={() => {
              sendMessage();
              handleUpload();
              handleSubmit();
              sendAudioToBackend();
            }}
          >
            <img className="w-8" src={arrow} alt="arrow" height="20px" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
