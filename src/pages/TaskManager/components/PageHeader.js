import React from 'react';
import Select from '../../../components/molecules/Select';
import {useDispatch, useSelector} from 'react-redux';
import {setFilterListMode, setFilterListValue} from '../../../store/actions';
import FormFroup from '../../../components/organisms/FormFroup';
import Button from '../../../components/atoms/form/Button';

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
  const { mode } = useSelector(({filter}) => filter.list);

  const onSelect = (item) => {
    dispatch(setFilterListMode(item));
  };

  const SelectNode = () => <Select
    defaultValue={mode}
    evSelect={onSelect}
    options={options}
  />;

  const Input = () => <input type="text" onChange={({target})=>dispatch(setFilterListValue(target.value))}/>;

  const ButtonNode = () => <Button variant="gray" color="white">A</Button>;

  return (
    <FormFroup
      select={<SelectNode/>}
      input={<Input/>}
      button={<ButtonNode/>}
      isAlwaysVisible={false}
    />
  );
};

export default PageHeader;