import React from 'react';
import {Link} from 'react-router-dom';
import Avatar from '../atoms/interface/Avatar';
import Color from '../atoms/text/Color';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 0 5px;
  width: 100px;
  box-sizing: content-box;
  span {
    max-width: 100px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
    font-size:72%;
  }
`;

const UserAvatar = ({avatar, firstName, lastName, jobTitle, id}) => (
  <Wrapper as={Link} key={id} to={`/user/${id}`}>
    <Avatar size="lg" src={avatar} />
    <Color variant="default">
      {firstName} {lastName}
    </Color>
    <Color variant="violet" isBlock>
      <i>{jobTitle || '-'}</i>
    </Color>
  </Wrapper>
);

UserAvatar.propTypes = {
  avatar: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  jobTitle: PropTypes.string,
  id: PropTypes.number,
};

export default UserAvatar;