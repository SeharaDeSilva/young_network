require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const productRouter = require('./routers/ProductRouter');
const adRouters = require('./routers/AdRouters');
 
const app = express();
 
app.use(express.json());
app.use(cors());
app.use(cookieParser());


app.use('/api', productRouter);
app.use('/',adRouters);

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
 
app.get('/', (req, res) => {
    res.status(500).send("hello world");
});
 
app.listen(port, () => console.log(`app is running on ${port}`));