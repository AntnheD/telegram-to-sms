const TelegramBot = require('node-telegram-bot-api');
const { Student } = require('./models');

function startBot() {
    const botToken = process.env.BOT_TOKEN;
    const bot = new TelegramBot(botToken, { polling: true });

    // Handle bot messages
    bot.on('message', (msg) => {
        // Add logic to handle messages if needed
    });

    // Handle registration command
    bot.onText(/\/register (.+) (.+)/, async (msg, match) => {
        const chatId = msg.chat.id;
        const name = match[1];
        const phoneNumber = match[2];

        try {
            await Student.create({ name, phoneNumber });
            bot.sendMessage(chatId, 'You have been successfully registered!');
        } catch (error) {
            bot.sendMessage(chatId, 'Registration failed. Please try again later.');
        }
    });
}

module.exports = { startBot };
