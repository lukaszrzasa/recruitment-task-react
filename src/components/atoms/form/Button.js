import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../../theme/theme';
import {getColor} from '../helpers/getColor';
import { darken } from 'polished';


const {sizes, colors} = theme;

const Button = styled.button`
  width: ${sizes.xl}px;
  height: ${sizes.xl}px;
  line-height: ${sizes.xl}px;
  font-size: ${sizes.xl*0.65}px;
  text-align: center;
  border-radius: 50%;
  background-color: ${({variant}) => getColor(variant)};
  color: ${({color}) => getColor(color)} !important;/*because of link*/
  border: none;
  outline: none;
  transition:background-color .3s;
  cursor: pointer;
  padding: 0;
  display: block;
  
  ${({isSmall}) => isSmall && css`
    width: ${sizes.sm}px;
    height: ${sizes.sm}px;
    line-height: ${sizes.sm}px;
    font-size: ${sizes.xs}px;
  `}
  
  &:hover {
    background-color: ${({variant}) => darken(.2,getColor(variant))};
  }
`;

Button.propTypes = {
  isSmall: PropTypes.bool,
  variant: PropTypes.oneOf(Object.keys(colors)),
  color: PropTypes.oneOf(Object.keys(colors)),
};

Button.defaultProps = {
  variant: colors.default,
  color: colors.white
};


export default Button;