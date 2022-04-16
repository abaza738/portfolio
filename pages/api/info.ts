// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../util/mongodb';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { db } = await connectToDatabase();
  const infoCollection = db.collection('info');
  const experienceCollection = db.collection('experience');
  const educationCollection = db.collection('education');

  const info = await infoCollection.find({}).project({}).toArray();
  const experience = await experienceCollection.find({}).project({}).toArray();
  const education = await educationCollection.find({}).project({}).toArray();

  const data = {
    info: info,
    experience: experience,
    education: education
  }


  res.status(200).json(data);
}
