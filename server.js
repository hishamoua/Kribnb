const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require("./src/config/db")

const app = express();
const port = 3000;

app.use(bodyParser.json());

connectDB()

// Connect to MongoDB









// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
