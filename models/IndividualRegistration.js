const mongoose  = require('mongoose');

const IndividualRegistrationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    college: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    discordUsername: {
        type: String,
        required: true
    },
    githubUsername: {
        type: String,
        required: true
    }
},
{
    versionKey: false
}
);

module.exports = mongoose.model('IndividualRegistration', IndividualRegistrationSchema);