import { Schema, model, models } from 'mongoose';

const userSchema = new Schema(
  {
    username: { type: String, required: [true, 'Username is required'] },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: [true, 'Email already exists'],
    },
    image: { type: String },
    bookmarks: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Property',
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = models.User || model('User', userSchema); // if user model exists, use it, otherwise create new user

export default User;
