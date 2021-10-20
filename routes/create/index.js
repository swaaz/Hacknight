const express = require('express');
const router = express.Router();
const sendMailIndividual =  require('../../helper/index');
const IndividualRegistration = require('../../models/IndividualRegistration');
const TeamRegistration = require('../../models/teamRegistration');

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
    let val ;
    try{
		val = await IndividualRegistration.find({ "name" : data.name, "email" : data.email })
	}
	catch(err){
		res.json({message: err.message})
	}
    if(!val.length){
        try{
            const newScore = await data.save(( err, data) => {

                res.status(201).json({ message: "Registered Successfully", id: data.id });
            });
            // sendMailIndividual(data.email);
            console.log(newScore);
        }
        catch(err){
            // console.log(err);
            res.status(400).json({message: err.message})
        }
    }
    else res.status(403).json({message: "Already Registered"});
});

router.post('/team', async (req, res) => {
    // console.log(req.body);
    const data = new TeamRegistration({
        teamName: req.body.teamName,
        member1 : req.body.member1,
        member2 : req.body.member2,
        member3 : req.body.member3,
        member4 : req.body.member4,
    });
    // console.log(data);

    try{
        const newVal = await data.save(( err, data) => {
            // console.log(data);

            res.status(201).json({ message: "Registered Successfully", teamId : data._id});
        })
    }
    catch(err){
        res.status(400).json({message: err.message})
    }

})

module.exports = router;