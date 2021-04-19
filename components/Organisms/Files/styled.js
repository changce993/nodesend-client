import styled from 'styled-components';
import { Div } from '../../Atoms';

export const File = styled(Div)`
  padding: 1rem;
  width: 100%;
  box-shadow: ${props => props.theme.shadow[2]};
`;