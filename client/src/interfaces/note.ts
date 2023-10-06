import { NoteStatus } from '../types/noteStatus';

export interface Note {
  id?: string;
  uuid: string;
  status?: NoteStatus;
  description: string;
  created?: Date;
  dueTo?: Date;
}
