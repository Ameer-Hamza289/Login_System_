import { useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import {useDispatch} from 'react-redux';
import { login } from "../Actions/authActions";

const Login = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    console.log(isAuthenticated,'checking...');

  const navigate = useNavigate();
  const dispatch=useDispatch();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  useEffect(()=>{
    if(isAuthenticated){
      setTimeout(() => {
      navigate("/");
            }, 1000);
    }
  },[isAuthenticated])
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(inputValue))
    
    // .then((success) => {
    //   if (success) {
    //     handleSuccess("Login successful me");
    //     navigate("/");
    //   } else {
    //     handleError("Login failed me");
    //   }
    // })
    // .catch((error) => {
    //   console.log(error);
    //   handleError("An error occurred");
    // });
    
    // try {
    //   const { data } = await axios.post(
    //     "http://localhost:4000/login",
    //     {
    //       ...inputValue,
    //     },
    //     { withCredentials: true }
    //   );
    //   console.log(data);
    //   const { success, message } = data;
    //   if (success) {
    //     handleSuccess(message);
    //     setTimeout(() => {
    //       navigate("/");
    //     }, 1000);
    //   } else {
    //     handleError(message);
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
    // setInputValue({
    //   ...inputValue,
    //   email: "",
    //   password: "",
    // });
  };

  return (
    <div className="form_container">
      <h2>Login Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit">Submit</button>
        <span>
          Don't have an account? <Link to={"/signup"}>Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;