import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../../theme/theme';
import {getColor} from '../helpers/getColor';


const Color = styled.span`
  color: ${({variant})=>getColor(variant)};
  ${({isBlock}) => isBlock && css`
    display: block;
  `}
`;

Color.propTypes = {
  variant: PropTypes.oneOf(Object.keys(theme.colors)).isRequired,
  isBlock: PropTypes.bool,
};

Color.defaultProps = {
  variant: 'default',
  isBlock: false,
};

export default Color;