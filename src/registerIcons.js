import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faMapMarkerAlt, faArrowLeft, faPause,
  faDoorOpen, faCheck, faDoorClosed,
  faCheckDouble, faPlus, faTimes, faStar,
  faPen, faAt, faSearch, faCaretDown,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';

const registerIcons = () => {
  library.add(
    faMapMarkerAlt, faArrowLeft, faPause,
    faDoorOpen, faDoorClosed, faCheck,
    faCheckDouble, faPlus, faTimes, faStar,
    faPen, faRegularStar, faAt, faSearch, faCaretDown );
};

export default registerIcons;