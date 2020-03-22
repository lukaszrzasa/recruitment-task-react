import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

const Icon = styled(FontAwesomeIcon)`
  ${({isSolid})=> isSolid && css`
    display:block;
  `}
`;

Icon.propTypes = {
  isSolid: PropTypes.bool,
  icon: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

export default Icon;