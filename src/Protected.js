import { Navigate,useNavigate } from "react-router-dom";
const Protected = ({ isAuthenticated, children }) => {
    // const navigate=useNavigate();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
//   navigate('/')
  return children;
};
export default Protected;   