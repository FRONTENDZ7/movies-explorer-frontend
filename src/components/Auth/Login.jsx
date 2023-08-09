import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";
import Input from "./Input";

function Login({ onLogin, success }) {
  const [error, setError] = useState({ email: "", password: "" });
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: e.target.validationMessage });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(formData).then((isRedirect) => {
      isRedirect && navigate("/");
    });
  };

  return (
    <section className="auth">
      <Link to="/">
        <img src={logo} alt="Логотип" className="auth__logo" />
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
        
      </form>
      <button className="auth__submit">Войти</button>
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
