import { useEffect, useState } from "react";

export function useSecret(secretKey) {
  const [secretValue, setSecretValue] = useState();
  useEffect(componentDidMount, []);

  return [secretValue, handleSubmit];

  function componentDidMount() {
    const value = sessionStorage.getItem(secretKey);
    setSecretValue(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const value = form.elements[secretKey].value;
    sessionStorage.setItem(secretKey, value);
    setSecretValue(value);
    form.reset();
  }
}

const car = {
  model: "Ford",
  make: "F150",
  year: 2022,
};

let dynamicProperty = "make";
let value = car[dynamicProperty]; //car.make

dynamicProperty = "maker";
value = car[dynamicProperty]; //car.maker

dynamicProperty = "Make";
value = car[dynamicProperty]; //car.Make
