// web.js
const gzippo = require('gzippo');
const express = require("express");
var bodyParser = require('body-parser')
const logfmt = require("logfmt");
const app = express();
const request = require('request');


app.use(logfmt.requestLogger());
app.use(bodyParser.json());

app.use(gzippo.staticGzip("" + __dirname + "/app"));
var port = Number(process.env.PORT || 5000);

app.listen(port, function () {
    console.log("Listening on " + port);
});

app.post('/mailchimp', function (req, res) {
    const username = 'bbtbooks';
    const password = process.env.MAILCHIMP_KEY;

    const auth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');
    const headers = {
        'Authorization': auth
    };

    request({
        headers: headers,
        uri: 'https://us17.api.mailchimp.com/3.0/lists/ec9bf93149/members',
        method: 'POST',
        json: true,
        body: {
            email_address: req.body.email,
            status: 'subscribed',
            merge_fields: {
                FNAME: req.body.name
            }
        }
    }, function (err, response, body) {
        console.log('error:', err); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
    });

    res.status(200); //Always return 200 because the user doesnt care.
    res.end();
});