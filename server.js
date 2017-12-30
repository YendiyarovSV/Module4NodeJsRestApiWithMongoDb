const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const errorHandler = require('errorhandler')
var routesObject = require('./routes');

const mongoose = require('mongoose'),
  Schema = mongoose.Schema
mongoose.connect('mongodb://localhost/RestApiAccountsDb')
var accountSchema = new mongoose.Schema({
  name: String,
  balance: Number
})
let AccountObject  = mongoose.model('Account', accountSchema);

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(errorHandler())

app.use((req,res,next) => {
  req.AccountObject = AccountObject;
  next()
});

app.use('/',routesObject)

app.listen(3000)

module.exports = app;
