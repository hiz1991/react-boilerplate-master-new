// server/app.js
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const sms = require('./routes/sms');
// import serve from 'koa-static';

const app = express();

// Serve static assets
// app.use(express.static(path.resolve(__dirname, '..', 'public')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// parse application/json
app.use(bodyParser.json());

app.post('/requestCode', sms.requestCode);
app.post('/verifyCode', sms.verifyCode);


// Serve static files
// app.use(serve(path.join(__dirname, '../../dist')));

module.exports = app;
