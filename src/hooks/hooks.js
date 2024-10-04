import { useState } from "react";

export function useForm(inputValues) {
  const [values, setValues] = useState(inputValues);
  const handleChange = (event) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
    console.log(value, name);
  };
  return { values, handleChange, setValues };
}
