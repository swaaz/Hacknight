const mongoose  = require('mongoose');

const TeamRegistrationSchema = new mongoose.Schema({
    teamName: {
        type: String,
        required: true
    },
    member1: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'IndividualRegistration'
    },
    member2: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'IndividualRegistration'
    },
    member3: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'IndividualRegistration'
    },
    member4: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'IndividualRegistration'
    }

},
{
    versionKey: false
}
);

module.exports = mongoose.model('TeamRegistration', TeamRegistrationSchema);