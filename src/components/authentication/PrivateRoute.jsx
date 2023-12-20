import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

function PrivateRoute(props) {
  return props.isAuthenticated ? props.element : <Navigate to="/login" replace />;
}

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  element: PropTypes.node.isRequired,
};

export default PrivateRoute;
