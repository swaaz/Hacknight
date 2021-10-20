const express = require('express');
const IndividualRegistration = require('../../models/IndividualRegistration');
const teamRegistration = require('../../models/teamRegistration');
const router = express.Router();

router.get('/individual/:registerID', async (req, res) => {
    let data ;
    try{
		data = await IndividualRegistration.find({ "_id" : req.params.registerID.toString() });
	}
	catch(err){
		res.json({message: err.message})
	}
    if(!data.length)
        res.status(404).json({message: "Data not found on Database :("});
    else
    {
        res.status(200).json(data);
    }

})

router.get('/team/:registerID', async (req, res) => {
    let data ;
    try{
		data = await teamRegistration.find({ "_id" : req.params.registerID.toString() });
	}
	catch(err){
		res.json({message: err.message})
	}
    if(!data.length)
        res.status(404).json({message: "Data not found on Database :("});
    else
    {
        res.status(200).json(data);
    }

})

router.get('/individuals/all', async (req, res) => {
    try
    {
        const data = await IndividualRegistration.find({});
        res.status(200).json(data);
    }
    catch(err)
    {
        res.json({message: err.message})
    }
})

router.get('/teams/all', async (req, res) => {
    try
    {
        const data = await teamRegistration.find({});
        res.status(200).json(data);
    }
    catch(err)
    {
        res.json({message: err.message})
    }
})

module.exports = router;