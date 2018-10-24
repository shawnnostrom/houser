const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const controller = require('./controller');

const app = express();
app.use(bodyParser.json())
app.use(cors({ origin: ['http://localhost:3000'] }));

massive(process.env.db)
 .then(db => {
  //  db.alter()
 app.set('db',db)
  
})
.catch(error => console.error(error))

app.get('/api/houses',controller.getHouses)
app.post('/api/add',controller.addHouse)
app.delete('/api/house/:id',controller.deleteHouse)

const port = process.env.PORT || 8080
app.listen(port, () => {console.log(`listening on ${port}`)})