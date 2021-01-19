import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  telephone: {
    type: String,
  },
  address: {
    country: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    streetAndNumber: {
      type: String,
      required: true,
    },
    postcode: {
      type: String,
      required: true,
    },
  },
});

const User =
  mongoose.models.users || mongoose.model('users', userSchema);
export default User;
