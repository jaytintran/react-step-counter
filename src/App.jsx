import { useState } from "react";
import Button from "./Button";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  // const step = 1;
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  function handlePrevious() {
    if (step <= 1) return;
    setStep((prevState) => prevState - 1);
  }

  function handleNext() {
    if (step >= 3) return;
    setStep((prevState) => prevState + 1);
  }

  if (isOpen === false) {
    return (
      <div className="modal">
        <button
          className="open-modal"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Open Modal
        </button>
      </div>
    );
  }

  return (
    <div className="steps">
      <button
        className="close"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        &times;
      </button>
      <div className="numbers">
        <span className={step >= 1 && "active"}>1</span>
        <span className={step >= 2 && "active"}>2</span>
        <span className={step >= 3 && "active"}>3</span>
      </div>

      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>

      <div className="buttons">
        <Button styles={"previous"} onClick={handlePrevious}>
          👈 Previous
        </Button>
        <Button styles={"next"} onClick={handleNext}>
          Next 👉
        </Button>
      </div>
    </div>
  );
}

export default App;
