//==========================================
//                  IMPORTS
//==========================================
const express = require('express');
const mongoose = require('mongoose'); // ORM to interact with MongoDB
const bodyParser = require('body-parser'); // Get data from body
const path = require('path');

const items = require('./routes/api/Items');

//==========================================
//                  SETUP
//==========================================
const PORT = process.env.PORT || 5000;
const app = express();

// bodyParser Middleware
app.use(bodyParser.json());
app.use('/api/items', items);

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo with Mongoose
mongoose
  .connect(db)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => console.error(err));

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
