import {useState} from "react";
import Welcome from "./components/welcome";
import Mcq from "./components/mcq";
import Yesno from "./components/yesno";
import Final from "./components/final";
//import logo from './logo.svg';
import './App.css';

function App() {
  const [stage, setStage] = useState("WELCOME");

  const goNext = () =>{
    if (stage === "WELCOME") setStage("MCQ");
    else if (stage === "MCQ") setStage("YESNO");
    else if (stage === "YESNO") setStage("FINAL");
  };

  return (
    <div className="App">
      {stage === "WELCOME" && <Welcome onContinue={goNext} />}
      {stage === "MCQ" && <Mcq onCorrect={goNext} />}
      {stage === "YESNO" && <Yesno onYes={goNext} />}
      {stage === "FINAL" && <Final />}
    </div>
  );
}

export default App;
