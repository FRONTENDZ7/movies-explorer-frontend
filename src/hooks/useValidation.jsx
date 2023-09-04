import { useState } from "react";
// import isEmail from 'validator/es/lib/isEmail';
import { regForName, regForSymbols } from "../utils/constants";

//хук управления формой и валидации формы
export function useValidation(inputValues) {
  const [values, setValues] = useState(inputValues);

  const [error, setError] = useState({});
  const [isValid, setIsValid] = useState(false);
 
  const handleChange = (event) => {
    const target = event.target;

    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
  
    if (value.length < 1) {
      setError((state) => ({ ...state, [name]: "Это обязательное поле" }));
      setIsValid(false);
      return;
    } else if (name === "name" && value.length < 2) {
      setError((state) => ({
        ...state,
        [name]: "Имя должно быть не менее 2 символов",
      }));
      setIsValid(false);
    } else if (name === "name" && !regForName.test(value)) {
      setError((state) => ({
        ...state,
        [name]: "Имя может содержать только буквы, пробел и дефис",
      }));
      setIsValid(false);
      return;
    } else if (name === "email" && !regForSymbols.test(value)) {
      setError((state) => ({
        ...state,
        [name]: "Некорректный e-mail. Проверьте формат",
      }));
      setIsValid(false);
      return;
    } else if (name === "name" && value.length > 30) {
      setError((state) => ({
        ...state,
        [name]: "Имя должно быть меньше 30 символов",
      }));
      setIsValid(false);
      return;
    } else {
      setError({ ...error, [name]: target.validationMessage });
    }
    setIsValid(target.closest("form").checkValidity());
  };

  

  return { values, handleChange, error, isValid, setIsValid};
}