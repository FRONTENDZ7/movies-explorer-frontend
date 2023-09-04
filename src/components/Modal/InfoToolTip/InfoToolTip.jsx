// infotooltip
import successImage from "../../../images/denied.svg";
import deniedImage from "../../../images/success.svg";
import { useStore } from "../../../services/StoreProvider";

function InfoToolTip() {
  const [state] = useStore();
  const { success, message } = state.toolTip;

  return (
    <>
      <img
        className="modal__icon"
        src={success ? successImage : deniedImage}
        alt="Картинка статуса модального окна"
      />
      <h3 className="modal__title">{message}</h3>
    </>
  );
}

export default InfoToolTip;
