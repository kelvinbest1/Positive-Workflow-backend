
require("dotenv").config();
require('./config/db.connection.js')

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')


// pull PORT from .env, give default value of 4000 and establish DB Connection
const { PORT } = process.env;


const app = express();

///////////////////////////////
// ROUTES
////////////////////////////////
// create a test route
app.get("/", (req, res) => {
    res.send("hello world");
});

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));

