import {fireEvent, render} from '@testing-library/react';
import {ThemeProvider} from 'styled-components';
import theme from '../../theme/theme';
import React from 'react';
import Select from './Select';
import registerIcons from '../../registerIcons';

registerIcons();

const renderComponent = props => {
  const options = [
    'mode1',
    'mode2'
  ].map( (e) => ({
    key: e,
    name: e,
  }));
  //
  const handleSelect = jest.fn();
  const util = render(<ThemeProvider theme={theme}>
    <Select
      options={options}
      evSelect={handleSelect}
      mode="mode1"
      selectTop={false}
      {...props}
    />
  </ThemeProvider>);
  //
  const element = util.getByTestId('select-container');
  //
  return {...util, element, handleSelect};
};

describe('Select component', () => {

  it('renders without errors', () => {
    const { element, getAllByTestId, getByText } = renderComponent();
    expect(element).toBeInTheDocument();
    const allOptions = getAllByTestId('select-option');
    expect(allOptions).toHaveLength(2);
    expect(getByText('mode1')).toHaveClass('selected');
    expect(getByText('mode2')).toHaveClass('no-selected');
  });

  it('shows options after clicked & allows to choose one', () => {
    const { container, element, getByText, handleSelect } = renderComponent();
    expect(container.querySelector('.no-selected')).toHaveStyle('display: none;');
    fireEvent.click(element);
    expect(container.querySelector('.no-selected')).toHaveStyle('display: block;');
    fireEvent.click(getByText('mode2'));
    expect(handleSelect).toHaveBeenCalled();
  });


});