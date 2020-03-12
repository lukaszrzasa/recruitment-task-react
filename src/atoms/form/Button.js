import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../theme/theme';
import {getColor} from '../helpers/getColor';



const Button = styled.button`
  width: ${theme.sizes.lg}px;
  height: ${theme.sizes.lg}px;
  line-height: ${theme.sizes.lg}px;
  text-align: center;
  border-radius: 50%;
  display: block;
  background-color: ${({variant}) => getColor(variant)};
  border: none;
  outline: none;
  
  ${({isSmall}) => isSmall && css`
    width: ${theme.sizes.sm}px;
    height: ${theme.sizes.sm}px;
    line-height: ${theme.sizes.sm}px;
  `}
`;

Button.propTypes = {
  isSmall: PropTypes.bool,
  variant: PropTypes.oneOf(Object.keys(theme.colors)).isRequired,
};

Button.defaultProps = {
  variant: theme.colors.default,
};


export default Button;