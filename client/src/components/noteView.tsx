import React, { FC, useRef, useState } from 'react'
import { Note } from '../interfaces/note'
import { useDispatch } from 'react-redux';
import { deleteNote, restoreNote, updateNote } from '../redux/reducers/notesSlice';
import { patchNote, reomveNote } from '../services/api';
import './noteView.css'

interface NoteProps {
  note: Note;
}

const NoteView: FC<NoteProps> = ({ note }) => {
  const [description, setDescription] = useState(note.description);
  const dispatch = useDispatch();
  const timeoutId = useRef<ReturnType<typeof setTimeout>>();

  const handleDelete = async () => {
    dispatch(deleteNote({ id: note.uuid }))
    console.log(note);
    try {
      const res = await reomveNote(note.id!);
      if (!res) {
        alert('error while deleteing note');
        dispatch(restoreNote({ note: note }))

      }
    } catch (error) {
      alert('error while deleteing note' + error);
      dispatch(restoreNote({ note: note }))
    }
  }

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value)
    const tempTimeoutId = setTimeout(async () => {
      const updatedNote: Note = { ...note, description: e.target.value }
      try {
        const ans = await patchNote(updatedNote)
        if (!ans) {
          alert('error with editing note')
          setDescription(note.description);
        } else {
          dispatch(updateNote({ updatedNote: updatedNote }));
        }
      } catch (error) {
        alert('error with editing note ' + error)
      }
    }, 550)

    clearTimeout(timeoutId.current);
    timeoutId.current = tempTimeoutId;
  }

  return (
    <div className='note-view-container'>
      <input className='note-view-text-input' type='text' value={description} onChange={handleDescriptionChange} />
      <button className='note-view-remove-btn' onClick={handleDelete}>delete</button>
    </div>
  )
}

export default NoteView