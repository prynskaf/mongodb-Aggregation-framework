const express = require('express');
const dotenv = require('dotenv');
const { connectToDatabase } = require('./db'); // Import the connectToDatabase function

dotenv.config();

const app = express();
const port = process.env.PORT || 3002;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Connect to the database using async/await
const startServer = async () => {
  try {
    await connectToDatabase(); // Call the connectToDatabase function
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};

startServer();
