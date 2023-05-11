
require("dotenv").config();
require('./config/db.connection.js')

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const authRouter = require("./routes/auth-router");
const projectRouter = require("./routes/project-router");
const taskRouter = require("./routes/task-router");




const { PORT } = process.env;
const app = express();


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

app.use("/auth", authRouter);
app.use("/projects", projectRouter);
app.use("/tasks", taskRouter);


app.get("/", (req, res) => {
    res.send("hello world");
});

const path = require("path");
__dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}


///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));

