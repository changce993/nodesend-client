import React, { useReducer } from 'react';
import appContext from './appContext';
import appReducer from './appReducer';
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
import clientAxios from '../../config/axios';

const AppState = ({ children }) => {
  const initialState = {
    fileMessage: null,
    name: '',
    originalName: '',
    loading: false,
    downloads: 1,
    password: '',
    author: null,
    url: ''
  }
  
  const [ state, dispatch ] = useReducer(appReducer, initialState);

  const showAlert = msg => {
    dispatch({
      type: SHOW_ALERT,
      payload: msg
    });

    setTimeout(() => dispatch({ type: HIDE_ALERT }), 3000);
  };

  const uploadFile = async (data, originalName) => {
    dispatch({ type: UPLOAD_FILE }) 
    try {
      const response = await clientAxios.post('/api/files', data);
      dispatch({
        type: UPLOAD_FILE_SUCCESS,
        payload: {
          name: response.data.file,
          originalName
        }
      })
    } catch (error) {
      dispatch({
        type: UPLOAD_FILE_ERROR,
        payload: error.response.data.msg
      })
    }
  };

  const createLink = async () => {
    const data = {
      name: state.name,
      originalName: state.originalName,
      downloads: state.downloads,
      password: state.password,
      author: state.author,
    };

    try {
      const response = await clientAxios.post('/api/links', data);
      dispatch({
        type: CREATE_LINK_SUCCESS,
        payload: response.data.msg
      });
    } catch (error) {
      console.log(error);
    }
  };

  const clearApp = () => dispatch({ type: CLEAR_APP });

  const addDownloads = download => {
    dispatch({
      type: ADD_DOWNLOAD,
      payload: download
    })
  };

  const addPassword = password => {
    dispatch({
      type: ADD_PASSWORD,
      payload: password
    })
  };

  const { fileMessage, name, originalName, loading, downloads, password, author, url } = state;

  return (
    <appContext.Provider value={{
      fileMessage,
      name,
      originalName,
      loading,
      downloads,
      password,
      author,
      url,
      showAlert,
      uploadFile,
      createLink,
      clearApp,
      addDownloads,
      addPassword
    }}>
      {children}
    </appContext.Provider>
  )
};

export default AppState;
