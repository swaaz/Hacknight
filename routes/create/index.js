const express = require('express');
const router = express.Router();
const sendMailIndividual =  require('../../helper/index');

router.post('/individual' , (req, res) => {
    const data = {
        name: req.body.name,
        age : req.body.age
    }
    console.log(req.body);
    // res.status(201).json({ message: "Team Created" , teamUniqueId : "34734897593478"});

    sendMailIndividual('swasthiks.is18@sahyadri.edu.in');

    res.send(req.body)
})

module.exports = router;