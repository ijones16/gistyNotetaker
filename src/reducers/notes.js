import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE } from '../constants/ActionTypes';

const initialState = [{
  text: 'Use Redux!',
  id: 0
}];

export default function notes(state = initialState, action){
  switch (action.type) {
    case ADD_NOTE:
      return[{
        id: state.reduce((maxId, note) => Math.max(note.id, maxId), -1) + 1,
        text: action.text
      }, ...state];

    case DELETE_NOTE:
      return state;

    case EDIT_NOTE:
      return state;

    default:
      return state;
  }
}
