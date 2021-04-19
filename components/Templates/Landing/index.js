import React from 'react';
import { Container } from './styled';
import { Navbar } from '../../Organisms';

const index = ({ children }) => {
  return (
    <Container>
      <Navbar/>
      {children}
    </Container>
  )
}

export default index
