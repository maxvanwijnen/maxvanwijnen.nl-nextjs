import SibApiV3Sdk from 'sib-api-v3-sdk';

export default function sendBookingForm(req, res) {
  const { clientName, phoneNumber, photoshootType, studioLocation, email, comments } = req.body;
  var SibApiV3Sdk = require('sib-api-v3-sdk');
  SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = process.env.SENDINBLUE_API_KEY;

  new SibApiV3Sdk.TransactionalEmailsApi().sendTransacEmail({
    'subject':'Bedankt voor je bericht',
    'sender': {'email': 'info@maxvanwijnen.nl', 'name': 'Max van Wijnen'},
    'replyTo': {'email': 'info@maxvanwijnen.nl', 'name': 'Max van Wijnen'},
    'to': [{'name': clientName, 'email': email}],
    'bcc': [
      {'name': 'Max van Wijnen', 'email': 'info@maxvanwijnen.nl'},
      {'name': 'Max van Wijnen', 'email': 'maxvanwijnen@gmail.com'}
    ],
    'params': {
      'clientName': clientName,
      'phoneNumber': phoneNumber,
      'email': email,
      'photoshootType': photoshootType,
      'studioLocation': studioLocation,
      'comments': comments
    },
    'templateId': 2
  }).then(function(data) {
    console.log(data);
    res.status(200).json({ success: true });
  }).catch(function(error) {
    console.error(error);
    res.status(500).json({ success: false });
  });
}
