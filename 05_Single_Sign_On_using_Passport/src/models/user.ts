import mongoose from 'mongoose';

export type UserModel = mongoose.Document & {
  username: string;
  password: string;
  email: string;
  age: number;
};

// Build a schema and use it to do the validation
const schema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true, min: 0, max: 200 },
});

const User = mongoose.model<UserModel>('User', schema);

// Create a new user in the database
export const createUser = (username: string, password: string, email: string, age: number ) => {
  new User({ username, password, age, email }).save();
};

// Find a user based on the username
export const findUser = async (username: string) => await User.findOne({ username })
  .select({ username: 1, email: 1 });
