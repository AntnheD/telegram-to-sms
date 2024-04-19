const { Sequelize } = require('sequelize');

let sequelize;
if (process.env.DATABASE_URL) {
    // Connect to a PostgreSQL database using DATABASE_URL from the environment variable
    sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialect: 'postgres',
        protocol: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false // Note: You might need to configure SSL differently based on your server setup
            }
        },
        logging: true // You can disable logging in production by setting it to false
    });
} else {
    // Fallback to a local MySQL database if no DATABASE_URL is provided
    sequelize = new Sequelize('myDbase', 'root', 'Adht@65602001', {
        host: 'localhost',
        dialect: 'mysql',
        logging: false // Disable logging for local development
    });
}

module.exports = { sequelize };
