import React, { useContext, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Container } from './styled';
import clientAxios from '../../../config/axios';
import { Button, Text } from '../../Atoms';
import appContext from '../../../context/app/appContext';

const index = ({ setFiles }) => {

  const { showAlert, uploadFile } = useContext(appContext);

  const onDropAccepted = useCallback(async acceptedFiles => {
    const formData = new FormData();
    formData.append('file', acceptedFiles[0]);

    uploadFile(formData, acceptedFiles[0].path);
  }, []);

  const onDropRejected = () => {
    showAlert('El archivo pesa mas de 1 MB, crea una cuenta para aumentar ese limite');
  }

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({ onDropAccepted, onDropRejected, maxSize: 1000000 });
  
  setFiles(acceptedFiles);

  return (
    <Container {...getRootProps()}>
      <input {...getInputProps()}/>
      {isDragActive ? <Text size="heading" textAlign="center" color="darkGray">Suelta el archivo aca</Text> : (
        <>
          <Text size="heading" textAlign="center" color="darkGray">Selecciona o arrastra un archivo hasta aca</Text>
          <Button width="90%">Selecciona archivos para subir</Button>
        </>
      )}
    </Container>
  )
}

export default index
