const express = require('express');
const router = express.Router();
const sendMailIndividual =  require('../../helper/index');
const IndividualRegistration = require('../../models/IndividualRegistration');

router.post('/individual' , async (req, res) => {
    const data = new IndividualRegistration({
        name: req.body.name,
        email: req.body.email,
        college: req.body.college,
        phone: req.body.phone,
        year: req.body.year,
        discordUsername: req.body.discordUsername,
        githubUsername: req.body.githubUsername
    });
    let scores ;
    try{
		scores = await IndividualRegistration.find({ "name" : data.name, "email" : data.email })
	}
	catch(err){
		res.json({message: err.message})
	}
    if(!scores.length){
        try{
            const newScore = await data.save(( err, data) => {
                console.log(data.id);

                res.status(201).json({ message: "Registered Successfully", id: data.id });
            })
            // sendMailIndividual(data.email);
        }
        catch(err){
            console.log(err);
            res.status(400).json({message: err.message})
        }
    }
    else res.status(403).json({message: "Already Registered"});
})

module.exports = router;