import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainDisplay from '../components/MainDisplay';
import Footer from '../components/Footer';
import * as NoteActions from '../actions/notes';

export default class App extends Component {
  render() {
    const { notes, dispatch } = this.props;
    const actions = bindActionCreators(NoteActions, dispatch);

    return (
      <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" />
        <Header />
        <MainDisplay notes={notes} actions={actions} />
        <Footer />
      </div>
    );
  }
}

function select(state) {
  return {
    notes: state.notes
  };
}

export default connect(select)(App);
