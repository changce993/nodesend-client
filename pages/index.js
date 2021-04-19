import { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router'
import { Div, Text, Button } from '../components/Atoms';
import { DropzoneContainer, Alert, Modal } from '../components/Molecules';
import { Dropzone, Files } from '../components/Organisms';
import { Landing } from '../components/Templates';
import authContext from '../context/auth/authContext';
import appContext from '../context/app/appContext';

const Home = () => {

  const [ files, setFiles ] = useState([]);
  const { authenticatedUser } = useContext(authContext);
  const { fileMessage, url } = useContext(appContext);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('ns_token');
    if(token){
      authenticatedUser();
    };
  }, []);
  
  return (
    <Landing>
      <DropzoneContainer>
        <Dropzone setFiles={setFiles}/>
        <Files files={files}/>
      </DropzoneContainer>

      <Alert showAlert={fileMessage}>{fileMessage}</Alert>

      <Modal showModal={url}>
        <Div>
          <Text as="span" color="primary" weight="bold" size="heading">Tu URL es: </Text>
          <Text as="span">{`${typeof window !== 'undefined' ? window.location : ''}links/${url}`}</Text>
        </Div>
        <Button onClick={() => navigator.clipboard.writeText(`${typeof window !== 'undefined' ? window.location : ''}links/${url}`)}>Copiar enlace</Button>
        <Text onClick={() => router.reload()} cursor="pointer">Volver al inicio</Text>
      </Modal>
    </Landing>
  )
}

export default Home