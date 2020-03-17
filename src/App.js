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
  faCheckDouble, faPlus, faTimes, faStar, faPen,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';
import {GlobalUserDataProvider} from './hooks/useUsersData';
import GlobalStyle from './theme/GlobalStyle';
import BodyModalProvider from './providers/BodyModal';

library.add( faMapMarkerAlt, faArrowLeft, faPause, faDoorOpen, faDoorClosed, faCheck, faCheckDouble, faPlus, faTimes, faStar, faPen, faRegularStar );

function App() {
  return (
    <GlobalUserDataProvider>
      <BodyModalProvider>
        <GlobalStyle/>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Router>
              <Routes/>
            </Router>
          </ThemeProvider>
        </Provider>
      </BodyModalProvider>
    </GlobalUserDataProvider>
  );
}

export default App;
