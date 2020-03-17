import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import useGlobalUserData from '../../../hooks/useUsersData';
import styled from 'styled-components';
import HoverSwitcher from '../../../components/molecules/HoverSwitcher';
import Avatar from '../../../components/atoms/interface/Avatar';
import Button from '../../../components/atoms/form/Button';
import Icon from '../../../components/atoms/text/Icon';
import useBodyModal from '../../../hooks/useBodyModal';
import Card from '../../../components/atoms/interface/Card';

const Wrapper = styled.div`
  margin-left: auto;
`;

const AssignUser = ({userId, ...props}) => {
  const { getById } = useGlobalUserData();
  const user = getById(userId);
  const { isModal, setIsModal, setPos, setNode } = useBodyModal();
  const buttonRef = useRef(null);

  const test = (ev) => {
    setNode(<Card style={{width:'200px'}}>lol</Card>);
    setIsModal(true);
    const {right, top} = buttonRef.current.getBoundingClientRect();
    setPos({left:right-200, top});
  };
  return (
    <Wrapper {...props}>
      {user && <HoverSwitcher>
        <Avatar className="visible" src={user.avatar} size="sm"/>
        <Button className="on-hover" variant="gray" isSmall color="white">
          <Icon icon="times" />
        </Button>
      </HoverSwitcher>}
      {!user && <Button ref={buttonRef} onClick={test} className="on-hover" isSmall variant="gray" color="white">
        <Icon icon="plus"/>
      </Button>}
    </Wrapper>
  );
};

AssignUser.propTypes = {
  userId: PropTypes.number,
};

export default AssignUser;