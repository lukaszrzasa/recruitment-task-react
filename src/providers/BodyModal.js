import React, {createContext, useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import useDetectOutsideClick from '../hooks/useDetectOutsideClick';

export const BodyModalContext = createContext();

const ModalWrapper = styled.div`
  position: fixed;
  top: ${({top})=>top}px;
  left: ${({left})=>left}px;
  z-index: 1000000;
  > * {
    box-shadow: 0 0 10px rgba(0,0,0,.4);
  }
`;

export const BodyModalProvider = ({children}) => {

  const [isModal, setIsModal] = useState(false);
  const [pos, setPos] = useState({top:0, left:0});
  const [node, setNode] = useState(null);
  const ref = useRef(null);
  useDetectOutsideClick(ref, setIsModal);

  useEffect(() => {
    if(isModal === false)
      setNode(null);
  }, [isModal]);


  return(<BodyModalContext.Provider value={{isModal, setIsModal, setPos, setNode}}>
    {children}
    {isModal && <ModalWrapper ref={ref} top={pos.top} left={pos.left}>
      {node}
    </ModalWrapper>}
  </BodyModalContext.Provider>);
};

export default BodyModalProvider;