import { createSlice } from '@reduxjs/toolkit';
import { Note } from '../../interfaces/note';

export interface NotesState {
  notes: Note[];
}

const intialState: NotesState = {
  notes: [],
};

const notesSlice = createSlice({
  name: 'notes',
  initialState: intialState,
  reducers: {
    setNotes: (state, action) => {
      const { notes } = action.payload;
      state.notes = notes;
    },
    addNote: (state, action) => {
      const { uuid, description } = action.payload;
      const note: Note = {
        uuid: uuid,
        description: description,
      };
      state.notes.unshift(note);
    },
    restoreNote: (state, action) => {
      const { note } = action.payload;
      state.notes.unshift(note);
    },
    updateNote: (state, action) => {
      const { updatedNote } = action.payload;
      const index = state.notes.findIndex(
        (note) => note.uuid === updatedNote.uuid
      );
      if (index !== -1) {
        state.notes[index] = updatedNote;
      }
    },
    deleteNote: (state, action) => {
      const { id } = action.payload;
      state.notes = state.notes.filter((note) => note.uuid !== id);
    },
  },
});

export const { setNotes, addNote, restoreNote, updateNote, deleteNote } =
  notesSlice.actions;

export default notesSlice.reducer;
