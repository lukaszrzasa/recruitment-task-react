import React from 'react';
import 'bulma/css/bulma.css'
import { Provider } from "react-redux";
import { store } from "./reducers/rootReducer";
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "./pages/Routes";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes/>
      </Router>
    </Provider>
  );
}

export default App;
