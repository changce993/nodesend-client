import styled from 'styled-components';

const Input = styled.input`
  ${props => props}
  outline: none;
  border: ${props => props.border + props.theme.colors[props.borderColor] || `1px solid ${props.theme.colors.gray}`};
  padding: ${props => props.padding || '.75rem 1rem'};
  transition: ${props => props.theme.transition.default};
  border-radius: ${props => props.theme.rounded.sm};
  color: ${props => props.theme.colors[props.color] || props.theme.colors.lightBlack};
  height: 48px;

  ::-webkit-inner-spin-button, ::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }

  :hover {
    border: ${props => props.border + props.theme.colors[props.hoverBorderColor] || `1px solid ${props.theme.colors.info}`};
    color: ${props => props.theme.colors[props.hoverColor]};
  }

  :focus {
    border: ${props => props.border + props.theme.colors[props.focusBorderColor] || `1px solid ${props.theme.colors.info}`};
    color: ${props => props.theme.colors[props.focusColor]};
  }
`;

Input.defaultProps = {
  type: 'text',
  autocomplete: 'off'
}

export default Input;
