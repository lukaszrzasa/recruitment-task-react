import {useContext} from 'react';
import {BodyModalContext} from '../providers/BodyModal';

const useBodyModal = () => {
  const { isModal, setIsModal, setPos, setNode } = useContext(BodyModalContext);

  return {
    isModal,
    setIsModal,
    setPos,
    setNode,
  };
};

export default useBodyModal;