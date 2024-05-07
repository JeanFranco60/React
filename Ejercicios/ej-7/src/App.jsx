import { useState } from "react";

function App() {
  const [firstNumber, setFirstNumber] = useState(null);
  const [secondNumber, setSecondNumber] = useState(null);
  const [result, setResult] = useState(null);

  return (
    <form container>
      <div class="mb-3 ">
        <label for="exampleInputEmail1" class="form-label">
          First Number
        </label>
        <input
          type="number"
          class="form-control"
          value={firstNumber}
          onChange={(event) => {
            setFirstNumber(event.target.value);
          }}
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          Second Number
        </label>
        <input
          type="number"
          class="form-control"
          value={secondNumber}
          onChange={(event) => {
            setSecondNumber(event.target.value);
          }}
        />
      </div>

      <button
        type="button"
        class="btn btn-primary"
        onClick={() => setResult(firstNumber * secondNumber)}
      >
        Multiplicar
      </button>

      {result != null ? <p>el resultado es: {result}</p> : ""}
    </form>
  );
}

export default App;
