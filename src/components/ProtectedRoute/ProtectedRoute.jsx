// protected route
import { Navigate } from "react-router-dom";
import { useStore } from "../../services/StoreProvider";
import Wrap from "../Wrap";

const ProtectedRoute = ({ children, path }) => {
  const [state] = useStore();
  const { loggedIn } = state;
  return <Wrap>{loggedIn ? children : <Navigate to="/" />}</Wrap>;
};

export default ProtectedRoute;
