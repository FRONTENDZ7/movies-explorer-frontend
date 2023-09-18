// register
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useValidation } from "../../hooks/useValidation"

import logo from "../../images/logo.svg";
import { onRegister } from "../../services/actions/user";
import Input from "./Input";
import { isName, isPassword, isEmail } from "../../utils/validation";
import { useStore } from "../../services/StoreProvider";

function Register() {
  const [state, dispatch] = useStore();
  const { authMessage, loggedIn } = state;
  const navigate = useNavigate();
  const { values, error, isValid, handleChange } = useValidation({ name: "", email: "", password: "" });

  useEffect(() => {
    loggedIn && navigate("/movies");
  }, [loggedIn, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(dispatch, {
      name: values.name,
      email: values.email,
      password: values.password
    })
    .then((isRedirect) => {
      isRedirect && navigate("/sign-in");
    });
  };

  return (
    <div className="auth">
      <Link to="/" className="auth__logo">
        <img src={logo} alt="Логотип" />
      </Link>
      <h2 className="auth__title">Добро пожаловать!</h2>
      <form className="auth__form" onSubmit={handleSubmit} noValidate>
        <div className="auth__input-container">
          <Input
            type="text"
            name="name"
            title="Имя"
            onChange={handleChange}
            error={error.name}
          />
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
        <button className={`${isValid ? 'auth__submit' : 'auth__submit_disabled'}`} disabled={!isValid}>
          Зарегистрироваться
        </button>
      </form>
      <div className="auth__link-container">
        <p className="auth__text">Уже зарегестрированны?</p>
        <Link to="/sign-in" className="auth__link">
          Войти
        </Link>
      </div>
    </div>
  );
}

export default Register;
