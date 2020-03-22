import React from 'react';
import 'bulma/css/bulma.css'
import { Provider } from 'react-redux';
import { store } from './store/rootReducer';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './pages/Routes';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import {GlobalUserDataProvider} from './hooks/useUsersData';
import GlobalStyle from './theme/GlobalStyle';
import BodyModalProvider from './providers/BodyModal';
import registerIcons from './registerIcons';

registerIcons();

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
