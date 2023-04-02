import SibApiV3Sdk from 'sib-api-v3-sdk';


export default function sendEmail(req, res) {


    const { clientName, phoneNumber,photoshootType, studioLocation, email, comments} = req.body;


    var SibApiV3Sdk = require('sib-api-v3-sdk');
    SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = process.env.SENDINBLUE_API_KEY;

    new SibApiV3Sdk.TransactionalEmailsApi().sendTransacEmail(
        {
            'subject':'Bedankt voor je bericht',
            'sender' : {'email':'info@maxvanwijnen.nl', 'name':'Max van Wijnen'},
            'replyTo' : {'email':'info@maxvanwijnen.nl', 'name':'Max van Wijnen'},
            'to' : [{'name': clientName, 'email': email}],
            'bcc': [{'name': 'Max van Wijnen', 'email':'info@maxvanwijnen.nl'}],
            'params' : {
                'clientName': clientName,
                'phoneNumber' : phoneNumber,
                'photoshootType': photoshootType,
                'studioLocation':studioLocation,
                'email':email,
                'comments':comments
            },
            'templateId':4
        }
    ).then(function(data) {
        console.log(data);
    }, function(error) {
        console.error(error);
    });
}
