import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setFilterListMode, setFilterListValue} from '../../../store/actions';
import FormGroup from '../../../components/organisms/FormGroup';

const options = [
  {
    key: 'content',
    name: 'Nazwa',
  }, {
    key: 'user',
    name:'Użytkownik',
  }
];

const PageHeader = () => {
  const dispatch = useDispatch();
  const { mode, value } = useSelector(({filter}) => filter.list);

  const onSelect = (item) => {
    dispatch(setFilterListMode(item));
  };
  const onChange = (value) => {
    dispatch(setFilterListValue(value));
  };

  return (
    <FormGroup
      options={options}
      mode={mode}
      value={value}
      evSelect={onSelect}
      setValue={onChange}
    />
  );
};

export default PageHeader;