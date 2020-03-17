import styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 10px 10px 25px;
  position: relative;
  overflow: hidden;
  border-left: ${({theme, isFavourite})=> isFavourite ? theme.colors.gold : 'transparent'} 4px solid;

  .show-on-hover {
    .on-hover {
      opacity:0;
      transition: opacity .3s;
    }
  }
  &:hover .show-on-hover .on-hover {
    opacity: 1;
  }
`;

Card.propTypes = {
  isFavourite: PropTypes.bool,
};

export default Card;