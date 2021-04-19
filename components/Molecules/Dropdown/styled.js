import styled from 'styled-components';
import { Div } from '../../Atoms';

export const Input = styled(Div)`
  ${props => props}
  border: ${props => props.isOpen ? `1px solid ${props.theme.colors.info}` : `1px solid ${props.theme.colors.gray}`};
  padding: .75rem 1rem;
  transition: ${props => props.theme.transition.default};
  border-radius: ${props => props.theme.rounded.sm};
  color: ${props => props.theme.colors[props.color] || props.theme.colors.lightBlack};
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  width: ${props => props.width || '320px'};
  max-width: 100%;

  svg{
    transition: ${props => props.theme.transition.default};
    fill: ${props => props.isOpen ? props.theme.colors.info : props.theme.colors.gray};
  }

  :hover {
    border: ${props => props.border + props.theme.colors[props.hoverBorderColor] || `1px solid ${props.theme.colors.info}`};
    color: ${props => props.theme.colors[props.hoverColor]};

    svg{
      fill: ${props => props.theme.colors.info};
    }
  }
`;

export const Menu = styled(Div)`
  background-color: ${props => props.theme.colors.white};
  position: absolute;
  width: ${props => props.width || '320px'};
  max-width: 100%;
  padding: .5rem;
  top: ${props => props.isOpen ? '80px' : '64px'};
  left: 0;
  box-shadow: ${props => props.theme.shadow[4]};
  border-radius: ${props => props.theme.rounded.sm};
  display: flex;
  flex-direction: column;
  grid-gap: .25rem;
  transition: ${props => props.theme.transition.default};
  visibility: ${props => props.isOpen ? 'show' : 'hidden'};
  opacity: ${props => props.isOpen ? '1' : '0'};
  overflow-y: scroll;
  max-height: 7rem;
`;

export const Option = styled.p`
  color: ${props => props.theme.colors.lightBlack};
  text-decoration: none;
  display: block;
  padding: .25rem .5rem;
  border-radius: 4px;
  transition: ${props => props.theme.transition.default};
  cursor: pointer;

  :hover{
    color: ${props => props.theme.colors.info};
    background-color: ${props => props.theme.colors.primaryBg};
  }
`;

// export const Icon = styled(IconUI)`
//   transform: ${props => props.isOpen && 'rotate(-180deg)'};
//   fill: red;
// `;