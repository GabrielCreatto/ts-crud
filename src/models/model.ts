import * as db from 'mongodb';
import dotenv from 'dotenv';

export const collections: { users?: db.Collection } = {}

export async function connect_database() {
    dotenv.config();
    const mongoHost: string = process.env.MONGO_HOST!.toString();
    const client: db.MongoClient = new db.MongoClient(mongoHost);

    await client.connect();

    const colUsers = client.db('test').collection('users');

    collections.users = colUsers;

    console.log('Connected to mongo successfully!');

}