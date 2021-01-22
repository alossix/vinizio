import dbConnect from '../../../configs/dbConnect';
import User from '../../../models/User.model';

const dbQueryHandler = async (req, res) => {
  const { email } = req.body;
  await dbConnect();
  try {
    const user = await User.find({ email });
    res.status(201).json({ success: true, data: user });
  } catch (err) {
    console.log(`Error in the catch: ${err}`);
    res.status(400).json({ success: false });
  }
};

export default dbQueryHandler;
