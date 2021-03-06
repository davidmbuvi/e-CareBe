const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('./Models');
const cors = require('cors');
const helmet = require('helmet');

// import routes here
const index = require('./routes/index');

dotenv.config();
const app = express();
app.use(morgan('tiny'));

// Set Security HTTP Headers
app.use(helmet());
app.use(
	bodyParser.urlencoded({
		extended: false,
	})
);
app.use(cors());

// express body parser
app.use(express.json());
app.use(
	express.urlencoded({
		extended: false,
	})
);

// use routes here
app.use('/v1/index', index);

module.exports = app;
