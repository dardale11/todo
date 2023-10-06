import { Request, Response } from 'express';
import Note, { INote } from '../models/Note';

// conntroller is in charge of all the logic

// all function come with request response objects
export const clearAllNotes = async (req: Request, res: Response) => {
  try {
    console.log('on clear notes');
    // can reference the model for db actions
    await Note.deleteMany({});
    // send response back
    res.status(200);
  } catch (error) {
    console.error('error with cleaning db', error);
    res.status(500).json('Internal Server Error');
  }
};

export const getAllNotes = async (req: Request, res: Response) => {
  try {
    // find alll items
    const notes: INote[] = await Note.find();
    res.json(notes);
  } catch (error) {
    console.error('error on get all note: ' + error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const createNote = async (req: Request, res: Response) => {
  try {
    // sestruct body
    const { uuid, description } = req.body;
    const note = new Note({
      uuid: uuid,
      description: description,
      created: undefined,
      dueTo: undefined,
      status: 'Untouched',
    });
    // save item to db
    await note.save();
    res.status(200).json(note);
  } catch (error) {
    console.error('error on create note: ' + error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const readNote = async (req: Request, res: Response) => {
  try {
    // destruct params
    const { id } = req.params;
    const note = Note.findById(id);
    res.status(200).json(note);
  } catch (error) {
    console.error('error on read note ' + error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const updateNote = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log('id', id);
    // get an partila object where all its fields are contained in the orginal object
    const updateData: Partial<INote> = req.body;
    console.log('updateData', updateData);

    // new - true -> reutrns the updated object
    const updatedNote = await Note.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    updatedNote
      ? res.status(200).json(updatedNote)
      : res.status(404).json({ message: 'Note not found' });
  } catch (error) {
    console.error('error on update note ' + error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const deleteNote = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    // all ids are given by defualt from the db
    const deletedNote = await Note.findByIdAndDelete(id);
    deletedNote
      ? res.status(200).json({ message: 'note was deleted' })
      : res.status(404).json('note not found');
  } catch (error) {
    console.error('error on delete note ' + error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
