import React, { useState } from "react";

const useInput = () => {
  const [stateValue, setValue] = useState<string>("");
  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  return [stateValue, changeInputValue];
};

export default useInput;
