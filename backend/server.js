require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRouter = require('./routers/authRouter');
const userRouter = require('./routers/userRouter');
const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Middleware for parsing URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/api',authRouter);
app.use('/api',userRouter);

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

app.listen(port, () => console.log(`app is running on ${port}`));
