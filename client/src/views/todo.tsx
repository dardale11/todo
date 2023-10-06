import { FC, useEffect } from 'react'
import { Note } from '../interfaces/note'
import NoteView from '../components/noteView'
import { getAllNotes } from '../services/api'
import { useDispatch } from 'react-redux'
import { setNotes } from '../redux/reducers/notesSlice'
import { useTypedSelector } from '../hooks/typedSelector'
import { convertNoteFromServer } from '../services/converts'
import AddNote from '../components/addNote'

import './todo.css'

const Todo: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchNotes = async () => {
      const notesFromServer = await getAllNotes();
      const notes = notesFromServer.map((note: any) => convertNoteFromServer(note))
      dispatch(setNotes({ notes: notes }))
    }
    try {
      fetchNotes();
    } catch (error) {
      console.error('error on fetching notes:', error);
    }
  }, [])

  const notes = useTypedSelector<Note[]>(state => state.notes.notes);


  return (
    <div className='container'>
      <h1 className='title'>tada</h1>
      <AddNote />
      {notes.map(note => <NoteView key={note.uuid} note={note} />)}
    </div>
  )
}

export default Todo