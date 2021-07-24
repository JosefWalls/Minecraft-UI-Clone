require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.json());
app.use(cors());

const uri = process.env.AUTH_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});


const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongo db has been connected")
});

app.use(session({
    secret: 'Minecraft is the game god',
    saveUninitialized: true,
    resave: false
}));


const UserRouter = require("./routes/User");

app.use("/User", UserRouter)

app.listen(4020, () => console.log("Server is located on port 4020"))