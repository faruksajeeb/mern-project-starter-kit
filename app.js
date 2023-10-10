// Basic Packages Import
const express = require('express');
const app = new express();
const bodyParser = require('body-parser');
const router = require('./src/routes/api');
// Security Middleware Packages Import
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const hpp = require('hpp');
const xssClean = require('xss-clean');
const cors = require('cors');
// Database Packages Import
const mongoose = require('mongoose');

// Imported Packages Use
// Security ------------
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

// Body Parser ----------
app.use(bodyParser.json());

// Setup Request Rate Limit
const limiter = rateLimit({WindowMs:15*60*100,max:3000});
app.use(limiter);

