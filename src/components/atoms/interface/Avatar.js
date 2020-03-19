import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../../theme/theme';
import getSize from '../helpers/getSize';

const { sizes } = theme;

const Avatar = styled.img`
  width: ${({size}) => getSize(size)}px;
  height: ${({size}) => getSize(size)}px;
  border-radius: 50%;
  display: inline-block;
`;

Avatar.propTypes = {
  size: PropTypes.oneOf(Object.keys(sizes)),
};
Avatar.defaultProps = {
  size: 'md',
};

export default Avatar;