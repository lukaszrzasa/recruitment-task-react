import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import useGlobalUserData from '../../../hooks/useUsersData';
import styled from 'styled-components';
import HoverSwitcher from '../../../components/molecules/HoverSwitcher';
import Avatar from '../../../components/atoms/interface/Avatar';
import Button from '../../../components/atoms/form/Button';
import Icon from '../../../components/atoms/text/Icon';
import useBodyModal from '../../../hooks/useBodyModal';
import Autocomplete from '../../../components/molecules/AutoComplete';
import {useDispatch} from 'react-redux';
import {assignUser} from '../../../store/actions';

const Wrapper = styled.div`
  margin-left: auto;
`;

const Modal = () => {
  const { data } = useGlobalUserData();

  return <Autocomplete suggestions={data.map(e=>`${e.first_name} ${e.last_name}`)} />
};

const AssignUser = ({userId, index, columnId, ...props}) => {
  const { getById } = useGlobalUserData();
  const user = getById(userId);
  const { setIsModal, setPos, setNode } = useBodyModal();
  const buttonRef = useRef(null);
  const dispatch = useDispatch();

  const test = (ev) => {
    setNode(<Modal/>);
    setIsModal(true);
    const {right, top} = buttonRef.current.getBoundingClientRect();
    setPos({left:right-200, top});
  };

  const deleteUser = () => {
    if(columnId !== 'done') {
      dispatch(assignUser(columnId, index, null));
    } else {
      // TODO: move???? or not allowed???
    }
  };

  return (
    <Wrapper {...props}>
      {user && <HoverSwitcher>
        <Avatar className="visible" src={user.avatar} size="sm"/>
        <Button onClick={deleteUser} className="on-hover" variant="gray" isSmall color="white">
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
  index: PropTypes.number.isRequired,
  columnId: PropTypes.string.isRequired,
};

export default AssignUser;