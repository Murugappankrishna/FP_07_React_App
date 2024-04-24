import React, { useState, useEffect } from "react";

const recognition = new (window.SpeechRecognition ||
  window.webkitSpeechRecognition)();

function MainContainer() {
  const [isRecording, setIsRecording] = useState(false);
  const [recognizedText, setRecognizedText] = useState("");
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  useEffect(() => {
    const markedScript = document.createElement("script");
    markedScript.src =
      "https://cdnjs.cloudflare.com/ajax/libs/marked/2.1.3/marked.min.js";
    markedScript.async = true;
    document.body.appendChild(markedScript);
    const dotlottieScript = document.createElement("script");
    dotlottieScript.src =
      "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
    dotlottieScript.type = "module";
    document.body.appendChild(dotlottieScript);
    return () => {
      document.body.removeChild(markedScript);
      document.body.removeChild(dotlottieScript);
    };
  }, []);

  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = "en-US";

  recognition.onresult = (event) => {
    const transcript = Array.from(event.results)
      .map((result) => result[0].transcript)
      .join("");

    if (!event.results[event.results.length - 1].isFinal) {
      return;
    }

    setRecognizedText(transcript);
    console.log("Final Transcript:", transcript);
  };

  recognition.onend = () => {
    if (isRecording) {
      recognition.start();
    }
  };

  const speakResponse = (text) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 1.0;
    window.speechSynthesis.cancel();
    synth.speak(utterance);
  };

  const processVoiceInput = (voiceText) => {
    const apiKey = "AIzaSyCphfZVhr47FOlRKlmff0tZHBYGEn5ETw8";
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;

    const promptObj = {
      contents: [
        {
          parts: [
            {
              text: voiceText,
            },
          ],
        },
      ],
    };
    const headers = {
      "Content-Type": "application/json",
    };

    fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(promptObj),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((jsonResponse) => {
        const candidates = jsonResponse.candidates;
        const content = candidates[0].content; // Assuming you want the first candidate
        const parts = content.parts;
        const output = parts.map((part) => part.text).join(" ");
        console.log(output);
        speakResponse(output);
        setRecognizedText(output); // Update the recognized text with the API response
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const startRecording = () => {
    setIsRecording(true);
    recognition.start();
  };

  const stopRecording = () => {
    setIsRecording(false);
    recognition.stop();
    processVoiceInput(recognizedText);
  };

  return (
    <div className="container">
      <h1 className="title">AI-Powered Pair Programming</h1>

      <div className="button-group">
        {!isButtonClicked ? (
          <button
            id="startButton"
            className="recordButton"
            onClick={() => {
              setIsButtonClicked(true);
              startRecording();
            }}
            disabled={isRecording}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="whitesmoke"
              className="bi bi-play-fill"
              viewBox="0 0 16 16"
            >
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
            </svg>
          </button>
        ) : (
          <button
            id="stopButton"
            className="recordButton"
            onClick={() => {
              setIsButtonClicked(false);
              stopRecording();
            }}
            disabled={!isRecording}
          >
            <dotlottie-player
              src="https://lottie.host/f8df0cc5-65c6-43df-aacb-3fdd2106d522/o8cFpoxn1y.json"
              background="transparent"
              speed="1"
              style={{ width: "54px", height: "54px" }}
              loop
              autoplay
            ></dotlottie-player>
          </button>
        )}
      </div>
      <div class="output-screen">
        <div id="output" class="outputText">
          {recognizedText}
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
