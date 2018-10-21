const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const controller = require('./controller');

const app = express();
app.use(bodyParser.json())
app.use(cors({origin: ['http://localhost:3000'] }))

// massive(process.env)

const port = process.env.PORT || 8080
app.listen(port, () => {console.log(`listening on ${port}`)})