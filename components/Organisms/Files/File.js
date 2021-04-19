import React from 'react';
import { Text } from '../../Atoms';
import { File } from './styled';

const Index = ({ files }) => {
  return (
    <File>
      <Text>{files[0]?.path}</Text>
      <Text>{(files[0]?.size / Math.pow(1024, 2)).toFixed(2)} MB</Text>
    </File>
  )
}

export default Index
