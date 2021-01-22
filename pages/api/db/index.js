import dbConnect from '../../../configs/dbConnect';
import User from '../../../models/User.model';

const dbQueryHandler = async (req, res) => {
  const { email } = req.body;
  console.log(JSON.stringify(req.body));
  await dbConnect();
  try {
    const user = await User.find({ email });
    console.log(user);
    res.status(200).json({ success: true, data: user });
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};

export default dbQueryHandler;
