import React, {useState} from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';
import TextInput from '../../atoms/form/TextInput';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: visible;
  input {
    border-radius: 4px 4px 0 0;
  }
`;

const SuggestionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
`;


const AutoSuggest = ({options = [], getItem, evSelect}) => {

  const [suggestions, setSuggestions] = useState(options.slice(0,7));
  const [focused, setFocused] = useState(0);

  const handleChange = ( { target: {value} } ) => {
    setFocused(0);
    if(value.length===0)
      setSuggestions(options.slice(0,7));
    else
      setSuggestions(options.filter(({search}) => search.toLowerCase().indexOf(value.toLowerCase())!==-1).slice(0,7));
  };

  const onEnter = () => {
    if(focused < suggestions.length)
      evSelect(suggestions[focused]);
  };

  const onArrow = (dir) => {
    const newIndex = focused + dir;
    if(newIndex>=0 && newIndex<suggestions.length)
      setFocused(newIndex);
  };

  const handleKeyDown = ({key}) => {
    switch(key){
      case 'Enter':
        return onEnter();
      case 'ArrowUp':
        return onArrow(-1);
      case 'ArrowDown':
        return onArrow(1);
      default:
        return;
    }
  };

  return <Wrapper>
    <TextInput
      autoFocus
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
    {suggestions.length>0 && <SuggestionsWrapper>
      {suggestions.map( (e,i) => getItem(e, focused===i, evSelect) )}
    </SuggestionsWrapper>}
  </Wrapper>
};

AutoSuggest.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      search: PropTypes.string.isRequired,
      // and otgers based on preferences - but it's custom, based on getItem() fn
    }),
  ),
  getItem: PropTypes.func.isRequired,
  evSelect: PropTypes.func.isRequired,
};

export default AutoSuggest;