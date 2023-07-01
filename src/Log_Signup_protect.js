import { Navigate,useNavigate } from "react-router-dom";
const LogProtected = ({ isAuthenticated, children }) => {
    // const navigate=useNavigate();
  if (!isAuthenticated) {
    return children;
  }
  //   navigate('/')
  return <Navigate to="/" replace />;
  
};
export default LogProtected;   