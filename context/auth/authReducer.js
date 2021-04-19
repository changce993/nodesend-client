import {
  REGISTER_SUCCESSFULLY,
  REGISTER_ERROR,
  HIDE_ALERT,
  LOGIN_SUCCESSFULLY,
  LOGIN_ERROR,
  AUTHENTICATED_USER,
  LOGOUT
} from '../../types';

export default (state, action) => {
  switch(action.type) {
    case REGISTER_SUCCESSFULLY:
    case REGISTER_ERROR:
    case LOGIN_ERROR:
      return {
        ...state,
        message: action.payload
      }
    case LOGIN_SUCCESSFULLY:
      localStorage.setItem('ns_token', action.payload)
      return {
        token: action.payload,
        auth: true
      }
    case HIDE_ALERT:
      return {
        ...state,
        message: null
      }
    case AUTHENTICATED_USER:
      return {
        ...state,
        user: action.payload,
        auth: true
      }
    case LOGOUT:
      localStorage.removeItem('ns_token')
      return {
        ...state,
        auth: null,
        user: null,
        token: null
      }
    default:
      return state
  }
}