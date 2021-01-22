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
    default: '',
  },
  lastName: {
    type: String,
    required: true,
    default: '',
  },
  telephone: {
    type: String,
    default: '',
  },
  country: {
    type: String,
    required: true,
    default: '',
  },
  address: {
    city: {
      type: String,
      required: true,
      default: '',
    },
    streetAndNumber: {
      type: String,
      required: true,
      default: '',
    },
    postcode: {
      type: String,
      required: true,
      default: '',
    },
  },
  updated: {
    type: Boolean,
    default: false,
  },
});

const User =
  mongoose.models.users || mongoose.model('users', userSchema);
export default User;
