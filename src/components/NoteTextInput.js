import React, { Component, PropTypes } from 'react';

class NoteTextInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: this.props.text || ''
    }
  }

  handleSubmit(e){
    const text = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(text);
      if (this.props.newTodo) {
        this.setState({ text: ''});
      }
    }
  }

  handleChange(e){}

  handleBlur(e){
    if(!this.props.newNote) {
      this.props.onSave(e.target.value);
    }
  }

  render(){
    return (
      <input
        type='text'
        placeholder={this.props.placeholder}
        autoFocus='true'
        value={this.state.text}
        onBlur={this.handleBlur.bind(this)}
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleSubmit.bind(this)} />
    );
  }
}

NoteTextInput.propTypes = {
  onSave:      PropTypes.func.isRequired,
  text:        PropTypes.string,
  placeholder: PropTypes.string,
  editing:     PropTypes.bool,
  newNote:     PropTypes.bool
};

export default NoteTextInput;
