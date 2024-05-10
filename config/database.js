import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
  //* If we are already connected, don't connect again'
  if (connected) {
    console.log('MongoDB is already connected...');
    return;
  }

  //* Connect to MongoDB
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log('MongoDB connected...');
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;
