import express, { Router } from 'express';
import {
  getAllNotes,
  createNote,
  readNote,
  updateNote,
  deleteNote,
  clearAllNotes,
} from '../../controllers/notesController';

// using router to define url
const router: Router = express.Router();

// all functions after route are exceucted in order
// get all notes
router.get('/', getAllNotes);

// clear all notes
router.get('/clear', clearAllNotes);

// create note
router.post('/', createNote);

// read note
router.get('/:id', readNote);

// update note
router.patch('/:id', updateNote);

// delete note
router.delete('/:id', deleteNote);

export default router;
