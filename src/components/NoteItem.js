import React, {Component, PropTypes } from 'react';
import NoteTextInput from './NoteTextInput';

class NoteItem extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      editing: false
    };
  }

  handleDoubleClick(){}

  handleSave(id, text){
    if (text.lenth === 0){
      this.props.deleteNote(id);
    } else {
      this.props.editNote(id, text);
    }
    this.setState({editing: false});
  }

  render () {
    const {note, deleteNote} = this.props;

    let element;
    if (this.state.editing) {
      element = (
        <NoteTextInput text={todo.text}
                       editing={this.state.editing}
                       onSave={(text) => this.handleSave(note.id, text)} />
      );
    } else {

    }

    return (
      <li>
        {element}
      </li>
    );
  }
}

NoteItem.propTypes = {
  note:       PropTypes.object.isRequired,
  editNote:   PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired
};

export default NoteItem;
