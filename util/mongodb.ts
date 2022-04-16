import { MongoClient, Db } from 'mongodb';

const { MONGODB_URI, MONGODB_DB } = process.env;

if (!MONGODB_URI) {
    throw new Error(`Please defined a MongoDB connection URI in .env.`);
}

if (!MONGODB_DB) {
    throw new Error(`Please provide a database in .env.`);
}

let client: MongoClient;
let db: Db;

export async function connectToDatabase() {
    if (db) {
        console.log('Using cached database connection.');
        return { db: db };
    }
    console.log('Connecting to MongoDB...');

    try {
        client = await new MongoClient(MONGODB_URI!).connect();
        client.on('open', () => {
            console.log('Connected successfully to MongoDB!');
        });
        db = client.db(MONGODB_DB);
        return {
            db: db
        };
    } catch (err) {
        console.log(err);
        throw new Error('Could not connect to MongoDB');
    }
}