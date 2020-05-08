import React, { Component } from 'react';
import './App.css';
import Home from "./pages/home.component"
import Layout from "./pages/layout.component"

class App extends Component {

  render() {
    return (
      <div className="App">
        <Layout >
          <Home />
        </Layout>
      </div>
    );
  }
}

export default App;
