import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import useGlobalUserData from '../../../hooks/useUsersData';
import styled from 'styled-components';
import HoverSwitcher from '../../../components/molecules/HoverSwitcher';
import Avatar from '../../../components/atoms/interface/Avatar';
import Button from '../../../components/atoms/form/Button';
import Icon from '../../../components/atoms/text/Icon';
import useBodyModal from '../../../hooks/useBodyModal';
import AutoSuggest from '../../../components/molecules/AutoSuggest/AutoSuggest';
import {useDispatch} from 'react-redux';
import {assignUser} from '../../../store/actions';
import UserAutoSuggest from '../../../components/molecules/UserAutoSuggest';
import ErrorCard from '../../../components/atoms/interface/ErrorCard';

const Wrapper = styled.div`
  margin-left: auto;
`;

const getItem = (props, isFocused, onClick) => <UserAutoSuggest
  onClick={()=>onClick(props)}
  isFocused={isFocused}
  key={props.search}
  {...props}
/>;


const AssignUser = ({userId, index, columnId, ...props}) => {
  const { data, getById } = useGlobalUserData();
  const user = getById(userId);
  const { setIsModal, setPos, setNode } = useBodyModal();
  const buttonRef = useRef(null);
  const deleteBtnRef = useRef(null);
  const dispatch = useDispatch();

  const onSelect = ({id}) => {
    setIsModal(false);
    if(id && getById(id))
      dispatch(assignUser(columnId, index, id));
  };

  const Modal = <AutoSuggest
    evSelect={onSelect}
    options={data.map(e => ({
      ...e,
      search: `${e.first_name} ${e.last_name}`,
    }))}
    getItem={getItem}
  />;

  const openModal = (ev) => {
    setNode(Modal);
    setIsModal(true);
    const {right, top} = buttonRef.current.getBoundingClientRect();
    setPos({left:right-200, top});
  };

  const deleteUser = () => {
    if(columnId !== 'done') {
      dispatch(assignUser(columnId, index, null));
    } else {
      const {right, top} = deleteBtnRef.current.getBoundingClientRect();
      setNode(<ErrorCard onClick={()=>setIsModal(false)}>
        <Icon style={{position:'absolute',top:'4px',right:'4px',cursor:'pointer'}} icon="times"/>
        Zadania w tej kategorii muszą mieć przypisanego Managera Projektu. Przenieś zadanie do innej kategorii.
      </ErrorCard>);
      setIsModal(true);
      setPos({left:right-200, top})
    }
  };

  return (
    <Wrapper {...props}>
      {user && <HoverSwitcher ref={deleteBtnRef}>
        <Avatar className="visible" src={user.avatar} size="sm"/>
        <Button onClick={deleteUser} className="on-hover" variant="gray" isSmall color="white">
          <Icon icon="times" />
        </Button>
      </HoverSwitcher>}
      {!user && <Button ref={buttonRef} onClick={openModal} className="on-hover" isSmall variant="gray" color="white">
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