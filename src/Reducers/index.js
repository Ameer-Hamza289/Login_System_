import { combineReducers } from 'redux';
import authReducers from './authReducers';

const rootReducer = combineReducers({
  auth: authReducers, // Make sure the key matches the slice of state you want to access
});

export default rootReducer;












// import  userReducer  from './userReducer';
  // user: userReducer
