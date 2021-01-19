import { getSession } from 'next-auth/client';

export default async (req, res) => {
  const session = await getSession({ req });

  if (session) {
    res.send(session);
  } else {
    res.send({
      error: 'Please log in first.',
    });
  }
};
