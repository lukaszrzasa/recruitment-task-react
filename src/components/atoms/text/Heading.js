import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../../theme/theme';
import getSize from '../helpers/getSize';

const { sizes } = theme;

const Heading = styled.h2`
  font-size: ${({size})=> getSize(size)*0.8}px;
  margin: 0;
`;

Heading.propTypes = {
  size: PropTypes.oneOf(Object.keys(sizes)),
};

export default Heading;