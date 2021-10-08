const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000 ;

app.use(express.json());


mongoose.connect(`${process.env.DATABASE_URI}`, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to database'))

const createRouter = require('./routes/create');

app.use('/create', createRouter);


app.get('/', (req, res) => {
    res.send("Hey Swaaz");
})




app.listen(PORT, () => console.log(`Server is running at ${PORT}!!!`));