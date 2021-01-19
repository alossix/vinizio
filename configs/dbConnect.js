import mongoose from 'mongoose';

async function dbConnect() {
  const db = await mongoose.connect(
    process.env.NEXTAUTH_DATABASE_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    },
  );
}

export default dbConnect;
