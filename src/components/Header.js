import React, { Component, PropTypes } from 'react';
import NoteTextInput from './NoteTextInput';

class Header extends Component{
  handleSave(text){
    if (text.length !== 0){
      this.props.addNote(text);
    }
  }

  render(){
    return (
      <header className='header'>
        <h1>Notes</h1>
        <NoteTextInput newNote={true}
                       onSave={this.handleSave.bind(this)}
                       placeholder='Take a note...' />
      </header>
    );
  }
};

Header.propTypes = {
  addNote: PropTypes.func.isRequired
};

export default Header;
