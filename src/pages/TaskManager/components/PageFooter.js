import React, {useState} from 'react';
import useGlobalUserData from '../../../hooks/useUsersData';
import Avatar from '../../../components/atoms/interface/Avatar';
import {Link} from 'react-router-dom';
import Color from '../../../components/atoms/text/Color';
import styled from 'styled-components';
import Flex from '../../../components/atoms/interface/Flex';

const Item = styled.div`
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

const PageFooter = () => {

  const [search, setSearch] = useState('');
  const { getAllByName } = useGlobalUserData();

  const users = getAllByName(search, true);

  return (
    <Flex>
    {/*  TODO: search */}
      {users.slice(0,10).map(({ id, first_name, last_name, avatar, job_title})=><Item as={Link} key={id} to={`/user/${id}`}>
        <Avatar size="lg" src={avatar} />
        <Color variant="default">
          {first_name} {last_name}
        </Color>
        <Color variant="violet" isBlock>
          <i>{job_title || '-'}</i>
        </Color>
      </Item>)}
      {users.length>10 && <Flex style={{alignSelf:'stretch',alignItems:'center'}}>
        <span>+ {users.length-10} więcej...</span>
      </Flex>}
    </Flex>
  );
};

export default PageFooter;