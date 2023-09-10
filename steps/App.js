import { useState } from "react";
import "./index.css";

const list1 = ["learn React", "Apply For job", "Invest in your income"];

function Card() {
  const [state, setState] = useState(1);
  const [isOpen, setisOpen] = useState(true);

  function handlenext() {
    if (state < 3) {
      setState(state + 1);
    }
    console.log(state);
  }
  function handleprevious() {
    if (state > 1) {
      setState(state - 1);
      console.log(state);
    }
  }
  return (
    <>
      <button
        className="open-close"
        onClick={() => {
          setisOpen(!isOpen);
        }}
      >
        Open/Close
      </button>
      {isOpen && (
        <div className="section">
          <div className="top">
            <div className={`${state >= 1 ? "active" : ""}`}>1</div>
            <div className={`${state >= 2 ? "active" : ""}`}>2</div>
            <div className={`${state === 3 ? "active" : ""}`}>3</div>
          </div>
          <h1>{list1[state - 1]}</h1>
          <div className="button-div">
            <button onClick={handleprevious}>Previous</button>
            <button onClick={handlenext}>Next</button>
          </div>
        </div>
      )}
    </>
  );
}

function App() {
  return <Card />;
}

export default App;
