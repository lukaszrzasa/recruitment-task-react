import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import useGlobalUserData from '../../../hooks/useUsersData';
import Item from './Item';

const filterBy = (items, {mode, value}, getIdsByName) => {
  const itemsWithIndex = items.map((e, index)=>({...e, index}));
  if(value === '') return itemsWithIndex;
  if(mode === 'user'){
    const ids = getIdsByName(value);
    return itemsWithIndex.filter(
      e => ids.indexOf(e.userId) !== -1
    );
  } else {
    return itemsWithIndex.filter(
      e => e.value.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
  }
};

const ItemList = ({id}) => {

  const items = useSelector(({listItems}) => listItems[id]);
  const { list: filter } = useSelector(({filter})=>filter);
  const { getIdsByName } = useGlobalUserData();
  const filteredItems = filterBy(items, filter, getIdsByName);

  return (filteredItems.map((e,i)=><Item key={e.id} columnId={id} index={e.index} item={e}/>)
  );
};

ItemList.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ItemList;