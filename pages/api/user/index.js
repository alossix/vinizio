import { getSession } from 'next-auth/client';

export default async (req, res) => {
  const session = await getSession({ req });
  console.log(JSON.stringify(req.body));
  if (session) {
    res.send(session);
  } else {
    res.send({
      error: 'Please log in first.',
    });
  }
};
