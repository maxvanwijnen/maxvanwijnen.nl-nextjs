"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = sendEmail;

var _sibApiV3Sdk = _interopRequireDefault(require("sib-api-v3-sdk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function sendEmail(req, res) {
  var _req$body = req.body,
      clientName = _req$body.clientName,
      phoneNumber = _req$body.phoneNumber,
      email = _req$body.email,
      comments = _req$body.comments; //asd

  var SibApiV3Sdk = require('sib-api-v3-sdk');

  SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = process.env.SENDINBLUE_API_KEY;
  new SibApiV3Sdk.TransactionalEmailsApi().sendTransacEmail({
    'subject': 'Bedankt voor je bericht',
    'sender': {
      'email': 'info@maxvanwijnen.nl',
      'name': 'Max van Wijnen'
    },
    'replyTo': {
      'email': 'info@maxvanwijnen.nl',
      'name': 'Max van Wijnen'
    },
    'to': [{
      'name': clientName,
      'email': email
    }],
    'bcc': [{
      'name': 'Max van Wijnen',
      'email': 'info@maxvanwijnen.nl'
    }],
    'params': {
      'clientName': clientName,
      'phoneNumber': phoneNumber,
      'email': email,
      'comments': comments
    },
    'templateId': 4
  }).then(function (data) {
    console.log(data);
    res.status(200).json({
      success: true
    });
  })["catch"](function (error) {
    console.error(error);
    res.status(500).json({
      success: false
    });
  });
}