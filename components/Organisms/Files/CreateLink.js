import { useContext } from 'react';
import { Text, Div } from '../../Atoms';
import { Loader, Dropdown } from '../../Molecules';
import appContext from '../../../context/app/appContext';

const Home = () => {
  const { loading, createLink } = useContext(appContext);
  return (
    <>
      {loading ? (
        <Div>
          <Text color="darkGray">Cargando...</Text>
          <Loader/>
        </Div>
      ) : (
        <Text
          color="info"
          textAlign="center"
          cursor="pointer"
          onClick={createLink}
        >
          Crear enlace
        </Text>
      )}
    </>
  )
}

export default Home