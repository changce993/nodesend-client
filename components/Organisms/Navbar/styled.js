import styled from 'styled-components';
import { Div, Text } from '../../Atoms';

export const Nav = styled.nav`
  height: 6rem;
  background-color: #f9f9ff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: sticky;
  padding: 0 2.5%;
`;

export const Navigation = styled(Div)`
  transition: ${props => props.theme.transition.default};
  background-color: ${props => props.theme.colors.white};
  opacity: ${props => props.isOpen ? 1 : 0};
  top: ${props => props.isOpen ? '5rem' : '4rem'};
  visibility: ${props => props.isOpen ? 'show': 'hidden'};
  right: 1.5%;
  position: absolute;
  box-shadow: 4px 4px 12px rgba(10,22,70,.06);
  padding: 1rem;
  border-radius: ${props => props.theme.rounded.sm};
  display: flex;
  align-items: ${props => props.user && 'center'};
  flex-direction: column;
  grid-gap: 1rem;
  width: ${props => props.user ? '10rem' : '25rem'};
  max-width: 97%;
`;

export const Menu = styled.img`
  width: 3rem;
  height: 3rem;
  padding: .75rem;
  display: flex;
  align-items:center;
  justify-content:center;
  border-radius: 50%;
  cursor: pointer;
  transition: ${props => props.theme.transition.default};
  transform: ${props => props.isOpen ? 'rotate(135deg)' : 'rotate(0)'};
`;

export const Link = styled(Text)`
  cursor: pointer;
  color: ${props => props.isLogin ? props.theme.colors.primary : props.theme.colors.darkGray};
  font-size: ${props => props.isLogin ? props.theme.fontSize.heading : null};
  transition: ${props => props.theme.transition.default};
`;