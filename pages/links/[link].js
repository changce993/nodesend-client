import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import clientAxios from '../../config/axios';
import appContext from '../../context/app/appContext';
import { Button, Div, Input, Text } from '../../components/Atoms';
import { Alert } from '../../components/Molecules';
import { Landing } from '../../components/Templates';

export async function getServerSideProps({ params }){
  const { link } = params;
  const response = await clientAxios.get(`/api/links/${link}`);
  console.log(response);

  return {
    props: {
      link: response.data
    }
  }
};

export async function getServerSidePaths(){
  const links = await clientAxios.get('/api/links');
  return {
    paths: links.data.links.map(link => ({
      params: { link: link.url }
    })),
    fallback: false
  }
};

const Link = ({ link }) => {
  const router = useRouter();
  const { clearApp, showAlert, fileMessage } = useContext(appContext);
  const [ hasPassword, setHasPassword ] = useState(link.password);
  const [ password, setPassword ] = useState('');
  
  const handleClick = () => {
    router.push('/');
    clearApp();
  };

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const response = await clientAxios.post(`/api/links/${link.link}`, {password});
      setHasPassword(response.data.password)
    } catch (error) {
      showAlert(error.response.data.msg);
    }
  }

  return (
    <Landing>

      {hasPassword ? (
        <Div padding="3rem 0">
          <Text size="subtitle" weight="bold" textAlign="center">Este enlace esta protegido con contraseña</Text>
          <form onSubmit={e => handleSubmit(e)}>
            <Div
              display="flex"
              flexDirection="column"
              alignItems="center"
              gridGap="1rem"
              marginTop="2rem"
            >
              <Input
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
                width="20rem"
                placeholder="contraseña"
              />
              <Button width="20rem">Validar</Button>
            </Div>
          </form>
        </Div>
      ) : (
        <Div padding="3rem 0" display="flex" flexDirection="column" alignItems="center" justifyContent="center" gridGap="1rem">
          <Text size="subtitle" weight="bold">Descarga tu archivo aca</Text>
          <Button>
            <Text
              onClick={handleClick}
              as="a"
              textDecoration="none"
              color="white"
              href={`http://localhost:4000/api/files/${link.file}`}
            >Descargar archivo</Text>
          </Button>
          <Text as="a" href="/">Ir al inicio</Text>
        </Div>
      )}
      <Alert showAlert={fileMessage}>{fileMessage}</Alert>
    </Landing>
  )
}

export default Link
