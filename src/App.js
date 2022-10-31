import { useRef, useState } from "react";
import "./styles.css";
import useUncontrolledFormState from "./useUncontrolledFormState";

export default function App() {
  const INITIAL_STATE = {
    valor1: "",
    valor2: ""
  };

  const refsEnum = Object.keys(INITIAL_STATE).reduce(
    (acc, curr, index) => ({ ...acc, [curr]: index }),
    {}
  );
  let refs = useRef([]);

  const [formState, setFormState] = useState(INITIAL_STATE);

  const getInputValue = () => {};

  const getInputOnEnter = ({ key, target: { name, value } }) => {
    if (key === "Enter") {
      const allRefs = refs.current.reduce(
        (acc, ref) => ({ ...acc, [ref.name]: ref.value }),
        {}
      );
      setFormState(allRefs);
      console.log(allRefs);
    }
  };

  console.log("render");

  return (
    <div className="App" onKeyPress={getInputOnEnter}>
      <h2>Input</h2>
      <input
        type="text"
        ref={(el) => (refs.current[refsEnum.valor1] = el)}
        name="valor1"
        placeholder="1"
        // onKeyPress={getInputOnEnter}
      />
      <input
        type="text"
        name="valor2"
        ref={(el) => (refs.current[refsEnum.valor2] = el)}
        placeholder="2"
        // onKeyPress={getInputOnEnter}
      />
      <button onClick={getInputValue}>teste</button>
      <p>{formState.valor1}</p>
      <p>{formState.valor2}</p>
    </div>
  );
}
