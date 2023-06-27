import axios from "axios";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";
// import { useNavigate } from "react-router-dom";

// Action types
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";

// Action creators
export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: {
    user,
  },
});

export const logout = (user) => ({
  type: LOGOUT,
  payload:{
    user,
  }
});

// Async action creator: login
export const login = (credentials) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        "http://localhost:4000/login",
        {
          ...credentials,
        },
        { withCredentials: true }
      );

      const { success, message, user } = data;
      if (success) {
        toast.success(message, {
          position: "bottom-left",
        });

        dispatch(loginSuccess(user));

        // const navigate = useNavigate();
        // navigate("/");
      } else {
        toast.error(message, {
          position: "bottom-left",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// Async action creator: signup
export const signup = (userInfo) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        "http://localhost:4000/signup",
        {
          ...userInfo,
        },
        { withCredentials: true }
      );

      const { success, message, user } = data;
      if (success) {
        toast.success(message, {
          position: "bottom-left",
        });

        dispatch(loginSuccess(user));

        // const navigate = useNavigate();
        // navigate("/");
      } else {
        toast.error(message, {
          position: "bottom-left",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// Async action creator: logout
export const performLogout = () => {
  return async (dispatch) => {
    try {
      await axios.post(
        "http://localhost:4000",
        {},
        { withCredentials: true }
      );

      dispatch(logout());

    //   const navigate = useNavigate();
    //   navigate("/login");

      toast.success("Logged out successfully", {
        position: "bottom-left",
      });
    } catch (error) {
      console.log(error);
    }
  };
};
