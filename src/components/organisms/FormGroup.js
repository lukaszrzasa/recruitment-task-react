import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import styled from 'styled-components';

const Wrapper = styled.div`
  
`;

const FormFroup = ({select, input, button, isAlwaysVisible}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useDetectOutsideClick(ref, setIsVisible);

  return (
    <Wrapper ref={ref} isVisible={isVisible || isAlwaysVisible}>
      <div>
        {select}
      </div>
      <div>
        {input}
      </div>
      <div>
        {button}
      </div>
    </Wrapper>
  );
};

FormFroup.propTypes = {
  select: PropTypes.node.isRequired,
  input: PropTypes.node.isRequired,
  button: PropTypes.node.isRequired,
  isAlwaysVisible: PropTypes.bool,
};

export default FormFroup;