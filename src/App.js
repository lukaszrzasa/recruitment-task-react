import React from 'react';
import 'bulma/css/bulma.css'
import { Provider } from 'react-redux';
import { store } from './store/rootReducer';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './pages/Routes';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faMapMarkerAlt, faArrowLeft, faPause,
  faDoorOpen, faCheck, faDoorClosed,
  faCheckDouble, faPlus, faTimes, faStar,
  faPen, faAt, faSearch, faCaretDown,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';
import {GlobalUserDataProvider} from './hooks/useUsersData';
import GlobalStyle from './theme/GlobalStyle';
import BodyModalProvider from './providers/BodyModal';

library.add( faMapMarkerAlt, faArrowLeft, faPause, faDoorOpen, faDoorClosed, faCheck, faCheckDouble, faPlus, faTimes, faStar, faPen, faRegularStar, faAt, faSearch, faCaretDown );

function App() {
  return (
    <GlobalUserDataProvider>
      <ThemeProvider theme={theme}>
        <BodyModalProvider>
          <GlobalStyle/>
          <Provider store={store}>
              <Router>
                <Routes/>
              </Router>
          </Provider>
        </BodyModalProvider>
      </ThemeProvider>
    </GlobalUserDataProvider>
  );
}

export default App;
