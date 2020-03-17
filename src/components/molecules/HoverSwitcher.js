import styled from 'styled-components';

const HoverSwitcher = styled.div`
  display: inline-block;
  > .visible {
    display:block;
  }
  > .on-hover {
    display:none;
  }
  &:hover {
    > .visible {
      display:none;
    }
    > .on-hover {
      display:block;
    }
  } 
`;

export default HoverSwitcher;