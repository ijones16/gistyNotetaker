import React, { Component, PropTypes } from 'react';
import NoteItem from './NoteItem';


class MainDisplay extends Component {
  render() {
    const { notes, actions } = this.props;

    return (
      <section className='main'>
        <ul className='note-list'>
            {notes.map(note =>
                <NoteItem key={note.id} note={note} {...actions} />
            )}
        </ul>
      </section>
    );
  }
}

MainDisplay.propTypes = {
  notes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default MainDisplay;
