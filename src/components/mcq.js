import "./mcq.css";
import logo from "../assets/logo.png";
import { useState, useEffect } from "react";

function Mcq({ onCorrect }) {
  const [selected, setSelected] = useState(null);
  const [questionStep, setQuestionStep] = useState(1);
  const [mathQuestion, setMathQuestion] = useState(null);
  const [options, setOptions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [showWrong, setShowWrong] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [correctCount, setCorrectCount] = useState(0); // NEW

  const generateMathQuestion = () => {
    const a = Math.floor(Math.random() * 5) + 6;
    const b = Math.floor(Math.random() * 5) + 6;
    const c = Math.floor(Math.random() * 10) + 5;
    const d = Math.floor(Math.random() * 10) + 10;
    const f = Math.floor(Math.random() * 5) + 2;
    const e = f * (Math.floor(Math.random() * 10) + 5);

    const answer = a * b + (c - d) - e / f;

    const wrong1 = answer + 1;
    const wrong2 = answer - 1;
    const wrong3 = answer + 2;

    const shuffled = [answer, wrong1, wrong2, wrong3].sort(
      () => Math.random() - 0.5
    );

    setMathQuestion(`(${a} × ${b}) + (${c} - ${d}) - (${e} ÷ ${f})`);
    setCorrectAnswer(answer);
    setOptions(shuffled);
  };

  useEffect(() => {
    if (questionStep === 2) {
      generateMathQuestion();
    }
  }, [questionStep]);

  const handleClick = (option) => {
    if (questionStep === 1) {
      setSelected(option);

      if (option === "GF") {
        setTimeout(() => {
          setSelected(null);
          setQuestionStep(2);
        }, 1000);
      } else {
        alert(`${option}, GO AWAYYYYY!!!😭`);
      }
    } else {
      setSelected(option);

      if (option === correctAnswer) {
        setTimeout(() => {
          setCorrectCount((prev) => prev + 1);
          setShowSuccess(true);
        }, 800);
      } else {
        setTimeout(() => {
          setShowWrong(true);
        }, 800);
      }
    }
  };

  return (
    <div className="mcq-container">
      <img src={logo} alt="Show Logo" className="show-logo" />

      <div className="question-box">
        {questionStep === 1 ? (
          <h2>First question, who is this?</h2>
        ) : (
          <h2>Prove it, Solve: {mathQuestion}</h2>
        )}
      </div>

      <div className="options">
        {questionStep === 1 ? (
          <>
            <button
              className={`option ${selected === "GF" ? "correct" : ""}`}
              onClick={() => handleClick("GF")}
            >
              Divya
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
              className={`option ${selected === "Sulav" ? "wrong" : ""}`}
              onClick={() => handleClick("Sulav")}
            >
              Sulav
            </button>
          </>
        ) : (
          options.map((opt, index) => (
            <button
              key={index}
              className={`option ${
                selected !== null
                  ? opt === correctAnswer
                    ? "correct"
                    : opt === selected
                    ? "wrong"
                    : ""
                  : ""
              }`}
              onClick={() => handleClick(opt)}
              disabled={selected !== null}
            >
              {opt}
            </button>
          ))
        )}
      </div>

      {/* WRONG MODAL */}
      {showWrong && (
        <div className="wrong-overlay">
          <div className="wrong-box">
            <h1>WRONG!! STOOPIDDD 🤪🤪🤪</h1>
            <button
              onClick={() => {
                setShowWrong(false);
                setSelected(null);
                generateMathQuestion();
              }}
            >
              Try Again
            </button>
          </div>
        </div>
      )}

      {/* SUCCESS MODAL */}
      {showSuccess && (
        <div className="success-overlay">
          <div className="success-box">
            {correctCount === 1 ? (
              <>
                <h1>🤨 There is NO way Divya can solve this.</h1>
                <p style={{ marginBottom: "20px" }}>
                  Try again… I don't believe it.
                </p>
                <button
                  onClick={() => {
                    setShowSuccess(false);
                    setSelected(null);
                    generateMathQuestion();
                  }}
                >
                  Try Again
                </button>
              </>
            ) : (
              <>
                <h1>🎉7 CROREEEE!!!!!</h1>
                <p style={{ marginBottom: "20px" }}>
                  google garis hoina?
                </p>
                <button
                  onClick={() => {
                    onCorrect();
                  }}
                >
                  Continue
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Mcq;