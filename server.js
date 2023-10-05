const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require("./src/config/db")

const app = express();
const port = 3000;

app.use(bodyParser.json());

connectDB()

const userRoute = require("./src/api/users/user.routes");
app.use("/api/users", userRoute)









// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
