import React, { useState } from "react";
import "./styles.css";

var foodEmoji = {
  "🧁": "Cupcake",
  "🍷": "Wine",
  "🥨": "Pretzel",
  "🥯": "Bagel",
  "🥞": "Pancakes",
  "🌯": "Burrito",
  "🍿": "Popcorn",
  "🧀": "Cheese",
  "🍕": "Pizza",
  "🍔": "Burger",
  "🌭": "Hot Dog",
  "🌮": "Taco",
  "🥓": "Bacon",
  "🍺": "Beer",
  "🥐": "Croissant",
  "🍣": "Sushi",
  "🍗": "Chicken Leg",
  "🍝": "Spaghetti",
  "🥟": "Dumpling",
  "🎂": "Birthday Cake",
  "🍮": "Custard",
  "🍛": "Curry Rice",
  "🍙": "Rice Ball",
  "🥗": "Green Salad"
};

var emojis = Object.keys(foodEmoji);

export default function App() {
  const imageUrl =
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80";

  const [emoji, SetEmoji] = useState("");
  const [meaning, setMeaning] = useState("Translation will appear here");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    SetEmoji(userInput);

    // var meaning = emojiDictionary[userInput];

    if (userInput in foodEmoji) {
      setMeaning(foodEmoji[userInput]);
    } else {
      setMeaning("Sorry!!! Unable to recognise this emoji");
    }
  }
  function emojiClickHandler(userInput) {
    setMeaning(foodEmoji[userInput]);
  }

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <h1> Check out Food Emojis </h1>
      <input
        onChange={emojiInputHandler}
        value={emoji}
        placeholder={"Search your emoji"}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />
      <h2> {emoji} </h2>
      <h3> {meaning} </h3>
      {emojis.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}
