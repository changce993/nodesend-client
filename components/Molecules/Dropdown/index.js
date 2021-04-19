import React, { useState } from 'react';
import Image from 'next/image';
import { Input, Menu, Option } from './styled';
import { Div, Text } from '../../Atoms';

const Index = ({ children, label, options = [], option = '1', setOption, width }) => {
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <Div position="relative">
      <Text size="label" weight="semibold">{label}</Text>

      <Input onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} width={width}>
        {option + ' descarga' || children || 'Select'}
        <Image src="/assets/icons/arrow.png" onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} width="1rem"  height="1rem"/>
      </Input>

      <Menu width={width} isOpen={isOpen}>
        {options.map((op, index) => {
          const { name, href, onClick } = op;
          const handleClick = op => {
            setOption(op);
            setIsOpen(false);
            onClick && onClick();
          }
          return (
            <Option
              as={href && 'a'}
              key={index}
              href={href}
              onClick={() => handleClick(name)}
            >
              {name} descargas
            </Option>
          )
        })}
      </Menu>
    </Div>
  )
}

export default Index
