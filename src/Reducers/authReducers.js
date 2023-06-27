// Initial state
const initialState = {
    isAuthenticated: false,
    user: null,
  };
  
  // Action types
  const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
  const LOGOUT = 'LOGOUT';
  
  // Reducer function
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload.user,
        };
  
      case LOGOUT:
        return {
          ...state,
          isAuthenticated: false,
          user: null,
        };
  
      default:
        return state;
    }
  };
  
  export default authReducer;
  