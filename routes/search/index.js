const express = require('express');
const IndividualRegistration = require('../../models/IndividualRegistration');
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

module.exports = router;