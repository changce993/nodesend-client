import { useState, useContext, useEffect } from 'react';
import authContext from '../../../context/auth/authContext';
import appContext from '../../../context/app/appContext';
import { Div, Input, Text } from '../../Atoms';
import { Dropdown } from '../../Molecules';
import Eye from '../../../public/assets/icons/eye.svg';

const Form = ({ option, setOption }) => {
  const { auth } = useContext(authContext);
  const { addPassword, addDownloads } = useContext(appContext);
  const [ hasPassword, setHasPassword ] = useState(false);
  const [ showPassword, setShowPassword ] = useState(false);

  useEffect(() => addDownloads(option), [option]);

  const options = [{name: 1}, {name: 5}, {name: 10}, {name: 20}, {name: 50}];

  return (
    <form>
      {auth && (
        <>
          <Dropdown option={option} setOption={setOption} options={options} label="Eliminar despues de">
            dsa
          </Dropdown>
          <Div display="flex" alignItems="center" justifyContent="space-between" gridGap=".5rem" margin="1rem 0">
            <Text>Proteger con contraseña</Text>
            <input type="checkbox" onClick={() => setHasPassword(!hasPassword)} style={{ cursor: 'pointer'}}/>
          </Div>
          {hasPassword && (
            <Div position="relative" >
              <Input
                width="100%"
                type={showPassword ? 'text' : 'password'}
                padding="1rem 3rem 1rem 1rem"
                onChange={e => addPassword(e.target.value)}
              />
              <Eye
                onClick={() => setShowPassword(!showPassword)}
                style={{ position: 'absolute', top: '1rem', right: '1rem', cursor: 'pointer', width: '1rem'}}
              /> 
            </Div>
          )}
        </>
      )}
    </form>
  )
}

export default Form
