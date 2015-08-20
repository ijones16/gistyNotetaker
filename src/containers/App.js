import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" />
        <Header />
        <h1>Hello, world!</h1>

        <Footer />
      </div>
    );
  }
}
