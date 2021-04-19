import styled from 'styled-components';
import { Div } from '../../Atoms';

export default styled(Div)`
  width: 20rem;
  max-width: 95%;
  padding: .5rem;
  background-color: ${props => props.theme.colors[props.bg] || props.theme.colors.warning};
  border-radius: ${props => props.theme.rounded.sm};
  position: absolute;
  bottom: ${props => props.showAlert ? '2rem' : '1rem'};
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  transition: ${props => props.theme.transition.default};
  color: ${props => props.theme.colors[props.color] || props.theme.colors.white};
  visibility: ${props => props.showAlert ? 'show' : 'hidden'};
  opacity: ${props => props.showAlert ? 1 : 0};
`;