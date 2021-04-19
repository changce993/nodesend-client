import styled from 'styled-components';

const Button = styled.button`
  outline: none;
  border: none;
  width: ${props => props.width || '160px'};
  max-width: 100%;
  height: 40px;
  border-radius: ${props => props.theme.rounded.sm};
  cursor: pointer;
  transition: ${props => props.theme.transition.default};
`;

export const Primary = styled(Button)`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  font-weight: ${props => props.theme.fontWeight.bold};

  :hover{
    background-color: ${props => props.theme.colors.primaryHover};
  }
`;