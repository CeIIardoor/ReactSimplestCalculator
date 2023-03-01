import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 

  function ifInputIsNotANumber() {
    if (isNaN(inputRef.current.value)) {
      alert("Please type a number");
      inputRef.current.value = 0;
      return true;
    }
    return false;
  }
  function plus(e) {
    e.preventDefault();
    if (ifInputIsNotANumber()) return;
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
    e.preventDefault();
    if (ifInputIsNotANumber()) return;
    setResult((result) => result - Number(inputRef.current.value));
  };
 
  function times(e) {
    e.preventDefault();
    if (ifInputIsNotANumber()) return;
    setResult((result) => result * Number(inputRef.current.value));
  };
 
  function divide(e) { 
    e.preventDefault();
    if (ifInputIsNotANumber()) return;
    setResult((result) => result / Number(inputRef.current.value));
  };
 
  function resetInput(e) { 
    e.preventDefault();
    setResult((result) => result * 0);
  }; 
 
  function resetResult(e) { 
  	e.preventDefault();
    setResult(0);
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}>
          {result}
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number"
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button> 
        {<button onClick={minus}>minus</button> }
        {<button onClick={times}>times</button> }
        {<button onClick={divide}>divide</button> }
        {<button onClick={resetInput}>reset input</button> }
        {<button onClick={resetResult}>reset result</button> }
      </form> 
    </div> 
  ); 
} 
 
export default App; 