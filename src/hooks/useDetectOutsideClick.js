import {useEffect} from 'react';

const useDetectOutsideClick = (ref, handler) => {
  const listener = ({target}) => {
    if(!ref.current || ref.current.contains(target)){
      return;
    }
    handler(false);
  };
  useEffect(()=>{
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
};

export default useDetectOutsideClick;