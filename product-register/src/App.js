import React, { Component } from 'react';

import { Header, Product } from './components';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Product />
      </div>
    );
  }
}

export default App;
