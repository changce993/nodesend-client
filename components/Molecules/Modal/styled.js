import styled from 'styled-components';
import { Div } from '../../Atoms';

export const Layout = styled(Div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,.2);
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${props => props.showModal ? 'show' : 'hidden'};
`;

export const Modal = styled(Div)`
  width: 30rem;
  max-width: 100%;
  padding: 2rem;
  border-radius: ${props => props.theme.rounded.sm};
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadow[4]};
  transition: ${props => props.theme.transition.default};
  opacity: ${props => props.showModal ? 1 : 0};
  display: flex;
  grid-gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`;