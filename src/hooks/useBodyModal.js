import {useContext, useEffect} from 'react';
import {BodyModalContext} from '../providers/BodyModal';

const useBodyModal = () => {
  const { isModal, setIsModal, setPos, setNode } = useContext(BodyModalContext);

  useEffect(() => {
    if(!isModal)
      setNode(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModal]);

  return {
    isModal,
    setIsModal,
    setPos,
    setNode,
  };
};

export default useBodyModal;