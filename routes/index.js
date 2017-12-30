var express = require('express');
var router = express.Router();
var validate = require('express-validation');
var validation = require('../validation');

var accounts = require('./accounts.js');
//posts routes
router.get('/accounts',
  accounts.getAccounts)

router.post('/accounts',
  validate(validation.accountValidation),
  accounts.addAccount)

router.put('/accounts/:id',
  validate(validation.idValidation),
  validate(validation.accountValidation),
  accounts.updateAccount)

router.delete('/accounts/:id',
  validate(validation.idValidation),  
  accounts.removeAccount)


module.exports = router;
