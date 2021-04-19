import React from 'react';
import { Primary } from './styled';

const index = ({ children, ...props }) => {
  return (
    <Primary {...props}>
      {children}
    </Primary>
  )
}

export default index
