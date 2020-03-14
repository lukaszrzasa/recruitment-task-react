import React from 'react';
import 'bulma/css/bulma.css'
import { Provider } from 'react-redux';
import { store } from './reducers/rootReducer';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './pages/Routes';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faMapMarkerAlt,
  faArrowLeft,
  faPause,
  faDoorOpen,
  faCheck,
  faDoorClosed, faCheckDouble
} from '@fortawesome/free-solid-svg-icons';
import {GlobalUserDataProvider} from './hooks/useUsersData';
import GlobalStyle from './theme/GlobalStyle';

library.add( faMapMarkerAlt, faArrowLeft, faPause, faDoorOpen, faDoorClosed, faCheck, faCheckDouble );

function App() {
  return (
    <GlobalUserDataProvider>
      <GlobalStyle/>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <Routes/>
          </Router>
        </ThemeProvider>
      </Provider>
    </GlobalUserDataProvider>
  );
}

export default App;
