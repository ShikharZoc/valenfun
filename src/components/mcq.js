import "../mcq.css";
import logo from "../assets/logo.png"
import { useState } from "react";

function Mcq({ onCorrect }) {
  const [selected, setSelected] = useState(null);

  const handleClick = (option) => {
    setSelected(option);

    if (option === "GF") {
      setTimeout(() => {
        onCorrect();
      }, 1000);
    } else {
      alert("Wrong answer bro 😂 Try again.");
    }
  };

  return (
    <div className="mcq-container">
      <img
      src={logo}
      alt="Show Logo"
      className="show-logo"
      />
      
      <div className="question-box">
        <h2>Who is this?</h2>
      </div>

      <div className="options">
        <button
          className={`option ${selected === "GF" ? "correct" : ""}`}
          onClick={() => handleClick("GF")}
        >
          GF
        </button>

        <button
          className={`option ${selected === "Mom" ? "wrong" : ""}`}
          onClick={() => handleClick("Mom")}
        >
          Mom
        </button>

        <button
          className={`option ${selected === "Dad" ? "wrong" : ""}`}
          onClick={() => handleClick("Dad")}
        >
          Dad
        </button>

        <button
          className={`option ${selected === "Other" ? "wrong" : ""}`}
          onClick={() => handleClick("Other")}
        >
          Other
        </button>
      </div>
    </div>
  );
}

export default Mcq;