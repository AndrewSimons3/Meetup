import { MongoClient } from 'mongodb';

// /api/new-meetup

// POST / api/new-meetup

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(
			'mongodb+srv://Simdrew07:MOS2Y0xqd9oD2vmk@cluster0.liswm.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close()

    res.status(201).json({message: 'Meetup insterted!'});
  }
}

export default handler;