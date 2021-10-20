const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000 ;

app.use(express.json());


app.use(cors());
var corsOptions = {
	origin: `${process.env.FRONTEND_URL}/`,
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

mongoose.connect(`${process.env.DATABASE_URI}`, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to database'))

const createRouter = require('./routes/create');
const searchRouter = require('./routes/search');

app.use('/create', createRouter);
app.use('/search', searchRouter);


app.get('/', (req, res) => {
    res.send("Hey Swaaz");
})




app.listen(PORT, () => console.log(`Server is running at ${PORT}!!!`));