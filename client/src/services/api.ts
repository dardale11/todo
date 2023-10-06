import axios from 'axios';

import { Note } from '../interfaces/note';

const URL = 'http://localhost:8000';

export const getAllNotes = async () => {
  try {
    const { data } = await axios.get(URL + '/api/notes');
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const createNote = async (uuid: string, description: string) => {
  try {
    const { data } = await axios.post(
      URL + '/api/notes',
      {
        uuid: uuid,
        description: description,
      },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const readNote = async (id: string) => {
  try {
    const { data } = await axios.get(URL + '/api/notes/' + id);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const patchNote = async (note: Note) => {
  try {
    const { data } = await axios.patch(URL + '/api/notes/' + note.id, note);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const reomveNote = async (id: string) => {
  try {
    const { data } = await axios.delete(URL + '/api/notes/' + id);
    return data;
  } catch (error) {
    console.error(error);
  }
};
