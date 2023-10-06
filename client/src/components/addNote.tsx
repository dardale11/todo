import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Note } from '../interfaces/note';
import { updateNote, deleteNote, addNote } from '../redux/reducers/notesSlice';
import { createNote } from '../services/api';
import { convertNoteFromServer } from '../services/converts';
import { v4 as uuid4 } from 'uuid';
import './addNote.css';

const AddNote: React.FC = () => {
  const [description, setDescription] = useState('')
  const dispatch = useDispatch();


  const onCreatNote = async () => {
    if (description !== '') {
      const uuid = uuid4();
      dispatch(addNote({ uuid: uuid, description: description }));
      setDescription('');
      try {
        const updatedNote = await createNote(uuid, description);
        if (updatedNote) {
          const note: Note = convertNoteFromServer(updatedNote)
          dispatch(updateNote({ updatedNote: note }))
        } else {
          alert('Error with creating new note')
          dispatch(deleteNote(uuid))
        }
      } catch (error) {
        alert('Error with creating new note ' + error);
        dispatch(deleteNote(uuid))
      }
    }
  }


  return (
    <div className='add-note-container'>
      <input className='add-note-text-input' placeholder="what's on your'e mind..?" type='text' value={description} onChange={(e) => setDescription(e.target.value)} />
      <button className='add-note-add-btn' onClick={onCreatNote}>add</button>
    </div>)
}

export default AddNote