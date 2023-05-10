
require("dotenv").config();
require('./config/db.connection.js')

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')



const { PORT } = process.env;
const app = express();


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))



app.get("/", (req, res) => {
    res.send("hello world");
});

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));

