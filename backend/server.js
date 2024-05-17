const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./database');
const routes = require('./routes');
const { startBot } = require('./telegramBot');
const { startServer } = require('./app');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.use('/api', routes);

startServer(app, sequelize, PORT);
startBot();