import React from 'react';
import useGlobalUserData from '../../../hooks/useUsersData';
import Flex from '../../../components/atoms/interface/Flex';
import {useDispatch, useSelector} from 'react-redux';
import { setFilterUserMode, setFilterUserValue} from '../../../store/actions';
import FormGroup from '../../../components/organisms/FormGroup';
import UserAvatar from '../../../components/molecules/UserAvatar';

const options = [
  {
    key: 'user',
    name: 'Użytkownik',
  }, {
    key: 'role',
    name:'Stanowisko',
  }
];



const PageFooter = () => {
  const { getAllByName, getAllByJobTitle } = useGlobalUserData();
  const { mode, value } = useSelector(({filter}) => filter.user);
  const dispatch = useDispatch();

  const users = mode==='user' ? getAllByName(value, true) : getAllByJobTitle(value, true);


  const onSelect = (item) => {
    dispatch(setFilterUserMode(item));
  };
  const onChange = (value) => {
    dispatch(setFilterUserValue(value));
  };

  return (
    <Flex>
      <FormGroup
        options={options}
        selectTop
        mode={mode}
        value={value}
        evSelect={onSelect}
        setValue={onChange}
      />
      {users.slice(0,10).map(
        ({
           id,
           first_name,
           last_name,
           avatar,
           job_title
        }) => <UserAvatar
          avatar={avatar}
          firstName={first_name}
          lastName={last_name}
          jobTitle={job_title}
          id={id}
          key={id}
        />)
      }
      {users.length>10 && <Flex style={{alignSelf:'stretch',alignItems:'center'}}>
        <span>+ {users.length-10} więcej...</span>
      </Flex>}
    </Flex>
  );
};

export default PageFooter;