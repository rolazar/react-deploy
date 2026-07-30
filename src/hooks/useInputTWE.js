import { useEffect } from "react";
import { Input, initTWE } from "tw-elements";

export function useInputTWE() {
  useEffect(componentDidMount, []);

  function componentDidMount() {
    initTWE({ Input });
  }
}
