import styled from 'styled-components';
import { motion } from 'framer-motion';

export default styled(motion.div)`
  ${props => props}
  background-color: ${props => props.theme.colors[props.bg]};
  background-image: ${props => `url(${props.bgImg})`};
  ${props => props.transition && props.theme.transition.default}
  border-radius: ${props => props.theme.rounded[props.rounded]};
  box-shadow: ${props => props.theme.shadow[props.shadow]};
  transition: ${props => props.transition && props.theme.transition.default};
`;