'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const restService = express();

restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());

restService.post('/echo', function(req, res) {
    var filedExpense = req.body.result && req.body.result.parameters && req.body.result.parameters.expenseCategory ? req.body.result.parameters.expenseCategory + " for unit cost " + req.body.result.parameters.unitCurrency.amount + " " + req.body.result.parameters.unitCurrency.currency + " filed. ": "Seems like some problem. Speak again."
    return res.json({
        speech: filedExpense,
        displayText: filedExpense
    });
});



restService.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});