import styled from 'styled-components';
import { Div } from '../../Atoms';

export default styled(Div)`
  margin: 0 auto;
  width: 50rem;
  box-shadow: ${props => props.theme.shadow[2]};
  border-radius: ${props => props.theme.rounded.xs};
  background-color: ${props => props.theme.colors.white};
  padding: 2rem;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
`;