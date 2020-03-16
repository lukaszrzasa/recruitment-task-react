import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

const Card = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
  ${({isFavourite}) => isFavourite && css`
    border-left: ${({theme})=> theme.colors.gold} 4px solid;
  `}
  .show-on-hover {
    opacity:0;
    transition: opacity .3s;
  }
  &:hover .show-on-hover {
    opacity: 1;
  }
`;

Card.propTypes = {
  isFavourite: PropTypes.bool,
};

export default Card;