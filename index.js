const express = require('express');
// const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 8000 ;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hey Swaaz");
})

app.post('/create' , (req, res) => {
    // const data = {
    //     teamName: req.body.teamName
    // }
    console.log(req.body);
    // res.status(201).json({ message: "Team Created" , teamUniqueId : "34734897593478"});
    res.send(req.body)
})


app.listen(PORT, () => console.log(`Server is running at ${PORT}!!!`));