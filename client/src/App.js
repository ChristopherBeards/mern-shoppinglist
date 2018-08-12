import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './components/List';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import { Container } from 'reactstrap';

// Component Imports
import AppNavbar from './components/AppNavbar';
import ItemModal from './components/ItemModal';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ItemModal />
            <List />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
