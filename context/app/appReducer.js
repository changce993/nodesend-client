import {
  SHOW_ALERT,
  HIDE_ALERT,
  UPLOAD_FILE_ERROR,
  UPLOAD_FILE_SUCCESS,
  UPLOAD_FILE,
  CREATE_LINK_ERROR,
  CREATE_LINK_SUCCESS,
  CLEAR_APP,
  ADD_PASSWORD,
  ADD_DOWNLOAD
} from '../../types';

export default (state, acition) => {
  switch(acition.type){
    case SHOW_ALERT:
      return {
        ...state,
        fileMessage: acition.payload
      }
    case HIDE_ALERT:
      return {
        ...state,
        fileMessage: null
      }
    case UPLOAD_FILE:
      return {
        ...state,
        loading: true
      }
    case UPLOAD_FILE_SUCCESS:
      return {
        ...state,
        name: acition.payload.name,
        originalName: acition.payload.originalName,
        loading: false
      }
    case UPLOAD_FILE_ERROR:
      return {
        ...state,
        fileMessage: acition.payload,
        loading: false
      }
    case CREATE_LINK_SUCCESS:
      return {
        ...state,
        url: acition.payload
      }
    case CLEAR_APP:
      return {
        ...state,
        fileMessage: null,
        name: '',
        originalName: '',
        loading: false,
        downloads: 1,
        password: '',
        author: null,
        url: ''
      }
    case ADD_PASSWORD:
      return {
        ...state,
        password: acition.payload
      }
    case ADD_DOWNLOAD:
      return {
        ...state,
        downloads: acition.payload
      }
    default:
      return state
  }
}