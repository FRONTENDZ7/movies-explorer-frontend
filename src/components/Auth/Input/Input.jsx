// input
import { inputPT } from "../../../utils/propTypes";
import "./Input.css";

function Input({ title, onChange, name, type, error }) {
  const requiredProps =
    type === "text"
      ? { minLength: 2, maxLength: 30 }
      : type === "password"
      ? { minLength: 3 }
      : null;

  return (
    <label className="input-label">
      {title}
      <input
        name={name}
        type={type}
        className={`input ${error && "color_error"}`}
        onChange={onChange}
        required
        {...requiredProps}
      ></input>
      <span className={`input-error ${error && "input-error_visible"} text`}>{error}</span>
    </label>
  );
}

export default Input;
