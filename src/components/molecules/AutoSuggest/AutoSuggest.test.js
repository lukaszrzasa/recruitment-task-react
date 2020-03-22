import AutoSuggest from './AutoSuggest';
import {fireEvent, render} from '@testing-library/react';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from '../../../theme/theme';

const renderComponent = props => {
  // example suggestions
  const options = [
    'TEST',
    'TEST',
    'TEST AAA',
    'TEST AAA BB',
    'TEST AAA BB',
    'TEST AAA BB C',
    'TEST AAA BB C',
    'TEST AAA BB C DDD',
  ].map( (e, i) => ({ // convert to valid object
    search: e, //autoSuggest uses this value to search
    someValue: i, // autoSuggest does'n uses this value, but it can be use e.g. inside getItem();
  }));
  // how each suggestion element looks like
  const getItem = ({search, someValue}, isFocused, handleClick) => <span
    key={someValue}
    data-testid="autosuggest-suggestion"
    onClick={handleClick}
  >
    {search} (index: {someValue}) {isFocused && 'FOCUSED'}
  </span>;
  const handleSelect = jest.fn(); // check toHaveBeenCalled()
  const util = render(<ThemeProvider theme={theme}>
    <AutoSuggest options={options} getItem={getItem} evSelect={handleSelect} {...props} />
  </ThemeProvider>);
  // get all most user elements
  const autoSuggest = util.getByTestId('autosuggest-container');
  const input = util.getByTestId('autosuggest-input');
  const allSuggestions = util.getAllByTestId('autosuggest-suggestion');
  //
  return {...util, autoSuggest, handleSelect, input, allSuggestions};
};

describe('Autosuggest', () => {

  it('renders without errors', () => {
    const { autoSuggest, allSuggestions } = renderComponent();
    expect(autoSuggest).toBeInTheDocument();
    expect(allSuggestions).toHaveLength(7);
  });

  it('trigger handleSelect after click on suggestion', () => {
    const { handleSelect, allSuggestions } = renderComponent();
    const leftClick = { button: 1 };
    fireEvent.click(allSuggestions[0], leftClick);
    expect(handleSelect).toHaveBeenCalled();
  });

  it('allow user to navigate between suggestions', () => {
    const { allSuggestions, input } = renderComponent();
    const moveDown = { key: 'ArrowDown' };
    const moveUp = { key: 'ArrowUp' };
    fireEvent.keyDown(input, moveDown);
    expect(allSuggestions[0]).not.toHaveTextContent('FOCUSED');
    expect(allSuggestions[1]).toHaveTextContent('FOCUSED');
    expect(allSuggestions[2]).not.toHaveTextContent('FOCUSED');
    fireEvent.keyDown(input, moveUp);
    fireEvent.keyDown(input, moveUp);
    fireEvent.keyDown(input, moveUp);
    expect(allSuggestions[0]).toHaveTextContent('FOCUSED');
  });

  it('allow user to select option by enter', () => {
    const { input, handleSelect } = renderComponent();
    const event = { key: 'Enter' };
    fireEvent.keyDown(input, event);
    expect(handleSelect).toHaveBeenCalled();
  });

  it('allow user to find suggestion', () => {
    const { input, getAllByTestId, queryByTestId } = renderComponent();
    const value = (value) => ({ target: {value: value} });
    //
    fireEvent.change(input, value('AAA'));
    expect(getAllByTestId('autosuggest-suggestion')).toHaveLength(6);
    //
    fireEvent.change(input, value('B C D'));
    expect(getAllByTestId('autosuggest-suggestion')).toHaveLength(1);
    //
    fireEvent.change(input, value('NON EXISTING TEXT'));
    expect(queryByTestId('autosuggest-suggestion')).toBeNull();
    // no matter char size
    fireEvent.change(input, value('TeSt'));
    expect(getAllByTestId('autosuggest-suggestion')).toHaveLength(7);
  });

});