import styled from 'styled-components';
import { Div } from '../../Atoms';

export const Container = styled(Div)`
  height: 25rem;
  border: ${props => `2px dashed ${props.theme.colors.gray}`};
  background-color: ${props => props.theme.colors.bgGray};
  cursor: pointer;
  display: flex;
  grid-gap: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;