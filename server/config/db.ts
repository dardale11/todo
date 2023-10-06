import mongoose, { Connection } from 'mongoose';

// uri for db
const URI = 'mongodb://localhost:27017';

// connection function
const connectDB = async (): Promise<Connection> => {
  try {
    // return db
    const db = await mongoose.connect(URI!);
    console.log('successfully connected to MongoDB!');
    return db.connection;
  } catch (error) {
    console.error(error);
    process.exit(-1);
  }
};

export default connectDB;
