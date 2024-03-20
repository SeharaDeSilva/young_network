require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const add_vacancyRoute = require('./routers/add_vacancy.js');
//const add_servicesRoute = require('./routers/add_services.js');
const add_servicesRoute = require('./routers/add_services.js')




const app = express();

//Middleware for parsing URL-encoded bodies

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({extended : true}));


//routes configuration


app.use('/add_services', add_servicesRoute)
app.use('/add_vacancy', add_vacancyRoute)


//mongo setup

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

app.listen(port, () => console.log('app is running on ${port}'));