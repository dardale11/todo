import { Note } from '../interfaces/note';
import { NoteStatus } from '../types/noteStatus';

export const convertNoteFromServer = (serverNote: {
  _id: string;
  __v: string;
  uuid: string;
  description: string;
  created: Date;
  status: NoteStatus;
}) => {
  const { _id, uuid, description, created, status } = serverNote;
  const note: Note = {
    description: description,
    uuid: uuid,
    created: created,
    status: status,
    id: _id,
  };
  return note;
};
