import React, { useState, useContext, useEffect } from 'react';
import { Div, Text } from '../../Atoms';
import { Nav, Navigation, Menu, Link } from './styled';
import Login from '../Login';
import Register from '../Register';
import authContext from '../../../context/auth/authContext';

const Index = () => {
  const [ isLogin, setIsLogin ] = useState(true);
  const [ isOpen, setIsOpen ] = useState(false);

  const { user, logout } = useContext(authContext);

  return (
    <Nav>
      {user && <Text>Hola, {user.name}</Text>}
      <Menu src="/assets/icons/Plus.svg" onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}/>
      
      <Navigation isOpen={isOpen} user={user}>
        {user ? (
          <Text
            cursor="pointer"
            hoverBg="primaryBg"
            transition
            width="100%"
            textAlign="center"
            padding=".5rem"
            rounded="sm"
            onClick={logout}
          >Salir</Text>
        ) : (
          <>
            <Div display="flex" justifyContent="space-evenly" alignItems="center">
              <Link isLogin={isLogin} onClick={() => setIsLogin(true)}>Iniciar sesion</Link>
              <Link isLogin={!isLogin} onClick={() => setIsLogin(false)}>Registrarme</Link>
            </Div>
            {isLogin ? <Login setIsOpen={setIsOpen}/> : <Register/>}
          </>
        )}

        
      </Navigation>
    </Nav>
  )
}

export default Index
