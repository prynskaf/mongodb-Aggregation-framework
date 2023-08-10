// db.js

const { MongoClient } = require('mongodb');
const dotenv = require('dotenv'); // Add this line

dotenv.config(); // Load environment variables from .env file

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

module.exports = {
  client,
  connectToDatabase,
};
