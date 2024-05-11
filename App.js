const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const db = require('./db'); 
const Sample = require('./models/simple');
const simpleController = require('./controllers/simpleController');

const app = express();
const port = 3000;

app.use(bodyParser.json());


app.use(cors());

db.sync()
  .then(() => {
    console.log('Database synced successfully');
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });

app.post('/addsample', simpleController.InputSample);
app.get('/getsample', simpleController.GetSample);



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});