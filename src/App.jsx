import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  // const step = 1;
  const [step, setStep] = useState(1);

  function handlePrevious() {
    if (step <= 1) return;
    setStep((prevState) => prevState - 1);
  }

  function handleNext() {
    setStep((prevState) => prevState + 1);
  }

  return (
    <div className="steps">
      <div className="numbers">
        <span className={`${step >= 1 && "active"}`}>1</span>
        <span className={`${step >= 2 && "active"}`}>2</span>
        <span className={`${step >= 3 && "active"}`}>3</span>
      </div>

      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>

      <div className="buttons">
        <button className="previous" onClick={handlePrevious}>
          Previous
        </button>
        <button className="next" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
