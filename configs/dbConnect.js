import mongoose from 'mongoose';

const dbConnect = async () => {
  let db;
  try {
    db = await mongoose.connect(process.env.NEXTAUTH_DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
  } catch (err) {
    console.log(`Error at dbConnect.js: ${err}`);
  }
};

export default dbConnect;
