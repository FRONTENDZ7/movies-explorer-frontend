// login
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useValidation } from "../../hooks/useValidation"

import logo from "../../images/logo.svg";
import { onLogin } from "../../services/actions/user";
import { useStore } from "../../services/StoreProvider";
import Input from "./Input";
import { isPassword, isEmail } from "../../utils/validation";

function Login() {
  const [state, dispatch] = useStore();
  const { authMessage, loggedIn } = state;
  // const [disabled, setDisabled] = useState(false);

  // const [error, setError] = useState({ email: "", password: "" });
  // const [formData, setFormData] = useState({ email: "", password: "" });
  const { values, error, isValid, handleChange } = useValidation({ email: "", password: "" });
  
  const navigate = useNavigate();

  // const handleChange = (e) => {
  //   let errorMessage = e.target.validationMessage;
  //   if (e.target.name === "email") {
  //     errorMessage = errorMessage || isEmail(e.target.value);
  //     setError({
  //       ...error,
  //       email: errorMessage,
  //     });
  //   } else {
  //     errorMessage = errorMessage || isPassword(e.target.value);
  //     setError({
  //       ...error,
  //       password: errorMessage,
  //     });
  //   }

  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  //   const haveSomeError = Object.keys(error).some((key) => formData[key] === "" || errorMessage);
  //   setButtonProps({
  //     disabled: haveSomeError,
  //     className: haveSomeError ? "auth__submit_disabled" : "auth__submit",
  //   });
  // };

  useEffect(() => {
    loggedIn && navigate("/movies");
  }, [loggedIn, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(dispatch, {
      email: values.email,
      password: values.password
    });
  };

  return (
    <section className="auth">
      <Link to="/" className="auth__logo">
        <img src={logo} alt="Логотип" />
      </Link>
      <h2 className="auth__title">Рады видеть!</h2>
      <form className="auth__form" onSubmit={handleSubmit}>
        <div className="auth__input-container">
          <Input
            type="email"
            name="email"
            title="E-mail"
            onChange={handleChange}
            error={error.email}
          />
          <Input
            type="password"
            name="password"
            title="Пароль"
            onChange={handleChange}
            error={error.password}
          />
        </div>
        <span className="auth__message">{authMessage}</span>
        <button
          className={`${isValid ? 'auth__submit' : 'auth__submit_disabled'}`}
          disabled={!isValid}
        >
          Войти
        </button>
       </form>
        <div className="auth__link-container">
          <p className="auth__text">Ещё не зарегистрированы?</p>
          <Link to="/sign-up" className="auth__link">
            Регистрация
          </Link>
        </div>     
    </section>
  );
}

export default Login;
