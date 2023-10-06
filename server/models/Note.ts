import { Schema, model, Document } from 'mongoose';

// defines the object interface
export interface INote extends Document {
  uuid: string;
  description: string;
  created: Date;
  dueTo: Date;
  status: string;
}

// defines the db schema - like interface with specific db params
const NoteSchema: Schema = new Schema({
  uuid: { type: String, required: true },
  description: { type: String, required: true },
  created: { type: Date, default: Date.now },
  dueTo: { type: Date, default: undefined },
  status: { type: String, default: 'Untouched' },
});
// defines the binding between db and the object orm
const Note = model<INote>('note', NoteSchema);

export default Note;
