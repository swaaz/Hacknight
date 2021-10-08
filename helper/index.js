const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
       auth: {
            user: process.env.EMAIL_ID,
            pass: process.env.EMAIL_PASSWORD,
         },
    secure: true,
    });



const sendMailIndividual = (mailId) => {
    console.log("mailId",mailId);
    
    const mailData = {
        from: process.env.EMAIL_ID,  
        to: mailId,  
        subject: 'Sending Email using Node.js',
        text: 'That was easy!',
        html: '<b>Hey there! </b>  <br> This is our first message sent with Nodemailer<br/>',
    };
    
    transporter.sendMail(mailData,  (err, info) => {
        if(err)
          console.log(err)
        else
          console.log(info);
     });
}

module.exports = sendMailIndividual;