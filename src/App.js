import "./styles.css";
import React, { useState } from "react";
export default function App() {
  var emojiDictionary = {
    "😂": "Funny ",
    "😠": "Angry",
    "🤡": "Clown ",
    "❤": "Love",
    "😨": "Afraid"
  };

  var emojisweKnow = Object.keys(emojiDictionary);
  const [meaning, setmeaning] = useState("");
  function onchangehandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    setmeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setmeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter App </h1>
      <input onChange={onchangehandler}></input>
      <h2>{meaning}</h2>
      <h3>emojis we know </h3>
      {emojisweKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
