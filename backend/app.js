const axios = require('axios');
const { Student } = require('./models');

function startServer(app, sequelize, port) {
    // Define routes and middleware here
    app.listen(port, async () => {
        console.log(`Listening on port ${port}`);
        await sequelize.sync(); // Sync the models with the database
    });
}

module.exports = { startServer };
