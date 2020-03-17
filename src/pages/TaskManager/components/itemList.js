import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import useGlobalUserData from '../../../hooks/useUsersData';
import Item from './Item';

const filterBy = (items, {mode, value}, users) => {
  if(value === '') return items;
  if(mode === 'user'){
    const ids = users.getIdsByName(value);
    return items.filter(
      e => ids.indexOf(e.userId) !== -1
    );
  } else {
    return items.filter(
      e => e.value.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
  }
};

const ItemList = ({id}) => {

  const items = useSelector(({listItems}) => listItems[id]);
  const { list: filter } = useSelector(({filter})=>filter);
  const users = useGlobalUserData();
  const filteredItems = filterBy(items, filter, users);

  return (filteredItems.map((e,i)=><Item key={e.id} columnId={id} index={i} item={e}/>)
  );
};

ItemList.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ItemList;