// index.js
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const { sequelize } = require('./models');

require('dotenv').config();


const app = express();
app.use(bodyParser.json());

app.use('/', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
    await sequelize.sync();
});
