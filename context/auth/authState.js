import { useReducer } from 'react';
import authContext from './authContext';
import authReducer from './authReducer';
import clientAxios from '../../config/axios';
import authToken from '../../config/authToken';
import {
  AUTHENTICATED_USER,
  REGISTER_SUCCESSFULLY,
  REGISTER_ERROR,
  HIDE_ALERT,
  LOGIN_SUCCESSFULLY,
  LOGIN_ERROR,
  LOGOUT
} from '../../types';

const AuthState = ({ children }) => {
  const initialState = {
    token: typeof window !== 'undefined' ? localStorage.getItem('ns_token') : '',
    auth: null,
    user: null,
    message: null
  };

  const [ state, dispatch ] = useReducer(authReducer, initialState);

  const registerUser = async data => {
    try {
      const response = await clientAxios.post('/api/users', data);
      dispatch({
        type: REGISTER_SUCCESSFULLY,
        payload: response.data.msg
      })
    } catch (error) {
      dispatch({
        type: REGISTER_ERROR,
        payload: error.response.data.msg
      })
    }

    setTimeout(() => dispatch({ type: HIDE_ALERT }), 3000);
  };

  const login = async data => {
    try {
      const response = await clientAxios.post('/api/auth', data);
      dispatch({
        type: LOGIN_SUCCESSFULLY,
        payload: response.data.token
      });
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
        payload: error.response.data.msg
      })
    }

    setTimeout(() => dispatch({ type: HIDE_ALERT }), 3000);
  };

  const authenticatedUser = async () => {
    const token = localStorage.getItem('ns_token');

    if(token){
      authToken(token);
    };

    try {
      const response = await clientAxios('/api/auth');
      if(response.data.user){
        dispatch({
          type: AUTHENTICATED_USER,
          payload: response.data.user
        })
      }
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
        payload: error.response.data.msg
      })
    }
  };

  const logout = () => dispatch({ type: LOGOUT });

  const { token, auth, user, message } = state;

  return (
    <authContext.Provider value={{
      token,
      auth,
      user,
      message,
      registerUser,
      login,
      authenticatedUser,
      logout
    }}>
      {children}
    </authContext.Provider>
  )
};

export default AuthState;
