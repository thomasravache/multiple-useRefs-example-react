import { useState } from "react";

const useUncontrolledFormState = (objectState) => {
  const [values, setState] = useState(objectState);

  return {
    refs: objectState,
    state: {
      values,
      setState
    }
  };
};

export default useUncontrolledFormState;
