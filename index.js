'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const restService = express();

restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());

restService.post('/echo', function(req, res) {
    var speech = req.body.expenseCategory ? "Expense " + req.body.expenseCategory + " has been filed for you" : "Seems like some problem. Speak again."
    return res.json({
        speech: speech,
        displayText: speech,
        source: 'webhook-echo-sample'
    });
});



restService.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});