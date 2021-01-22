import dbConnect from '../../../../configs/dbConnect';
import User from '../../../../models/User.model';

const dbQueryHandler = async (req, res) => {
  const {
    email,
    firstName,
    lastName,
    telephone,
    country,
    updated,
  } = req.body;
  await dbConnect();
  try {
    const user = await User.findOneAndUpdate(
      { email },
      { email, firstName, lastName, telephone, country, updated },
      { new: true },
    );
    res.status(201).json({ success: true, data: user });
  } catch (err) {
    console.log(`Error in the catch: ${err}`);
    res.status(400).json({ success: false });
  }
};

export default dbQueryHandler;
