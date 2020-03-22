import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import Avatar from '../atoms/interface/Avatar';

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #fff;
  cursor: pointer;
  > img {
    margin:5px;
  }
  ${({isFocused}) => isFocused && css`
    background-color: #eee;
  `}
  :hover {
    background-color: #eee;
  }
`;


const UserAutoSuggest = ({search, avatar, isFocused, ...props}) => {
  return (
    <ItemWrapper {...props} isFocused={isFocused}>
      <Avatar size="sm" src={avatar}/>
      <div>{search}</div>
    </ItemWrapper>
  );
};

UserAutoSuggest.propTypes = {
  search: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isFocused: PropTypes.bool,
};

export default UserAutoSuggest;