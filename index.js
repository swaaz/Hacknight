const express = require('express');
// const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 8000 ;

app.use(express.json());

const createRouter = require('./routes/create');

app.use('/create', createRouter);


app.get('/', (req, res) => {
    res.send("Hey Swaaz");
})




app.listen(PORT, () => console.log(`Server is running at ${PORT}!!!`));