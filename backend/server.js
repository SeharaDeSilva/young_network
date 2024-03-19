/*//import modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const bcrypt = require('bcrypt');
const cookieparser = require('cookie-parser');
require("dotenv").config();

//app
const app = express();

app.use(express.json()); //for body parsing
app.use(cors());
app.use(cookieparser());

//db

const port = process.env.PORT || 5000;
const URL = process.env.MONGO_URI;

mongoose.connect(URL,{
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,

}, err=>{
    if(err) throw err;
    console.log('db is connected')
})

app.get('/', (req, res) => {res.status(500).send("hello world");});

app.listen(port, ()=>console.log('app is running ${port}'));

*/

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

const port = process.env.PORT || 5000;
const URL = process.env.MONGO_URI;

mongoose.connect(URL, {
   // useCreateIndex: true,
   // useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('MongoDB connected successfully');
});

mongoose.connection.on('error', (err) => {
    console.error('Error connecting to MongoDB:', err);
});

/*app.get('/', (req, res) => {
    res.status(500).send("hello world");
});*/

app.listen(port, () => console.log('app is running on ${port}'));