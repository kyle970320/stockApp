import React from "react";
import { useState, useEffect } from "react";
const useDebounce = (value: string, milliSeconds: number) => {
  const [debouncedValue, setDebouncedValue] = useState<string>(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, milliSeconds);

    return () => {
      clearTimeout(handler);
    };
  }, [value, milliSeconds]);

  return [debouncedValue];
};

export default useDebounce;
