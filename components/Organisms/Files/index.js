import { useState, useContext, useEffect } from 'react';
import authContext from '../../../context/auth/authContext';
import { Div, Text } from '../../Atoms';
import File from './File';
import CreateLink from './CreateLink';
import Form from './Form';

const Home = ({ files }) => {
  const { authenticatedUser } = useContext(authContext);
  useEffect(() => authenticatedUser(), []);
  const [ option, setOption ] = useState();

  return (
      <Div display="flex" flexDirection="column" alignItems="center" justifyContent="center" gridGap="1rem" className="overflow-y" height="25rem" padding=".5rem">
        {files[0]?.path
          ? 
            <>
              <File files={files}/>
              <Form option={option} setOption={setOption} />
              <CreateLink/>
            </>
          : (<>
          <Text size="subtitle" weight="bold">Comparte archivos de forma rapida, privada y sencilla</Text>
          <Text>
            Nodesend te permite compartir archivos con cifrado de extremo a extremo y un archivo es eliminado después de ser descargado. Así que puedes mantener lo que compartes en privado y asegurarte de que tus cosas no permanezcan en linea para siempre. 
          </Text>
          <Text>
            Crea una cuenta para mayores beneficios
          </Text>
        </>)}
      </Div>
  )
}

export default Home