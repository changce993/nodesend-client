import styled from 'styled-components';
import { motion } from 'framer-motion';

export default styled(motion.p)`
  ${props => props}
  background-color: ${props => props.theme.colors[props.bg]};
  color: ${props => props.theme.colors[props.color] || props.theme.colors.lightBlack};
  font-weight: ${props => props.theme.fontWeight[props.weight] || props.theme.fontWeight.regular};
  font-size: ${props => props.theme.fontSize[props.size] || props.theme.fontSize.paragraph};
  font-family: ${props => props.theme.fontFamily[props.family] || props.theme.fontFamily.primary};
  transition: ${props => props.transition && props.theme.transition.default};
  border-radius: ${props => props.theme.rounded[props.rounded]};

  :hover {
    color: ${props => props.theme.colors[props.hoverColor]};
    background-color: ${props => props.theme.colors[props.hoverBg]};
  }
`;